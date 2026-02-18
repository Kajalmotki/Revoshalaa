import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Users, Heart, Flame, Send, Maximize2, Minimize2 } from 'lucide-react';

const mockMessages = [
  { id: 1, user: 'Ananya R.', msg: 'Namaste everyone! 🙏', time: '2m ago' },
  { id: 2, user: 'Priya S.', msg: "Let's begin with some deep breaths", time: '1m ago', isInstructor: true },
  { id: 3, user: 'Kavita M.', msg: 'So excited for today\'s session!', time: '1m ago' },
  { id: 4, user: 'Arjun D.', msg: 'First time here, loving the energy ❤️', time: '45s ago' },
  { id: 5, user: 'Priya S.', msg: 'Welcome Arjun! Let\'s flow together 🧘‍♀️', time: '30s ago', isInstructor: true },
];

const reactions = [
  { emoji: '❤️' },
  { emoji: '🔥' },
  { emoji: '🙏' },
  { emoji: '👏' },
];

export default function LiveSessionPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const sessionInfo = location.state || {};
  const tutorName = sessionInfo.tutorName || 'Priya Sharma';
  const sessionTitle = sessionInfo.title || 'Live Session';
  const sessionCategory = sessionInfo.category || 'Wellness';

  const [messages, setMessages] = useState(mockMessages);
  const [inputMsg, setInputMsg] = useState('');
  const [floatingEmojis, setFloatingEmojis] = useState([]);
  const [viewerCount, setViewerCount] = useState(sessionInfo.viewers || 142);
  const [elapsed, setElapsed] = useState(0);
  const [chatVisible, setChatVisible] = useState(true);
  const [connected, setConnected] = useState(false);
  const chatRef = useRef(null);
  const videoRef = useRef(null);
  const peerRef = useRef(null);

  // WebRTC: Connect to tutor's stream
  useEffect(() => {
    const sessionId = sessionInfo.id;
    if (!sessionId) return;

    let cancelled = false;
    let pollInterval;

    async function connectToStream() {
      // Poll until the tutor's offer is available
      pollInterval = setInterval(async () => {
        if (cancelled) return;
        try {
          const res = await fetch(`/api/signal/get/${sessionId}`);
          const data = await res.json();

          if (data.offer && !peerRef.current) {
            clearInterval(pollInterval);

            const pc = new RTCPeerConnection({
              iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
            });
            peerRef.current = pc;

            // When we receive the tutor's video track
            pc.ontrack = (event) => {
              console.log('[WebRTC] Received tutor stream!');
              if (videoRef.current) {
                videoRef.current.srcObject = event.streams[0];
                setConnected(true);
              }
            };

            // Send our ICE candidates
            pc.onicecandidate = (e) => {
              if (e.candidate) {
                fetch('/api/signal/viewer-candidate', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ sessionId, candidate: e.candidate }),
                }).catch(() => { });
              }
            };

            // Set the tutor's offer and create our answer
            await pc.setRemoteDescription(new RTCSessionDescription(data.offer));

            // Add tutor's ICE candidates
            for (const c of data.tutorCandidates) {
              await pc.addIceCandidate(new RTCIceCandidate(c)).catch(() => { });
            }

            const answer = await pc.createAnswer();
            await pc.setLocalDescription(answer);

            // Send our answer to the server
            await fetch('/api/signal/answer', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ sessionId, answer: pc.localDescription }),
            });

            console.log('[WebRTC] Answer sent, connecting...');
          }
        } catch (e) { }
      }, 1000);
    }

    connectToStream();

    return () => {
      cancelled = true;
      if (pollInterval) clearInterval(pollInterval);
      if (peerRef.current) {
        peerRef.current.close();
        peerRef.current = null;
      }
    };
  }, [sessionInfo.id]);

  // Elapsed timer
  useEffect(() => {
    const timer = setInterval(() => setElapsed(e => e + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulate viewer fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount(v => Math.max(1, v + Math.floor(Math.random() * 5) - 2));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Simulate incoming chat
  useEffect(() => {
    const names = ['Aarav', tutorName, 'Rahul', 'Sneha', 'Vikram', 'Meera', 'Riya'];
    const msgs = ['Amazing! 🔥', 'Love this!', 'So helpful!', 'Namaste 🙏', '❤️', 'Great energy!', '🙌', 'Wow!'];
    const interval = setInterval(() => {
      const isInstructor = Math.random() > 0.7;
      setMessages(prev => [...prev, {
        id: Date.now(),
        user: isInstructor ? tutorName : names[Math.floor(Math.random() * names.length)],
        msg: msgs[Math.floor(Math.random() * msgs.length)],
        time: 'now',
        isInstructor,
      }]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Auto scroll chat
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const sendReaction = (emoji) => {
    const id = Date.now() + Math.random();
    const left = 20 + Math.random() * 60;
    setFloatingEmojis(prev => [...prev, { id, emoji, left }]);
    setTimeout(() => {
      setFloatingEmojis(prev => prev.filter(e => e.id !== id));
    }, 2000);
  };

  const sendMessage = () => {
    if (!inputMsg.trim()) return;
    setMessages(prev => [...prev, {
      id: Date.now(),
      user: 'You',
      msg: inputMsg,
      time: 'now',
    }]);
    setInputMsg('');
  };

  return (
    <div className="live-session-page">
      {/* Tutor's Real Video Stream */}
      <div className="live-video-area">
        {/* Real video from WebRTC */}
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted={false}
          className="live-video-element"
          style={{ display: connected ? 'block' : 'none' }}
        />

        {/* Connecting state - shown while WebRTC is being established */}
        {!connected && (
          <div className="tutor-stream-visual">
            <div className="stream-orb orb-1" />
            <div className="stream-orb orb-2" />
            <div className="stream-orb orb-3" />
            <div className="stream-center">
              <div className="stream-avatar">🧘‍♀️</div>
              <h2>{tutorName}</h2>
              <p>Connecting to stream...</p>
              <div className="connecting-dots">
                <span /><span /><span />
              </div>
            </div>
          </div>
        )}

        {/* Gradient overlay */}
        <div className="live-gradient-top" />
        <div className="live-gradient-bottom" />

        {/* Top Bar */}
        <div className="live-topbar">
          <button className="live-btn-back" onClick={() => navigate(-1)}>
            <ArrowLeft size={20} color="white" />
          </button>

          <div className="live-pills">
            <div className="pill-live"><span className="dot-anim" /> LIVE</div>
            <div className="pill-info"><Users size={13} /> {viewerCount}</div>
            <div className="pill-info">{formatTime(elapsed)}</div>
          </div>

          <button className="live-btn-back" onClick={() => setChatVisible(!chatVisible)}>
            {chatVisible ? <Minimize2 size={18} color="white" /> : <Maximize2 size={18} color="white" />}
          </button>
        </div>

        {/* Instructor Card */}
        <div className="live-instructor">
          <div className="live-inst-av">🧘‍♀️</div>
          <div className="live-inst-text">
            <h4>{tutorName}</h4>
            <p>{sessionTitle} · {sessionCategory}</p>
          </div>
          <button className="follow-pill">Follow</button>
        </div>

        {/* Floating Emojis */}
        {floatingEmojis.map(e => (
          <div key={e.id} className="float-emoji" style={{ left: `${e.left}%` }}>
            {e.emoji}
          </div>
        ))}
      </div>

      {/* Bottom Chat & Controls */}
      <div className={`live-bottom ${chatVisible ? '' : 'collapsed'}`}>
        {chatVisible && (
          <div className="live-chat-list" ref={chatRef}>
            {messages.slice(-20).map(m => (
              <div key={m.id} className={`live-msg ${m.isInstructor ? 'instructor' : ''}`}>
                <span className="live-msg-user">{m.user}</span>
                <span className="live-msg-text">{m.msg}</span>
              </div>
            ))}
          </div>
        )}

        <div className="live-reactions">
          {reactions.map((r, i) => (
            <button key={i} className="reaction-pill" onClick={() => sendReaction(r.emoji)}>
              {r.emoji}
            </button>
          ))}
        </div>

        <div className="live-input-bar">
          <input
            type="text"
            placeholder="Say something..."
            value={inputMsg}
            onChange={e => setInputMsg(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage()}
          />
          <button className="send-pill" onClick={sendMessage}>
            <Send size={18} color="white" />
          </button>
        </div>
      </div>

      <style>{`
        .live-session-page {
          height: 100vh;
          background: #000;
          position: relative;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        /* Video */
        .live-video-area {
          flex: 1;
          position: relative;
          min-height: 0;
        }

        .live-video-element {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          inset: 0;
        }

        .tutor-stream-visual {
          width: 100%;
          height: 100%;
          background: radial-gradient(ellipse at 50% 40%, #1a2d1a 0%, #0d150d 50%, #050805 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stream-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.35;
        }

        .orb-1 {
          width: 200px; height: 200px;
          background: #8BA888;
          top: 20%; left: 10%;
          animation: orbFloat1 8s ease-in-out infinite;
        }

        .orb-2 {
          width: 150px; height: 150px;
          background: #D4A853;
          bottom: 30%; right: 10%;
          animation: orbFloat2 10s ease-in-out infinite;
        }

        .orb-3 {
          width: 120px; height: 120px;
          background: #9B8EC4;
          top: 50%; left: 60%;
          animation: orbFloat3 12s ease-in-out infinite;
        }

        @keyframes orbFloat1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -40px); }
        }

        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 30px); }
        }

        @keyframes orbFloat3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, -20px); }
        }

        .stream-center {
          text-align: center;
          z-index: 5;
        }

        .stream-avatar {
          width: 80px; height: 80px;
          border-radius: 50%;
          background: rgba(139,168,136,0.15);
          border: 2px solid rgba(139,168,136,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;
          margin: 0 auto 14px;
          box-shadow: 0 0 30px rgba(139,168,136,0.2);
          animation: avatarPulse 3s ease-in-out infinite;
        }

        @keyframes avatarPulse {
          0%, 100% { box-shadow: 0 0 30px rgba(139,168,136,0.2); }
          50% { box-shadow: 0 0 50px rgba(139,168,136,0.4); }
        }

        .stream-center h2 {
          color: white;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .stream-center p {
          color: rgba(255,255,255,0.5);
          font-size: 13px;
          margin-bottom: 10px;
        }

        .connecting-dots {
          display: flex;
          gap: 6px;
          justify-content: center;
          margin-top: 8px;
        }

        .connecting-dots span {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #8BA888;
          animation: dotBounce 1.4s ease-in-out infinite;
        }

        .connecting-dots span:nth-child(2) { animation-delay: 0.2s; }
        .connecting-dots span:nth-child(3) { animation-delay: 0.4s; }

        @keyframes dotBounce {
          0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
          40% { opacity: 1; transform: scale(1.2); }
        }

        .live-gradient-top {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 120px;
          background: linear-gradient(to bottom, rgba(0,0,0,0.6), transparent);
          z-index: 2;
          pointer-events: none;
        }

        .live-gradient-bottom {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 200px;
          background: linear-gradient(transparent, rgba(0,0,0,0.8));
          z-index: 2;
          pointer-events: none;
        }

        /* Top Bar */
        .live-topbar {
          position: absolute;
          top: 0; left: 0; right: 0;
          padding: 16px;
          padding-top: calc(var(--safe-area-top, 0px) + 16px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 10;
        }

        .live-btn-back {
          width: 38px; height: 38px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
        }

        .live-pills {
          display: flex;
          gap: 8px;
        }

        .pill-live {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: rgba(231,76,60,0.85);
          border-radius: 20px;
          color: white;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .dot-anim {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: white;
          animation: livePulse 1.5s infinite;
        }

        @keyframes livePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .pill-info {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 6px 12px;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          color: white;
          font-size: 12px;
          font-weight: 500;
        }

        /* Instructor */
        .live-instructor {
          position: absolute;
          bottom: 16px; left: 16px; right: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 10;
        }

        .live-inst-av {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          border: 2px solid rgba(255,255,255,0.2);
        }

        .live-inst-text h4 {
          color: white;
          font-size: 14px;
          font-weight: 600;
        }

        .live-inst-text p {
          color: rgba(255,255,255,0.5);
          font-size: 12px;
        }

        .follow-pill {
          margin-left: auto;
          padding: 8px 18px;
          background: rgba(139,168,136,0.8);
          border-radius: 20px;
          color: white;
          font-size: 12px;
          font-weight: 600;
          border: none;
          cursor: pointer;
        }

        /* Floating Emojis */
        .float-emoji {
          position: absolute;
          bottom: 140px;
          font-size: 28px;
          animation: floatUp 2s ease forwards;
          z-index: 20;
          pointer-events: none;
        }

        @keyframes floatUp {
          0% { opacity: 1; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(-200px) scale(0.5); }
        }

        /* Bottom */
        .live-bottom {
          background: rgba(10,10,15,0.95);
          backdrop-filter: blur(20px);
          padding: 12px 16px;
          padding-bottom: calc(var(--safe-area-bottom, 0px) + 12px);
          border-radius: 20px 20px 0 0;
          z-index: 10;
          transition: all 0.3s ease;
        }

        .live-bottom.collapsed {
          border-radius: 0;
        }

        .live-chat-list {
          max-height: 180px;
          overflow-y: auto;
          margin-bottom: 12px;
          scrollbar-width: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .live-chat-list::-webkit-scrollbar { display: none; }

        .live-msg {
          padding: 8px 12px;
          background: rgba(255,255,255,0.05);
          border-radius: 10px;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .live-msg.instructor {
          background: rgba(139,168,136,0.12);
          border-left: 3px solid #8BA888;
        }

        .live-msg-user {
          font-size: 12px;
          font-weight: 600;
          color: #8BA888;
          margin-right: 8px;
        }

        .live-msg.instructor .live-msg-user {
          color: #D4A853;
        }

        .live-msg-text {
          font-size: 13px;
          color: rgba(255,255,255,0.85);
        }

        .live-reactions {
          display: flex;
          gap: 10px;
          margin-bottom: 10px;
          justify-content: center;
        }

        .reaction-pill {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          border: 1px solid rgba(255,255,255,0.06);
          cursor: pointer;
          transition: all 0.2s;
        }

        .reaction-pill:active {
          transform: scale(1.2);
          background: rgba(255,255,255,0.15);
        }

        .live-input-bar {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .live-input-bar input {
          flex: 1;
          padding: 12px 16px;
          background: rgba(255,255,255,0.08);
          border-radius: 24px;
          color: white;
          font-size: 14px;
          border: 1px solid rgba(255,255,255,0.06);
          outline: none;
        }

        .live-input-bar input::placeholder {
          color: rgba(255,255,255,0.3);
        }

        .send-pill {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: #8BA888;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(139,168,136,0.3);
        }

        .send-pill:active {
          transform: scale(0.95);
        }
      `}</style>
    </div>
  );
}
