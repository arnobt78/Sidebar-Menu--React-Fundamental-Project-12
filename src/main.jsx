/**
 * Application entry point.
 * Mounts the React app into #root and wraps it with AppProvider so
 * sidebar/modal state is available everywhere via useGlobalContext().
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './context';
import './index.css';

// createRoot is the React 18 API; StrictMode helps catch side-effect issues in dev
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* AppProvider must wrap any component that uses useGlobalContext() */}
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
