// Live Session Signaling via Cloud Firestore
// Handles session discovery + WebRTC signaling across any network

import { db } from '../firebase';
import {
    collection,
    doc,
    setDoc,
    deleteDoc,
    onSnapshot,
    updateDoc,
    arrayUnion,
    query,
    where,
    getDoc
} from 'firebase/firestore';

// ─── Session Discovery ──────────────────────────────

// Tutor publishes a live session
export async function publishSession(session) {
    try {
        const sessionRef = doc(db, 'live_sessions', session.id);
        console.log('[Firestore] Publishing session:', session.id, session);

        const now = new Date().toISOString();
        await setDoc(sessionRef, {
            ...session,
            status: 'active',
            startedAt: now,
            lastPing: now, // Heartbeat initialization
            viewers: 0
        });

        // Initialize signaling document
        const signalingRef = doc(db, 'live_sessions', session.id, 'signaling', 'main');
        await setDoc(signalingRef, {
            offer: null,
            answer: null,
            tutorCandidates: [],
            viewerCandidates: []
        });

        console.log('[Firestore] Session published successfully!');
    } catch (err) {
        console.error('[Firestore] Failed to publish session:', err.message);
        throw err;
    }
}

// Tutor sends a heartbeat to keep session alive
export async function sendHeartbeat(sessionId) {
    try {
        const sessionRef = doc(db, 'live_sessions', sessionId);
        await updateDoc(sessionRef, {
            lastPing: new Date().toISOString()
        });
    } catch (err) {
        console.warn('[Firestore] Heartbeat failed:', err);
    }
}

// Tutor removes a live session
export async function removeSession(sessionId) {
    try {
        await deleteDoc(doc(db, 'live_sessions', sessionId));
    } catch (err) {
        console.error('[Firestore] Failed to remove session:', err);
    }
}

// Real-time listener for all active live sessions (with cleanup for stale sessions)
export function onLiveSessionsChanged(callback, onError) {
    const q = query(collection(db, 'live_sessions'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
        const sessions = [];
        const now = new Date();

        snapshot.forEach((doc) => {
            const data = doc.data();
            let isValid = false;
            let reason = 'unknown';

            if (data.lastPing) {
                const lastPing = new Date(data.lastPing);
                const diff = (now - lastPing) / 1000;
                console.log(`[Session ${doc.id}] Ping diff: ${diff}s`);

                // Diff < 180 means active within last 3 mins
                // Diff < 0 means future time (clock skew), also valid
                if (diff < 180) {
                    isValid = true;
                    reason = 'valid heartbeat';
                } else {
                    reason = `stale heartbeat (${diff.toFixed(1)}s)`;
                }
            } else {
                // Legacy
                if (data.startedAt) {
                    const started = new Date(data.startedAt);
                    const diff = (now - started) / 1000;
                    console.log(`[Session ${doc.id}] Legacy diff: ${diff}s`);
                    if (diff < 300) {
                        isValid = true;
                        reason = 'valid legacy';
                    } else {
                        reason = 'stale legacy';
                    }
                } else {
                    reason = 'no timestamps';
                }
            }

            if (isValid) {
                sessions.push({ id: doc.id, ...data });
            } else {
                console.warn(`[Session ${doc.id}] Filtered out: ${reason}`, data);
            }
        });

        // Sort by newest first
        sessions.sort((a, b) => new Date(b.startedAt) - new Date(a.startedAt));

        console.log('[Firestore] Valid sessions after filter:', sessions.length);
        callback(sessions);
    }, (error) => {
        console.error('[Firestore] Error reading live-sessions:', error);
        if (onError) onError(error);
        callback([]);
    });

    return unsubscribe;
}

// ─── WebRTC Signaling ────────────────────────────────

// Helper to get signaling ref
const getSigRef = (sessionId) => doc(db, 'live_sessions', sessionId, 'signaling', 'main');

// Tutor sends WebRTC offer
export async function sendOffer(sessionId, offer) {
    const sigRef = getSigRef(sessionId);
    // Use JSON.stringify if needed, but Firestore can store objects directly. 
    // Existing code expects JSON strings in some places, but let's store as objects for cleaner Firestore.
    // However, to maintain compatibility with existing components that might expect parsing, 
    // we should check how they consume it. 
    // The previous implementation stored as JSON string.
    // Let's store as OBJECT in Firestore, but verify consumption.
    // Consumer: onSignalingChanged -> parsed.offer

    // Let's store as string to be safe and consistent with previous strict JSON expectation if any
    // OR update consumer to not parse if object.

    // I'll store as JSON string to minimize risk of breaking object structure or specialized types
    await updateDoc(sigRef, { offer: JSON.stringify(offer) });
}

// Viewer sends WebRTC answer
export async function sendAnswer(sessionId, answer) {
    const sigRef = getSigRef(sessionId);
    await updateDoc(sigRef, { answer: JSON.stringify(answer) });
}

// Send ICE candidate
export async function sendCandidate(sessionId, role, candidate) {
    const sigRef = getSigRef(sessionId);
    const field = role === 'tutor' ? 'tutorCandidates' : 'viewerCandidates';

    await updateDoc(sigRef, {
        [field]: arrayUnion(JSON.stringify(candidate))
    });
}

// Listen for signaling data changes
export function onSignalingChanged(sessionId, callback) {
    const sigRef = getSigRef(sessionId);

    const unsubscribe = onSnapshot(sigRef, (docSnap) => {
        if (docSnap.exists()) {
            const data = docSnap.data();

            // Map Firestore data to the expected format
            // We stored as JSON strings, so we parse them back
            const parsed = {
                offer: data.offer ? JSON.parse(data.offer) : null,
                answer: data.answer ? JSON.parse(data.answer) : null,
                tutorCandidates: (data.tutorCandidates || []).map(c => JSON.parse(c)),
                viewerCandidates: (data.viewerCandidates || []).map(c => JSON.parse(c)),
            };

            callback(parsed);
        }
    });

    return unsubscribe;
}

// Listen for new ICE candidates (Trickle ICE)
// Firestore doesn't have "child_added" like RTDB. 
// We have to diff the array in `onSignalingChanged` or just let the client handle duplicates.
// The existing `onSignalingChanged` sends the WHOLE array.
// The existing `onNewCandidates` was for `child_added`.
// A simple shim is to just ignore this for Firestore and rely on full sync in onSignalingChanged, 
// OR implement a diffing logic here.
// But `LiveSessionPage` uses `onNewCandidates`.
// Let's implement `onNewCandidates` by listening to the doc and firing only for new items.
export function onNewCandidates(sessionId, role, callback) {
    const sigRef = getSigRef(sessionId);
    const field = role === 'tutor' ? 'tutorCandidates' : 'viewerCandidates';
    let knownCount = 0;

    const unsubscribe = onSnapshot(sigRef, (docSnap) => {
        if (docSnap.exists()) {
            const data = docSnap.data();
            const candidates = data[field] || [];

            if (candidates.length > knownCount) {
                // New candidates added
                const newItems = candidates.slice(knownCount);
                newItems.forEach(c => {
                    try {
                        callback(JSON.parse(c));
                    } catch (e) { }
                });
                knownCount = candidates.length;
            }
        }
    });

    return unsubscribe;
}
