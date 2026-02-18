import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, Sparkles, Clock, Users, Calendar } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { onLiveSessionsChanged } from '../utils/liveSignaling';

// Gradient pool for assigning colors to categories
const gradientPool = [
  'linear-gradient(135deg, #A8C4A5 0%, #8BA888 100%)',
  'linear-gradient(135deg, #9B8EC4 0%, #7B6FA4 100%)',
  'linear-gradient(135deg, #D9A87C 0%, #C68B59 100%)',
  'linear-gradient(135deg, #C4857A 0%, #B06B5E 100%)',
  'linear-gradient(135deg, #6B8FAD 0%, #537A96 100%)',
  'linear-gradient(135deg, #BCA9D4 0%, #A08CC0 100%)',
  'linear-gradient(135deg, #7ABFB0 0%, #5CA69A 100%)',
  'linear-gradient(135deg, #D4A853 0%, #B88F3A 100%)',
];

export default function HomePage() {
  const navigate = useNavigate();
  const { user, liveSessions, categories: authCategories } = useAuth();

  // Build display categories from dynamic context
  const categories = (authCategories || []).map((cat, i) => ({
    ...cat,
    sessions: 15 + (cat.name.length * 3 % 20),
    gradient: gradientPool[i % gradientPool.length],
  }));

  // Listen to Firebase for live sessions (real-time, works across networks!)
  const [sharedLiveSessions, setSharedLiveSessions] = useState([]);

  useEffect(() => {
    const unsub = onLiveSessionsChanged((sessions) => {
      setSharedLiveSessions(sessions);
    });
    return () => unsub();
  }, []);

  // Prefer Firebase sessions, fall back to local context
  const allLive = sharedLiveSessions.length > 0 ? sharedLiveSessions : liveSessions;
  const featuredLive = allLive.length > 0 ? allLive[0] : null;

  return (
    <div className="page home-page">
      {/* Header */}
      <div className="home-header">
        <div>
          <p className="greeting">Hey, {user?.name || 'Guest'} 👋</p>
          <h1>Revoshalaa</h1>
        </div>
        <div className="header-actions">
          <button className="search-btn" onClick={() => navigate('/explore')}>
            <Sparkles size={20} />
          </button>
        </div>
      </div>

      <div className="page-content">

        {/* Live Now Banner (Dynamic) */}
        {featuredLive ? (
          <div className="live-banner glass-card" onClick={() => navigate('/live-session', { state: featuredLive })}>
            <div className="live-banner-badge">
              <span className="badge badge-live">● LIVE</span>
              <span className="viewer-count"><Users size={12} /> {featuredLive.viewers + 12}</span>
            </div>
            <div className="live-banner-info">
              <h3>{featuredLive.title}</h3>
              <p>{featuredLive.tutorName} · {featuredLive.category}</p>
            </div>
            <button className="btn-primary live-join-btn">
              <Play size={16} fill="white" /> Join
            </button>
          </div>
        ) : (
          <div className="no-live-banner glass-card">
            <div className="icon-circle">
              <Calendar size={24} color="var(--text-secondary)" />
            </div>
            <div className="no-live-info">
              <h3>No live sessions right now</h3>
              <p>Check the schedule for upcoming classes</p>
            </div>
            <button className="btn-outline" onClick={() => navigate('/schedule')}>
              View Schedule
            </button>
          </div>
        )}

        {/* Categories */}
        <section className="home-section" style={{ marginTop: 24 }}>
          <div className="section-header">
            <h2>Categories</h2>
          </div>
          <div className="categories-grid">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="category-big-card"
                style={{ background: cat.gradient }}
                onClick={() => navigate(`/category/${cat.id}`)}
              >
                <span className="cat-emoji">{cat.emoji}</span>
                <h3>{cat.name}</h3>
                <p>{cat.sessions} sessions</p>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Sessions (Static for now, could be dynamic later) */}
        <section className="home-section">
          <div className="section-header">
            <h2>Upcoming Live</h2>
            <button className="see-all" onClick={() => navigate('/schedule')}>See All</button>
          </div>
          <div className="h-scroll" style={{ paddingLeft: 0 }}>
            <div className="session-card glass-card" onClick={() => navigate('/schedule')}>
              <div className="session-card-top">
                <span className="badge badge-free">FREE</span>
                <span className="session-cat">Fitness</span>
              </div>
              <h3>HIIT Burn Challenge</h3>
              <p className="session-instructor">Ankit Verma</p>
              <div className="session-time">
                <Clock size={13} />
                <span>Today, 6:00 PM</span>
              </div>
            </div>
            <div className="session-card glass-card" onClick={() => navigate('/schedule')}>
              <div className="session-card-top">
                <span className="badge badge-paid">$5</span>
                <span className="session-cat">Music</span>
              </div>
              <h3>Guitar for Beginners</h3>
              <p className="session-instructor">Rohan Mehta</p>
              <div className="session-time">
                <Clock size={13} />
                <span>Today, 8:00 PM</span>
              </div>
            </div>
            <div className="session-card glass-card" onClick={() => navigate('/schedule')}>
              <div className="session-card-top">
                <span className="badge badge-free">FREE</span>
                <span className="session-cat">Cooking</span>
              </div>
              <h3>5-Min Healthy Meals</h3>
              <p className="session-instructor">Chef Ananya</p>
              <div className="session-time">
                <Clock size={13} />
                <span>Tomorrow, 12:00 PM</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .home-page {
          background: var(--bg-primary);
        }

        .home-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 16px 8px;
          padding-top: calc(var(--safe-area-top) + 20px);
        }

        .greeting {
          font-size: 14px;
          color: var(--text-secondary);
          margin-bottom: 2px;
        }

        .home-header h1 {
          font-size: 26px;
          font-family: var(--font-display);
        }

        .search-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-sage);
          box-shadow: var(--shadow-sm);
        }

        /* Live Banner */
        .live-banner {
          padding: 18px;
          display: flex;
          align-items: center;
          gap: 14px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(139,168,136,0.08), rgba(198,139,89,0.06)) !important;
        }

        .live-banner::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(139,168,136,0.05) 50%, transparent 100%);
          animation: shimmer 3s infinite;
          background-size: 200% 100%;
        }

        .live-banner-badge {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        .viewer-count {
          font-size: 11px;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 3px;
        }

        .live-banner-info {
          flex: 1;
        }

        .live-banner-info h3 {
          font-size: 15px;
          font-family: var(--font-body);
          font-weight: 600;
          margin-bottom: 2px;
        }

        .live-banner-info p {
          font-size: 12px;
          color: var(--text-secondary);
        }

        .live-join-btn {
          padding: 10px 20px;
          font-size: 13px;
        }

        /* No Live State */
        .no-live-banner {
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          background: rgba(255,255,255,0.4);
        }

        .icon-circle {
          width: 48px; 
          height: 48px;
          border-radius: 50%;
          background: rgba(0,0,0,0.03);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .no-live-info {
          flex: 1;
        }

        .no-live-info h3 {
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 2px;
          color: var(--text-primary);
        }

        .no-live-info p {
          font-size: 12px;
          color: var(--text-secondary);
        }

        .btn-outline {
          padding: 8px 16px;
          border: 1px solid var(--border-medium);
          background: transparent;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
          color: var(--text-secondary);
        }

        /* Categories Grid */
        .categories-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .category-big-card {
          padding: 28px 18px;
          border-radius: var(--radius-lg);
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .category-big-card:active {
          transform: scale(0.97);
        }

        .cat-emoji {
          font-size: 32px;
          display: block;
          margin-bottom: 12px;
        }

        .category-big-card h3 {
          color: white;
          font-family: var(--font-display);
          font-size: 20px;
          margin-bottom: 4px;
        }

        .category-big-card p {
          font-size: 12px;
          opacity: 0.85;
        }

        /* Session Cards */
        .session-card {
          width: 220px;
          padding: 16px;
          cursor: pointer;
        }

        .session-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .session-cat {
          font-size: 11px;
          color: var(--text-tertiary);
          font-weight: 500;
        }

        .session-card h3 {
          font-size: 15px;
          font-family: var(--font-body);
          font-weight: 600;
          margin-bottom: 4px;
          line-height: 1.3;
        }

        .session-instructor {
          font-size: 12px;
          color: var(--text-secondary);
          margin-bottom: 10px;
        }

        .session-time {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          color: var(--accent-sage);
          font-weight: 500;
        }

        .home-section {
          margin-top: 28px;
        }
      `}</style>
    </div>
  );
}
