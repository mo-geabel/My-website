import React, { createContext, useContext, useEffect, useState } from 'react';
import { defaultResumeData } from '../data/defaultResume';

const ResumeContext = createContext(undefined);

export function ResumeProvider({ children }) {
  const [resumeData, setResumeData] = useState(() => {
    // Load from localStorage if available
    const savedData = localStorage.getItem('resumeData');
    return savedData ? JSON.parse(savedData) : defaultResumeData;
  });
  
  const [isEditing, setIsEditing] = useState(false);

  // Save to localStorage whenever resumeData changes
  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
  }, [resumeData]);

  const updateResumeData = (newData) => {
    setResumeData(newData);
  };

  const resetToDefault = () => {
    setResumeData(defaultResumeData);
  };

  return (
    <ResumeContext.Provider 
      value={{ 
        resumeData, 
        updateResumeData, 
        resetToDefault,
        isEditing,
        setIsEditing
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
}