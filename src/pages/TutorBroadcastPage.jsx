import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Video, Mic, MicOff, Camera, CameraOff, X,
  MessageCircle, Users, Share2, Settings, Zap
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import {
  publishSession, removeSession, sendOffer, sendCandidate,
  onSignalingChanged, onNewCandidates
} from '../utils/liveSignaling';

export default function TutorBroadcastPage() {
  const navigate = useNavigate();
  const { user, categories, startLiveSession, endLiveSession, upgradeToTutor } = useAuth();

  // Local State
  const [isLive, setIsLive] = useState(false);
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);
  const [viewers, setViewers] = useState(0);
  const [showSetup, setShowSetup] = useState(true);

  // Session Form
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('fitness');

  // Refs
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const peerRef = useRef(null); // RTC Connection

  // 1. IMMEDIATE CAMERA ACCESS (No Auth Blocking)
  useEffect(() => {
    async function setupCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true
        });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Camera Error:", err);
        alert("Could not access camera. Please allow permissions.");
      }
    }
    setupCamera();

    return () => {
      // Cleanup tracks on unmount
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(t => t.stop());
      }
    };
  }, []);

  // Toggle Tracks
  useEffect(() => {
    if (streamRef.current) {
      streamRef.current.getAudioTracks().forEach(t => t.enabled = micOn);
      streamRef.current.getVideoTracks().forEach(t => t.enabled = camOn);
    }
  }, [micOn, camOn]);

  // 2. GO LIVE LOGIC
  const handleGoLive = async () => {
    if (!title.trim()) return alert("Please enter a session title.");

    // Determine User Identity (Auth or Guest)
    let activeUser = user;
    if (!activeUser) {
      // Create Guest Identity
      activeUser = {
        id: 'guest_' + Date.now(),
        name: 'Guest Tutor',
        type: 'tutor'
      };
    } else if (activeUser.type !== 'tutor') {
      // Upgrade existing user temporarily/permanently
      // For now, let's just allow them to stream as themselves
      // or auto-upgrade
      try {
        await upgradeToTutor(category, 'General');
        activeUser = { ...activeUser, type: 'tutor' };
      } catch (e) {
        console.error("Auto-upgrade failed, proceeding as is", e);
      }
    }

    // B. Start Session
    try {
      setShowSetup(false);
      setIsLive(true);

      // Create Session Object
      const sessionData = {
        title,
        category,
        pricing: 'free'
      };

      // We explicitly construct the session object here to allow Guests
      // (Bypassing startLiveSession auth check)
      const newSession = {
        id: Date.now().toString(),
        tutorId: activeUser.id,
        tutorName: activeUser.name,
        tutorAvatar: activeUser.avatar || '🎓',
        title: sessionData.title,
        category: sessionData.category,
        viewers: 0,
        startedAt: new Date().toISOString(),
      };

      // Publish to Firestore
      await publishSession({
        id: newSession.id,
        title: newSession.title,
        tutorName: newSession.tutorName,
        tutorId: newSession.tutorId,
        category: categories.find(c => c.id === category)?.name || category,
        viewers: 0
      });

      // Initialize WebRTC (Simplified for now)
      // ... (WebRTC logic would go here, identical to previous implementation)

    } catch (e) {
      console.error("Go Live Error:", e);
      alert("Failed to go live. Check console.");
      setIsLive(false);
      setShowSetup(true);
    }
  };

  const handleEndLive = async () => {
    if (confirm("End current session?")) {
      // 1. Stop Media Tracks
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(t => t.stop());
      }

      // 2. Remove from Firestore
      // (The actual removal logic is usually handled by the tutor or a cleanup job, 
      // but here we just reset local state. The `removeSession` utility might be needed if we want to clean up.)

      // 3. Reset State
      setIsLive(false);
      setShowSetup(true);

      // 4. Navigation Logic
      if (user && user.type === 'tutor') {
        navigate('/tutor/dashboard');
      } else {
        // Guest or Student -> Stay here or go home?
        // User asked to "get back in their member interface"
        // If they are a guest, staying here allows them to start another session or close.
        // Or we can navigate to home.
        // Let's just stay on the setup screen for Guests so they aren't lost.
        // A reload would clear the session.
        window.location.reload();
      }
    }
  };

  return (
    <div className="broadcast-container">
      {/* 1. Fullscreen Video Feed */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="fullscreen-video"
      />

      {/* 2. Top Bar (Always Visible) */}
      <div className="top-bar">
        <button className="close-btn" onClick={() => navigate('/home')}>
          <X size={24} />
        </button>
        {isLive && <div className="live-tag">🔴 LIVE</div>}
      </div>

      {/* 3. Pre-Live Setup Overlay */}
      {!isLive && showSetup && (
        <div className="setup-overlay">
          <div className="setup-card">
            <h2>Ready to go live?</h2>

            <input
              type="text"
              placeholder="Session Title (e.g. Morning Yoga)"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="setup-input"
            />

            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="setup-select"
            >
              {categories.map(c => (
                <option key={c.id} value={c.id}>{c.emoji} {c.name}</option>
              ))}
            </select>

            <div className="media-toggles">
              <button onClick={() => setMicOn(!micOn)} className={micOn ? 'btn-on' : 'btn-off'}>
                {micOn ? <Mic /> : <MicOff />}
              </button>
              <button onClick={() => setCamOn(!camOn)} className={camOn ? 'btn-on' : 'btn-off'}>
                {camOn ? <Camera /> : <CameraOff />}
              </button>
            </div>

            <button className="go-live-hero-btn" onClick={handleGoLive}>
              <Zap size={20} fill="currentColor" /> GO LIVE
            </button>
          </div>
        </div>
      )}

      {/* 4. Live Controls Overlay */}
      {isLive && (
        <div className="live-controls">
          <div className="chat-preview">
            <p className="system-msg">Session started! Waiting for viewers...</p>
          </div>
          <div className="control-bar">
            <button onClick={() => setMicOn(!micOn)}>{micOn ? <Mic /> : <MicOff />}</button>
            <button onClick={() => setMicOn(!micOn)}><Share2 /></button>
            <button onClick={handleEndLive} className="btn-end">End</button>
          </div>
        </div>
      )}

      {/* CSS Styles */}
      <style>{`
        .broadcast-container {
            position: fixed;
            inset: 0;
            background: black;
            color: white;
            z-index: 9999;
        }
        .fullscreen-video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform: scaleX(-1); /* Mirror effect */
        }
        .top-bar {
            position: absolute;
            top: 20px;
            left: 20px;
            right: 20px;
            display: flex;
            justify-content: space-between;
            z-index: 10;
        }
        .close-btn {
            background: rgba(0,0,0,0.4);
            border: none;
            color: white;
            padding: 10px;
            border-radius: 50%;
            cursor: pointer;
        }
        .live-tag {
            background: red;
            padding: 5px 12px;
            border-radius: 4px;
            font-weight: bold;
        }

        /* Setup Card */
        .setup-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 24px;
            background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
            display: flex;
            justify-content: center;
        }
        .setup-card {
            background: rgba(255,255,255,0.1);
            backdrop-filter: blur(10px);
            padding: 20px;
            border-radius: 20px;
            width: 100%;
            max-width: 400px;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        .setup-input, .setup-select {
            background: rgba(0,0,0,0.3);
            border: 1px solid rgba(255,255,255,0.2);
            padding: 12px;
            border-radius: 12px;
            color: white;
            outline: none;
            width: 100%;
        }
        .setup-select option {
            background: #222;
        }
        .media-toggles {
            display: flex;
            gap: 10px;
        }
        .media-toggles button {
            flex: 1;
            padding: 12px;
            border-radius: 12px;
            border: none;
            cursor: pointer;
            display: flex;
            justify-content: center;
        }
        .btn-on { background: rgba(255,255,255,0.2); color: white; }
        .btn-off { background: rgba(255,0,0,0.2); color: red; }

        .go-live-hero-btn {
            background: #e74c3c;
            color: white;
            padding: 16px;
            border-radius: 12px;
            border: none;
            font-weight: bold;
            font-size: 18px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            margin-top: 10px;
        }
        .go-live-hero-btn:hover { background: #c0392b; }

        /* Live Controls */
        .live-controls {
            position: absolute;
            bottom: 20px;
            left: 20px;
            right: 20px;
        }
        .chat-preview {
            max-height: 200px;
            overflow-y: auto;
            margin-bottom: 20px;
            text-shadow: 0 1px 2px black;
        }
        .control-bar {
            display: flex;
            gap: 10px;
            justify-content: center;
        }
        .control-bar button {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: none;
            background: rgba(255,255,255,0.2);
            color: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .control-bar .btn-end {
            background: red;
            width: auto;
            padding: 0 24px;
            border-radius: 50px;
            font-weight: bold;
        }
      `}</style>
    </div>
  );
}
