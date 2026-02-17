import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, Bell, BellOff, ChevronRight, Radio } from 'lucide-react';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const dates = [17, 18, 19, 20, 21, 22, 23];
const liveDays = [1, 4]; // Tuesday & Friday (0-indexed)

const schedule = {
  1: [ // Tuesday
    { id: 1, title: 'HIIT Burn Challenge', instructor: 'Ankit Verma', time: '7:00 AM', duration: '45 min', category: 'Fitness', free: true },
    { id: 2, title: 'Guitar for Beginners', instructor: 'Rohan Mehta', time: '5:00 PM', duration: '60 min', category: 'Music', free: false },
    { id: 3, title: '5-Min Healthy Meals', instructor: 'Chef Ananya', time: '8:00 PM', duration: '50 min', category: 'Cooking', free: false },
  ],
  4: [ // Friday
    { id: 4, title: 'Morning Meditation', instructor: 'Kavya Nair', time: '6:30 AM', duration: '30 min', category: 'Wellness', free: true },
    { id: 5, title: 'Social Media Marketing', instructor: 'Vikram Shah', time: '4:00 PM', duration: '50 min', category: 'Business', free: false },
    { id: 6, title: 'Sketch & Illustrate', instructor: 'Sanya Kapoor', time: '7:00 PM', duration: '45 min', category: 'Art', free: false },
  ],
};

export default function LiveSchedulePage() {
  const [selectedDay, setSelectedDay] = useState(1);
  const [reminders, setReminders] = useState({});
  const navigate = useNavigate();

  const todaySessions = schedule[selectedDay] || [];
  const isLiveDay = liveDays.includes(selectedDay);

  const toggleReminder = (id) => {
    setReminders((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="page schedule-page">
      <div className="page-header">
        <h1>Live Schedule</h1>
        <p className="text-secondary">Live sessions every Tuesday & Friday</p>
      </div>

      <div className="page-content">
        {/* Week Calendar */}
        <div className="week-calendar glass-card">
          <div className="week-header">
            <Calendar size={16} color="var(--accent-sage)" />
            <span>This Week</span>
          </div>
          <div className="week-days">
            {days.map((day, i) => (
              <button
                key={i}
                className={`day-btn ${selectedDay === i ? 'selected' : ''} ${liveDays.includes(i) ? 'has-live' : ''}`}
                onClick={() => setSelectedDay(i)}
              >
                <span className="day-name">{day}</span>
                <span className="day-date">{dates[i]}</span>
                {liveDays.includes(i) && <span className="day-live-dot" />}
              </button>
            ))}
          </div>
        </div>

        {/* Sessions */}
        {isLiveDay ? (
          <div className="schedule-sessions">
            <div className="schedule-section-title">
              <Radio size={16} color="var(--accent-sage)" />
              <span>{days[selectedDay]}'s Live Sessions</span>
            </div>
            {todaySessions.map((session, i) => (
              <div
                key={session.id}
                className="schedule-card glass-card animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="sched-left">
                  <div className="sched-time-block">
                    <span className="sched-time">{session.time}</span>
                    <span className="sched-duration">{session.duration}</span>
                  </div>
                </div>
                <div className="sched-info">
                  <h3>{session.title}</h3>
                  <p>{session.instructor} · {session.category}</p>
                </div>
                <div className="sched-right">
                  <span className={`badge ${session.free ? 'badge-free' : 'badge-paid'}`}>
                    {session.free ? 'FREE' : '$5'}
                  </span>
                  <button
                    className={`reminder-btn ${reminders[session.id] ? 'active' : ''}`}
                    onClick={() => toggleReminder(session.id)}
                  >
                    {reminders[session.id] ? <Bell size={16} fill="var(--accent-sage)" /> : <BellOff size={16} />}
                  </button>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="schedule-cta glass-card" onClick={() => navigate('/pricing')}>
              <div>
                <h3>Unlock All Sessions</h3>
                <p>Subscribe for $49/month</p>
              </div>
              <ChevronRight size={20} color="var(--accent-sage)" />
            </div>
          </div>
        ) : (
          <div className="no-live-day">
            <div className="no-live-icon">🧘</div>
            <h3>Rest Day</h3>
            <p>No live sessions on {days[selectedDay]}. Live sessions are every <strong>Tuesday</strong> and <strong>Friday</strong>.</p>
            <p className="no-live-hint">Use today for personal practice!</p>
          </div>
        )}
      </div>

      <style>{`
        .schedule-page .page-header h1 {
          font-size: 26px;
        }

        /* Week Calendar */
        .week-calendar {
          padding: 16px;
          margin-bottom: 24px;
        }

        .week-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 14px;
          color: var(--text-secondary);
        }

        .week-days {
          display: flex;
          justify-content: space-between;
        }

        .day-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 10px 8px;
          border-radius: var(--radius-md);
          transition: all 0.3s ease;
          position: relative;
          min-width: 44px;
        }

        .day-btn.selected {
          background: var(--accent-sage);
          color: white;
        }

        .day-btn.selected .day-name,
        .day-btn.selected .day-date {
          color: white;
        }

        .day-name {
          font-size: 10px;
          color: var(--text-tertiary);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .day-date {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary);
        }

        .day-live-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #e74c3c;
          position: absolute;
          bottom: 4px;
        }

        .day-btn.selected .day-live-dot {
          background: white;
        }

        /* Schedule Cards */
        .schedule-section-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 14px;
        }

        .schedule-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px;
          margin-bottom: 10px;
          opacity: 0;
        }

        .sched-time-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 60px;
        }

        .sched-time {
          font-size: 14px;
          font-weight: 600;
          color: var(--accent-sage);
        }

        .sched-duration {
          font-size: 11px;
          color: var(--text-tertiary);
        }

        .sched-info {
          flex: 1;
        }

        .sched-info h3 {
          font-size: 14px;
          font-family: var(--font-body);
          font-weight: 600;
          margin-bottom: 2px;
        }

        .sched-info p {
          font-size: 12px;
          color: var(--text-secondary);
        }

        .sched-right {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .reminder-btn {
          color: var(--text-tertiary);
          transition: all 0.3s ease;
        }

        .reminder-btn.active {
          color: var(--accent-sage);
        }

        /* CTA */
        .schedule-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px;
          margin-top: 20px;
          cursor: pointer;
          background: linear-gradient(135deg, rgba(139,168,136,0.08), rgba(212,168,83,0.06)) !important;
        }

        .schedule-cta h3 {
          font-size: 16px;
          font-family: var(--font-body);
          font-weight: 600;
          margin-bottom: 2px;
        }

        .schedule-cta p {
          font-size: 13px;
          color: var(--accent-sage);
          font-weight: 500;
        }

        /* No Live */
        .no-live-day {
          text-align: center;
          padding: 48px 20px;
        }

        .no-live-icon {
          font-size: 56px;
          margin-bottom: 16px;
          animation: breathe 3s ease-in-out infinite;
        }

        .no-live-day h3 {
          font-size: 20px;
          margin-bottom: 8px;
        }

        .no-live-day p {
          font-size: 14px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .no-live-hint {
          margin-top: 12px;
          color: var(--accent-sage) !important;
          font-weight: 500;
        }

        .schedule-sessions {
          margin-top: 0;
        }
      `}</style>
    </div>
  );
}
