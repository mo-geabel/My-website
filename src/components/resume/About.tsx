import React from 'react';
import { PersonalInfo } from '../../types';

interface AboutProps {
  personalInfo: PersonalInfo;
}

const About: React.FC<AboutProps> = ({ personalInfo }) => {
  return (
    <section id="about" className="py-12 md:py-16 bg-white dark:bg-gray-900">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          About Me
        </h2>
        
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {personalInfo.bio}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;