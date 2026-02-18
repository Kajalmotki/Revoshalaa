import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, Lock, Key, User, Video, MessageCircle, Plus, ChevronRight, Check, ArrowLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function TutorLoginPage() {
  const navigate = useNavigate();
  const { login, categories, addCategory } = useAuth();

  // Multi-step: 'credentials' -> 'otp' -> 'profile' -> 'category' -> 'specialty'
  const [phase, setPhase] = useState('credentials');
  const [loginMethod, setLoginMethod] = useState('email');
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    identifier: '',
    password: '',
    otp: '',
  });

  const [selectedCategory, setSelectedCategory] = useState('');
  const [newCategoryName, setNewCategoryName] = useState('');
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [specialty, setSpecialty] = useState('');

  // Step 1: Submit credentials
  const handleCredentialsSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName.trim()) return;

    if (loginMethod === 'mobile') {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setPhase('otp');
        alert(`OTP sent to ${formData.identifier}: 5678`);
      }, 1200);
    } else {
      // Email: go to profile step directly
      setPhase('category');
    }
  };

  // Step 2: Verify OTP
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    setPhase('category');
  };

  // Step 3: Add custom category
  const handleAddCategory = () => {
    if (!newCategoryName.trim()) return;
    const newCat = addCategory(newCategoryName.trim());
    setSelectedCategory(newCat.id);
    setNewCategoryName('');
    setShowAddCategory(false);
  };

  // Step 4: Final submit with specialty
  const handleFinalSubmit = () => {
    if (!selectedCategory) return;
    setIsLoading(true);

    setTimeout(() => {
      login('tutor', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        identifier: formData.identifier,
        category: selectedCategory,
        specialty: specialty,
      });
      setIsLoading(false);
      navigate('/tutor/dashboard');
    }, 1000);
  };

  const selectedCatName = categories.find(c => c.id === selectedCategory)?.name || '';

  return (
    <div className="page tutor-login-page">
      <div className="page-content">

        {/* Header */}
        <div className="tutor-header">
          <div className="tutor-icon animate-scale-in">
            <Video size={32} color="white" />
          </div>
          <h1 className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {phase === 'credentials' || phase === 'otp' ? 'Tutor Access' : phase === 'category' ? 'Choose Your Category' : 'Your Specialty'}
          </h1>
          <p className="subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {phase === 'credentials' || phase === 'otp'
              ? 'Create your profile & start teaching'
              : phase === 'category'
                ? 'What will you teach on Revoshalaa?'
                : `Tell us more about your ${selectedCatName} expertise`}
          </p>

          {/* Progress dots */}
          <div className="progress-dots">
            <span className={`dot ${['credentials', 'otp', 'category', 'specialty'].includes(phase) ? 'active' : ''}`} />
            <span className={`dot ${['category', 'specialty'].includes(phase) ? 'active' : ''}`} />
            <span className={`dot ${phase === 'specialty' ? 'active' : ''}`} />
          </div>
        </div>

        {/* ===== CREDENTIALS PHASE ===== */}
        {phase === 'credentials' && (
          <div className="login-form-container glass-card animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="login-method-toggle">
              <button className={loginMethod === 'email' ? 'active' : ''} onClick={() => setLoginMethod('email')}>Email</button>
              <button className={loginMethod === 'mobile' ? 'active' : ''} onClick={() => setLoginMethod('mobile')}>Mobile</button>
            </div>

            <form onSubmit={handleCredentialsSubmit}>
              {/* Name fields */}
              <div className="name-row">
                <div className="input-group">
                  <User size={18} className="input-icon" />
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                  />
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    style={{ paddingLeft: 16 }}
                  />
                </div>
              </div>

              {/* Email or Mobile */}
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

              <button type="submit" className="btn-gold w-full" disabled={isLoading}>
                {isLoading ? 'Sending OTP...' : <>Continue <ChevronRight size={18} /></>}
              </button>
            </form>
          </div>
        )}

        {/* ===== OTP PHASE ===== */}
        {phase === 'otp' && (
          <div className="login-form-container glass-card animate-fade-in">
            <form onSubmit={handleOtpSubmit}>
              <div className="input-group">
                <MessageCircle size={18} className="input-icon" />
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={formData.otp}
                  onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="btn-gold w-full">
                Verify <Check size={18} />
              </button>
            </form>

            <button className="back-step" onClick={() => setPhase('credentials')}>
              <ArrowLeft size={14} /> Back
            </button>
          </div>
        )}

        {/* ===== CATEGORY SELECTION PHASE ===== */}
        {phase === 'category' && (
          <div className="category-phase animate-fade-in">
            <div className="category-grid">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className={`cat-option ${selectedCategory === cat.id ? 'selected' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <span className="cat-emoji-big">{cat.emoji}</span>
                  <span className="cat-label">{cat.name}</span>
                  {selectedCategory === cat.id && <Check size={16} className="cat-check" />}
                </div>
              ))}

              {/* Add New Category Button */}
              {!showAddCategory ? (
                <div className="cat-option add-new" onClick={() => setShowAddCategory(true)}>
                  <Plus size={24} color="#8BA888" />
                  <span className="cat-label">Add New</span>
                </div>
              ) : (
                <div className="cat-option add-new-input">
                  <input
                    type="text"
                    placeholder="Category name"
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAddCategory()}
                    autoFocus
                  />
                  <button className="add-btn" onClick={handleAddCategory}>
                    <Check size={16} />
                  </button>
                </div>
              )}
            </div>

            {selectedCategory && (
              <button className="btn-gold w-full" style={{ marginTop: 20 }} onClick={() => setPhase('specialty')}>
                Continue <ChevronRight size={18} />
              </button>
            )}

            <button className="back-step" onClick={() => setPhase('credentials')}>
              <ArrowLeft size={14} /> Back to login
            </button>
          </div>
        )}

        {/* ===== SPECIALTY PHASE ===== */}
        {phase === 'specialty' && (
          <div className="specialty-phase animate-fade-in">
            <div className="login-form-container glass-card">
              <div className="selected-cat-badge">
                <span>{categories.find(c => c.id === selectedCategory)?.emoji}</span>
                <span>{selectedCatName}</span>
              </div>

              <p className="specialty-prompt">What's your specialty within {selectedCatName}?</p>
              <p className="specialty-hint">
                {selectedCategory === 'fitness' && 'e.g. HIIT, Yoga, Strength Training, Calisthenics...'}
                {selectedCategory === 'music' && 'e.g. Guitar, Piano, Vocals, Music Production...'}
                {selectedCategory === 'cooking' && 'e.g. Indian Cuisine, Baking, Healthy Meals...'}
                {selectedCategory === 'art' && 'e.g. Illustration, UI/UX, Watercolor, Digital Art...'}
                {selectedCategory === 'business' && 'e.g. Marketing, Freelancing, Finance, Startups...'}
                {selectedCategory === 'wellness' && 'e.g. Meditation, Breathwork, Mindfulness, Reiki...'}
                {!['fitness', 'music', 'cooking', 'art', 'business', 'wellness'].includes(selectedCategory) && 'Describe what you teach in detail'}
              </p>

              <div className="input-group">
                <input
                  type="text"
                  placeholder="Your specialty (e.g. Power Yoga & HIIT)"
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  style={{ paddingLeft: 16 }}
                />
              </div>

              <button className="btn-gold w-full" disabled={isLoading} onClick={handleFinalSubmit}>
                {isLoading ? 'Setting up...' : <>Start Teaching <Key size={18} /></>}
              </button>
            </div>

            <button className="back-step" onClick={() => setPhase('category')}>
              <ArrowLeft size={14} /> Change category
            </button>
          </div>
        )}

        {/* Footer */}
        {phase === 'credentials' && (
          <div className="tutor-footer animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="back-link" onClick={() => navigate('/login')}>
              Back to Role Selection
            </div>
          </div>
        )}

      </div>

      <style>{`
        .tutor-login-page {
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 100vh;
          background: linear-gradient(165deg, #F5F0EB 0%, #EDE7DF 40%, #E8E0D8 100%);
          color: var(--text-primary);
          padding-bottom: var(--safe-area-bottom);
        }

        .tutor-login-page .login-method-toggle {
          display: flex;
          background: rgba(139,168,136,0.08);
          padding: 4px;
          border-radius: var(--radius-full);
          margin-bottom: 20px;
        }

        .tutor-login-page .login-method-toggle button {
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

        .tutor-login-page .login-method-toggle button.active {
          background: white;
          color: #7A9B76;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          font-weight: 600;
        }

        .tutor-header {
          text-align: center;
          margin-bottom: 24px;
        }

        .tutor-icon {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #B8D4B4 0%, #A3C19E 100%);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          box-shadow: 0 8px 24px rgba(139,168,136,0.2);
        }

        .tutor-header h1 {
          font-size: 24px;
          color: #3D5A3A;
          margin-bottom: 6px;
          font-family: var(--font-display);
        }

        .tutor-login-page .subtitle {
          color: #8B9B87;
          font-size: 14px;
        }

        .progress-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 16px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(139,168,136,0.2);
          transition: all 0.3s ease;
        }

        .dot.active {
          background: #8BA888;
          width: 24px;
          border-radius: 4px;
        }

        .tutor-login-page .login-form-container {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          padding: 24px;
          margin-bottom: 16px;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.04);
        }

        .name-row {
          display: flex;
          gap: 10px;
        }

        .name-row .input-group {
          flex: 1;
        }

        .tutor-login-page .input-group {
          position: relative;
          margin-bottom: 14px;
        }

        .tutor-login-page .input-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #A3B8A0;
          z-index: 1;
        }

        .tutor-login-page .input-group input {
          width: 100%;
          padding: 14px 16px 14px 44px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid rgba(139,168,136,0.15);
          color: var(--text-primary);
          font-size: 15px;
          transition: all 0.3s ease;
          outline: none;
          box-sizing: border-box;
        }

        .tutor-login-page .input-group input::placeholder {
          color: #B0BBA0;
        }

        .tutor-login-page .input-group input:focus {
          background: white;
          border-color: #A3C19E;
          box-shadow: 0 0 0 3px rgba(139,168,136,0.1);
        }

        .w-full { width: 100%; }

        .btn-gold {
          background: linear-gradient(135deg, #A3C19E 0%, #8BA888 100%);
          color: white;
          font-weight: 600;
          font-size: 15px;
          padding: 14px 24px;
          border-radius: var(--radius-full);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(139,168,136,0.25);
        }

        .btn-gold:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(139,168,136,0.3);
        }

        .btn-gold:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Category Grid */
        .category-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .cat-option {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 18px 10px;
          border-radius: 16px;
          background: rgba(255,255,255,0.6);
          backdrop-filter: blur(8px);
          border: 2px solid rgba(255,255,255,0.8);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .cat-option:active { transform: scale(0.96); }

        .cat-option.selected {
          border-color: #8BA888;
          background: rgba(139,168,136,0.08);
          box-shadow: 0 4px 16px rgba(139,168,136,0.15);
        }

        .cat-check {
          position: absolute;
          top: 8px;
          right: 8px;
          color: #8BA888;
        }

        .cat-emoji-big { font-size: 28px; }
        .cat-label {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-primary);
          text-align: center;
        }

        .cat-option.add-new {
          border-style: dashed;
          border-color: rgba(139,168,136,0.3);
          background: transparent;
        }

        .cat-option.add-new-input {
          padding: 12px;
          grid-column: span 2;
          flex-direction: row;
          gap: 8px;
        }

        .add-new-input input {
          flex: 1;
          border: 1px solid rgba(139,168,136,0.2);
          border-radius: 12px;
          padding: 10px 14px;
          font-size: 14px;
          outline: none;
          background: rgba(255,255,255,0.5);
          color: var(--text-primary);
        }

        .add-new-input input:focus {
          border-color: #8BA888;
          background: white;
        }

        .add-btn {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: #8BA888;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          flex-shrink: 0;
        }

        /* Specialty */
        .selected-cat-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: var(--radius-full);
          background: rgba(139,168,136,0.08);
          font-size: 14px;
          font-weight: 600;
          color: #5A7A56;
          margin-bottom: 16px;
        }

        .specialty-prompt {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 6px;
        }

        .specialty-hint {
          font-size: 13px;
          color: #8B9B87;
          margin-bottom: 16px;
          line-height: 1.5;
        }

        .specialty-phase .input-group input {
          padding-left: 16px !important;
        }

        /* Back step */
        .back-step {
          display: flex;
          align-items: center;
          gap: 4px;
          color: #B0BBA0;
          font-size: 13px;
          margin-top: 20px;
          cursor: pointer;
          border: none;
          background: none;
          margin-left: auto;
          margin-right: auto;
          transition: color 0.3s;
        }

        .back-step:hover { color: #7A9B76; }

        /* Footer */
        .tutor-footer {
          text-align: center;
          font-size: 14px;
          color: #8B9B87;
        }

        .back-link {
          margin-top: 24px;
          font-size: 13px;
          color: #B0BBA0;
          cursor: pointer;
          transition: color 0.3s;
        }

        .back-link:hover { color: #7A9B76; }

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
