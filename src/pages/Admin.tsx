import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useResume } from '../context/ResumeContext';
import { useTheme } from '../context/ThemeContext';
import { Eye, Save, RotateCcw, Moon, Sun } from 'lucide-react';
import PersonalInfoEditor from '../components/admin/PersonalInfoEditor';
import ExperienceEditor from '../components/admin/ExperienceEditor';
import EducationEditor from '../components/admin/EducationEditor';
import SkillsEditor from '../components/admin/SkillsEditor';
import ProjectsEditor from '../components/admin/ProjectsEditor';
import CertificatesEditor from '../components/admin/CertificatesEditor';

const Admin: React.FC = () => {
  const { resumeData, updateResumeData, resetToDefault } = useResume();
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('personal');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    // Simulate saving
    setTimeout(() => {
      setIsSaving(false);
    }, 800);
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all data to default? This cannot be undone.')) {
      resetToDefault();
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Resume Editor</h1>
            <p className="text-gray-600 dark:text-gray-400">Edit your resume content</p>
          </div>
          
          <div className="flex space-x-3 mt-4 md:mt-0">
            <button
              onClick={toggleTheme}
              className="btn btn-outline border-gray-300 dark:border-gray-700"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={18} className="mr-2" /> : <Moon size={18} className="mr-2" />}
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
            
            <button 
              onClick={handleReset}
              className="btn btn-outline border-red-300 dark:border-red-700 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
            >
              <RotateCcw size={18} className="mr-2" />
              Reset
            </button>
            
            <Link to="/" className="btn btn-outline border-gray-300 dark:border-gray-700">
              <Eye size={18} className="mr-2" />
              View Resume
            </Link>
            
            <button 
              onClick={handleSave}
              className="btn btn-primary"
              disabled={isSaving}
            >
              <Save size={18} className="mr-2" />
              {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </header>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex overflow-x-auto">
              {[
                { id: 'personal', label: 'Personal Info' },
                { id: 'experience', label: 'Experience' },
                { id: 'education', label: 'Education' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'certificates', label: 'Certificates' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 text-sm font-medium whitespace-nowrap ${
                    activeTab === tab.id 
                      ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-4 md:p-6 animate-fade-in">
            {activeTab === 'personal' && (
              <PersonalInfoEditor 
                personalInfo={resumeData.personalInfo}
                updateResumeData={updateResumeData}
                resumeData={resumeData}
              />
            )}
            
            {activeTab === 'experience' && (
              <ExperienceEditor 
                experiences={resumeData.experiences}
                updateResumeData={updateResumeData}
                resumeData={resumeData}
              />
            )}
            
            {activeTab === 'education' && (
              <EducationEditor 
                education={resumeData.education}
                updateResumeData={updateResumeData}
                resumeData={resumeData}
              />
            )}
            
            {activeTab === 'skills' && (
              <SkillsEditor 
                skills={resumeData.skills}
                updateResumeData={updateResumeData}
                resumeData={resumeData}
              />
            )}
            
            {activeTab === 'projects' && (
              <ProjectsEditor 
                projects={resumeData.projects}
                updateResumeData={updateResumeData}
                resumeData={resumeData}
              />
            )}
            
            {activeTab === 'certificates' && (
              <CertificatesEditor 
                certificates={resumeData.certificates}
                updateResumeData={updateResumeData}
                resumeData={resumeData}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;