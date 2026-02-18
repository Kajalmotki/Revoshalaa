import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Video, Users, Clock, TrendingUp, Calendar, ChevronRight, Zap } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function TutorDashboardPage() {
    const navigate = useNavigate();
    const { user, liveSessions } = useAuth();

    const activeSessions = liveSessions.filter(s => s.tutorId === user?.id);
    const totalViewers = activeSessions.reduce((sum, s) => sum + (s.viewers || 0), 0);

    const stats = [
        { label: 'Total Sessions', value: activeSessions.length, icon: Video, color: '#8BA888' },
        { label: 'Live Viewers', value: totalViewers, icon: Users, color: '#D4A853' },
        { label: 'Hours Live', value: Math.floor(Math.random() * 50 + 10), icon: Clock, color: '#9B8EC4' },
        { label: 'Followers', value: Math.floor(Math.random() * 200 + 50), icon: TrendingUp, color: '#C4857A' },
    ];

    const recentSessions = [
        { id: 1, title: 'Morning Power Flow', viewers: 45, duration: '45 min', date: 'Today' },
        { id: 2, title: 'Evening Stretch', viewers: 32, duration: '30 min', date: 'Yesterday' },
        { id: 3, title: 'HIIT Challenge', viewers: 67, duration: '60 min', date: '2 days ago' },
    ];

    return (
        <div className="tutor-dash">
            {/* Header */}
            <div className="td-header">
                <div className="td-greeting">
                    <p className="td-hello">Welcome back</p>
                    <h1>{user?.name || 'Creator'} 🎓</h1>
                </div>
                <div className="td-avatar">{user?.avatar || '🎓'}</div>
            </div>

            <div className="td-content">
                {/* Quick Go Live CTA */}
                <button className="td-go-live-btn" onClick={() => navigate('/tutor-broadcast')}>
                    <div className="td-live-pulse" />
                    <Zap size={20} />
                    <span>Go Live Now</span>
                    <ChevronRight size={18} />
                </button>

                {/* Stats Grid */}
                <div className="td-stats-grid">
                    {stats.map((stat, i) => (
                        <div key={i} className="td-stat-card">
                            <div className="td-stat-icon" style={{ background: `${stat.color}15`, color: stat.color }}>
                                <stat.icon size={18} />
                            </div>
                            <div className="td-stat-value">{stat.value}</div>
                            <div className="td-stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Active Live Sessions */}
                {activeSessions.length > 0 && (
                    <section className="td-section">
                        <h2>🔴 Your Active Sessions</h2>
                        {activeSessions.map(s => (
                            <div key={s.id} className="td-session-card active-session">
                                <div className="td-session-info">
                                    <h3>{s.title}</h3>
                                    <p>{s.category} · {s.viewers} viewers</p>
                                </div>
                                <span className="td-live-tag">LIVE</span>
                            </div>
                        ))}
                    </section>
                )}

                {/* Recent Sessions */}
                <section className="td-section">
                    <div className="td-section-header">
                        <h2>Recent Sessions</h2>
                        <button className="td-see-all">See All</button>
                    </div>
                    {recentSessions.map(s => (
                        <div key={s.id} className="td-session-card">
                            <div className="td-session-left">
                                <div className="td-session-icon"><Video size={16} /></div>
                                <div className="td-session-info">
                                    <h3>{s.title}</h3>
                                    <p>{s.date} · {s.duration} · {s.viewers} viewers</p>
                                </div>
                            </div>
                            <ChevronRight size={16} color="rgba(255,255,255,0.3)" />
                        </div>
                    ))}
                </section>

                {/* Upcoming Schedule */}
                <section className="td-section">
                    <div className="td-section-header">
                        <h2>Upcoming</h2>
                    </div>
                    <div className="td-empty-state">
                        <Calendar size={32} color="rgba(255,255,255,0.2)" />
                        <p>No upcoming sessions scheduled</p>
                        <button className="td-schedule-btn" onClick={() => navigate('/tutor-broadcast')}>
                            Schedule a Session
                        </button>
                    </div>
                </section>
            </div>

            <style>{`
        .tutor-dash {
          min-height: 100vh;
          background: linear-gradient(165deg, #1a1f1a 0%, #0f140f 40%, #0a0f0a 100%);
          color: white;
          padding-bottom: calc(var(--bottom-nav-height) + var(--safe-area-bottom) + 20px);
        }

        .td-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 20px 16px;
          padding-top: calc(var(--safe-area-top, 0px) + 20px);
        }

        .td-hello {
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          margin-bottom: 4px;
        }

        .td-header h1 {
          font-size: 24px;
          font-weight: 700;
          font-family: var(--font-display, 'Playfair Display', serif);
        }

        .td-avatar {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          background: linear-gradient(135deg, #3D5A3A, #2A3F28);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          border: 1.5px solid rgba(139,168,136,0.2);
        }

        .td-content {
          padding: 0 20px;
        }

        /* Go Live CTA */
        .td-go-live-btn {
          width: 100%;
          padding: 18px 20px;
          background: linear-gradient(135deg, #3D5A3A 0%, #2A4328 100%);
          border: 1.5px solid rgba(139,168,136,0.25);
          border-radius: 16px;
          color: #8BA888;
          font-size: 16px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .td-go-live-btn:active {
          transform: scale(0.98);
        }

        .td-go-live-btn span {
          flex: 1;
          text-align: left;
        }

        .td-live-pulse {
          position: absolute;
          inset: 0;
          border-radius: 16px;
          animation: ringPulse 2.5s ease-out infinite;
        }

        @keyframes ringPulse {
          0% { box-shadow: inset 0 0 0 0 rgba(139,168,136,0.3); }
          100% { box-shadow: inset 0 0 0 0 rgba(139,168,136,0); }
        }

        /* Stats */
        .td-stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 20px;
        }

        .td-stat-card {
          padding: 18px 16px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          text-align: center;
        }

        .td-stat-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 10px;
        }

        .td-stat-value {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .td-stat-label {
          font-size: 11px;
          color: rgba(255,255,255,0.4);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Sections */
        .td-section {
          margin-top: 28px;
        }

        .td-section h2 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 14px;
          color: rgba(255,255,255,0.9);
        }

        .td-section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .td-see-all {
          font-size: 12px;
          color: #8BA888;
          font-weight: 500;
          background: none;
          border: none;
          cursor: pointer;
        }

        /* Session Cards */
        .td-session-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 14px;
          margin-bottom: 10px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .td-session-card:active {
          background: rgba(255,255,255,0.06);
        }

        .td-session-card.active-session {
          border-color: rgba(231,76,60,0.3);
          background: rgba(231,76,60,0.05);
        }

        .td-session-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .td-session-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(139,168,136,0.1);
          color: #8BA888;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .td-session-info h3 {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 3px;
        }

        .td-session-info p {
          font-size: 11px;
          color: rgba(255,255,255,0.4);
        }

        .td-live-tag {
          font-size: 10px;
          font-weight: 700;
          color: #e74c3c;
          background: rgba(231,76,60,0.1);
          padding: 4px 10px;
          border-radius: 6px;
          letter-spacing: 0.5px;
        }

        /* Empty State */
        .td-empty-state {
          text-align: center;
          padding: 32px 16px;
          background: rgba(255,255,255,0.02);
          border: 1px dashed rgba(255,255,255,0.08);
          border-radius: 16px;
        }

        .td-empty-state p {
          font-size: 13px;
          color: rgba(255,255,255,0.3);
          margin: 10px 0 16px;
        }

        .td-schedule-btn {
          padding: 10px 20px;
          background: rgba(139,168,136,0.1);
          border: 1px solid rgba(139,168,136,0.2);
          border-radius: 10px;
          color: #8BA888;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .td-schedule-btn:active {
          transform: scale(0.97);
        }
      `}</style>
        </div>
    );
}
