import React from 'react';
import { Experience as ExperienceType } from '../../types';
import { Briefcase } from 'lucide-react';

interface ExperienceProps {
  experiences: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  // Sort experiences by date (most recent first)
  const sortedExperiences = [...experiences].sort((a, b) => {
    const dateA = a.current ? new Date().getTime() : new Date(a.endDate).getTime();
    const dateB = b.current ? new Date().getTime() : new Date(b.endDate).getTime();
    return dateB - dateA;
  });

  return (
    <section id="experience" className="py-12 md:py-16 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white flex items-center">
          <Briefcase size={24} className="mr-3 text-blue-600 dark:text-blue-400" />
          Work Experience
        </h2>
        
        <div className="space-y-8">
          {sortedExperiences.map((experience, index) => (
            <div 
              key={experience.id} 
              className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {experience.position}
                  </h3>
                  <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-1">
                    {experience.company}
                  </h4>
                </div>
                
                <div className="mt-2 md:mt-0 text-sm font-medium text-gray-500 dark:text-gray-400">
                  <span>
                    {new Date(experience.startDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short' 
                    })}
                  </span>
                  <span> - </span>
                  <span>
                    {experience.current 
                      ? 'Present' 
                      : new Date(experience.endDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short' 
                        })
                    }
                  </span>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {experience.description}
              </p>
              
              {experience.achievements.length > 0 && (
                <div>
                  <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Key Achievements:
                  </h5>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className="ml-2">{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;