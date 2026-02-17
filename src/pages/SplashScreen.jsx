import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SplashScreen() {
  const navigate = useNavigate();
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 300);
    const t2 = setTimeout(() => setPhase(2), 1200);
    const t3 = setTimeout(() => navigate('/login'), 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [navigate]);

  return (
    <div className="splash">
      <div className={`splash-content ${phase >= 1 ? 'visible' : ''}`}>
        <div className="splash-logo">
          <div className="lotus-icon">
            <svg viewBox="0 0 80 80" fill="none">
              <path d="M40 8C40 8 25 25 25 40C25 55 40 65 40 65C40 65 55 55 55 40C55 25 40 8 40 8Z" fill="rgba(139,168,136,0.3)" stroke="#8BA888" strokeWidth="1.5" />
              <path d="M40 15C40 15 18 30 15 45C12 60 40 70 40 70C40 70 68 60 65 45C62 30 40 15 40 15Z" fill="rgba(139,168,136,0.15)" stroke="#8BA888" strokeWidth="1" />
              <path d="M40 20C40 20 30 35 30 45C30 55 40 60 40 60C40 60 50 55 50 45C50 35 40 20 40 20Z" fill="rgba(139,168,136,0.4)" stroke="#8BA888" strokeWidth="1.5" />
              <circle cx="40" cy="42" r="4" fill="#8BA888" />
            </svg>
          </div>
          <h1 className="splash-title">Revoshalaa</h1>
        </div>
        <p className={`splash-tagline ${phase >= 2 ? 'visible' : ''}`}>
          Learn. Move. Transform.
        </p>
      </div>

      <div className={`splash-footer ${phase >= 2 ? 'visible' : ''}`}>
        <p>Your Creator Store</p>
      </div>

      <style>{`
        .splash {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(165deg, #FAF7F2 0%, #F0EBE0 30%, #E8E2D5 100%);
          position: relative;
          overflow: hidden;
        }

        .splash::before {
          content: '';
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(139,168,136,0.12) 0%, transparent 70%);
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: breathe 4s ease-in-out infinite;
        }

        .splash-content {
          text-align: center;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1;
        }

        .splash-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .splash-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .lotus-icon {
          width: 80px;
          height: 80px;
          animation: breathe 3s ease-in-out infinite;
        }

        .splash-title {
          font-family: var(--font-display);
          font-size: 36px;
          font-weight: 600;
          color: var(--text-primary);
          letter-spacing: 2px;
        }

        .splash-tagline {
          margin-top: 12px;
          font-size: 15px;
          color: var(--text-secondary);
          font-weight: 300;
          letter-spacing: 3px;
          text-transform: uppercase;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.6s ease 0.2s;
        }

        .splash-tagline.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .splash-footer {
          position: absolute;
          bottom: 50px;
          font-size: 12px;
          color: var(--text-tertiary);
          letter-spacing: 1px;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .splash-footer.visible {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
