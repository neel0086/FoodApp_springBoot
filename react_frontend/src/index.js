import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserProvider from './provider/UserProvider';
import SidebarProvider from './provider/SidebarProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SidebarProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </SidebarProvider>

  </React.StrictMode >
);
