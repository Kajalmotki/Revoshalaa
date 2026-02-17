import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Compass, Radio, CreditCard, User } from 'lucide-react';

const tabs = [
    { path: '/home', label: 'Home', icon: Home },
    { path: '/explore', label: 'Explore', icon: Compass },
    { path: '/schedule', label: 'Live', icon: Radio },
    { path: '/pricing', label: 'Pricing', icon: CreditCard },
    { path: '/profile', label: 'Profile', icon: User },
];

export default function BottomNav() {
    const location = useLocation();

    return (
        <nav className="bottom-nav">
            {tabs.map((tab) => {
                const isActive = location.pathname === tab.path ||
                    (tab.path === '/explore' && location.pathname.startsWith('/category'));
                const Icon = tab.icon;

                return (
                    <NavLink
                        key={tab.path}
                        to={tab.path}
                        className={`bottom-nav-item ${isActive ? 'active' : ''}`}
                    >
                        <div className="nav-icon-wrap">
                            {tab.path === '/schedule' && (
                                <span className="live-dot" />
                            )}
                            <Icon size={22} strokeWidth={isActive ? 2.2 : 1.8} />
                        </div>
                        <span className="nav-label">{tab.label}</span>
                    </NavLink>
                );
            })}

            <style>{`
        .bottom-nav {
          position: fixed;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 430px;
          height: var(--bottom-nav-height);
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-top: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding-bottom: var(--safe-area-bottom);
          z-index: 100;
          box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.03);
        }

        .bottom-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
          padding: 8px 0;
          color: var(--text-tertiary);
          transition: all 0.3s ease;
          position: relative;
          min-width: 56px;
        }

        .bottom-nav-item.active {
          color: var(--accent-sage);
        }

        .bottom-nav-item.active .nav-icon-wrap {
          transform: translateY(-2px);
        }

        .nav-icon-wrap {
          position: relative;
          transition: transform 0.3s ease;
        }

        .nav-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.3px;
        }

        .bottom-nav-item.active .nav-label {
          font-weight: 600;
        }

        .live-dot {
          position: absolute;
          top: -2px;
          right: -4px;
          width: 7px;
          height: 7px;
          background: #e74c3c;
          border-radius: 50%;
          animation: livePulse 2s infinite;
        }
      `}</style>
        </nav>
    );
}
