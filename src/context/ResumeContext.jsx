import React, { createContext, useContext, useState } from 'react';
import { defaultResumeData } from '../data/defaultResume';

const ResumeContext = createContext(undefined);

export function ResumeProvider({ children }) {
  const [resumeData, setResumeData] = useState(defaultResumeData);
  
  const [isEditing, setIsEditing] = useState(false);

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