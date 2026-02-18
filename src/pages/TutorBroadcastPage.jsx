import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Video, Mic, MicOff, Camera, CameraOff, X, MessageCircle,
  Users, Share2, Clock, DollarSign, Tag, FileText, ChevronRight, User, Star
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function TutorBroadcastPage() {
  const navigate = useNavigate();
  const { user, categories, startLiveSession, endLiveSession } = useAuth();

  const [isLive, setIsLive] = useState(false);
  const [sessionDetails, setSessionDetails] = useState({
    title: '',
    description: '',
    category: user?.category || 'fitness',
    duration: '45',
    pricing: 'free',
    price: '',
    tags: '',
  });
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);
  const [viewers, setViewers] = useState(0);
  const [messages, setMessages] = useState([]);
  const [sessionId, setSessionId] = useState(null);
  const [elapsed, setElapsed] = useState(0);

  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const peerRef = useRef(null);
  const pollRef = useRef(null);

  // Pre-fill from tutor onboarding data
  useEffect(() => {
    if (user?.category) {
      setSessionDetails(prev => ({ ...prev, category: user.category }));
    }
  }, [user]);

  // Access Camera
  useEffect(() => {
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing camera:", err);
      }
    }
    if (camOn) startCamera();
    return () => {
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, [camOn]);

  // WebRTC: Create offer and poll for answer when live
  useEffect(() => {
    if (!isLive || !sessionId || !streamRef.current) return;

    async function setupWebRTC() {
      const pc = new RTCPeerConnection({
        iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
      });
      peerRef.current = pc;

      // Add camera tracks to the connection
      streamRef.current.getTracks().forEach(track => {
        pc.addTrack(track, streamRef.current);
      });

      // Send ICE candidates to server
      pc.onicecandidate = (e) => {
        if (e.candidate) {
          fetch('/api/signal/tutor-candidate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sessionId, candidate: e.candidate }),
          }).catch(() => { });
        }
      };

      // Create and send offer
      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);

      await fetch('/api/signal/offer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, offer: pc.localDescription }),
      });

      console.log('[WebRTC] Offer sent, waiting for viewer...');

      // Poll for viewer answer
      let answered = false;
      pollRef.current = setInterval(async () => {
        if (answered) return;
        try {
          const res = await fetch(`/api/signal/get/${sessionId}`);
          const data = await res.json();

          if (data.answer && !answered) {
            answered = true;
            await pc.setRemoteDescription(new RTCSessionDescription(data.answer));
            console.log('[WebRTC] Answer received, connection establishing...');

            // Add viewer ICE candidates
            for (const c of data.viewerCandidates) {
              await pc.addIceCandidate(new RTCIceCandidate(c)).catch(() => { });
            }
          }
        } catch (e) { }
      }, 1000);
    }

    setupWebRTC();

    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
      if (peerRef.current) {
        peerRef.current.close();
        peerRef.current = null;
      }
    };
  }, [isLive, sessionId]);

  // Simulate Viewer Join & Chat + Timer
  useEffect(() => {
    let viewerInterval, chatInterval, timerInterval;
    if (isLive) {
      viewerInterval = setInterval(() => {
        setViewers(prev => prev + Math.floor(Math.random() * 3));
      }, 3000);

      chatInterval = setInterval(() => {
        const msgs = ['Amazing session! 🔥', 'Love the energy!', 'So helpful, thanks!', 'Hello from Mumbai!', '❤️', 'Great tips!', '🙌'];
        const names = ['Aarav', 'Priya', 'Rahul', 'Sneha', 'Vikram', 'Meera'];
        setMessages(prev => [...prev, {
          user: names[Math.floor(Math.random() * names.length)],
          text: msgs[Math.floor(Math.random() * msgs.length)]
        }]);
      }, 4000);

      timerInterval = setInterval(() => {
        setElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => {
      clearInterval(viewerInterval);
      clearInterval(chatInterval);
      clearInterval(timerInterval);
    };
  }, [isLive]);

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  const handleGoLive = async () => {
    if (!sessionDetails.title) return alert('Please enter a session title');
    const session = startLiveSession(sessionDetails);
    setSessionId(session.id);
    setIsLive(true);
    setElapsed(0);

    // Notify shared server so other devices can see this session
    try {
      await fetch('/api/go-live', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: session.id,
          title: sessionDetails.title,
          tutorName: user?.name || 'Creator',
          tutorId: user?.id,
          category: categories?.find(c => c.id === sessionDetails.category)?.name || sessionDetails.category,
        }),
      });
    } catch (e) {
      console.error('Failed to register live session:', e);
    }
  };

  const handleEndLive = async () => {
    if (confirm('Are you sure you want to end the live session?')) {
      // Cleanup WebRTC
      if (pollRef.current) clearInterval(pollRef.current);
      if (peerRef.current) {
        peerRef.current.close();
        peerRef.current = null;
      }

      endLiveSession(sessionId);
      setIsLive(false);

      // Notify shared server
      try {
        await fetch('/api/end-live', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: sessionId }),
        });
      } catch (e) {
        console.error('Failed to end live session on server:', e);
      }

      navigate('/tutor/dashboard');
    }
  };

  const updateField = (field, value) => {
    setSessionDetails(prev => ({ ...prev, [field]: value }));
  };

  const catName = categories?.find(c => c.id === sessionDetails.category)?.name || sessionDetails.category;
  const catEmoji = categories?.find(c => c.id === sessionDetails.category)?.emoji || '📌';

  if (!user || user.type !== 'tutor') {
    return (
      <div className="unauthorized">
        <div className="unauth-icon">🎓</div>
        <h2>Tutor Access Only</h2>
        <p>You need a tutor account to go live.</p>
        <button className="btn-sage" onClick={() => navigate('/login/tutor')}>Login as Tutor</button>
      </div>
    );
  }

  return (
    <div className="broadcast-page">
      {/* Camera Feed */}
      <video ref={videoRef} autoPlay playsInline muted className="camera-feed" />

      {/* Top Bar */}
      <div className="broadcast-top">
        {isLive ? (
          <div className="live-badge-row">
            <div className="live-badge pulse-live">🔴 LIVE</div>
            <div className="live-timer">{formatTime(elapsed)}</div>
          </div>
        ) : (
          <div className="preview-badge">📹 PREVIEW</div>
        )}

        <div className="top-actions">
          {isLive && (
            <div className="viewer-count">
              <Users size={14} /> {viewers}
            </div>
          )}
          <button className="icon-btn" onClick={() => navigate('/home')}><X size={22} color="white" /></button>
        </div>
      </div>

      {/* ===== PRE-LIVE SETUP ===== */}
      {!isLive && (
        <div className="pre-live-panel">
          {/* Tutor Profile Card */}
          <div className="tutor-profile-card">
            <div className="tp-avatar">{user.avatar || '🎓'}</div>
            <div className="tp-info">
              <h3>{user.name}</h3>
              <p>{user.specialty ? `${user.specialty}` : catName} Creator</p>
            </div>
            <div className="tp-badge">{catEmoji}</div>
          </div>

          {/* Session Details Form */}
          <div className="form-section">
            <label className="form-label">
              <FileText size={14} /> Session Title *
            </label>
            <input
              type="text"
              placeholder="e.g. Morning Power Flow, Guitar Basics"
              value={sessionDetails.title}
              onChange={e => updateField('title', e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-section">
            <label className="form-label">
              <MessageCircle size={14} /> Description
            </label>
            <textarea
              placeholder="What will you cover in this session?"
              value={sessionDetails.description}
              onChange={e => updateField('description', e.target.value)}
              className="form-textarea"
              rows={2}
            />
          </div>

          <div className="form-row">
            <div className="form-section flex-1">
              <label className="form-label">
                <Tag size={14} /> Category
              </label>
              <select
                value={sessionDetails.category}
                onChange={e => updateField('category', e.target.value)}
                className="form-select"
              >
                {(categories || []).map(c => (
                  <option key={c.id} value={c.id}>{c.emoji} {c.name}</option>
                ))}
              </select>
            </div>

            <div className="form-section flex-1">
              <label className="form-label">
                <Clock size={14} /> Duration
              </label>
              <select
                value={sessionDetails.duration}
                onChange={e => updateField('duration', e.target.value)}
                className="form-select"
              >
                <option value="15">15 min</option>
                <option value="30">30 min</option>
                <option value="45">45 min</option>
                <option value="60">60 min</option>
                <option value="90">90 min</option>
              </select>
            </div>
          </div>

          <div className="form-section">
            <label className="form-label">
              <DollarSign size={14} /> Pricing
            </label>
            <div className="pricing-toggle">
              <button
                className={`pt-btn ${sessionDetails.pricing === 'free' ? 'active' : ''}`}
                onClick={() => updateField('pricing', 'free')}
              >
                🆓 Free
              </button>
              <button
                className={`pt-btn ${sessionDetails.pricing === 'paid' ? 'active' : ''}`}
                onClick={() => updateField('pricing', 'paid')}
              >
                💰 Paid
              </button>
            </div>
            {sessionDetails.pricing === 'paid' && (
              <input
                type="number"
                placeholder="Price (₹)"
                value={sessionDetails.price}
                onChange={e => updateField('price', e.target.value)}
                className="form-input price-input"
              />
            )}
          </div>

          <div className="form-section">
            <label className="form-label">
              <Tag size={14} /> Tags
            </label>
            <input
              type="text"
              placeholder="e.g. beginner, cardio, guitar (comma separated)"
              value={sessionDetails.tags}
              onChange={e => updateField('tags', e.target.value)}
              className="form-input"
            />
          </div>

          {/* Camera/Mic Controls */}
          <div className="media-controls">
            <button className={`media-btn ${micOn ? 'on' : 'off'}`} onClick={() => setMicOn(!micOn)}>
              {micOn ? <Mic size={20} /> : <MicOff size={20} />}
              <span>{micOn ? 'Mic On' : 'Mic Off'}</span>
            </button>
            <button className={`media-btn ${camOn ? 'on' : 'off'}`} onClick={() => setCamOn(!camOn)}>
              {camOn ? <Camera size={20} /> : <CameraOff size={20} />}
              <span>{camOn ? 'Camera On' : 'Camera Off'}</span>
            </button>
          </div>

          {/* GO LIVE */}
          <button className="go-live-btn" onClick={handleGoLive}>
            <div className="ring-pulse" />
            <Video size={20} /> GO LIVE
          </button>
        </div>
      )}

      {/* ===== LIVE OVERLAY ===== */}
      {isLive && (
        <div className="live-overlay">
          <div className="live-session-info">
            <h3>{sessionDetails.title}</h3>
            <p>{catEmoji} {catName} · {sessionDetails.duration} min · {sessionDetails.pricing === 'free' ? 'FREE' : `₹${sessionDetails.price}`}</p>
          </div>

          <div className="live-chat-area">
            {messages.map((m, i) => (
              <div key={i} className="chat-msg animate-fade-in-up">
                <span className="chat-user">{m.user}</span> {m.text}
              </div>
            ))}
          </div>

          <div className="live-bottom-bar">
            <input type="text" placeholder="Reply to chat..." className="tutor-chat-input" />
            <div className="live-actions">
              <button className="action-btn" onClick={() => setMicOn(!micOn)}>
                {micOn ? <Mic size={18} /> : <MicOff size={18} />}
              </button>
              <button className="action-btn"><Share2 size={18} /></button>
              <button className="end-btn" onClick={handleEndLive}>END</button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .broadcast-page {
          height: 100vh;
          background: #0a0a0a;
          position: relative;
          color: white;
          overflow: hidden;
        }

        .camera-feed {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scaleX(-1);
        }

        /* Top Bar */
        .broadcast-top {
          position: absolute;
          top: calc(var(--safe-area-top, 0px) + 12px);
          left: 16px; right: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 10;
        }

        .live-badge-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .live-badge {
          background: #e74c3c;
          padding: 4px 12px;
          border-radius: 6px;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 0.5px;
        }

        .pulse-live {
          animation: pulseBadge 2s ease infinite;
        }

        @keyframes pulseBadge {
          0%, 100% { box-shadow: 0 0 0 0 rgba(231,76,60,0.6); }
          50% { box-shadow: 0 0 0 8px rgba(231,76,60,0); }
        }

        .live-timer {
          background: rgba(0,0,0,0.5);
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 600;
          font-variant-numeric: tabular-nums;
        }

        .preview-badge {
          background: rgba(0,0,0,0.5);
          padding: 4px 14px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 13px;
        }

        .top-actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .viewer-count {
          background: rgba(0,0,0,0.5);
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 13px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .icon-btn {
          width: 36px; height: 36px;
          border-radius: 50%;
          background: rgba(0,0,0,0.3);
          display: flex; align-items: center; justify-content: center;
          border: none; cursor: pointer;
        }

        /* ===== PRE-LIVE PANEL ===== */
        .pre-live-panel {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          max-height: 75vh;
          overflow-y: auto;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(24px);
          padding: 20px 20px calc(var(--safe-area-bottom, 0px) + 20px);
          border-radius: 24px 24px 0 0;
          color: var(--text-primary, #1a1a2e);
          box-shadow: 0 -4px 40px rgba(0,0,0,0.15);
        }

        /* Tutor Profile Card */
        .tutor-profile-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(139,168,136,0.08), rgba(139,168,136,0.03));
          border: 1px solid rgba(139,168,136,0.15);
          margin-bottom: 18px;
        }

        .tp-avatar {
          width: 44px; height: 44px;
          border-radius: 14px;
          background: linear-gradient(135deg, #B8D4B4, #A3C19E);
          display: flex; align-items: center; justify-content: center;
          font-size: 22px;
        }

        .tp-info {
          flex: 1;
        }

        .tp-info h3 {
          font-size: 15px;
          font-weight: 700;
          color: #2a3f28;
          margin-bottom: 2px;
        }

        .tp-info p {
          font-size: 12px;
          color: #7A9B76;
          font-weight: 500;
        }

        .tp-badge {
          font-size: 24px;
        }

        /* Form Styles */
        .form-section {
          margin-bottom: 14px;
        }

        .form-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          color: #6B7280;
          margin-bottom: 6px;
          text-transform: uppercase;
          letter-spacing: 0.6px;
        }

        .form-input, .form-select, .form-textarea {
          width: 100%;
          padding: 12px 14px;
          border-radius: 12px;
          background: rgba(249,250,251,1);
          border: 1px solid rgba(139,168,136,0.15);
          color: #1a1a2e;
          font-size: 14px;
          outline: none;
          transition: all 0.3s ease;
          box-sizing: border-box;
          font-family: inherit;
        }

        .form-input:focus, .form-select:focus, .form-textarea:focus {
          border-color: #8BA888;
          background: white;
          box-shadow: 0 0 0 3px rgba(139,168,136,0.08);
        }

        .form-input::placeholder, .form-textarea::placeholder {
          color: #B0BBA0;
        }

        .form-textarea {
          resize: none;
          line-height: 1.5;
        }

        .form-row {
          display: flex;
          gap: 10px;
        }

        .flex-1 { flex: 1; }

        /* Pricing Toggle */
        .pricing-toggle {
          display: flex;
          gap: 8px;
          margin-bottom: 8px;
        }

        .pt-btn {
          flex: 1;
          padding: 10px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 600;
          border: 1.5px solid rgba(139,168,136,0.15);
          background: rgba(249,250,251,1);
          color: #6B7280;
          cursor: pointer;
          transition: all 0.3s;
        }

        .pt-btn.active {
          border-color: #8BA888;
          background: rgba(139,168,136,0.08);
          color: #3D5A3A;
        }

        .price-input {
          margin-top: 8px;
        }

        /* Media Controls */
        .media-controls {
          display: flex;
          gap: 10px;
          margin: 16px 0 12px;
        }

        .media-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
        }

        .media-btn.on {
          background: rgba(139,168,136,0.1);
          color: #3D5A3A;
        }

        .media-btn.off {
          background: rgba(231,76,60,0.06);
          color: #e74c3c;
        }

        /* GO LIVE Button */
        .go-live-btn {
          width: 100%;
          background: linear-gradient(135deg, #8BA888 0%, #6D8A6A 100%);
          color: white;
          font-weight: 700;
          font-size: 16px;
          padding: 16px;
          border-radius: 16px;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(109,138,106,0.35);
          transition: all 0.3s;
        }

        .go-live-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 24px rgba(109,138,106,0.4);
        }

        .ring-pulse {
          position: absolute;
          inset: 0;
          border-radius: 16px;
          animation: ringPulse 2s ease-out infinite;
        }

        @keyframes ringPulse {
          0% { box-shadow: 0 0 0 0 rgba(139,168,136,0.4); }
          100% { box-shadow: 0 0 0 16px rgba(139,168,136,0); }
        }

        /* ===== LIVE OVERLAY ===== */
        .live-overlay {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 16px;
          padding-bottom: calc(var(--safe-area-bottom, 0px) + 16px);
          background: linear-gradient(to top, rgba(0,0,0,0.85) 30%, transparent);
        }

        .live-session-info {
          margin-bottom: 12px;
        }

        .live-session-info h3 {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 2px;
        }

        .live-session-info p {
          font-size: 12px;
          color: rgba(255,255,255,0.7);
        }

        .live-chat-area {
          height: 180px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 6px;
          margin-bottom: 12px;
          mask-image: linear-gradient(to top, black 80%, transparent 100%);
        }

        .chat-msg {
          font-size: 13px;
          text-shadow: 0 1px 2px rgba(0,0,0,0.8);
          line-height: 1.4;
        }

        .chat-user {
          font-weight: 700;
          color: #8BA888;
          margin-right: 6px;
        }

        .live-bottom-bar {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .tutor-chat-input {
          flex: 1;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.1);
          color: white;
          padding: 10px 16px;
          border-radius: 20px;
          font-size: 14px;
          outline: none;
        }

        .live-actions {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .action-btn {
          width: 38px; height: 38px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          color: white;
          border: none; cursor: pointer;
        }

        .end-btn {
          background: #e74c3c;
          color: white;
          font-weight: 700;
          font-size: 12px;
          padding: 0 16px;
          height: 38px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          border: none;
          cursor: pointer;
          letter-spacing: 0.5px;
        }

        /* Unauthorized */
        .unauthorized {
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: linear-gradient(165deg, #F5F0EB 0%, #EDE7DF 40%, #E8E0D8 100%);
        }

        .unauth-icon { font-size: 48px; }

        .unauthorized h2 {
          font-size: 22px;
          color: #3D5A3A;
        }

        .unauthorized p {
          font-size: 14px;
          color: #8B9B87;
        }

        .btn-sage {
          margin-top: 8px;
          background: linear-gradient(135deg, #A3C19E, #8BA888);
          color: white;
          padding: 12px 32px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 15px;
          border: none;
          cursor: pointer;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.3s ease;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
