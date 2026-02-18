import React, { useEffect, useState } from 'react';
import { Download, X, Share } from 'lucide-react';

export default function InstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [showPrompt, setShowPrompt] = useState(false);
    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
        // Check if iOS
        const isIosDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        setIsIOS(isIosDevice);

        // Check if already installed (standalone mode)
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
        if (isStandalone) return;

        // Listen for install prompt (Android/Desktop)
        const handleBeforeInstallPrompt = (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
            // Show prompt after a delay or immediately
            setTimeout(() => setShowPrompt(true), 3000);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        // For iOS, show prompt if not in standalone
        if (isIosDevice && !isStandalone) {
            // Only show once per session or use logic to not annoy
            // For now, show after 3s
            setTimeout(() => setShowPrompt(true), 3000);
        }

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) return;

        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === 'accepted') {
            console.log('User accepted the install prompt');
        } else {
            console.log('User dismissed the install prompt');
        }
        setDeferredPrompt(null);
        setShowPrompt(false);
    };

    if (!showPrompt) return null;

    return (
        <div className="install-prompt-overlay">
            <div className="install-card">
                <button className="close-btn" onClick={() => setShowPrompt(false)}>
                    <X size={20} />
                </button>

                <div className="install-content">
                    <div className="app-icon">🧘‍♀️</div>
                    <div className="text-content">
                        <h3>Install Revoshalaa</h3>
                        <p>Install our app for a better full-screen experience and quick access.</p>
                    </div>
                </div>

                {isIOS ? (
                    <div className="ios-instruction">
                        <p>Tap <Share size={16} style={{ display: 'inline' }} /> then "Add to Home Screen" <span style={{ fontSize: 16 }}>⊞</span></p>
                    </div>
                ) : (
                    <button className="install-btn" onClick={handleInstallClick}>
                        <Download size={18} /> Install App
                    </button>
                )}
            </div>

            <style>{`
        .install-prompt-overlay {
            position: fixed;
            bottom: 20px;
            left: 20px;
            right: 20px;
            z-index: 9999;
            display: flex;
            justify-content: center;
            animation: slideUp 0.5s ease-out;
        }

        .install-card {
            background: rgba(26, 31, 26, 0.95);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 16px;
            border-radius: 16px;
            width: 100%;
            max-width: 400px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            position: relative;
        }

        .close-btn {
            position: absolute;
            top: 10px;
            right: 10px;
            background: none;
            border: none;
            color: rgba(255,255,255,0.5);
            cursor: pointer;
        }

        .install-content {
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: 16px;
        }

        .app-icon {
            width: 48px;
            height: 48px;
            background: #2A3F28;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
        }

        .text-content h3 {
            font-size: 16px;
            font-weight: 600;
            color: white;
            margin: 0 0 4px 0;
        }

        .text-content p {
            font-size: 12px;
            color: rgba(255,255,255,0.6);
            line-height: 1.4;
            margin: 0;
        }

        .install-btn {
            width: 100%;
            padding: 12px;
            background: #8BA888;
            color: #0a0f0a;
            border: none;
            border-radius: 10px;
            font-weight: 600;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            cursor: pointer;
        }

        .ios-instruction {
            background: rgba(255,255,255,0.05);
            padding: 10px;
            border-radius: 8px;
            text-align: center;
        }

        .ios-instruction p {
            font-size: 13px;
            color: rgba(255,255,255,0.8);
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
        }

        @keyframes slideUp {
            from { transform: translateY(100px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
        </div>
    );
}
