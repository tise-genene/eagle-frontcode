import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Main App component
import './styles.css'; // Importing Tailwind and other global styles

// Render the React App into the root DOM node
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
