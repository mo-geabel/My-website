import React from 'react';
import { Certificate } from '../../types';
import { Award, ExternalLink } from 'lucide-react';

interface CertificatesProps {
  certificates: Certificate[];
}

const Certificates: React.FC<CertificatesProps> = ({ certificates }) => {
  // Sort certificates by date (most recent first)
  const sortedCertificates = [...certificates].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <section id="certificates" className="py-12 md:py-16 bg-white dark:bg-gray-900">
      <div className="section-container">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-white flex items-center">
          <Award size={24} className="mr-3 text-blue-600 dark:text-blue-400" />
          Certifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sortedCertificates.map(certificate => (
            <div 
              key={certificate.id} 
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {certificate.name}
                </h3>
                
                <p className="text-blue-600 dark:text-blue-400 text-sm mb-3">
                  {certificate.issuer}
                </p>
                
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                  {new Date(certificate.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long' 
                  })}
                </p>
              </div>
              
              {certificate.link && (
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium mt-2"
                >
                  View Certificate <ExternalLink size={16} className="ml-1" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;