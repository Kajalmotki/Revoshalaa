import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Crown, Calendar, CreditCard, Bell, ChevronRight, LogOut, Settings, Star } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function ProfilePage() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [notificationsOn, setNotificationsOn] = useState(true);

  const handleSignOut = () => {
    logout();
    navigate('/login');
  };

  const menuItems = [
    { icon: Crown, label: 'My Subscription', desc: 'Monthly — Active', action: () => navigate('/pricing'), color: '#D4A853' },
    { icon: Calendar, label: 'My Sessions', desc: '12 sessions attended', action: () => navigate('/schedule'), color: '#8BA888' },
    { icon: CreditCard, label: 'Payment History', desc: 'View transactions', action: () => { }, color: '#C68B59' },
    { icon: Star, label: 'Rate Instructors', desc: 'Share your feedback', action: () => { }, color: '#9B8EC4' },
  ];

  return (
    <div className="page profile-page">
      <div className="page-header" style={{ textAlign: 'center' }}>
        <div className="profile-avatar">
          <User size={36} color="var(--accent-sage)" />
        </div>
        <h1 style={{ fontSize: 22, marginTop: 12 }}>{user?.name || 'Guest'}</h1>
        <p className="text-secondary" style={{ fontSize: 13 }}>Member since Feb 2026</p>
      </div>

      <div className="page-content">
        {/* Subscription Badge */}
        <div className="subscription-card glass-card">
          <div className="sub-card-left">
            <Crown size={22} color="#D4A853" />
            <div>
              <h3>Monthly Plan</h3>
              <p>Renews Mar 18, 2026</p>
            </div>
          </div>
          <span className="badge badge-free" style={{ background: 'rgba(212,168,83,0.15)', color: '#D4A853' }}>Active</span>
        </div>

        {/* Stats */}
        <div className="profile-stats">
          <div className="stat-item glass-card">
            <span className="stat-value">12</span>
            <span className="stat-label">Sessions</span>
          </div>
          <div className="stat-item glass-card">
            <span className="stat-value">8h</span>
            <span className="stat-label">Practice</span>
          </div>
          <div className="stat-item glass-card">
            <span className="stat-value">5</span>
            <span className="stat-label">Streak 🔥</span>
          </div>
        </div>

        {/* Menu Items */}
        <div className="profile-menu">
          {menuItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="profile-menu-item glass-card" onClick={item.action}>
                <div className="menu-icon" style={{ background: `${item.color}15` }}>
                  <Icon size={20} color={item.color} />
                </div>
                <div className="menu-info">
                  <h4>{item.label}</h4>
                  <p>{item.desc}</p>
                </div>
                <ChevronRight size={18} color="var(--text-tertiary)" />
              </div>
            );
          })}
        </div>

        {/* Notifications Toggle */}
        <div className="profile-menu-item glass-card" style={{ marginTop: 16 }}>
          <div className="menu-icon" style={{ background: 'rgba(139,168,136,0.1)' }}>
            <Bell size={20} color="var(--accent-sage)" />
          </div>
          <div className="menu-info" style={{ flex: 1 }}>
            <h4>Notifications</h4>
            <p>Live session reminders</p>
          </div>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={notificationsOn}
              onChange={() => setNotificationsOn(!notificationsOn)}
            />
            <span className="toggle-slider" />
          </label>
        </div>

        {/* Settings & Logout */}
        <div className="profile-footer">
          <button className="btn-secondary" style={{ gap: 6 }}>
            <Settings size={16} /> Settings
          </button>
          <button className="btn-secondary" style={{ gap: 6, color: '#C4857A' }} onClick={handleSignOut}>
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      </div>

      <style>{`
        .profile-page .page-header {
          padding-bottom: 20px;
        }

        .profile-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(139,168,136,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          border: 2px solid var(--accent-sage-light);
        }

        /* Subscription Card */
        .subscription-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px;
          background: linear-gradient(135deg, rgba(212,168,83,0.06), rgba(198,139,89,0.04)) !important;
          border: 1px solid rgba(212,168,83,0.2) !important;
        }

        .sub-card-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .sub-card-left h3 {
          font-size: 15px;
          font-family: var(--font-body);
          font-weight: 600;
          margin-bottom: 1px;
        }

        .sub-card-left p {
          font-size: 12px;
          color: var(--text-secondary);
        }

        /* Stats */
        .profile-stats {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 10px;
          margin-top: 18px;
        }

        .stat-item {
          text-align: center;
          padding: 16px 10px;
        }

        .stat-value {
          display: block;
          font-size: 22px;
          font-weight: 700;
          color: var(--accent-sage);
          font-family: var(--font-display);
        }

        .stat-label {
          font-size: 11px;
          color: var(--text-secondary);
          margin-top: 2px;
        }

        /* Menu */
        .profile-menu {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 22px;
        }

        .profile-menu-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px;
          cursor: pointer;
        }

        .menu-icon {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .menu-info {
          flex: 1;
        }

        .menu-info h4 {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 1px;
        }

        .menu-info p {
          font-size: 12px;
          color: var(--text-secondary);
        }

        /* Toggle */
        .toggle-switch {
          position: relative;
          width: 44px;
          height: 24px;
          cursor: pointer;
        }

        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .toggle-slider {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: var(--bg-secondary);
          border-radius: 24px;
          transition: all 0.3s ease;
        }

        .toggle-slider::before {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: white;
          top: 2px;
          left: 2px;
          transition: all 0.3s ease;
          box-shadow: 0 1px 4px rgba(0,0,0,0.1);
        }

        .toggle-switch input:checked + .toggle-slider {
          background: var(--accent-sage);
        }

        .toggle-switch input:checked + .toggle-slider::before {
          transform: translateX(20px);
        }

        /* Footer */
        .profile-footer {
          display: flex;
          gap: 12px;
          margin-top: 28px;
          padding-bottom: 20px;
        }

        .profile-footer .btn-secondary {
          flex: 1;
        }
      `}</style>
    </div>
  );
}
