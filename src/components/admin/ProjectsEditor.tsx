import React, { useState } from 'react';
import { Project, ResumeData } from '../../types';
import { Plus, Check, X } from 'lucide-react';

interface ProjectsEditorProps {
  projects: Project[];
  updateResumeData: (data: ResumeData) => void;
  resumeData: ResumeData;
}

const ProjectsEditor: React.FC<ProjectsEditorProps> = ({ 
  projects, 
  updateResumeData,
  resumeData 
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [newTech, setNewTech] = useState('');

  const handleAddNew = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: '',
      description: '',
      technologies: [],
      link: '',
      image: ''
    };
    
    setEditingProject(newProject);
    setExpandedId(newProject.id);
  };

  const handleEdit = (project: Project) => {
    setEditingProject({...project});
    setExpandedId(project.id);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      const updatedProjects = projects.filter(project => project.id !== id);
      updateResumeData({
        ...resumeData,
        projects: updatedProjects
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!editingProject) return;
    
    const { name, value } = e.target;
    
    setEditingProject({
      ...editingProject,
      [name]: value
    });
  };

  const handleAddTechnology = () => {
    if (!newTech.trim() || !editingProject) return;
    
    setEditingProject({
      ...editingProject,
      technologies: [...editingProject.technologies, newTech]
    });
    
    setNewTech('');
  };

  const handleRemoveTechnology = (index: number) => {
    if (!editingProject) return;
    
    const technologies = [...editingProject.technologies];
    technologies.splice(index, 1);
    
    setEditingProject({
      ...editingProject,
      technologies
    });
  };

  const handleSave = () => {
    if (!editingProject) return;
    
    // Validate required fields
    if (!editingProject.title || !editingProject.description) {
      alert('Please fill in all required fields');
      return;
    }
    
    const existingIndex = projects.findIndex(project => project.id === editingProject.id);
    let updatedProjects;
    
    if (existingIndex >= 0) {
      // Update existing
      updatedProjects = [...projects];
      updatedProjects[existingIndex] = editingProject;
    } else {
      // Add new
      updatedProjects = [...projects, editingProject];
    }
    
    updateResumeData({
      ...resumeData,
      projects: updatedProjects
    });
    
    setEditingProject(null);
    setExpandedId(null);
  };

  const handleCancel = () => {
    setEditingProject(null);
    setExpandedId(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Projects</h3>
        <button 
          onClick={handleAddNew}
          className="btn btn-primary"
        >
          <Plus size={18} className="mr-1" /> Add Project
        </button>
      </div>
      
      <div className="space-y-4">
        {/* Project Editor */}
        {editingProject && (
          <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 animate-fade-in">
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              {editingProject.id ? 'Edit Project' : 'Add New Project'}
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Project Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={editingProject.title}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={editingProject.description}
                  onChange={handleChange}
                  rows={3}
                  className="textarea-field"
                  placeholder="Describe the project, its purpose, and your role..."
                  required
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Project Link
                </label>
                <input
                  type="url"
                  name="link"
                  value={editingProject.link || ''}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="https://example.com/project"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Image URL
                </label>
                <input
                  type="url"
                  name="image"
                  value={editingProject.image || ''}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="https://example.com/image.jpg"
                />
                {editingProject.image && (
                  <div className="mt-2">
                    <img 
                      src={editingProject.image} 
                      alt="Preview" 
                      className="h-16 rounded object-cover"
                    />
                  </div>
                )}
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Technologies
                </label>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {editingProject.technologies.map((tech, index) => (
                    <div key={index} className="flex items-center bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full text-sm">
                      <span>{tech}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveTechnology(index)}
                        className="ml-1 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-200"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="flex">
                  <input
                    type="text"
                    value={newTech}
                    onChange={(e) => setNewTech(e.target.value)}
                    className="input-field flex-1 mr-2"
                    placeholder="Add a technology..."
                    onKeyDown={(e) => e.key === 'Enter' && handleAddTechnology()}
                  />
                  <button
                    type="button"
                    onClick={handleAddTechnology}
                    className="btn btn-outline"
                  >
                    <Plus size={18} />
                  </button>
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
        
        {/* Projects List */}
        {!editingProject && projects.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            No projects added yet. Click the "Add Project" button to get started.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {!editingProject && projects.map(project => (
              <div 
                key={project.id}
                className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-sm transition-shadow duration-200"
              >
                {project.image && (
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">{project.title}</h4>
                    
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(project)}
                        className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  
                  {expandedId === project.id ? (
                    <div className="mt-2">
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                        {project.description}
                      </p>
                      
                      {project.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-3">
                          {project.technologies.map((tech, i) => (
                            <span 
                              key={i} 
                              className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          View Project
                        </a>
                      )}
                      
                      <button
                        onClick={() => setExpandedId(null)}
                        className="mt-2 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 block"
                      >
                        Show less
                      </button>
                    </div>
                  ) : (
                    <>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mt-1 line-clamp-2">
                        {project.description}
                      </p>
                      <button
                        onClick={() => setExpandedId(project.id)}
                        className="mt-2 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        Show more
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsEditor;