import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const defaultSubCategories = [
  // Fitness
  { id: 'hiit', name: 'HIIT Training', type: 'Fitness', emoji: '🔥', sessions: 8, color: '#A8C4A5' },
  { id: 'strength', name: 'Strength', type: 'Fitness', emoji: '💪', sessions: 6, color: '#8BA888' },
  { id: 'yoga', name: 'Yoga', type: 'Fitness', emoji: '🧘', sessions: 7, color: '#6D8A6A' },
  { id: 'crossfit', name: 'CrossFit', type: 'Fitness', emoji: '🏋️', sessions: 5, color: '#7AA27E' },
  // Music
  { id: 'guitar', name: 'Guitar', type: 'Music', emoji: '🎸', sessions: 8, color: '#9B8EC4' },
  { id: 'piano', name: 'Piano', type: 'Music', emoji: '🎹', sessions: 6, color: '#7B6FA4' },
  { id: 'vocals', name: 'Vocals', type: 'Music', emoji: '🎤', sessions: 5, color: '#A99BD4' },
  { id: 'production', name: 'Music Production', type: 'Music', emoji: '🎧', sessions: 4, color: '#8676B4' },
  // Cooking
  { id: 'healthy', name: 'Healthy Meals', type: 'Cooking', emoji: '🥗', sessions: 6, color: '#D9A87C' },
  { id: 'baking', name: 'Baking', type: 'Cooking', emoji: '🧁', sessions: 5, color: '#C68B59' },
  { id: 'indian', name: 'Indian Cuisine', type: 'Cooking', emoji: '🍛', sessions: 4, color: '#B87A4A' },
  // Art
  { id: 'illustration', name: 'Illustration', type: 'Art & Design', emoji: '✏️', sessions: 6, color: '#C4857A' },
  { id: 'uidesign', name: 'UI/UX Design', type: 'Art & Design', emoji: '📱', sessions: 5, color: '#B06B5E' },
  { id: 'painting', name: 'Painting', type: 'Art & Design', emoji: '🖌️', sessions: 4, color: '#D9927A' },
  // Business
  { id: 'marketing', name: 'Marketing', type: 'Business', emoji: '📣', sessions: 5, color: '#6B8FAD' },
  { id: 'freelance', name: 'Freelancing', type: 'Business', emoji: '💼', sessions: 4, color: '#537A96' },
  { id: 'finance', name: 'Finance', type: 'Business', emoji: '💰', sessions: 3, color: '#4A6A80' },
  // Wellness
  { id: 'meditation', name: 'Meditation', type: 'Wellness', emoji: '🧘‍♀️', sessions: 5, color: '#BCA9D4' },
  { id: 'mindfulness', name: 'Mindfulness', type: 'Wellness', emoji: '🌿', sessions: 4, color: '#A08CC0' },
  { id: 'breathwork', name: 'Breathwork', type: 'Wellness', emoji: '🌬️', sessions: 3, color: '#9182B0' },
];

const defaultCatIds = ['fitness', 'music', 'cooking', 'art', 'business', 'wellness'];

export default function ExplorePage() {
  const navigate = useNavigate();
  const { categories: authCategories } = useAuth();
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  // Build dynamic filter tabs from context categories
  const filters = ['All', ...(authCategories || []).map(c => c.name)];

  // For custom categories added by tutors, create placeholder entries
  const customCatItems = (authCategories || [])
    .filter(c => !defaultCatIds.includes(c.id))
    .map(c => ({ id: c.id, name: c.name, type: c.name, emoji: c.emoji, sessions: 3, color: '#8BA888' }));

  const allCategories = [...defaultSubCategories, ...customCatItems];

  const filtered = allCategories.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
    const matchFilter = activeFilter === 'All' || c.type === activeFilter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="page explore-page">
      <div className="page-header">
        <h1>Explore</h1>
      </div>

      <div className="page-content">
        <div className="search-bar glass-card">
          <Search size={18} color="var(--text-tertiary)" />
          <input
            type="text"
            placeholder="Search creators, topics..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="filter-chips h-scroll">
          {filters.map((f) => (
            <button
              key={f}
              className={`chip ${activeFilter === f ? 'chip-active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="explore-grid">
          {filtered.map((cat) => (
            <div
              key={cat.id}
              className="explore-card glass-card"
              onClick={() => navigate(`/category/${cat.type ? cat.type.toLowerCase().replace(/[^a-z]/g, '-') : 'fitness'}`)}
            >
              <div className="explore-card-emoji" style={{ background: `${cat.color}20` }}>
                <span>{cat.emoji}</span>
              </div>
              <div className="explore-card-info">
                <h3>{cat.name}</h3>
                <p>{cat.sessions} sessions · {cat.type}</p>
              </div>
              <ChevronRight size={16} color="var(--text-tertiary)" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .explore-page .search-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
        }

        .search-bar input {
          flex: 1;
          border: none;
          background: none;
          font-size: 15px;
          color: var(--text-primary);
          outline: none;
        }

        .filter-chips {
          display: flex;
          gap: 8px;
          padding: 16px 0;
          overflow-x: auto;
        }

        .chip {
          padding: 8px 16px;
          border-radius: var(--radius-full);
          font-size: 13px;
          font-weight: 500;
          white-space: nowrap;
          border: 1px solid var(--border-medium);
          color: var(--text-secondary);
          background: var(--bg-card);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .chip-active {
          background: var(--accent-sage);
          color: white;
          border-color: var(--accent-sage);
        }

        .explore-grid {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .explore-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 16px;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .explore-card:active {
          transform: scale(0.98);
        }

        .explore-card-emoji {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          flex-shrink: 0;
        }

        .explore-card-info {
          flex: 1;
        }

        .explore-card-info h3 {
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 2px;
        }

        .explore-card-info p {
          font-size: 12px;
          color: var(--text-secondary);
        }
      `}</style>
    </div>
  );
}
