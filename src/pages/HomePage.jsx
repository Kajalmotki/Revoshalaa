import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Wifi, Users, RefreshCw } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { onLiveSessionsChanged } from '../utils/liveSignaling';

export default function HomePage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeSessions, setActiveSessions] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Listen for Real-Time Live Sessions
  useEffect(() => {
    setLoading(true);
    const unsub = onLiveSessionsChanged((sessions) => {
      console.log("HomePage received sessions:", sessions);
      setActiveSessions(sessions);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  // 2. Refresh Handler
  const handleRefresh = () => {
    setLoading(true);
    // The listener stays active, but we can simulate a 'check' or simply re-mount slightly
    // For now, just a visual spinner timeout if data doesn't change immediately
    setTimeout(() => setLoading(false), 800);
  };

  return (
    <div className="page home-page-v2">
      {/* 1. Header */}
      <header className="simple-header">
        <div>
          <h1 className="brand-title">Revoshalaa</h1>
          <p className="user-greeting">Welcome, {user?.name || 'Guest'}</p>
        </div>
        <button onClick={handleRefresh} className={`refresh-btn ${loading ? 'spinning' : ''}`}>
          <RefreshCw size={20} />
        </button>
      </header>

      {/* 2. Main Content - LIVE FEED */}
      <main className="live-feed">
        <div className="feed-header">
          <h2>🔴 Live Now</h2>
          <span className="live-count">{activeSessions.length} active</span>
        </div>

        {activeSessions.length === 0 ? (
          // EMPTY STATE
          <div className="empty-state">
            <div className="pulse-circle">
              <Wifi size={32} />
            </div>
            <h3>Waiting for Tutors...</h3>
            <p>No live sessions detected right now.</p>
            <p className="hint">Tutors, please check your "Go Live" dashboard.</p>
            {loading && <p className="loading-text">Scanning...</p>}
          </div>
        ) : (
          // LIST OF SESSIONS
          <div className="sessions-grid">
            {activeSessions.map((session) => (
              <div
                key={session.id}
                className="live-card-v2"
                onClick={() => navigate('/live-session', { state: session })}
              >
                {/* Thumbnail / Placeholder */}
                <div className="card-media">
                  <div className="live-badge">LIVE</div>
                  <div className="viewer-pill">
                    <Users size={12} /> {session.viewers || 0} watching
                  </div>
                  <div className="play-overlay">
                    <Play fill="white" size={32} />
                  </div>
                </div>

                {/* Info */}
                <div className="card-info">
                  <h3>{session.title || 'Untitled Session'}</h3>
                  <div className="tutor-info">
                    <span className="tutor-avatar">{session.tutorAvatar || '🎓'}</span>
                    <span className="tutor-name">{session.tutorName || 'Unknown Tutor'}</span>
                  </div>
                  <span className="category-tag">{session.category}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* 3. Styles */}
      <style>{`
        .home-page-v2 {
            min-height: 100vh;
            background: #0f0f13; /* Dark Premium BG */
            color: white;
            padding-bottom: 80px; /* Space for bottom nav */
        }

        .simple-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            padding-top: max(20px, env(safe-area-inset-top));
            background: linear-gradient(180deg, rgba(0,0,0,0.8), transparent);
        }

        .brand-title {
            font-size: 24px;
            font-weight: 700;
            background: linear-gradient(45deg, #FFD700, #FFA500);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin: 0;
        }

        .user-greeting {
            font-size: 14px;
            color: #ccc;
            margin: 0;
        }

        .refresh-btn {
            background: rgba(255,255,255,0.1);
            border: none;
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }
        .refresh-btn:active { transform: scale(0.9); }
        .spinning { animation: spin 1s linear infinite; }

        .live-feed {
            padding: 20px;
        }

        .feed-header {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 20px;
        }

        .feed-header h2 {
            font-size: 20px;
            margin: 0;
        }

        .live-count {
            background: #333;
            font-size: 12px;
            padding: 4px 8px;
            border-radius: 12px;
            color: #888;
        }

        /* Empty State */
        .empty-state {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 60px 20px;
            text-align: center;
            opacity: 0.7;
        }
        .pulse-circle {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: rgba(255,255,255,0.05);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            animation: pulse 2s infinite;
        }
        .empty-state h3 { margin: 0 0 8px 0; color: white; }
        .empty-state p { margin: 0; color: #888; font-size: 14px; }
        .empty-state .hint { font-size: 12px; color: #555; margin-top: 12px; }

        /* Sessions Grid */
        .sessions-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
        }

        .live-card-v2 {
            background: #1e1e24;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.4);
            transition: transform 0.2s;
            cursor: pointer;
        }
        .live-card-v2:active { transform: scale(0.98); }

        .card-media {
            height: 180px;
            background: linear-gradient(45deg, #2a2a35, #3a3a45);
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .live-badge {
            position: absolute;
            top: 12px;
            left: 12px;
            background: #ff0000;
            color: white;
            font-size: 10px;
            font-weight: bold;
            padding: 4px 8px;
            border-radius: 4px;
            box-shadow: 0 2px 8px rgba(255,0,0,0.4);
        }

        .viewer-pill {
            position: absolute;
            top: 12px;
            right: 12px;
            background: rgba(0,0,0,0.6);
            backdrop-filter: blur(4px);
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 10px;
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .card-info {
            padding: 16px;
        }

        .card-info h3 {
            margin: 0 0 10px 0;
            font-size: 16px;
            line-height: 1.4;
        }

        .tutor-info {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 12px;
        }
        .tutor-avatar { font-size: 18px; }
        .tutor-name { color: #aaa; font-size: 14px; }
        
        .category-tag {
            display: inline-block;
            background: rgba(255,255,255,0.1);
            color: #ddd;
            font-size: 11px;
            padding: 4px 10px;
            border-radius: 4px;
        }

        @keyframes spin { 100% { transform: rotate(360deg); } }
        @keyframes pulse { 
            0% { transform: scale(0.95); opacity: 0.5; }
            50% { transform: scale(1.05); opacity: 0.8; }
            100% { transform: scale(0.95); opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
