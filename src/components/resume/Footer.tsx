import React from "react";
import { PersonalInfo } from "../../types";
import {
  Github,
  Linkedin,
  Twitter,
  Globe,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import ContactForm from "./ContactForm";

interface FooterProps {
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

const Footer: React.FC<FooterProps> = ({ personalInfo }) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="section-container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Me</h3>

            <div className="space-y-3">
              <div className="flex items-center">
                <Mail size={18} className="mr-3 text-blue-400" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>

              <div className="flex items-center">
                <Phone size={18} className="mr-3 text-blue-400" />
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>

              <div className="flex items-center">
                <MapPin size={18} className="mr-3 text-blue-400" />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    personalInfo.location
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-blue-400 transition-colors"
                >
                  {personalInfo.location}
                </a>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Connect</h3>

              <div className="flex space-x-4">
                {personalInfo.social.linkedin && (
                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={24} />
                  </a>
                )}

                {personalInfo.social.github && (
                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github size={24} />
                  </a>
                )}

                {personalInfo.social.twitter && (
                  <a
                    href={personalInfo.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                    aria-label="Twitter Profile"
                  >
                    <XLogo size={24} />
                  </a>
                )}

                {personalInfo.social.website && (
                  <a
                    href={personalInfo.social.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                    aria-label="Personal Website"
                  >
                    <Globe size={24} />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <ContactForm />
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
