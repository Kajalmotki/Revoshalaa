import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Video } from 'lucide-react';

export default function RoleSelectPage() {
  const navigate = useNavigate();

  return (
    <div className="page role-page">
      <div className="role-content">
        <div className="role-logo animate-fade-in-up">
          <svg viewBox="0 0 80 80" width="70" height="70" fill="none">
            <path d="M40 8C40 8 25 25 25 40C25 55 40 65 40 65C40 65 55 55 55 40C55 25 40 8 40 8Z" fill="white" stroke="#8BA888" strokeWidth="1.5" />
            <path d="M40 15C40 15 18 30 15 45C12 60 40 70 40 70C40 70 68 60 65 45C62 30 40 15 40 15Z" fill="white" stroke="#8BA888" strokeWidth="1" />
            <path d="M40 20C40 20 30 35 30 45C30 55 40 60 40 60C40 60 50 55 50 45C50 35 40 20 40 20Z" fill="rgba(139,168,136,0.4)" stroke="#8BA888" strokeWidth="1" />
            <circle cx="40" cy="42" r="4" fill="#8BA888" />
          </svg>
        </div>
        <h1 className="role-title animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Revoshalaa</h1>
        <p className="role-subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Your Creator Store</p>

        <h2 className="role-question animate-fade-in-up" style={{ animationDelay: '0.3s' }}>How would you like to join?</h2>

        <div className="role-cards animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="role-card member-card" onClick={() => navigate('/login/customer')}>
            <div className="role-card-icon">
              <Users size={28} color="var(--accent-sage)" />
            </div>
            <h3>I'm a Member</h3>
            <p>Join live sessions, courses & communities from top creators</p>
          </div>

          <div className="role-card tutor-card" onClick={() => navigate('/login/tutor')}>
            <div className="role-card-icon tutor-icon-bg">
              <Video size={28} color="#D4A853" />
            </div>
            <h3>I'm a Tutor</h3>
            <p>Go live, teach your class, and grow your community</p>
          </div>
        </div>
      </div>

      <style>{`
        .role-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(165deg, #FAF7F2 0%, #F0EBE0 30%, #E8E2D5 100%);
          position: relative;
          overflow: hidden;
        }

        .role-page::before {
          content: '';
          position: absolute;
          width: 350px;
          height: 350px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(139,168,136,0.1) 0%, transparent 70%);
          top: 20%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: breathe 5s ease-in-out infinite;
        }

        .role-content {
          text-align: center;
          padding: 24px 20px;
          z-index: 1;
          width: 100%;
          max-width: 400px;
        }

        .role-logo {
          margin-bottom: 16px;
        }

        .role-title {
          font-family: var(--font-display);
          font-size: 32px;
          color: var(--text-primary);
          letter-spacing: 1.5px;
          margin-bottom: 6px;
        }

        .role-subtitle {
          color: var(--text-secondary);
          font-size: 14px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 300;
        }

        .role-question {
          font-family: var(--font-display);
          font-size: 20px;
          color: var(--text-primary);
          margin: 40px 0 24px;
          font-weight: 500;
        }

        .role-cards {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .role-card {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.8);
          border-radius: 20px;
          padding: 24px 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
        }

        .role-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        }

        .role-card:active {
          transform: scale(0.98);
        }

        .role-card-icon {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: rgba(139,168,136,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .tutor-icon-bg {
          background: rgba(212,168,83,0.1) !important;
        }

        .role-card h3 {
          font-size: 17px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .role-card p {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .member-card {
          border-left: 3px solid var(--accent-sage);
        }

        .tutor-card {
          border-left: 3px solid #D4A853;
        }
      `}</style>
    </div>
  );
}
