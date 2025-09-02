import React, { createContext, useContext, useEffect, useState } from 'react';
import { defaultResumeData } from '../data/defaultResume';
import { ResumeData } from '../types';

interface ResumeContextType {
  resumeData: ResumeData;
  updateResumeData: (newData: ResumeData) => void;
  resetToDefault: () => void;
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export function ResumeProvider({ children }: { children: React.ReactNode }) {
  const [resumeData, setResumeData] = useState<ResumeData>(() => {
    // Load from localStorage if available
    const savedData = localStorage.getItem('resumeData');
    return savedData ? JSON.parse(savedData) : defaultResumeData;
  });
  
  const [isEditing, setIsEditing] = useState(false);

  // Save to localStorage whenever resumeData changes
  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
  }, [resumeData]);

  const updateResumeData = (newData: ResumeData) => {
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