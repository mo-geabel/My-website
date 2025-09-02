import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import { ResumeProvider } from './context/ResumeContext';
import { ThemeProvider } from './context/ThemeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
  easing: 'ease-out-cubic'
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <ResumeProvider>
        <Router>
          <App />
        </Router>
      </ResumeProvider>
    </ThemeProvider>
  </StrictMode>
);