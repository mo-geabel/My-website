import React, { useMemo } from 'react';
import { Skill } from '../../types';
import { Code } from 'lucide-react';

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  // Group skills by category
  const groupedSkills = useMemo(() => {
    const groups: Record<string, Skill[]> = {};
    
    skills.forEach(skill => {
      if (!groups[skill.category]) {
        groups[skill.category] = [];
      }
      groups[skill.category].push(skill);
    });
    
    // Sort skills within each category by level (descending)
    Object.keys(groups).forEach(category => {
      groups[category].sort((a, b) => b.level - a.level);
    });
    
    return groups;
  }, [skills]);

  return (
    <section id="skills" className="py-12 md:py-16 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white flex items-center">
          <Code size={24} className="mr-3 text-blue-600 dark:text-blue-400" />
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div 
              key={category} 
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {category}
              </h3>
              
              <div className="space-y-3">
                {categorySkills.map(skill => (
                  <div key={skill.id}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {getSkillLevelText(skill.level)}
                      </span>
                    </div>
                    
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${skill.level * 20}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper function to convert skill level to text
function getSkillLevelText(level: number): string {
  switch (level) {
    case 1: return 'Beginner';
    case 2: return 'Elementary';
    case 3: return 'Intermediate';
    case 4: return 'Advanced';
    case 5: return 'Expert';
    default: return '';
  }
}

export default Skills;