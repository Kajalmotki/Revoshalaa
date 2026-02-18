// Vite plugin: In-memory live session API + WebRTC signaling
// Sessions + signaling data stored in server memory

export default function liveSessionApi() {
    const liveSessions = new Map();

    // WebRTC signaling store
    // Key: sessionId, Value: { offer, answer, tutorCandidates[], viewerCandidates[] }
    const signaling = new Map();

    function parseBody(req) {
        return new Promise((resolve) => {
            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', () => {
                try { resolve(JSON.parse(body)); }
                catch { resolve({}); }
            });
        });
    }

    function sendJson(res, data, status = 200) {
        res.statusCode = status;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.end(JSON.stringify(data));
    }

    return {
        name: 'live-session-api',
        configureServer(server) {
            server.middlewares.use(async (req, res, next) => {
                const url = req.url;

                // CORS preflight
                if (req.method === 'OPTIONS' && url.startsWith('/api/')) {
                    sendJson(res, {}, 204);
                    return;
                }

                // ─── Live Session CRUD ────────────────────────

                // GET all live sessions
                if (url === '/api/live-sessions' && req.method === 'GET') {
                    sendJson(res, Array.from(liveSessions.values()));
                    return;
                }

                // Tutor goes live
                if (url === '/api/go-live' && req.method === 'POST') {
                    const data = await parseBody(req);
                    const session = {
                        id: data.id || Date.now().toString(),
                        title: data.title || 'Live Session',
                        tutorName: data.tutorName || 'Creator',
                        tutorId: data.tutorId || 'unknown',
                        category: data.category || 'General',
                        viewers: 0,
                        startedAt: new Date().toISOString(),
                    };
                    liveSessions.set(session.id, session);
                    // Init signaling for this session
                    signaling.set(session.id, {
                        offer: null,
                        answer: null,
                        tutorCandidates: [],
                        viewerCandidates: [],
                    });
                    console.log(`\n[LIVE] 🔴 "${session.title}" by ${session.tutorName}`);
                    sendJson(res, session);
                    return;
                }

                // Tutor ends live
                if (url === '/api/end-live' && req.method === 'POST') {
                    const { id } = await parseBody(req);
                    liveSessions.delete(id);
                    signaling.delete(id);
                    console.log(`[LIVE] ⬛ Session ended: ${id}\n`);
                    sendJson(res, { ok: true });
                    return;
                }

                // ─── WebRTC Signaling ─────────────────────────

                // Tutor sends offer
                if (url === '/api/signal/offer' && req.method === 'POST') {
                    const { sessionId, offer } = await parseBody(req);
                    const sig = signaling.get(sessionId);
                    if (sig) {
                        sig.offer = offer;
                        sig.answer = null; // reset answer when new offer comes
                        sig.viewerCandidates = [];
                        console.log(`[SIGNAL] 📤 Offer set for session ${sessionId}`);
                    }
                    sendJson(res, { ok: true });
                    return;
                }

                // Viewer sends answer
                if (url === '/api/signal/answer' && req.method === 'POST') {
                    const { sessionId, answer } = await parseBody(req);
                    const sig = signaling.get(sessionId);
                    if (sig) {
                        sig.answer = answer;
                        console.log(`[SIGNAL] 📥 Answer set for session ${sessionId}`);
                    }
                    sendJson(res, { ok: true });
                    return;
                }

                // Tutor sends ICE candidate
                if (url === '/api/signal/tutor-candidate' && req.method === 'POST') {
                    const { sessionId, candidate } = await parseBody(req);
                    const sig = signaling.get(sessionId);
                    if (sig && candidate) {
                        sig.tutorCandidates.push(candidate);
                    }
                    sendJson(res, { ok: true });
                    return;
                }

                // Viewer sends ICE candidate
                if (url === '/api/signal/viewer-candidate' && req.method === 'POST') {
                    const { sessionId, candidate } = await parseBody(req);
                    const sig = signaling.get(sessionId);
                    if (sig && candidate) {
                        sig.viewerCandidates.push(candidate);
                    }
                    sendJson(res, { ok: true });
                    return;
                }

                // GET signaling data (polled by both sides)
                if (url.startsWith('/api/signal/get/') && req.method === 'GET') {
                    const sessionId = url.replace('/api/signal/get/', '');
                    const sig = signaling.get(sessionId);
                    if (sig) {
                        sendJson(res, sig);
                    } else {
                        sendJson(res, { offer: null, answer: null, tutorCandidates: [], viewerCandidates: [] });
                    }
                    return;
                }

                next();
            });
        },
    };
}
