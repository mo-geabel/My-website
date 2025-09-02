import React, { useState } from 'react';
import { Experience, ResumeData } from '../../types';
import { Plus, X, Check } from 'lucide-react';

interface ExperienceEditorProps {
  experiences: Experience[];
  updateResumeData: (data: ResumeData) => void;
  resumeData: ResumeData;
}

const ExperienceEditor: React.FC<ExperienceEditorProps> = ({ 
  experiences, 
  updateResumeData,
  resumeData 
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [editingExperience, setEditingExperience] = useState<Experience | null>(null);
  const [newAchievement, setNewAchievement] = useState('');

  const handleAddNew = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
      achievements: []
    };
    
    setEditingExperience(newExperience);
    setExpandedId(newExperience.id);
  };

  const handleEdit = (exp: Experience) => {
    setEditingExperience({...exp});
    setExpandedId(exp.id);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this experience?')) {
      const updatedExperiences = experiences.filter(exp => exp.id !== id);
      updateResumeData({
        ...resumeData,
        experiences: updatedExperiences
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!editingExperience) return;
    
    const { name, value, type } = e.target as HTMLInputElement;
    
    setEditingExperience({
      ...editingExperience,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });
  };

  const handleCurrentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editingExperience) return;
    
    const current = e.target.checked;
    setEditingExperience({
      ...editingExperience,
      current,
      endDate: current ? '' : editingExperience.endDate
    });
  };

  const handleAddAchievement = () => {
    if (!newAchievement.trim() || !editingExperience) return;
    
    setEditingExperience({
      ...editingExperience,
      achievements: [...editingExperience.achievements, newAchievement]
    });
    
    setNewAchievement('');
  };

  const handleRemoveAchievement = (index: number) => {
    if (!editingExperience) return;
    
    const achievements = [...editingExperience.achievements];
    achievements.splice(index, 1);
    
    setEditingExperience({
      ...editingExperience,
      achievements
    });
  };

  const handleSave = () => {
    if (!editingExperience) return;
    
    // Validate required fields
    if (!editingExperience.company || !editingExperience.position || !editingExperience.startDate) {
      alert('Please fill in all required fields');
      return;
    }
    
    const existingIndex = experiences.findIndex(exp => exp.id === editingExperience.id);
    let updatedExperiences;
    
    if (existingIndex >= 0) {
      // Update existing
      updatedExperiences = [...experiences];
      updatedExperiences[existingIndex] = editingExperience;
    } else {
      // Add new
      updatedExperiences = [...experiences, editingExperience];
    }
    
    updateResumeData({
      ...resumeData,
      experiences: updatedExperiences
    });
    
    setEditingExperience(null);
    setExpandedId(null);
  };

  const handleCancel = () => {
    setEditingExperience(null);
    setExpandedId(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Work Experience</h3>
        <button 
          onClick={handleAddNew}
          className="btn btn-primary"
        >
          <Plus size={18} className="mr-1" /> Add Experience
        </button>
      </div>
      
      <div className="space-y-4">
        {/* Experience Editor */}
        {editingExperience && (
          <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 animate-fade-in">
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              {editingExperience.id ? 'Edit Experience' : 'Add New Experience'}
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Company *
                </label>
                <input
                  type="text"
                  name="company"
                  value={editingExperience.company}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Position *
                </label>
                <input
                  type="text"
                  name="position"
                  value={editingExperience.position}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Start Date *
                </label>
                <input
                  type="month"
                  name="startDate"
                  value={editingExperience.startDate}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id="current"
                    name="current"
                    checked={editingExperience.current}
                    onChange={handleCurrentChange}
                    className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="current" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    I currently work here
                  </label>
                </div>
                
                {!editingExperience.current && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      End Date
                    </label>
                    <input
                      type="month"
                      name="endDate"
                      value={editingExperience.endDate}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                )}
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={editingExperience.description}
                onChange={handleChange}
                rows={3}
                className="textarea-field"
                placeholder="Describe your role and responsibilities..."
              ></textarea>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Achievements
              </label>
              
              <div className="space-y-2 mb-3">
                {editingExperience.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center">
                    <span className="flex-1 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 p-2 rounded mr-2">
                      {achievement}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleRemoveAchievement(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="flex">
                <input
                  type="text"
                  value={newAchievement}
                  onChange={(e) => setNewAchievement(e.target.value)}
                  className="input-field flex-1 mr-2"
                  placeholder="Add an achievement..."
                  onKeyDown={(e) => e.key === 'Enter' && handleAddAchievement()}
                />
                <button
                  type="button"
                  onClick={handleAddAchievement}
                  className="btn btn-outline"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={handleCancel}
                className="btn btn-outline"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="btn btn-primary"
              >
                <Check size={18} className="mr-1" /> Save
              </button>
            </div>
          </div>
        )}
        
        {/* Experience List */}
        {!editingExperience && experiences.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            No work experience added yet. Click the "Add Experience" button to get started.
          </div>
        ) : (
          <div className="space-y-4">
            {!editingExperience && experiences.map(exp => (
              <div 
                key={exp.id}
                className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-sm transition-shadow duration-200"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">{exp.position}</h4>
                    <h5 className="text-md text-blue-600 dark:text-blue-400">{exp.company}</h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {new Date(exp.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })} - {' '}
                      {exp.current 
                        ? 'Present' 
                        : new Date(exp.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
                      }
                    </p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(exp)}
                      className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(exp.id)}
                      className="text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                
                {expandedId === exp.id ? (
                  <div className="mt-3 text-gray-700 dark:text-gray-300">
                    <p>{exp.description}</p>
                    {exp.achievements.length > 0 && (
                      <div className="mt-2">
                        <h6 className="text-sm font-medium text-gray-700 dark:text-gray-300">Achievements:</h6>
                        <ul className="list-disc pl-5 mt-1 space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => setExpandedId(exp.id)}
                    className="mt-2 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Show details
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceEditor;