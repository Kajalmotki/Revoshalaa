import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Pause, SkipBack, SkipForward, Maximize2, Volume2 } from 'lucide-react';

export default function VideoPlayerPage() {
  const navigate = useNavigate();
  const [playing, setPlaying] = useState(false);

  return (
    <div className="video-player-page">
      {/* Video Area */}
      <div className="vp-video-area">
        <video
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          className="vp-video"
          playsInline
          onClick={() => setPlaying(!playing)}
        />

        {/* Overlay Controls */}
        <div className="vp-overlay">
          <button className="vp-back" onClick={() => navigate(-1)}>
            <ArrowLeft size={22} color="white" />
          </button>

          <div className="vp-center-controls">
            <button className="vp-ctrl-btn"><SkipBack size={24} color="white" /></button>
            <button className="vp-play-btn" onClick={() => setPlaying(!playing)}>
              {playing ? <Pause size={30} fill="white" color="white" /> : <Play size={30} fill="white" color="white" />}
            </button>
            <button className="vp-ctrl-btn"><SkipForward size={24} color="white" /></button>
          </div>

          <div className="vp-bottom-bar">
            <div className="vp-progress">
              <div className="vp-progress-fill" style={{ width: '35%' }} />
            </div>
            <div className="vp-time-row">
              <span>2:14</span>
              <div className="vp-right-ctrls">
                <Volume2 size={18} color="white" />
                <Maximize2 size={18} color="white" />
              </div>
              <span>6:30</span>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="vp-info">
        <h2>Introduction to Vinyasa</h2>
        <p className="vp-instructor">by Ankit Verma · Fitness</p>
        <p className="vp-desc">
          Get started with this beginner-friendly session. Your creator will guide you through
          fundamental poses, breathing techniques, and how to connect movement with breath.
        </p>
        <button className="btn-primary" style={{ width: '100%', marginTop: 20 }} onClick={() => navigate('/live-session')}>
          <Play size={18} fill="white" /> Join Live Session
        </button>
      </div>

      <style>{`
        .video-player-page {
          min-height: 100vh;
          background: #0a0a0a;
        }

        .vp-video-area {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background: #000;
        }

        .vp-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .vp-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(
            180deg,
            rgba(0,0,0,0.4) 0%,
            transparent 30%,
            transparent 60%,
            rgba(0,0,0,0.6) 100%
          );
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 16px;
        }

        .vp-back {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .vp-center-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 28px;
        }

        .vp-ctrl-btn {
          opacity: 0.7;
        }

        .vp-play-btn {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .vp-bottom-bar {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .vp-progress {
          width: 100%;
          height: 3px;
          background: rgba(255,255,255,0.2);
          border-radius: 10px;
          overflow: hidden;
        }

        .vp-progress-fill {
          height: 100%;
          background: var(--accent-sage);
          border-radius: 10px;
          transition: width 0.3s ease;
        }

        .vp-time-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 12px;
          color: rgba(255,255,255,0.7);
        }

        .vp-right-ctrls {
          display: flex;
          gap: 16px;
        }

        .vp-info {
          padding: 24px 16px;
          background: var(--bg-primary);
          border-radius: var(--radius-xl) var(--radius-xl) 0 0;
          margin-top: -16px;
          position: relative;
        }

        .vp-info h2 {
          font-size: 22px;
          margin-bottom: 4px;
        }

        .vp-instructor {
          font-size: 13px;
          color: var(--accent-sage);
          font-weight: 500;
          margin-bottom: 12px;
        }

        .vp-desc {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}
