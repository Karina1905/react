// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserProvider  from './contexts/UserProvider';
import ThemeLayout from './layout/ThemeLayout.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
  <UserProvider>
    <ThemeLayout>
    <App />
    </ThemeLayout>
  </UserProvider>
  </ThemeProvider>
);