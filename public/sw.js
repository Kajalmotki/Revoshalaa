// Minimal Service Worker to satisfy PWA requirements
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (e) => {
    console.log('[Service Worker] Activate');
    e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
    // Basic pass-through fetch
    e.respondWith(fetch(e.request).catch(() => {
        // Fallback or offline page logic could go here
        return new Response("Offline");
    }));
});
