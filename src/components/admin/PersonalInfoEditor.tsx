import React, { useState } from 'react';
import { PersonalInfo, ResumeData } from '../../types';

interface PersonalInfoEditorProps {
  personalInfo: PersonalInfo;
  updateResumeData: (data: ResumeData) => void;
  resumeData: ResumeData;
}

const PersonalInfoEditor: React.FC<PersonalInfoEditorProps> = ({ 
  personalInfo, 
  updateResumeData,
  resumeData 
}) => {
  const [formData, setFormData] = useState<PersonalInfo>({...personalInfo});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name.startsWith('social.')) {
      const socialField = name.split('.')[1];
      setFormData({
        ...formData,
        social: {
          ...formData.social,
          [socialField]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateResumeData({
      ...resumeData,
      personalInfo: formData
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Basic Information</h3>
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>
          
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Professional Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="input-field"
            />
          </div>
          
          <div>
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Photo URL
            </label>
            <input
              type="url"
              id="photo"
              name="photo"
              value={formData.photo}
              onChange={handleChange}
              className="input-field"
              placeholder="https://example.com/your-photo.jpg"
            />
            {formData.photo && (
              <div className="mt-2">
                <img 
                  src={formData.photo} 
                  alt="Preview" 
                  className="h-16 w-16 rounded-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
        
        {/* Bio and Social */}
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Bio & Social Media</h3>
            
            <div className="mb-4">
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Professional Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows={5}
                className="textarea-field"
                placeholder="Write a professional summary about yourself..."
              ></textarea>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Social Media</h4>
              
              <div>
                <label htmlFor="social.linkedin" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  LinkedIn URL
                </label>
                <input
                  type="url"
                  id="social.linkedin"
                  name="social.linkedin"
                  value={formData.social.linkedin || ''}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>
              
              <div>
                <label htmlFor="social.github" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  GitHub URL
                </label>
                <input
                  type="url"
                  id="social.github"
                  name="social.github"
                  value={formData.social.github || ''}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="https://github.com/yourusername"
                />
              </div>
              
              <div>
                <label htmlFor="social.twitter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Twitter URL
                </label>
                <input
                  type="url"
                  id="social.twitter"
                  name="social.twitter"
                  value={formData.social.twitter || ''}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="https://twitter.com/yourusername"
                />
              </div>
              
              <div>
                <label htmlFor="social.website" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Personal Website
                </label>
                <input
                  type="url"
                  id="social.website"
                  name="social.website"
                  value={formData.social.website || ''}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="https://yourwebsite.com"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <button 
          type="submit" 
          className="btn btn-primary"
        >
          Save Personal Information
        </button>
      </div>
    </form>
  );
};

export default PersonalInfoEditor;