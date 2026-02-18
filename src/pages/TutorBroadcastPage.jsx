import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Mic, MicOff, Camera, CameraOff, X, Heart,
  MessageCircle, Users, Share2, Zap, Send, RotateCcw, FlipHorizontal
} from 'lucide-react';
import { auth } from '../firebase';
import { signInAnonymously } from 'firebase/auth';
import { useAuth } from '../context/AuthContext';
import {
  publishSession, removeSession, sendOffer, sendCandidate,
  onSignalingChanged, onNewCandidates
} from '../utils/liveSignaling';

export default function TutorBroadcastPage() {
  const navigate = useNavigate();
  const { user, categories, upgradeToTutor } = useAuth();

  // Camera & Media
  const [cameraReady, setCameraReady] = useState(false);
  const [cameraError, setCameraError] = useState(null);
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);
  const [facingMode, setFacingMode] = useState('user');

  // Live State
  const [isLive, setIsLive] = useState(false);
  const [showSetup, setShowSetup] = useState(true);
  const [connecting, setConnecting] = useState(false);
  const [viewers, setViewers] = useState(0);
  const [liveTime, setLiveTime] = useState(0);

  // Session Form
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('fitness');

  // Chat
  const [messages, setMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [showChat, setShowChat] = useState(true);

  // Refs
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const peerRef = useRef(null);
  const sessionIdRef = useRef(null);
  const timerRef = useRef(null);
  const chatEndRef = useRef(null);

  // ─── CAMERA SETUP ─────────────────────────────────
  const startCamera = useCallback(async (facing = facingMode) => {
    // Stop any existing streams first
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop());
    }

    setCameraError(null);

    try {
      const constraints = {
        video: { facingMode: facing, width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: true
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        // Ensure autoplay works
        videoRef.current.play().catch(() => { });
      }

      setCameraReady(true);
      setCameraError(null);
    } catch (err) {
      console.error('Camera Error:', err);
      setCameraReady(false);

      if (err.name === 'NotAllowedError') {
        setCameraError('Camera access denied. Please allow camera permissions in your browser settings.');
      } else if (err.name === 'NotFoundError') {
        setCameraError('No camera found. Please connect a camera.');
      } else if (err.name === 'NotReadableError') {
        setCameraError('Camera is in use by another app. Close other apps using camera.');
      } else if (err.name === 'OverconstrainedError') {
        // Try again with basic constraints
        try {
          const basicStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
          streamRef.current = basicStream;
          if (videoRef.current) {
            videoRef.current.srcObject = basicStream;
            videoRef.current.play().catch(() => { });
          }
          setCameraReady(true);
          setCameraError(null);
        } catch (e2) {
          setCameraError('Could not access camera. Try refreshing the page.');
        }
      } else {
        // Check if it's a secure context issue
        if (window.location.protocol === 'http:' && window.location.hostname !== 'localhost') {
          setCameraError('Camera requires HTTPS. Try accessing via localhost or deploy with HTTPS.');
        } else {
          setCameraError(`Camera error: ${err.message}. Try refreshing.`);
        }
      }
    }
  }, [facingMode]);

  // Initialize camera on mount
  useEffect(() => {
    // Check if mediaDevices is available
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setCameraError('Camera API not available. Use HTTPS or localhost.');
      return;
    }

    startCamera();

    const handleBeforeUnload = () => {
      if (sessionIdRef.current) {
        removeSession(sessionIdRef.current);
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      if (sessionIdRef.current) {
        removeSession(sessionIdRef.current);
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(t => t.stop());
      }
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Toggle Tracks
  useEffect(() => {
    if (streamRef.current) {
      streamRef.current.getAudioTracks().forEach(t => (t.enabled = micOn));
      streamRef.current.getVideoTracks().forEach(t => (t.enabled = camOn));
    }
  }, [micOn, camOn]);

  // Live timer
  useEffect(() => {
    if (isLive) {
      timerRef.current = setInterval(() => {
        setLiveTime(prev => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
      setLiveTime(0);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isLive]);

  // Auto-scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Simulate viewer messages when live (demo)
  useEffect(() => {
    if (!isLive) return;
    const demoMessages = [
      { user: 'Priya ✨', text: 'Hey! Just joined 🙏', avatar: '👩' },
      { user: 'Arjun', text: 'Great session!', avatar: '👨' },
      { user: 'Meera', text: '🔥🔥🔥', avatar: '👩‍🦱' },
      { user: 'Raj', text: 'Can you show that again?', avatar: '🧑' },
      { user: 'Ananya', text: 'Love this! ❤️', avatar: '👧' },
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < demoMessages.length) {
        setMessages(prev => [...prev, { ...demoMessages[i], id: Date.now(), time: new Date() }]);
        setViewers(prev => prev + 1);
        i++;
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isLive]);

  // Format time
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  // Flip camera
  const flipCamera = async () => {
    const newFacing = facingMode === 'user' ? 'environment' : 'user';
    setFacingMode(newFacing);
    await startCamera(newFacing);
  };

  // ─── GO LIVE ──────────────────────────────────────
  const handleGoLive = async () => {
    if (!title.trim()) return alert('Please enter a session title.');
    setConnecting(true);

    let activeUser = user;
    if (!activeUser) {
      activeUser = { id: 'guest_' + Date.now(), name: 'Guest Tutor', type: 'tutor' };
    } else if (activeUser.type !== 'tutor') {
      try {
        await upgradeToTutor(category, 'General');
        activeUser = { ...activeUser, type: 'tutor' };
      } catch (e) {
        console.error('Auto-upgrade failed', e);
      }
    }

    try {
      // Try Firebase Auth (best effort — don't block if it fails)
      if (!auth.currentUser) {
        try {
          await signInAnonymously(auth);
        } catch (authErr) {
          console.warn('Anonymous auth failed, proceeding without Firestore:', authErr.message);
        }
      }

      const sessionId = Date.now().toString();
      sessionIdRef.current = sessionId;

      const newSession = {
        id: sessionId,
        tutorId: activeUser.id,
        tutorName: activeUser.name,
        tutorAvatar: activeUser.avatar || '🎓',
        title,
        category,
        viewers: 0,
        startedAt: new Date().toISOString(),
      };

      // Publish to Firestore (best effort — go live even if this fails)
      try {
        const timeout = new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Firestore timeout')), 8000)
        );

        await Promise.race([
          publishSession({
            id: newSession.id,
            title: newSession.title,
            tutorName: newSession.tutorName,
            tutorId: newSession.tutorId,
            category: categories.find(c => c.id === category)?.name || category,
            viewers: 0
          }),
          timeout
        ]);
        console.log('Session published to Firestore');
      } catch (publishErr) {
        console.warn('Firestore publish failed, going live locally:', publishErr.message);
      }

      // WebRTC Setup (best effort — go live even if signaling fails)
      try {
        const pc = new RTCPeerConnection({
          iceServers: [
            { urls: 'stun:stun.l.google.com:19302' },
            { urls: 'stun:stun1.l.google.com:19302' },
          ]
        });
        peerRef.current = pc;

        if (streamRef.current) {
          streamRef.current.getTracks().forEach(track => {
            pc.addTrack(track, streamRef.current);
          });
        }

        pc.onicecandidate = (event) => {
          if (event.candidate) {
            sendCandidate(sessionId, 'tutor', event.candidate).catch(() => { });
          }
        };

        const offer = await pc.createOffer();
        await pc.setLocalDescription(offer);

        // Send offer to Firestore with timeout (don't hang if offline)
        try {
          await Promise.race([
            sendOffer(sessionId, offer),
            new Promise((_, rej) => setTimeout(() => rej(new Error('offer timeout')), 3000))
          ]);
        } catch (offerErr) {
          console.warn('sendOffer failed:', offerErr.message);
        }

        try {
          onSignalingChanged(sessionId, async (data) => {
            if (data.answer && !pc.currentRemoteDescription) {
              const rtcAnswer = new RTCSessionDescription(data.answer);
              await pc.setRemoteDescription(rtcAnswer);
            }
          });

          onNewCandidates(sessionId, 'viewer', async (candidate) => {
            try {
              await pc.addIceCandidate(new RTCIceCandidate(candidate));
            } catch (e) {
              console.error('Error adding viewer candidate:', e);
            }
          });
        } catch (listenErr) {
          console.warn('Signaling listeners failed:', listenErr.message);
        }

        console.log('WebRTC signaling set up successfully');
      } catch (rtcErr) {
        console.warn('WebRTC signaling setup failed, going live locally:', rtcErr.message);
      }

      // Always go live regardless of Firestore/WebRTC status
      setShowSetup(false);
      setIsLive(true);
      setConnecting(false);
      setMessages([{ id: 'system', user: 'System', text: 'You are now LIVE! 🎉', avatar: '📡', time: new Date() }]);

      // Start Heartbeat (keep session alive)
      const heartbeatInterval = setInterval(() => {
        if (sessionId) {
          console.log('Sending heartbeat...');
          sendHeartbeat(sessionId);
        }
      }, 10000); // every 10 seconds

      // Store in ref to clear on unmount if needed
      window.currentHeartbeat = heartbeatInterval;

    } catch (e) {
      console.error('Go Live Error:', e);
      alert(`Failed to go live: ${e.message}`);
      setConnecting(false);
    }
  };

  // ─── END LIVE ─────────────────────────────────────
  const handleEndLive = async () => {
    if (!confirm('End this live session?')) return;

    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop());
    }
    if (peerRef.current) {
      peerRef.current.close();
    }
    if (sessionIdRef.current) {
      try { await removeSession(sessionIdRef.current); } catch (e) { }
    }

    setIsLive(false);
    setShowSetup(true);
    setMessages([]);
    setViewers(0);

    // Restart camera for next session
    startCamera();
  };

  // Send chat message
  const handleSendChat = () => {
    if (!chatInput.trim()) return;
    setMessages(prev => [...prev, {
      id: Date.now(),
      user: user?.name || 'You',
      text: chatInput,
      avatar: user?.avatar || '🎓',
      time: new Date(),
      isSelf: true
    }]);
    setChatInput('');
  };

  return (
    <div className="ig-broadcast">
      {/* Fullscreen Video */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="ig-video"
        style={{ display: cameraReady ? 'block' : 'none' }}
      />

      {/* Camera Error / Placeholder */}
      {!cameraReady && (
        <div className="ig-no-camera">
          <div className="ig-no-camera-content">
            <Camera size={48} strokeWidth={1.5} />
            <p>{cameraError || 'Starting camera...'}</p>
            <button className="ig-retry-btn" onClick={() => startCamera()}>
              <RotateCcw size={18} /> Retry Camera
            </button>
          </div>
        </div>
      )}

      {/* Top Bar - Always visible */}
      <div className="ig-top-bar">
        <button className="ig-icon-btn" onClick={() => navigate(-1)}>
          <X size={22} />
        </button>

        {isLive && (
          <div className="ig-live-info">
            <div className="ig-live-badge">LIVE</div>
            <div className="ig-live-timer">{formatTime(liveTime)}</div>
            <div className="ig-viewer-count">
              <Users size={14} /> {viewers}
            </div>
          </div>
        )}

        <div className="ig-top-right">
          {cameraReady && (
            <button className="ig-icon-btn" onClick={flipCamera}>
              <FlipHorizontal size={20} />
            </button>
          )}
        </div>
      </div>

      {/* Pre-Live Setup */}
      {!isLive && showSetup && (
        <div className="ig-setup-overlay">
          <div className="ig-setup-card">
            <div className="ig-setup-header">
              <h2>Go Live</h2>
              <p>Share your session with viewers</p>
            </div>

            <input
              type="text"
              placeholder="Add a title..."
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="ig-setup-input"
            />

            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="ig-setup-select"
            >
              {categories.map(c => (
                <option key={c.id} value={c.id}>{c.emoji} {c.name}</option>
              ))}
            </select>

            <div className="ig-media-toggles">
              <button
                onClick={() => setMicOn(!micOn)}
                className={`ig-toggle-btn ${micOn ? 'on' : 'off'}`}
              >
                {micOn ? <Mic size={20} /> : <MicOff size={20} />}
                <span>{micOn ? 'Mic On' : 'Mic Off'}</span>
              </button>
              <button
                onClick={() => setCamOn(!camOn)}
                className={`ig-toggle-btn ${camOn ? 'on' : 'off'}`}
              >
                {camOn ? <Camera size={20} /> : <CameraOff size={20} />}
                <span>{camOn ? 'Cam On' : 'Cam Off'}</span>
              </button>
            </div>

            <button
              className="ig-go-live-btn"
              onClick={handleGoLive}
              disabled={connecting || !cameraReady}
            >
              {connecting ? (
                <><span className="ig-spinner"></span> Connecting...</>
              ) : (
                <><Zap size={20} fill="currentColor" /> GO LIVE</>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Live Mode: Chat + Controls */}
      {isLive && (
        <div className="ig-live-overlay">
          {/* Live Chat Messages */}
          {showChat && (
            <div className="ig-chat-area">
              <div className="ig-chat-messages">
                {messages.map(msg => (
                  <div key={msg.id} className={`ig-chat-msg ${msg.isSelf ? 'self' : ''}`}>
                    <span className="ig-chat-avatar">{msg.avatar}</span>
                    <div>
                      <span className="ig-chat-user">{msg.user}</span>
                      <span className="ig-chat-text">{msg.text}</span>
                    </div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>

              {/* Chat Input */}
              <div className="ig-chat-input-row">
                <input
                  type="text"
                  placeholder="Comment..."
                  value={chatInput}
                  onChange={e => setChatInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSendChat()}
                  className="ig-chat-input"
                />
                <button className="ig-send-btn" onClick={handleSendChat}>
                  <Send size={18} />
                </button>
              </div>
            </div>
          )}

          {/* Bottom Controls */}
          <div className="ig-bottom-controls">
            <button className="ig-ctrl-btn" onClick={() => setShowChat(!showChat)}>
              <MessageCircle size={22} />
            </button>
            <button className="ig-ctrl-btn" onClick={() => setMicOn(!micOn)}>
              {micOn ? <Mic size={22} /> : <MicOff size={22} />}
            </button>
            <button className="ig-end-btn" onClick={handleEndLive}>
              End
            </button>
            <button className="ig-ctrl-btn" onClick={flipCamera}>
              <FlipHorizontal size={22} />
            </button>
            <button className="ig-ctrl-btn" onClick={() => {
              if (navigator.share) {
                navigator.share({ title: title, text: `Watch ${title} live!`, url: window.location.href });
              }
            }}>
              <Share2 size={22} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        .ig-broadcast {
          position: fixed;
          inset: 0;
          background: #111;
          color: white;
          z-index: 9999;
          overflow: hidden;
        }

        .ig-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scaleX(-1);
        }

        /* No Camera State */
        .ig-no-camera {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
        }

        .ig-no-camera-content {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          padding: 32px;
          color: rgba(255,255,255,0.7);
        }

        .ig-no-camera-content p {
          max-width: 280px;
          font-size: 14px;
          line-height: 1.5;
        }

        .ig-retry-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.1);
          color: white;
          font-size: 14px;
          cursor: pointer;
          backdrop-filter: blur(4px);
          transition: all 0.2s;
        }
        .ig-retry-btn:hover {
          background: rgba(255,255,255,0.2);
        }

        /* Top Bar */
        .ig-top-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          padding: 16px 16px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: linear-gradient(to bottom, rgba(0,0,0,0.5), transparent);
          z-index: 10;
        }

        .ig-icon-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: none;
          background: rgba(0,0,0,0.35);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(6px);
          transition: background 0.2s;
        }
        .ig-icon-btn:hover { background: rgba(0,0,0,0.5); }

        .ig-live-info {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ig-live-badge {
          background: #ED4956;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          animation: ig-pulse 2s infinite;
        }

        @keyframes ig-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .ig-live-timer {
          font-size: 13px;
          font-weight: 600;
          font-variant-numeric: tabular-nums;
          opacity: 0.9;
        }

        .ig-viewer-count {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 13px;
          background: rgba(0,0,0,0.35);
          padding: 4px 10px;
          border-radius: 12px;
          backdrop-filter: blur(4px);
        }

        .ig-top-right {
          display: flex;
          gap: 8px;
        }

        /* Setup Overlay */
        .ig-setup-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 20px 16px;
          padding-bottom: max(20px, env(safe-area-inset-bottom));
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 60%, transparent 100%);
          display: flex;
          justify-content: center;
          z-index: 10;
        }

        .ig-setup-card {
          width: 100%;
          max-width: 380px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ig-setup-header h2 {
          font-size: 22px;
          font-weight: 700;
          margin: 0;
        }
        .ig-setup-header p {
          font-size: 13px;
          margin: 4px 0 0;
          opacity: 0.6;
        }

        .ig-setup-input, .ig-setup-select {
          width: 100%;
          padding: 14px 16px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.08);
          color: white;
          font-size: 15px;
          outline: none;
          backdrop-filter: blur(8px);
          transition: border-color 0.2s;
          box-sizing: border-box;
        }
        .ig-setup-input::placeholder { color: rgba(255,255,255,0.35); }
        .ig-setup-input:focus, .ig-setup-select:focus {
          border-color: rgba(255,255,255,0.3);
        }
        .ig-setup-select option {
          background: #222;
          color: white;
        }

        .ig-media-toggles {
          display: flex;
          gap: 10px;
        }

        .ig-toggle-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          font-size: 13px;
          font-weight: 500;
          transition: all 0.2s;
        }
        .ig-toggle-btn.on {
          background: rgba(255,255,255,0.15);
          color: white;
        }
        .ig-toggle-btn.off {
          background: rgba(237,73,86,0.2);
          color: #ED4956;
        }

        .ig-go-live-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 16px;
          border-radius: 14px;
          border: none;
          background: linear-gradient(135deg, #ED4956 0%, #C13584 50%, #833AB4 100%);
          color: white;
          font-size: 17px;
          font-weight: 700;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: transform 0.2s, opacity 0.2s;
          margin-top: 4px;
        }
        .ig-go-live-btn:hover:not(:disabled) {
          transform: scale(1.02);
        }
        .ig-go-live-btn:active:not(:disabled) {
          transform: scale(0.98);
        }
        .ig-go-live-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .ig-spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: ig-spin 0.8s linear infinite;
        }

        @keyframes ig-spin {
          to { transform: rotate(360deg); }
        }

        /* Live Overlay */
        .ig-live-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          max-height: 65%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0 12px;
          padding-bottom: max(12px, env(safe-area-inset-bottom));
          background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%);
          z-index: 10;
        }

        /* Chat Area */
        .ig-chat-area {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 12px;
        }

        .ig-chat-messages {
          max-height: 250px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 6px;
          scrollbar-width: none;
          -ms-overflow-style: none;
          mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 100%);
        }
        .ig-chat-messages::-webkit-scrollbar { display: none; }

        .ig-chat-msg {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          padding: 6px 10px;
          border-radius: 16px;
          background: rgba(0,0,0,0.3);
          backdrop-filter: blur(4px);
          animation: ig-slide-up 0.3s ease-out;
          max-width: 85%;
        }
        .ig-chat-msg.self {
          background: rgba(131,58,180,0.3);
        }

        @keyframes ig-slide-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .ig-chat-avatar {
          font-size: 20px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .ig-chat-user {
          font-size: 12px;
          font-weight: 600;
          color: rgba(255,255,255,0.7);
          margin-right: 6px;
        }

        .ig-chat-text {
          font-size: 13px;
          line-height: 1.4;
        }

        .ig-chat-input-row {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .ig-chat-input {
          flex: 1;
          padding: 10px 16px;
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(0,0,0,0.3);
          color: white;
          font-size: 14px;
          outline: none;
          backdrop-filter: blur(6px);
        }
        .ig-chat-input::placeholder { color: rgba(255,255,255,0.35); }

        .ig-send-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: none;
          background: linear-gradient(135deg, #833AB4, #C13584);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
          transition: transform 0.2s;
        }
        .ig-send-btn:active { transform: scale(0.9); }

        /* Bottom Controls */
        .ig-bottom-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 12px 0;
        }

        .ig-ctrl-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: none;
          background: rgba(255,255,255,0.12);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(6px);
          transition: all 0.2s;
        }
        .ig-ctrl-btn:hover {
          background: rgba(255,255,255,0.2);
        }

        .ig-end-btn {
          padding: 12px 28px;
          border-radius: 28px;
          border: none;
          background: #ED4956;
          color: white;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          letter-spacing: 0.3px;
          transition: all 0.2s;
        }
        .ig-end-btn:hover { background: #d4333f; transform: scale(1.05); }
        .ig-end-btn:active { transform: scale(0.95); }
      `}</style>
    </div>
  );
}
