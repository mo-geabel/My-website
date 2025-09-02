import React from 'react';
import { Education as EducationType } from '../../types';
import { GraduationCap } from 'lucide-react';

interface EducationProps {
  education: EducationType[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  // Sort education by end date (most recent first)
  const sortedEducation = [...education].sort((a, b) => {
    return parseInt(b.endDate) - parseInt(a.endDate);
  });

  return (
    <section id="education" className="py-12 md:py-16 bg-white dark:bg-gray-900">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white flex items-center">
          <GraduationCap size={24} className="mr-3 text-blue-600 dark:text-blue-400" />
          Education
        </h2>
        
        <div className="space-y-6">
          {sortedEducation.map((edu) => (
            <div 
              key={edu.id} 
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {edu.degree} in {edu.field}
                  </h3>
                  <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-1">
                    {edu.institution}
                  </h4>
                </div>
                
                <div className="mt-2 md:mt-0 text-sm font-medium text-gray-500 dark:text-gray-400">
                  <span>{edu.startDate}</span>
                  <span> - </span>
                  <span>{edu.endDate}</span>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;