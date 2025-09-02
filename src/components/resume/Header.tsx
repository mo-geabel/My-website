import React, { useState } from "react";
import { PersonalInfo } from "../../types";
import { Github, Linkedin, Globe } from "lucide-react";
import profilepic from "../../../Public/image/Profile.jpg";

interface HeaderProps {
  personalInfo: PersonalInfo;
}

interface XLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const XLogo: React.FC<XLogoProps> = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M18.36 3H21L14.81 10.44L22.33 21H16.23L11.46 14.74L5.94 21H3L9.59 13.1L2.33 3H8.58L12.9 8.73L18.36 3ZM17.27 19.43H19.08L7.17 4.5H5.26L17.27 19.43Z" />
  </svg>
);

const Header: React.FC<HeaderProps> = ({ personalInfo }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <header className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Profile Image */}
          <div
            onClick={() => setIsZoomed(true)}
            className="w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full border-4 border-white shadow-lg cursor-pointer"
          >
            <img
              src={profilepic}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Zoomed-in Overlay */}
          {isZoomed && (
            <div
              onClick={() => setIsZoomed(false)}
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 cursor-zoom-out"
            >
              <img
                src={profilepic}
                alt={personalInfo.name}
                className="max-w-[90%] max-h-[90%] rounded-lg shadow-xl"
              />
            </div>
          )}

          {/* Name and Title */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              {personalInfo.name}
            </h1>
            <h2 className="text-xl md:text-2xl mb-4 text-blue-100">
              {personalInfo.title}
            </h2>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 mb-4 text-sm">
              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center hover:underline"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>{personalInfo.email}</span>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center hover:underline"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>{personalInfo.phone}</span>
              </a>

              {/* Location */}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  personalInfo.location
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:underline"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{personalInfo.location}</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-4">
              {personalInfo.social.linkedin && (
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-200 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
              )}
              {personalInfo.social.github && (
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-200 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
              )}
              {personalInfo.social.twitter && (
                <a
                  href={personalInfo.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-200 transition-colors"
                  aria-label="Twitter Profile"
                >
                  <XLogo size={20} />
                </a>
              )}
              {personalInfo.social.website && (
                <a
                  href={personalInfo.social.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-200 transition-colors"
                  aria-label="Personal Website"
                >
                  <Globe size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative wave pattern */}
      <div className="absolute bottom-0 top-1 left-0 right-0 h-16 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full text-white dark:text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </header>
  );
};

export default Header;
