import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { WeatherProvider } from './context/WeatherContext.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'
import {ThemeProvider} from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
   <StrictMode>
  <ThemeProvider>
  <WeatherProvider>
    <ThemeToggle>
    <App />
    </ThemeToggle>
  </WeatherProvider>
  </ThemeProvider>
  </StrictMode>
)
