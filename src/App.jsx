import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Resume from './pages/Resume';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';
import { useTheme } from './context/ThemeContext';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;