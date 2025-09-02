import React, { useState } from 'react';
import { Education, ResumeData } from '../../types';
import { Plus, Check } from 'lucide-react';

interface EducationEditorProps {
  education: Education[];
  updateResumeData: (data: ResumeData) => void;
  resumeData: ResumeData;
}

const EducationEditor: React.FC<EducationEditorProps> = ({ 
  education, 
  updateResumeData,
  resumeData 
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [editingEducation, setEditingEducation] = useState<Education | null>(null);

  const handleAddNew = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      description: ''
    };
    
    setEditingEducation(newEducation);
    setExpandedId(newEducation.id);
  };

  const handleEdit = (edu: Education) => {
    setEditingEducation({...edu});
    setExpandedId(edu.id);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this education entry?')) {
      const updatedEducation = education.filter(edu => edu.id !== id);
      updateResumeData({
        ...resumeData,
        education: updatedEducation
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!editingEducation) return;
    
    const { name, value } = e.target;
    
    setEditingEducation({
      ...editingEducation,
      [name]: value
    });
  };

  const handleSave = () => {
    if (!editingEducation) return;
    
    // Validate required fields
    if (!editingEducation.institution || !editingEducation.degree || !editingEducation.startDate || !editingEducation.endDate) {
      alert('Please fill in all required fields');
      return;
    }
    
    const existingIndex = education.findIndex(edu => edu.id === editingEducation.id);
    let updatedEducation;
    
    if (existingIndex >= 0) {
      // Update existing
      updatedEducation = [...education];
      updatedEducation[existingIndex] = editingEducation;
    } else {
      // Add new
      updatedEducation = [...education, editingEducation];
    }
    
    updateResumeData({
      ...resumeData,
      education: updatedEducation
    });
    
    setEditingEducation(null);
    setExpandedId(null);
  };

  const handleCancel = () => {
    setEditingEducation(null);
    setExpandedId(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Education</h3>
        <button 
          onClick={handleAddNew}
          className="btn btn-primary"
        >
          <Plus size={18} className="mr-1" /> Add Education
        </button>
      </div>
      
      <div className="space-y-4">
        {/* Education Editor */}
        {editingEducation && (
          <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 animate-fade-in">
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              {editingEducation.id ? 'Edit Education' : 'Add New Education'}
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Institution *
                </label>
                <input
                  type="text"
                  name="institution"
                  value={editingEducation.institution}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Degree *
                </label>
                <input
                  type="text"
                  name="degree"
                  value={editingEducation.degree}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Field of Study *
                </label>
                <input
                  type="text"
                  name="field"
                  value={editingEducation.field}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Start Year *
                  </label>
                  <input
                    type="text"
                    name="startDate"
                    value={editingEducation.startDate}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="2020"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    End Year *
                  </label>
                  <input
                    type="text"
                    name="endDate"
                    value={editingEducation.endDate}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="2024"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={editingEducation.description}
                onChange={handleChange}
                rows={3}
                className="textarea-field"
                placeholder="Describe your education, achievements, activities, etc..."
              ></textarea>
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
        
        {/* Education List */}
        {!editingEducation && education.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            No education entries added yet. Click the "Add Education" button to get started.
          </div>
        ) : (
          <div className="space-y-4">
            {!editingEducation && education.map(edu => (
              <div 
                key={edu.id}
                className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-sm transition-shadow duration-200"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                      {edu.degree} in {edu.field}
                    </h4>
                    <h5 className="text-md text-blue-600 dark:text-blue-400">{edu.institution}</h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {edu.startDate} - {edu.endDate}
                    </p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(edu)}
                      className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(edu.id)}
                      className="text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                
                {expandedId === edu.id ? (
                  <div className="mt-3 text-gray-700 dark:text-gray-300">
                    <p>{edu.description}</p>
                  </div>
                ) : (
                  <button
                    onClick={() => setExpandedId(edu.id)}
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

export default EducationEditor;