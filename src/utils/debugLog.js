// Simple event emitter for debug logs
const listeners = new Set();

export const debugLog = {
    log: (message) => {
        console.log('[DEBUG-OVERLAY]', message);
        listeners.forEach(l => l({ type: 'info', message, time: new Date().toLocaleTimeString() }));
    },
    error: (message) => {
        console.error('[DEBUG-OVERLAY]', message);
        listeners.forEach(l => l({ type: 'error', message, time: new Date().toLocaleTimeString() }));
    },
    subscribe: (listener) => {
        listeners.add(listener);
        return () => listeners.delete(listener);
    }
};
