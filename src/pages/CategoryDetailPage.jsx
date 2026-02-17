import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Play, Star, Clock, Users } from 'lucide-react';

const categoryData = {
  fitness: {
    name: 'Fitness',
    emoji: '💪',
    tagline: 'Train with top fitness creators',
    gradient: 'linear-gradient(135deg, #A8C4A5 0%, #8BA888 100%)',
    instructors: [
      { id: 1, name: 'Ankit Verma', specialty: 'HIIT & Strength', rating: 4.9, avatar: '💪', nextLive: 'Today, 6:00 PM' },
      { id: 2, name: 'Neha Gupta', specialty: 'Yoga & Pilates', rating: 4.8, avatar: '🧘‍♀️', nextLive: 'Tomorrow, 7:00 AM' },
    ],
    upcomingSessions: [
      { id: 1, title: 'HIIT Burn Challenge', time: 'Today, 6:00 PM', free: true, viewers: 0 },
      { id: 2, title: 'Full Body Strength', time: 'Wed, 7:00 AM', free: false, viewers: 0 },
      { id: 3, title: 'Morning Yoga Flow', time: 'Thu, 6:00 AM', free: true, viewers: 0 },
    ],
  },
  music: {
    name: 'Music',
    emoji: '🎵',
    tagline: 'Learn instruments, production & voice',
    gradient: 'linear-gradient(135deg, #9B8EC4 0%, #7B6FA4 100%)',
    instructors: [
      { id: 1, name: 'Rohan Mehta', specialty: 'Guitar & Songwriting', rating: 4.9, avatar: '🎸', nextLive: 'Today, 8:00 PM' },
      { id: 2, name: 'Priya Sen', specialty: 'Vocals & Classical', rating: 4.8, avatar: '🎤', nextLive: 'Fri, 7:00 PM' },
    ],
    upcomingSessions: [
      { id: 1, title: 'Guitar for Beginners', time: 'Today, 8:00 PM', free: true, viewers: 0 },
      { id: 2, title: 'Music Production 101', time: 'Fri, 6:00 PM', free: false, viewers: 0 },
      { id: 3, title: 'Vocal Warm-ups', time: 'Sat, 10:00 AM', free: true, viewers: 0 },
    ],
  },
  cooking: {
    name: 'Cooking',
    emoji: '🍳',
    tagline: 'Cook with chefs from around the world',
    gradient: 'linear-gradient(135deg, #D9A87C 0%, #C68B59 100%)',
    instructors: [
      { id: 1, name: 'Chef Ananya', specialty: 'Healthy & Quick', rating: 4.9, avatar: '🍳', nextLive: 'Tomorrow, 12:00 PM' },
      { id: 2, name: 'Chef Ravi', specialty: 'Indian Cuisine', rating: 4.7, avatar: '🍛', nextLive: 'Sat, 5:00 PM' },
    ],
    upcomingSessions: [
      { id: 1, title: '5-Min Healthy Meals', time: 'Tomorrow, 12:00 PM', free: true, viewers: 0 },
      { id: 2, title: 'Baking Basics', time: 'Sat, 3:00 PM', free: false, viewers: 0 },
      { id: 3, title: 'Indian Street Food', time: 'Sun, 4:00 PM', free: true, viewers: 0 },
    ],
  },
  art: {
    name: 'Art & Design',
    emoji: '🎨',
    tagline: 'Express yourself through art & design',
    gradient: 'linear-gradient(135deg, #C4857A 0%, #B06B5E 100%)',
    instructors: [
      { id: 1, name: 'Sanya Kapoor', specialty: 'Illustration & Sketching', rating: 4.8, avatar: '✏️', nextLive: 'Wed, 4:00 PM' },
      { id: 2, name: 'Aman Singh', specialty: 'UI/UX Design', rating: 4.9, avatar: '📱', nextLive: 'Thu, 6:00 PM' },
    ],
    upcomingSessions: [
      { id: 1, title: 'Sketch Basics', time: 'Wed, 4:00 PM', free: true, viewers: 0 },
      { id: 2, title: 'Figma Masterclass', time: 'Thu, 6:00 PM', free: false, viewers: 0 },
      { id: 3, title: 'Watercolor Painting', time: 'Sat, 11:00 AM', free: true, viewers: 0 },
    ],
  },
  business: {
    name: 'Business',
    emoji: '📈',
    tagline: 'Grow your career & side hustle',
    gradient: 'linear-gradient(135deg, #6B8FAD 0%, #537A96 100%)',
    instructors: [
      { id: 1, name: 'Vikram Shah', specialty: 'Marketing & Growth', rating: 4.9, avatar: '📣', nextLive: 'Today, 7:00 PM' },
      { id: 2, name: 'Pooja Nair', specialty: 'Freelancing & Finance', rating: 4.7, avatar: '💼', nextLive: 'Fri, 8:00 PM' },
    ],
    upcomingSessions: [
      { id: 1, title: 'Social Media Marketing', time: 'Today, 7:00 PM', free: true, viewers: 0 },
      { id: 2, title: 'Start Freelancing', time: 'Fri, 8:00 PM', free: false, viewers: 0 },
      { id: 3, title: 'Personal Finance 101', time: 'Sun, 6:00 PM', free: true, viewers: 0 },
    ],
  },
  wellness: {
    name: 'Wellness',
    emoji: '🧘',
    tagline: 'Mind, body & soul practices',
    gradient: 'linear-gradient(135deg, #BCA9D4 0%, #A08CC0 100%)',
    instructors: [
      { id: 1, name: 'Kavya Nair', specialty: 'Meditation & Breathwork', rating: 4.9, avatar: '🧘‍♀️', nextLive: 'Tomorrow, 7:00 AM' },
      { id: 2, name: 'Dr. Arjun', specialty: 'Mindfulness Coach', rating: 4.8, avatar: '🌿', nextLive: 'Wed, 8:00 PM' },
    ],
    upcomingSessions: [
      { id: 1, title: 'Morning Meditation', time: 'Tomorrow, 7:00 AM', free: true, viewers: 0 },
      { id: 2, title: 'Breathwork Essentials', time: 'Wed, 8:00 PM', free: false, viewers: 0 },
      { id: 3, title: 'Stress Relief Session', time: 'Fri, 9:00 PM', free: true, viewers: 0 },
    ],
  },
};

export default function CategoryDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const category = categoryData[id] || categoryData.fitness;

  return (
    <div className="page category-page">
      {/* Hero */}
      <div className="category-hero" style={{ background: category.gradient }}>
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={24} color="white" />
        </button>
        <div className="hero-content">
          <span className="hero-emoji">{category.emoji}</span>
          <h1>{category.name}</h1>
          <p>{category.tagline}</p>
        </div>
      </div>

      <div className="page-content" style={{ marginTop: -20, position: 'relative', zIndex: 1 }}>
        {/* Intro Video */}
        <div className="intro-video glass-card" onClick={() => navigate('/video-player')}>
          <div className="video-play-overlay">
            <Play size={28} fill="white" color="white" />
          </div>
          <p className="video-label">Watch Intro</p>
        </div>

        {/* Instructors */}
        <section className="home-section">
          <div className="section-header">
            <h2>Top Creators</h2>
          </div>
          {category.instructors.map((inst) => (
            <div key={inst.id} className="instructor-detail-card glass-card">
              <div className="inst-avatar">{inst.avatar}</div>
              <div className="inst-info">
                <h3>{inst.name}</h3>
                <p className="inst-specialty">{inst.specialty}</p>
                <div className="inst-meta">
                  <span><Star size={12} fill="#D4A853" color="#D4A853" /> {inst.rating}</span>
                  <span><Clock size={12} /> {inst.nextLive}</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Upcoming Sessions */}
        <section className="home-section">
          <div className="section-header">
            <h2>Upcoming Sessions</h2>
          </div>
          {category.upcomingSessions.map((s) => (
            <div key={s.id} className="upcoming-card glass-card" onClick={() => navigate('/schedule')}>
              <div className="upcoming-info">
                <h4>{s.title}</h4>
                <p><Clock size={12} /> {s.time}</p>
              </div>
              <span className={`badge ${s.free ? 'badge-free' : 'badge-paid'}`}>
                {s.free ? 'FREE' : '$5'}
              </span>
            </div>
          ))}
        </section>
      </div>

      <style>{`
        .category-hero {
          padding: 60px 20px 50px;
          position: relative;
          padding-top: calc(var(--safe-area-top) + 60px);
        }

        .back-btn {
          position: absolute;
          top: calc(var(--safe-area-top) + 16px);
          left: 16px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(0,0,0,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-content {
          text-align: center;
          color: white;
        }

        .hero-emoji {
          font-size: 48px;
          display: block;
          margin-bottom: 12px;
        }

        .hero-content h1 {
          font-size: 28px;
          font-family: var(--font-display);
          margin-bottom: 6px;
          color: white;
        }

        .hero-content p {
          font-size: 14px;
          opacity: 0.85;
        }

        .intro-video {
          height: 120px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          background: linear-gradient(135deg, rgba(139,168,136,0.05), rgba(198,139,89,0.03)) !important;
        }

        .video-play-overlay {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--accent-sage);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(139,168,136,0.3);
        }

        .video-label {
          font-size: 13px;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .instructor-detail-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px;
          margin-bottom: 10px;
          cursor: pointer;
        }

        .inst-avatar {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          flex-shrink: 0;
        }

        .inst-info h3 {
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 2px;
        }

        .inst-specialty {
          font-size: 12px;
          color: var(--text-secondary);
          margin-bottom: 6px;
        }

        .inst-meta {
          display: flex;
          gap: 12px;
          font-size: 12px;
          color: var(--text-tertiary);
        }

        .inst-meta span {
          display: flex;
          align-items: center;
          gap: 3px;
        }

        .upcoming-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px;
          margin-bottom: 10px;
          cursor: pointer;
        }

        .upcoming-info h4 {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .upcoming-info p {
          font-size: 12px;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 4px;
        }
      `}</style>
    </div>
  );
}
