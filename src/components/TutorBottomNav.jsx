import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, Video, User } from 'lucide-react';

const tutorTabs = [
    { path: '/tutor/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/tutor-broadcast', label: 'Go Live', icon: Video },
    { path: '/tutor/profile', label: 'Profile', icon: User },
];

export default function TutorBottomNav() {
    const location = useLocation();

    return (
        <nav className="tutor-bottom-nav">
            {tutorTabs.map((tab) => {
                const isActive = location.pathname === tab.path;
                const Icon = tab.icon;

                return (
                    <NavLink
                        key={tab.path}
                        to={tab.path}
                        className={`tutor-nav-item ${isActive ? 'active' : ''}`}
                    >
                        <div className="tutor-nav-icon-wrap">
                            {tab.path === '/tutor-broadcast' && (
                                <span className="go-live-ring" />
                            )}
                            <Icon size={22} strokeWidth={isActive ? 2.2 : 1.8} />
                        </div>
                        <span className="tutor-nav-label">{tab.label}</span>
                    </NavLink>
                );
            })}

            <style>{`
                .tutor-bottom-nav {
                    position: fixed;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 100%;
                    max-width: 430px;
                    height: var(--bottom-nav-height);
                    background: rgba(26, 32, 26, 0.95);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border-top: 1px solid rgba(139, 168, 136, 0.15);
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    padding-bottom: var(--safe-area-bottom);
                    z-index: 100;
                    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.2);
                }

                .tutor-nav-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 3px;
                    padding: 8px 0;
                    color: rgba(255, 255, 255, 0.4);
                    transition: all 0.3s ease;
                    position: relative;
                    min-width: 72px;
                    text-decoration: none;
                }

                .tutor-nav-item.active {
                    color: #8BA888;
                }

                .tutor-nav-item.active .tutor-nav-icon-wrap {
                    transform: translateY(-2px);
                }

                .tutor-nav-icon-wrap {
                    position: relative;
                    transition: transform 0.3s ease;
                }

                .tutor-nav-label {
                    font-size: 10px;
                    font-weight: 500;
                    letter-spacing: 0.3px;
                }

                .tutor-nav-item.active .tutor-nav-label {
                    font-weight: 600;
                }

                .go-live-ring {
                    position: absolute;
                    top: -3px;
                    right: -5px;
                    width: 8px;
                    height: 8px;
                    background: #e74c3c;
                    border-radius: 50%;
                    animation: livePulse 2s infinite;
                }

                @keyframes livePulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.4; }
                }
            `}</style>
        </nav>
    );
}
