import React, { useState } from 'react';
import { Certificate, ResumeData } from '../../types';
import { Plus, Check } from 'lucide-react';

interface CertificatesEditorProps {
  certificates: Certificate[];
  updateResumeData: (data: ResumeData) => void;
  resumeData: ResumeData;
}

const CertificatesEditor: React.FC<CertificatesEditorProps> = ({ 
  certificates, 
  updateResumeData,
  resumeData 
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [editingCertificate, setEditingCertificate] = useState<Certificate | null>(null);

  const handleAddNew = () => {
    const newCertificate: Certificate = {
      id: Date.now().toString(),
      name: '',
      issuer: '',
      date: '',
      link: ''
    };
    
    setEditingCertificate(newCertificate);
    setExpandedId(newCertificate.id);
  };

  const handleEdit = (cert: Certificate) => {
    setEditingCertificate({...cert});
    setExpandedId(cert.id);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this certificate?')) {
      const updatedCertificates = certificates.filter(cert => cert.id !== id);
      updateResumeData({
        ...resumeData,
        certificates: updatedCertificates
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editingCertificate) return;
    
    const { name, value } = e.target;
    
    setEditingCertificate({
      ...editingCertificate,
      [name]: value
    });
  };

  const handleSave = () => {
    if (!editingCertificate) return;
    
    // Validate required fields
    if (!editingCertificate.name || !editingCertificate.issuer || !editingCertificate.date) {
      alert('Please fill in all required fields');
      return;
    }
    
    const existingIndex = certificates.findIndex(cert => cert.id === editingCertificate.id);
    let updatedCertificates;
    
    if (existingIndex >= 0) {
      // Update existing
      updatedCertificates = [...certificates];
      updatedCertificates[existingIndex] = editingCertificate;
    } else {
      // Add new
      updatedCertificates = [...certificates, editingCertificate];
    }
    
    updateResumeData({
      ...resumeData,
      certificates: updatedCertificates
    });
    
    setEditingCertificate(null);
    setExpandedId(null);
  };

  const handleCancel = () => {
    setEditingCertificate(null);
    setExpandedId(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Certificates</h3>
        <button 
          onClick={handleAddNew}
          className="btn btn-primary"
        >
          <Plus size={18} className="mr-1" /> Add Certificate
        </button>
      </div>
      
      <div className="space-y-4">
        {/* Certificate Editor */}
        {editingCertificate && (
          <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 animate-fade-in">
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              {editingCertificate.id ? 'Edit Certificate' : 'Add New Certificate'}
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Certificate Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={editingCertificate.name}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Issuing Organization *
                </label>
                <input
                  type="text"
                  name="issuer"
                  value={editingCertificate.issuer}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Date Issued *
                </label>
                <input
                  type="month"
                  name="date"
                  value={editingCertificate.date}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Certificate Link
                </label>
                <input
                  type="url"
                  name="link"
                  value={editingCertificate.link || ''}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="https://example.com/certificate"
                />
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
        
        {/* Certificates List */}
        {!editingCertificate && certificates.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            No certificates added yet. Click the "Add Certificate" button to get started.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {!editingCertificate && certificates.map(cert => (
              <div 
                key={cert.id}
                className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-sm transition-shadow duration-200"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">{cert.name}</h4>
                    <p className="text-blue-600 dark:text-blue-400">{cert.issuer}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {new Date(cert.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                    </p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(cert)}
                      className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(cert.id)}
                      className="text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificatesEditor;