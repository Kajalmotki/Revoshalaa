import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { onLiveSessionsChanged } from '../utils/liveSignaling';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import {
    doc,
    setDoc,
    getDoc,
    collection,
    query,
    where,
    getDocs
} from 'firebase/firestore';

const AuthContext = createContext({
    user: null,
    onlineUsers: {},
    checkOnlineStatus: () => false,
    login: () => { },
    signup: () => { },
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

    // Load data from localStorage on mount
    useEffect(() => {
        const storedTutors = localStorage.getItem('revoshalaa_tutors');
        const storedCategories = localStorage.getItem('revoshalaa_categories');

        if (storedTutors) {
            try { setTutors(JSON.parse(storedTutors)); } catch (e) { localStorage.removeItem('revoshalaa_tutors'); }
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

        // Listen for Real-time Live Sessions from Firestore
        const unsubscribeSessions = onLiveSessionsChanged((sessions) => {
            setLiveSessions(sessions);
        });


        // Online Status Sync
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
        const storedOnline = localStorage.getItem('revoshalaa_online_users');
        if (storedOnline) {
            try { setOnlineUsers(JSON.parse(storedOnline)); } catch (e) { }
        }

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            unsubscribeSessions();
        };
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

    const [loading, setLoading] = useState(true);

    // ... (rest of state)

    // Listen for Auth Changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                // Fetch user profile from Firestore
                const userDocRef = doc(db, 'users', firebaseUser.uid);
                const userDoc = await getDoc(userDocRef);

                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    const appUser = { ...userData, id: firebaseUser.uid, email: firebaseUser.email };
                    setUser(appUser);
                    setOnline(appUser.id, appUser.name);
                    localStorage.setItem('revoshalaa_user', JSON.stringify(appUser));
                } else {
                    // Fallback if no firestore doc (shouldn't happen with proper signup)
                    const fallbackUser = { id: firebaseUser.uid, email: firebaseUser.email, name: 'User' };
                    setUser(fallbackUser);
                }
            } else {
                setUser(null);
                localStorage.removeItem('revoshalaa_user');
            }
            setLoading(false);
        });

        // Fetch Tutors from Firestore
        const fetchTutors = async () => {
            try {
                const q = query(collection(db, 'users'), where('type', '==', 'tutor'));
                const querySnapshot = await getDocs(q);
                const tutorsList = [];
                querySnapshot.forEach((doc) => {
                    tutorsList.push({ id: doc.id, ...doc.data() });
                });
                setTutors(tutorsList);
                localStorage.setItem('revoshalaa_tutors', JSON.stringify(tutorsList));
            } catch (error) {
                console.error("Error fetching tutors:", error);
            }
        };

        fetchTutors();
        return () => unsubscribe();
    }, []);

    // Signup Function
    const signup = async (email, password, profileData) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Create user profile in Firestore
            const userData = {
                ...profileData,
                createdAt: new Date().toISOString(),
                identifier: email // Keep for backward compatibility or display
            };

            await setDoc(doc(db, 'users', user.uid), userData);

            const appUser = { id: user.uid, email, ...userData };
            setUser(appUser);
            setOnline(user.uid, appUser.name);

            // If tutor, refresh tutors list locally or re-fetch
            if (profileData.type === 'tutor') {
                setTutors(prev => [...prev, appUser]);
            }

            return true;
        } catch (error) {
            console.error("Signup Error:", error);
            throw error;
        }
    };

    // Login Function
    const login = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            return true;
        } catch (error) {
            console.error("Login Error:", error);
            throw error;
        }
    };

    // Logout Function
    const logout = async () => {
        try {
            if (user) setOffline(user.id, user.name);
            await signOut(auth);
            setUser(null);
            localStorage.removeItem('revoshalaa_user');
        } catch (error) {
            console.error("Logout Error:", error);
        }
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

        // Note: We don't setLiveSessions here directly. 
        // The TutorBroadcastPage calls publishSession(), which updates Firestore.
        // Then our onLiveSessionsChanged listener updates the state automatically.

        return newSession;
    };

    // Upgrade existing user to Tutor
    const upgradeToTutor = async (category, specialty) => {
        if (!user) return;
        try {
            const updates = {
                type: 'tutor',
                category,
                specialty,
                avatar: user.avatar || '🎓' // Keep existing avatar if present
            };

            // Update Firestore
            await setDoc(doc(db, 'users', user.id), updates, { merge: true });

            // Update Local State
            const updatedUser = { ...user, ...updates };
            setUser(updatedUser);
            localStorage.setItem('revoshalaa_user', JSON.stringify(updatedUser));

            // Add to tutors list
            setTutors(prev => {
                if (prev.find(t => t.id === user.id)) return prev;
                return [...prev, updatedUser];
            });

            return true;
        } catch (error) {
            console.error("Error upgrading to tutor:", error);
            throw error;
        }
    };

    // Tutor: End Live
    const endLiveSession = (sessionId) => {
        // Logic handled by removeSession in liveSignaling
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
            signup,
            logout,
            addCategory,
            startLiveSession,
            endLiveSession,
            upgradeToTutor,
            loading
        }}>
            {children}
        </AuthContext.Provider>
    );
};
