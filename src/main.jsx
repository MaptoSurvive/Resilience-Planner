// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // ← This import needs a default export
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
