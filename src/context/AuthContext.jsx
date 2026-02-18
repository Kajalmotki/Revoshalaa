import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext({
    user: null,
    onlineUsers: {},
    checkOnlineStatus: () => false,
    login: () => { },
    logout: () => { },
    addCategory: () => { },
    startLiveSession: () => { },
    endLiveSession: () => { },
    categories: [],
    tutors: [],
    liveSessions: []
});

export const useAuth = () => useContext(AuthContext);

// Default categories - these seed localStorage on first load
const DEFAULT_CATEGORIES = [
    { id: 'fitness', name: 'Fitness', emoji: '💪' },
    { id: 'music', name: 'Music', emoji: '🎵' },
    { id: 'cooking', name: 'Cooking', emoji: '🍳' },
    { id: 'art', name: 'Art & Design', emoji: '🎨' },
    { id: 'business', name: 'Business', emoji: '📈' },
    { id: 'wellness', name: 'Wellness', emoji: '🧘' },
];

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [tutors, setTutors] = useState([]);
    const [liveSessions, setLiveSessions] = useState([]);
    const [categories, setCategories] = useState([]);
    // Online Status System
    const [onlineUsers, setOnlineUsers] = useState({});

    // Check if a specific user (by name/id) is online
    const checkOnlineStatus = (identifier) => {
        if (!identifier) return false;
        // Check by ID or Name (case insensitive)
        const id = identifier.toString().toLowerCase();
        return !!onlineUsers[id];
    };

    // Helper to set online status
    const setOnline = (userId, userName) => {
        if (!userId) return;
        setOnlineUsers(prev => {
            const update = { ...prev, [userId.toString()]: true };
            if (userName) update[userName.toLowerCase()] = true;
            localStorage.setItem('revoshalaa_online_users', JSON.stringify(update));
            return update;
        });
    };

    const setOffline = (userId, userName) => {
        setOnlineUsers(prev => {
            const next = { ...prev };
            if (userId) delete next[userId.toString()];
            if (userName) delete next[userName.toLowerCase()];
            localStorage.setItem('revoshalaa_online_users', JSON.stringify(next));
            return next;
        });
    };

    // Sync online status across tabs
    useEffect(() => {
        const handleStorageChange = (e) => {
            if (e.key === 'revoshalaa_online_users') {
                try {
                    const newValue = JSON.parse(e.newValue);
                    if (newValue) setOnlineUsers(newValue);
                } catch (err) {
                    // ignore parse error
                }
            }
        };

        window.addEventListener('storage', handleStorageChange);

        // Initial load
        const storedOnline = localStorage.getItem('revoshalaa_online_users');
        if (storedOnline) {
            try {
                setOnlineUsers(JSON.parse(storedOnline));
            } catch (e) {
                // ignore
            }
        }

        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    // Load data from localStorage on mount
    useEffect(() => {
        const storedUser = localStorage.getItem('revoshalaa_user');
        const storedTutors = localStorage.getItem('revoshalaa_tutors');
        const storedSessions = localStorage.getItem('revoshalaa_sessions');
        const storedCategories = localStorage.getItem('revoshalaa_categories');

        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser);
                // Auto-set online on restore
                if (parsedUser && parsedUser.id) {
                    setOnline(parsedUser.id, parsedUser.name);
                }
            } catch (e) {
                console.error("Failed to parse user", e);
                localStorage.removeItem('revoshalaa_user');
            }
        }
        if (storedTutors) {
            try { setTutors(JSON.parse(storedTutors)); } catch (e) { localStorage.removeItem('revoshalaa_tutors'); }
        }
        if (storedSessions) {
            try { setLiveSessions(JSON.parse(storedSessions)); } catch (e) { localStorage.removeItem('revoshalaa_sessions'); }
        }

        // Seed categories on first use, then always use localStorage
        if (storedCategories) {
            try {
                setCategories(JSON.parse(storedCategories));
            } catch (e) {
                localStorage.removeItem('revoshalaa_categories');
                setCategories(DEFAULT_CATEGORIES);
                localStorage.setItem('revoshalaa_categories', JSON.stringify(DEFAULT_CATEGORIES));
            }
        } else {
            setCategories(DEFAULT_CATEGORIES);
            localStorage.setItem('revoshalaa_categories', JSON.stringify(DEFAULT_CATEGORIES));
        }
    }, []);

    // Add a new category permanently
    const addCategory = (name, emoji = '📌') => {
        const id = name.toLowerCase().replace(/[^a-z0-9]/g, '-');
        // Don't add if exists
        const exists = categories.some(c => c.id === id || c.name.toLowerCase() === name.toLowerCase());
        if (exists) return categories.find(c => c.id === id || c.name.toLowerCase() === name.toLowerCase());

        const newCat = { id, name, emoji };
        const updated = [...categories, newCat];
        setCategories(updated);
        localStorage.setItem('revoshalaa_categories', JSON.stringify(updated));
        return newCat;
    };

    // Login (Simulated) — enhanced for tutor with name, category, specialty
    const login = (type, credentials) => {
        const newUser = {
            id: Date.now().toString(),
            name: credentials.firstName
                ? `${credentials.firstName} ${credentials.lastName || ''}`.trim()
                : credentials.identifier?.split('@')[0] || 'User',
            firstName: credentials.firstName || '',
            lastName: credentials.lastName || '',
            type,
            avatar: type === 'tutor' ? '🎓' : '👤',
            category: credentials.category || '',
            specialty: credentials.specialty || '',
            identifier: credentials.identifier || '',
        };

        setUser(newUser);
        setOnline(newUser.id, newUser.name);
        localStorage.setItem('revoshalaa_user', JSON.stringify(newUser));

        // Register tutor in the tutors list
        if (type === 'tutor') {
            const existingIdx = tutors.findIndex(t => t.identifier === newUser.identifier);
            let updatedTutors;
            if (existingIdx >= 0) {
                updatedTutors = [...tutors];
                updatedTutors[existingIdx] = newUser;
            } else {
                updatedTutors = [...tutors, newUser];
            }
            setTutors(updatedTutors);
            localStorage.setItem('revoshalaa_tutors', JSON.stringify(updatedTutors));
        }

        return true;
    };

    // Logout
    const logout = () => {
        if (user) setOffline(user.id, user.name);
        setUser(null);
        localStorage.removeItem('revoshalaa_user');
    };

    // Tutor: Go Live
    const startLiveSession = (sessionDetails) => {
        if (!user || user.type !== 'tutor') return;

        const newSession = {
            id: Date.now().toString(),
            tutorId: user.id,
            tutorName: user.name,
            tutorAvatar: user.avatar,
            title: sessionDetails.title,
            category: sessionDetails.category,
            viewers: 0,
            startedAt: new Date().toISOString(),
        };

        const updatedSessions = [...liveSessions, newSession];
        setLiveSessions(updatedSessions);
        localStorage.setItem('revoshalaa_sessions', JSON.stringify(updatedSessions));
        return newSession;
    };

    // Tutor: End Live
    const endLiveSession = (sessionId) => {
        const updatedSessions = liveSessions.filter(s => s.id !== sessionId);
        setLiveSessions(updatedSessions);
        localStorage.setItem('revoshalaa_sessions', JSON.stringify(updatedSessions));
    };

    return (
        <AuthContext.Provider value={{
            user,
            tutors,
            liveSessions,
            categories,
            onlineUsers,
            checkOnlineStatus,
            login,
            logout,
            addCategory,
            startLiveSession,
            endLiveSession
        }}>
            {children}
        </AuthContext.Provider>
    );
};
