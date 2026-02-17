import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

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

    // Load data from localStorage on mount
    useEffect(() => {
        const storedUser = localStorage.getItem('revoshalaa_user');
        const storedTutors = localStorage.getItem('revoshalaa_tutors');
        const storedSessions = localStorage.getItem('revoshalaa_sessions');
        const storedCategories = localStorage.getItem('revoshalaa_categories');

        if (storedUser) setUser(JSON.parse(storedUser));
        if (storedTutors) setTutors(JSON.parse(storedTutors));
        if (storedSessions) setLiveSessions(JSON.parse(storedSessions));

        // Seed categories on first use, then always use localStorage
        if (storedCategories) {
            setCategories(JSON.parse(storedCategories));
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
