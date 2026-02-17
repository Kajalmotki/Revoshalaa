import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import CategoryDetailPage from './pages/CategoryDetailPage';
import VideoPlayerPage from './pages/VideoPlayerPage';
import LiveSessionPage from './pages/LiveSessionPage';
import LiveSchedulePage from './pages/LiveSchedulePage';
import PricingPage from './pages/PricingPage';
import ProfilePage from './pages/ProfilePage';
import CustomerLoginPage from './pages/CustomerLoginPage';
import TutorLoginPage from './pages/TutorLoginPage';
import RoleSelectPage from './pages/RoleSelectPage';
import TutorBroadcastPage from './pages/TutorBroadcastPage';
import BottomNav from './components/BottomNav';
import { AuthProvider } from './context/AuthContext';

function AppContent() {
    const location = useLocation();
    const hideNav = ['/', '/login', '/login/customer', '/login/tutor', '/tutor-broadcast', '/live-session', '/video-player'].includes(location.pathname);

    return (
        <>
            <Routes>
                <Route path="/" element={<SplashScreen />} />
                <Route path="/login" element={<RoleSelectPage />} />
                <Route path="/login/customer" element={<CustomerLoginPage />} />
                <Route path="/login/tutor" element={<TutorLoginPage />} />
                <Route path="/tutor-broadcast" element={<TutorBroadcastPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/category/:id" element={<CategoryDetailPage />} />
                <Route path="/video-player" element={<VideoPlayerPage />} />
                <Route path="/live-session" element={<LiveSessionPage />} />
                <Route path="/schedule" element={<LiveSchedulePage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
            {!hideNav && <BottomNav />}
        </>
    );
}

export default function App() {
    return (
        <Router>
            <AuthProvider>
                <AppContent />
            </AuthProvider>
        </Router>
    );
}
