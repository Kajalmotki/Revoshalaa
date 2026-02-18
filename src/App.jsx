import React from 'react';
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
import TutorDashboardPage from './pages/TutorDashboardPage';
import TutorProfilePage from './pages/TutorProfilePage';
import BottomNav from './components/BottomNav';
import TutorBottomNav from './components/TutorBottomNav';
import InstallPrompt from './components/InstallPrompt';
import { AuthProvider } from './context/AuthContext';

function AppContent() {
    const location = useLocation();

    // Paths where NO nav bar should show at all
    const hideAllNav = [
        '/', '/login', '/login/customer', '/login/tutor',
        '/tutor-broadcast', '/live-session', '/video-player'
    ].includes(location.pathname);

    // Check if we're on a tutor route
    const isTutorRoute = location.pathname.startsWith('/tutor/');

    return (
        <>
            <Routes>
                {/* Auth & Splash */}
                <Route path="/" element={<SplashScreen />} />
                <Route path="/login" element={<RoleSelectPage />} />
                <Route path="/login/customer" element={<CustomerLoginPage />} />
                <Route path="/login/tutor" element={<TutorLoginPage />} />

                {/* Member Routes */}
                <Route path="/home" element={<HomePage />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/category/:id" element={<CategoryDetailPage />} />
                <Route path="/video-player" element={<VideoPlayerPage />} />
                <Route path="/live-session" element={<LiveSessionPage />} />
                <Route path="/schedule" element={<LiveSchedulePage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/profile" element={<ProfilePage />} />

                {/* Tutor Routes */}
                <Route path="/tutor/dashboard" element={<TutorDashboardPage />} />
                <Route path="/tutor/profile" element={<TutorProfilePage />} />
                <Route path="/tutor-broadcast" element={<TutorBroadcastPage />} />
            </Routes>

            {/* Show appropriate nav based on route */}
            {!hideAllNav && isTutorRoute && <TutorBottomNav />}
            {!hideAllNav && !isTutorRoute && <BottomNav />}

            <InstallPrompt />
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
