import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';

import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
    return (
        <div role="alert" style={{ padding: '20px', color: 'red' }}>
            <h2>Something went wrong:</h2>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
            <button onClick={() => {
                localStorage.clear();
                window.location.reload();
            }}>Clear Data & Reload</button>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <App />
        </ErrorBoundary>
    </React.StrictMode>
);
