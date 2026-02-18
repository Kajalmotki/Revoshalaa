// Live Session Signaling via Firebase Realtime Database
// Handles session discovery + WebRTC signaling across any network

import { database } from '../firebase';
import {
    ref, set, push, remove, onValue, off, get, child, onChildAdded
} from 'firebase/database';

// ─── Session Discovery ──────────────────────────────

// Tutor publishes a live session
export function publishSession(session) {
    const sessionRef = ref(database, `live-sessions/${session.id}`);
    return set(sessionRef, {
        ...session,
        startedAt: new Date().toISOString(),
    });
}

// Tutor removes a live session
export function removeSession(sessionId) {
    // Remove session and all signaling data
    const sessionRef = ref(database, `live-sessions/${sessionId}`);
    const signalingRef = ref(database, `signaling/${sessionId}`);
    return Promise.all([remove(sessionRef), remove(signalingRef)]);
}

// Real-time listener for all active live sessions
export function onLiveSessionsChanged(callback) {
    const sessionsRef = ref(database, 'live-sessions');
    const handler = onValue(sessionsRef, (snapshot) => {
        const data = snapshot.val();
        const sessions = data ? Object.values(data) : [];
        callback(sessions);
    });
    // Return unsubscribe function
    return () => off(sessionsRef, 'value', handler);
}

// ─── WebRTC Signaling ────────────────────────────────

// Tutor sends WebRTC offer
export function sendOffer(sessionId, offer) {
    return set(ref(database, `signaling/${sessionId}/offer`), JSON.stringify(offer));
}

// Viewer sends WebRTC answer
export function sendAnswer(sessionId, answer) {
    return set(ref(database, `signaling/${sessionId}/answer`), JSON.stringify(answer));
}

// Send ICE candidate (role = 'tutor' or 'viewer')
export function sendCandidate(sessionId, role, candidate) {
    const candidateRef = ref(database, `signaling/${sessionId}/${role}-candidates`);
    return push(candidateRef, JSON.stringify(candidate));
}

// Listen for signaling data changes (real-time, no polling!)
export function onSignalingChanged(sessionId, callback) {
    const sigRef = ref(database, `signaling/${sessionId}`);
    const handler = onValue(sigRef, (snapshot) => {
        const data = snapshot.val() || {};

        // Parse stringified SDP/candidates
        const parsed = {
            offer: data.offer ? JSON.parse(data.offer) : null,
            answer: data.answer ? JSON.parse(data.answer) : null,
            tutorCandidates: data['tutor-candidates']
                ? Object.values(data['tutor-candidates']).map(c => JSON.parse(c))
                : [],
            viewerCandidates: data['viewer-candidates']
                ? Object.values(data['viewer-candidates']).map(c => JSON.parse(c))
                : [],
        };

        callback(parsed);
    });
    return () => off(sigRef, 'value', handler);
}

// Listen for new ICE candidates as they arrive (trickle ICE)
export function onNewCandidates(sessionId, role, callback) {
    const candRef = ref(database, `signaling/${sessionId}/${role}-candidates`);
    const handler = onChildAdded(candRef, (snapshot) => {
        const candidate = JSON.parse(snapshot.val());
        callback(candidate);
    });
    return () => off(candRef, 'child_added', handler);
}
