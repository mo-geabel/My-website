import React, { createContext, useContext, useState } from 'react';
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
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);
  
  const [isEditing, setIsEditing] = useState(false);

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