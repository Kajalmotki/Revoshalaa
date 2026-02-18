import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, Lock, LogIn, ArrowRight, MessageCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function CustomerLoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({ identifier: '', password: '', otp: '' });
  const [loginMethod, setLoginMethod] = useState('email'); // 'email' or 'mobile'
  const [step, setStep] = useState(1); // 1: Input, 2: OTP/Password
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Simulated OTP handling
  const sendOTP = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
      alert(`OTP sent to ${formData.identifier}: 1234`); // Demo purposes
    }, 1500);
  };

  const verifyAndLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      login('customer', { identifier: formData.identifier || 'guest' });
      setIsLoading(false);
      navigate('/home');
    }, 1500);
  };

  return (
    <div className="page login-page">
      <div className="page-content">
        <div className="login-header">
          {/* Logo SVG */}
          <div className="login-logo animate-fade-in-up">
            <svg viewBox="0 0 80 80" width="60" height="60" fill="none">
              {/* Central Bud */}
              <path d="M40 10C40 10 30 30 30 45C30 55 40 65 40 65C40 65 50 55 50 45C50 30 40 10 40 10Z" fill="white" stroke="#8BA888" strokeWidth="1.5" />
              {/* Left Petal */}
              <path d="M30 45C22 40 10 32 10 32C10 32 12 55 32 62" fill="white" stroke="#8BA888" strokeWidth="1.5" />
              {/* Right Petal */}
              <path d="M50 45C58 40 70 32 70 32C70 32 68 55 48 62" fill="white" stroke="#8BA888" strokeWidth="1.5" />
              {/* Base Leaves */}
              <path d="M32 62C20 62 10 58 10 58C10 58 20 72 40 72" fill="white" stroke="#8BA888" strokeWidth="1.5" />
              <path d="M48 62C60 62 70 58 70 58C70 58 60 72 40 72" fill="white" stroke="#8BA888" strokeWidth="1.5" />
            </svg>
          </div>
          <h1 className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {isLogin ? 'Welcome Back' : 'Join Revoshalaa'}
          </h1>
          <p className="subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Your Creator Store
          </p>
        </div>

        <div className="login-form-container glass-card animate-fade-in-up" style={{ animationDelay: '0.3s' }}>

          {/* Method Toggle */}
          <div className="login-method-toggle">
            <button
              className={loginMethod === 'email' ? 'active' : ''}
              onClick={() => { setLoginMethod('email'); setStep(1); }}
            >
              Email
            </button>
            <button
              className={loginMethod === 'mobile' ? 'active' : ''}
              onClick={() => { setLoginMethod('mobile'); setStep(1); }}
            >
              Mobile
            </button>
          </div>

          <form onSubmit={step === 1 && loginMethod === 'mobile' ? (e) => { e.preventDefault(); sendOTP(); } : verifyAndLogin}>

            {/* Step 1: Input */}
            {step === 1 && (
              <div className="input-group">
                {loginMethod === 'email' ? <Mail size={18} className="input-icon" /> : <Phone size={18} className="input-icon" />}
                <input
                  type={loginMethod === 'email' ? 'email' : 'tel'}
                  placeholder={loginMethod === 'email' ? 'Email Address' : 'Mobile Number'}
                  value={formData.identifier}
                  onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
                  required
                />
              </div>
            )}

            {/* Step 2: Password or OTP */}
            {step === 2 && (
              <div className="input-group animate-fade-in">
                {loginMethod === 'email' ? <Lock size={18} className="input-icon" /> : <MessageCircle size={18} className="input-icon" />}
                <input
                  type={loginMethod === 'email' ? 'password' : 'text'}
                  placeholder={loginMethod === 'email' ? 'Password' : 'Enter OTP'}
                  value={loginMethod === 'email' ? formData.password : formData.otp}
                  onChange={(e) => setFormData({ ...formData, [loginMethod === 'email' ? 'password' : 'otp']: e.target.value })}
                  required
                />
              </div>
            )}

            {/* Action Button */}
            <button type="submit" className="btn-primary w-full" disabled={isLoading}>
              {isLoading ? 'Processing...' : (
                <>
                  {step === 1 && loginMethod === 'mobile' ? 'Send OTP' : (isLogin ? 'Login' : 'Create Account')}
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          {/* Social Login (Only for Email) */}
          {loginMethod === 'email' && (
            <>
              <div className="divider"><span>or continue with</span></div>
              <div className="social-buttons">
                <button className="social-btn" onClick={() => {
                  const email = prompt('Enter your Google email:');
                  if (email) {
                    login('customer', { identifier: email });
                    navigate('/home');
                  }
                }}>Google</button>
                <button className="social-btn" onClick={() => {
                  const email = prompt('Enter your Apple ID email:');
                  if (email) {
                    login('customer', { identifier: email });
                    navigate('/home');
                  }
                }}>Apple</button>
              </div>
            </>
          )}
        </div>

        <div className="login-footer animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "New here? " : "Already a member? "}
            <span className="link-text">{isLogin ? "Create Account" : "Login"}</span>
          </p>

          <div className="tutor-link" onClick={() => navigate('/login/tutor')}>
            Are you a tutor? <span className="link-text">Login here</span>
          </div>
        </div>
      </div>

      <style>{`
        .login-page {
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 100vh;
          background: linear-gradient(135deg, #FAF7F2 0%, #F0EBE0 100%);
          padding-bottom: var(--safe-area-bottom);
        }

        .login-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .login-logo {
          display: flex;
          justify-content: center;
          margin-bottom: 16px;
        }

        .login-header h1 {
          font-size: 28px;
          color: var(--text-primary);
          margin-bottom: 8px;
          font-family: var(--font-display);
        }

        .subtitle {
          color: var(--text-secondary);
          font-size: 15px;
        }

        .login-form-container {
          padding: 24px;
          margin-bottom: 24px;
        }

        .login-method-toggle {
          display: flex;
          background: rgba(0,0,0,0.05);
          padding: 4px;
          border-radius: var(--radius-full);
          margin-bottom: 20px;
        }

        .login-method-toggle button {
          flex: 1;
          padding: 10px;
          font-size: 13px;
          font-weight: 500;
          color: var(--text-secondary);
          border-radius: var(--radius-full);
          transition: all 0.3s ease;
          border: none;
          background: transparent;
          cursor: pointer;
        }

        .login-method-toggle button.active {
          background: white;
          color: var(--accent-sage);
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          font-weight: 600;
        }

        .input-group {
          position: relative;
          margin-bottom: 16px;
        }

        .input-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-tertiary);
        }

        .input-group input {
          width: 100%;
          padding: 14px 16px 14px 44px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid var(--border-light);
          font-size: 15px;
          color: var(--text-primary);
          transition: all 0.3s ease;
          outline: none;
          box-sizing: border-box;
        }

        .input-group input:focus {
          background: white;
          border-color: var(--accent-sage);
          box-shadow: 0 0 0 3px rgba(139, 168, 136, 0.1);
        }

        .input-group input::placeholder {
          color: var(--text-tertiary);
        }

        .w-full {
          width: 100%;
        }

        .divider {
          display: flex;
          align-items: center;
          color: var(--text-tertiary);
          font-size: 12px;
          margin: 24px 0;
        }

        .divider::before, .divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: var(--border-medium);
        }

        .divider span {
          padding: 0 12px;
        }

        .social-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .social-btn {
          padding: 12px;
          border-radius: var(--radius-full);
          background: white;
          border: 1px solid var(--border-light);
          font-size: 14px;
          font-weight: 500;
          color: var(--text-secondary);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .social-btn:hover {
          background: var(--bg-secondary);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
        }

        .login-footer {
          text-align: center;
          font-size: 14px;
          color: var(--text-secondary);
        }

        .login-footer p {
          cursor: pointer;
        }

        .link-text {
          color: var(--accent-sage);
          font-weight: 600;
          cursor: pointer;
        }

        .tutor-link {
          margin-top: 24px;
          font-size: 13px;
          padding-top: 16px;
          border-top: 1px solid var(--border-light);
          cursor: pointer;
        }

        .animate-fade-in {
          animation: fadeIn 0.4s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
