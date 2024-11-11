import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import posthog from 'posthog-js';
import {PostHogProvider} from 'posthog-js/react';

// Initialize PostHog
posthog.init('phc_NBPmCvliWH9XPLtLBGdMx9ZvPizRolJ7mnvlNTKOYZ5', { 
  api_host: 'https://app.posthog.com', // PostHog Cloud endpoint
  capture_pageview: true,  // Automatically track page views
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PostHogProvider client={posthog}>
    <App />
    </PostHogProvider>
    
  </React.StrictMode>
);

reportWebVitals();
