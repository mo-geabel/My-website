import React, { useState, useMemo } from 'react';
import { Skill, ResumeData } from '../../types';
import { Plus, Check } from 'lucide-react';

interface SkillsEditorProps {
  skills: Skill[];
  updateResumeData: (data: ResumeData) => void;
  resumeData: ResumeData;
}

const SkillsEditor: React.FC<SkillsEditorProps> = ({ 
  skills, 
  updateResumeData,
  resumeData 
}) => {
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  // Get unique categories
  const categories = useMemo(() => {
    const allCategories = skills.map(skill => skill.category);
    return ['all', ...Array.from(new Set(allCategories))];
  }, [skills]);

  // Filtered skills
  const filteredSkills = useMemo(() => {
    if (categoryFilter === 'all') return skills;
    return skills.filter(skill => skill.category === categoryFilter);
  }, [skills, categoryFilter]);

  const handleAddNew = () => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: '',
      level: 3,
      category: categoryFilter !== 'all' ? categoryFilter : ''
    };
    
    setEditingSkill(newSkill);
  };

  const handleEdit = (skill: Skill) => {
    setEditingSkill({...skill});
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this skill?')) {
      const updatedSkills = skills.filter(skill => skill.id !== id);
      updateResumeData({
        ...resumeData,
        skills: updatedSkills
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (!editingSkill) return;
    
    const { name, value, type } = e.target;
    
    if (type === 'range') {
      setEditingSkill({
        ...editingSkill,
        [name]: parseInt(value)
      });
    } else {
      setEditingSkill({
        ...editingSkill,
        [name]: value
      });
    }
  };

  const handleSave = () => {
    if (!editingSkill || !editingSkill.name || !editingSkill.category) {
      alert('Please fill in all required fields');
      return;
    }
    
    const existingIndex = skills.findIndex(skill => skill.id === editingSkill.id);
    let updatedSkills;
    
    if (existingIndex >= 0) {
      // Update existing
      updatedSkills = [...skills];
      updatedSkills[existingIndex] = editingSkill;
    } else {
      // Add new
      updatedSkills = [...skills, editingSkill];
    }
    
    updateResumeData({
      ...resumeData,
      skills: updatedSkills
    });
    
    setEditingSkill(null);
  };

  const handleCancel = () => {
    setEditingSkill(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Skills</h3>
        
        <div className="flex flex-col md:flex-row gap-3">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="input-field max-w-xs"
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
          
          <button 
            onClick={handleAddNew}
            className="btn btn-primary whitespace-nowrap"
          >
            <Plus size={18} className="mr-1" /> Add Skill
          </button>
        </div>
      </div>
      
      <div className="space-y-4">
        {/* Skill Editor */}
        {editingSkill && (
          <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 animate-fade-in">
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              {editingSkill.name ? `Edit ${editingSkill.name}` : 'Add New Skill'}
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Skill Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={editingSkill.name}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Category *
                </label>
                <input
                  type="text"
                  name="category"
                  value={editingSkill.category}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="e.g., Programming, Design, Languages"
                  list="categories"
                  required
                />
                <datalist id="categories">
                  {categories
                    .filter(cat => cat !== 'all')
                    .map((category, index) => (
                      <option key={index} value={category} />
                    ))}
                </datalist>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Proficiency Level: {getLevelText(editingSkill.level)}
                </label>
                <input
                  type="range"
                  name="level"
                  min="1"
                  max="5"
                  value={editingSkill.level}
                  onChange={handleChange}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <span>Beginner</span>
                  <span>Elementary</span>
                  <span>Intermediate</span>
                  <span>Advanced</span>
                  <span>Expert</span>
                </div>
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
        
        {/* Skills List */}
        {!editingSkill && filteredSkills.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            {categoryFilter === 'all'
              ? 'No skills added yet. Click the "Add Skill" button to get started.'
              : `No skills in the "${categoryFilter}" category. Add some or select a different category.`
            }
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {!editingSkill && filteredSkills.map(skill => (
              <div 
                key={skill.id}
                className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-sm transition-shadow duration-200"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-md font-medium text-gray-900 dark:text-white">{skill.name}</h4>
                    <span className="text-sm text-blue-600 dark:text-blue-400">{skill.category}</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(skill)}
                      className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(skill.id)}
                      className="text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1 text-xs">
                    <span className="text-gray-600 dark:text-gray-400">
                      Level: {getLevelText(skill.level)}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 dark:bg-blue-500 rounded-full"
                      style={{ width: `${skill.level * 20}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Helper function to convert skill level to text
function getLevelText(level: number): string {
  switch (level) {
    case 1: return 'Beginner';
    case 2: return 'Elementary';
    case 3: return 'Intermediate';
    case 4: return 'Advanced';
    case 5: return 'Expert';
    default: return '';
  }
}

export default SkillsEditor;