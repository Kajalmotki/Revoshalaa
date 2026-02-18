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

import { debugLog } from './debugLog';

// Tutor publishes a live session
export async function publishSession(session) {
    try {
        const sessionRef = doc(db, 'live_sessions', session.id);
        debugLog.log(`Attempting to publish session: ${session.id}`);

        await setDoc(sessionRef, {
            ...session,
            status: 'active',
            startedAt: new Date().toISOString(),
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

        debugLog.log('Session published successfully!');
    } catch (err) {
        debugLog.error(`Failed to publish session: ${err.message}`);
        throw err;
    }
}

// ...

// Real-time listener for all active live sessions
export function onLiveSessionsChanged(callback) {
    const q = query(collection(db, 'live_sessions')); // Could add where('status', '==', 'active')

    const unsubscribe = onSnapshot(q, (snapshot) => {
        const sessions = [];
        snapshot.forEach((doc) => {
            sessions.push({ id: doc.id, ...doc.data() });
        });
        debugLog.log(`Live sessions update: Found ${sessions.length} sessions`);
        callback(sessions);
    }, (error) => {
        debugLog.error(`Error reading live-sessions: ${error.message}`);
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
