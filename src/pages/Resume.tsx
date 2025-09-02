import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/resume/Header";
import About from "../components/resume/About";
import Experience from "../components/resume/Experience";
import Education from "../components/resume/Education";
import Skills from "../components/resume/Skills";
import Projects from "../components/resume/Projects";
import Certificates from "../components/resume/Certificates";
import Footer from "../components/resume/Footer";
import { useResume } from "../context/ResumeContext";
import { Moon, Sun, Settings } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Resume: React.FC = () => {
  const { resumeData } = useResume();
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);
  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Admin and Theme Toggle */}
      <div className="fixed top-4 right-4 flex space-x-2 z-50">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
          aria-label={
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
          }
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button
          onClick={() => {
            window.location.href = "/admin";
          }}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
          aria-label={
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
          }
        >
          <Settings size={20} />
        </button>
      </div>

      <Header personalInfo={resumeData.personalInfo} />

      <main className="animate-fade-in">
        <div data-aos="fade-down" className="my-20">
          <About personalInfo={resumeData.personalInfo} />
        </div>
        <div data-aos="fade-right" className="my-20">
          <Experience experiences={resumeData.experiences} />
        </div>
        <div data-aos="fade-left" className="my-20">
          <Skills skills={resumeData.skills} />
        </div>
        <div data-aos="zoom-in" className="my-20">
          <Projects projects={resumeData.projects} />
        </div>
        <div data-aos="fade-down" className="my-20">
          <Education education={resumeData.education} />
        </div>
        <div data-aos="fade-up" className="my-20">
          <Certificates certificates={resumeData.certificates} />
        </div>
        <div data-aos="fade-up">
          <Footer data-aos="fade-up" personalInfo={resumeData.personalInfo} />
        </div>
      </main>
    </div>
  );
};

export default Resume;
