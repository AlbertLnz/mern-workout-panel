import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoot from './AppRoot';
import { WorkoutsContextProvider } from './context/WorkoutContext'
import { AuthContextProvider } from './context/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <WorkoutsContextProvider>
        <AppRoot />
      </WorkoutsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);