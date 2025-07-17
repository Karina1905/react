import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import ThemeToggle from './components/ThemeToggle.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider>
    <ThemeToggle>
    <App />
    </ThemeToggle>
    </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
