import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Heart, Flame, Award, Send, Maximize2, Minimize2 } from 'lucide-react';

const mockMessages = [
  { id: 1, user: 'Ananya R.', msg: 'Namaste everyone! 🙏', time: '2m ago' },
  { id: 2, user: 'Priya S.', msg: 'Let\'s begin with some deep breaths', time: '1m ago', isInstructor: true },
  { id: 3, user: 'Kavita M.', msg: 'So excited for today\'s session!', time: '1m ago' },
  { id: 4, user: 'Arjun D.', msg: 'First time here, loving the energy ❤️', time: '45s ago' },
  { id: 5, user: 'Priya S.', msg: 'Welcome Arjun! Let\'s flow together 🧘‍♀️', time: '30s ago', isInstructor: true },
];

const reactions = [
  { emoji: '❤️', icon: Heart },
  { emoji: '🔥', icon: Flame },
  { emoji: '🙏', icon: null },
  { emoji: '👏', icon: null },
];

export default function LiveSessionPage() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState(mockMessages);
  const [inputMsg, setInputMsg] = useState('');
  const [floatingEmojis, setFloatingEmojis] = useState([]);
  const [viewerCount, setViewerCount] = useState(142);
  const [elapsed, setElapsed] = useState(0);
  const [chatVisible, setChatVisible] = useState(true);
  const chatRef = useRef(null);

  // Simulate elapsed timer
  useEffect(() => {
    const timer = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulate viewer count fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount((v) => v + Math.floor(Math.random() * 5) - 2);
    }, 5000);
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
    setFloatingEmojis((prev) => [...prev, { id, emoji, left }]);
    setTimeout(() => {
      setFloatingEmojis((prev) => prev.filter((e) => e.id !== id));
    }, 2000);
  };

  const sendMessage = () => {
    if (!inputMsg.trim()) return;
    setMessages((prev) => [...prev, {
      id: Date.now(),
      user: 'You',
      msg: inputMsg,
      time: 'now',
    }]);
    setInputMsg('');
  };

  return (
    <div className="live-session-page">
      {/* Simulated Live Video Background */}
      <div className="live-video-bg">
        <div className="live-video-gradient" />

        {/* Top Bar */}
        <div className="live-top-bar">
          <button className="live-back-btn" onClick={() => navigate(-1)}>
            <ArrowLeft size={20} color="white" />
          </button>

          <div className="live-info-pills">
            <div className="live-badge-pill">
              <span className="live-dot-anim" />
              LIVE
            </div>
            <div className="viewer-pill">
              <Users size={13} /> {viewerCount}
            </div>
            <div className="timer-pill">
              {formatTime(elapsed)}
            </div>
          </div>

          <button className="live-minimize-btn" onClick={() => setChatVisible(!chatVisible)}>
            {chatVisible ? <Minimize2 size={18} color="white" /> : <Maximize2 size={18} color="white" />}
          </button>
        </div>

        {/* Instructor Card */}
        <div className="live-instructor-bar">
          <div className="live-inst-avatar">🧘‍♀️</div>
          <div className="live-inst-info">
            <h4>Priya Sharma</h4>
            <p>Live Session · Creator</p>
          </div>
          <button className="follow-btn">Follow</button>
        </div>

        {/* Floating Reactions */}
        {floatingEmojis.map((e) => (
          <div
            key={e.id}
            className="floating-emoji"
            style={{ left: `${e.left}%` }}
          >
            {e.emoji}
          </div>
        ))}
      </div>

      {/* Chat & Controls Overlay */}
      <div className={`live-bottom-section ${chatVisible ? '' : 'collapsed'}`}>
        {/* Chat Messages */}
        {chatVisible && (
          <div className="live-chat" ref={chatRef}>
            {messages.map((m) => (
              <div key={m.id} className={`chat-msg ${m.isInstructor ? 'instructor' : ''}`}>
                <span className="chat-user">{m.user}</span>
                <span className="chat-text">{m.msg}</span>
              </div>
            ))}
          </div>
        )}

        {/* Reactions Bar */}
        <div className="reactions-bar">
          {reactions.map((r, i) => (
            <button
              key={i}
              className="reaction-btn"
              onClick={() => sendReaction(r.emoji)}
            >
              {r.emoji}
            </button>
          ))}
        </div>

        {/* Chat Input */}
        <div className="chat-input-bar">
          <input
            type="text"
            placeholder="Say something..."
            value={inputMsg}
            onChange={(e) => setInputMsg(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button className="send-btn" onClick={sendMessage}>
            <Send size={18} color="white" />
          </button>
        </div>
      </div>

      <style>{`
        .live-session-page {
          min-height: 100vh;
          background: #0a0a0f;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        /* Live Video Background */
        .live-video-bg {
          flex: 1;
          background: var(--bg-live);
          position: relative;
          display: flex;
          flex-direction: column;
          min-height: 55vh;
        }

        .live-video-bg::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background:
            radial-gradient(circle at 30% 40%, rgba(139,168,136,0.15) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(198,139,89,0.1) 0%, transparent 50%);
          animation: breathe 6s ease-in-out infinite;
        }

        .live-video-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 200px;
          background: linear-gradient(transparent, rgba(10, 10, 15, 0.9));
          z-index: 1;
        }

        /* Top Bar */
        .live-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px;
          padding-top: calc(var(--safe-area-top) + 16px);
          z-index: 10;
        }

        .live-back-btn, .live-minimize-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .live-info-pills {
          display: flex;
          gap: 8px;
        }

        .live-badge-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: rgba(231, 76, 60, 0.85);
          border-radius: var(--radius-full);
          color: white;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .live-dot-anim {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: white;
          animation: livePulse 1.5s infinite;
        }

        .viewer-pill, .timer-pill {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 6px 12px;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          border-radius: var(--radius-full);
          color: white;
          font-size: 12px;
          font-weight: 500;
        }

        /* Instructor Bar */
        .live-instructor-bar {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 16px;
          margin-top: auto;
          margin-bottom: 16px;
          z-index: 10;
        }

        .live-inst-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          border: 2px solid rgba(255,255,255,0.2);
        }

        .live-inst-info h4 {
          color: white;
          font-size: 14px;
          font-weight: 600;
        }

        .live-inst-info p {
          color: rgba(255,255,255,0.6);
          font-size: 12px;
        }

        .follow-btn {
          margin-left: auto;
          padding: 8px 18px;
          background: rgba(139,168,136,0.8);
          border-radius: var(--radius-full);
          color: white;
          font-size: 12px;
          font-weight: 600;
        }

        /* Floating Emojis */
        .floating-emoji {
          position: absolute;
          bottom: 120px;
          font-size: 28px;
          animation: floatUp 2s ease forwards;
          z-index: 20;
          pointer-events: none;
        }

        /* Bottom Section */
        .live-bottom-section {
          background: rgba(10, 10, 15, 0.95);
          backdrop-filter: blur(20px);
          padding: 12px 16px;
          padding-bottom: calc(var(--safe-area-bottom) + 12px);
          border-radius: var(--radius-xl) var(--radius-xl) 0 0;
          z-index: 10;
          transition: all 0.3s ease;
        }

        .live-bottom-section.collapsed {
          border-radius: 0;
        }

        /* Chat */
        .live-chat {
          max-height: 180px;
          overflow-y: auto;
          margin-bottom: 12px;
          scrollbar-width: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .live-chat::-webkit-scrollbar { display: none; }

        .chat-msg {
          padding: 8px 12px;
          background: rgba(255,255,255,0.05);
          border-radius: var(--radius-md);
          animation: fadeIn 0.3s ease;
        }

        .chat-msg.instructor {
          background: rgba(139,168,136,0.15);
          border-left: 3px solid var(--accent-sage);
        }

        .chat-user {
          font-size: 12px;
          font-weight: 600;
          color: var(--accent-sage);
          margin-right: 8px;
        }

        .chat-msg.instructor .chat-user {
          color: var(--accent-gold);
        }

        .chat-text {
          font-size: 13px;
          color: rgba(255,255,255,0.85);
        }

        /* Reactions */
        .reactions-bar {
          display: flex;
          gap: 10px;
          margin-bottom: 10px;
          justify-content: center;
        }

        .reaction-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          transition: all 0.2s ease;
          border: 1px solid rgba(255,255,255,0.06);
        }

        .reaction-btn:active {
          transform: scale(1.2);
          background: rgba(255,255,255,0.15);
        }

        /* Chat Input */
        .chat-input-bar {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .chat-input-bar input {
          flex: 1;
          padding: 12px 16px;
          background: rgba(255,255,255,0.08);
          border-radius: var(--radius-full);
          color: white;
          font-size: 14px;
          border: 1px solid rgba(255,255,255,0.06);
        }

        .chat-input-bar input::placeholder {
          color: rgba(255,255,255,0.3);
        }

        .send-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--accent-sage);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(139,168,136,0.3);
        }

        .send-btn:active {
          transform: scale(0.95);
        }
      `}</style>
    </div>
  );
}
