import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Video, Users, Star, Award, ChevronRight, Settings, Shield } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function TutorProfilePage() {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const menuItems = [
        { icon: Video, label: 'My Sessions', desc: 'View all past broadcasts', action: () => { } },
        { icon: Users, label: 'My Followers', desc: 'Manage your audience', action: () => { } },
        { icon: Award, label: 'Achievements', desc: 'Badges & milestones', action: () => { } },
        { icon: Settings, label: 'Settings', desc: 'Account preferences', action: () => { } },
        { icon: Shield, label: 'Privacy', desc: 'Manage visibility', action: () => { } },
    ];

    return (
        <div className="tutor-profile-page">
            {/* Profile Header */}
            <div className="tp-header">
                <div className="tp-avatar-large">{user?.avatar || '🎓'}</div>
                <h1>{user?.name || 'Creator'}</h1>
                <p className="tp-specialty">{user?.specialty || 'Creator'} · {user?.category || 'General'}</p>
                <div className="tp-badges">
                    <span className="tp-badge-item">🎓 Tutor</span>
                    <span className="tp-badge-item">⭐ Verified</span>
                </div>
            </div>

            {/* Stats Row */}
            <div className="tp-stats-row">
                <div className="tp-stat">
                    <span className="tp-stat-val">{Math.floor(Math.random() * 50 + 10)}</span>
                    <span className="tp-stat-lbl">Sessions</span>
                </div>
                <div className="tp-divider" />
                <div className="tp-stat">
                    <span className="tp-stat-val">{Math.floor(Math.random() * 200 + 50)}</span>
                    <span className="tp-stat-lbl">Followers</span>
                </div>
                <div className="tp-divider" />
                <div className="tp-stat">
                    <span className="tp-stat-val">{(Math.random() * 2 + 3).toFixed(1)}</span>
                    <span className="tp-stat-lbl">Rating</span>
                </div>
            </div>

            {/* Menu */}
            <div className="tp-menu">
                {menuItems.map((item, i) => (
                    <button key={i} className="tp-menu-item" onClick={item.action}>
                        <div className="tp-menu-icon"><item.icon size={18} /></div>
                        <div className="tp-menu-text">
                            <span className="tp-menu-label">{item.label}</span>
                            <span className="tp-menu-desc">{item.desc}</span>
                        </div>
                        <ChevronRight size={16} color="rgba(255,255,255,0.2)" />
                    </button>
                ))}
            </div>

            {/* Logout */}
            <button className="tp-logout-btn" onClick={handleLogout}>
                <LogOut size={18} />
                Sign Out
            </button>

            <style>{`
        .tutor-profile-page {
          min-height: 100vh;
          background: linear-gradient(165deg, #1a1f1a 0%, #0f140f 40%, #0a0f0a 100%);
          color: white;
          padding-bottom: calc(var(--bottom-nav-height) + var(--safe-area-bottom) + 20px);
        }

        /* Header */
        .tp-header {
          text-align: center;
          padding: 32px 20px 24px;
          padding-top: calc(var(--safe-area-top, 0px) + 32px);
        }

        .tp-avatar-large {
          width: 80px;
          height: 80px;
          border-radius: 24px;
          background: linear-gradient(135deg, #3D5A3A, #2A3F28);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;
          margin: 0 auto 16px;
          border: 2px solid rgba(139,168,136,0.25);
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        }

        .tp-header h1 {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 4px;
          font-family: var(--font-display, 'Playfair Display', serif);
        }

        .tp-specialty {
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          margin-bottom: 14px;
        }

        .tp-badges {
          display: flex;
          gap: 8px;
          justify-content: center;
        }

        .tp-badge-item {
          font-size: 11px;
          padding: 4px 10px;
          background: rgba(139,168,136,0.1);
          border: 1px solid rgba(139,168,136,0.15);
          border-radius: 20px;
          color: #8BA888;
          font-weight: 500;
        }

        /* Stats Row */
        .tp-stats-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          margin: 0 20px 28px;
          padding: 18px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
        }

        .tp-stat {
          flex: 1;
          text-align: center;
        }

        .tp-stat-val {
          display: block;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 3px;
        }

        .tp-stat-lbl {
          font-size: 11px;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .tp-divider {
          width: 1px;
          height: 32px;
          background: rgba(255,255,255,0.08);
        }

        /* Menu */
        .tp-menu {
          padding: 0 20px;
        }

        .tp-menu-item {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 14px;
          margin-bottom: 8px;
          cursor: pointer;
          transition: background 0.2s;
          color: white;
          text-align: left;
        }

        .tp-menu-item:active {
          background: rgba(255,255,255,0.06);
        }

        .tp-menu-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(139,168,136,0.1);
          color: #8BA888;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .tp-menu-text {
          flex: 1;
        }

        .tp-menu-label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 2px;
        }

        .tp-menu-desc {
          font-size: 11px;
          color: rgba(255,255,255,0.35);
        }

        /* Logout */
        .tp-logout-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: calc(100% - 40px);
          margin: 24px 20px 0;
          padding: 14px;
          border-radius: 14px;
          background: rgba(231, 76, 60, 0.08);
          border: 1px solid rgba(231, 76, 60, 0.15);
          color: #e74c3c;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .tp-logout-btn:active {
          transform: scale(0.98);
          background: rgba(231, 76, 60, 0.12);
        }
      `}</style>
        </div>
    );
}
