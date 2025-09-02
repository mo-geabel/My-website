import candy from "../data/candycrash.png";
import Assistant from "../data/assistant.png";
import Earth from "../data/Earthquick.png";

export const defaultResumeData = {
  personalInfo: {
    name: "Mohammed Geabel",
    title: "Full-Stack Developer | Data Analyst",
    photo:
      "https://media.licdn.com/dms/image/v2/D4D03AQHs1JjLmHpv1g/profile-displayphoto-shrink_800_800/B4DZbtcfZIIEAc-/0/1747740391942?e=1753315200&v=beta&t=6-dIg38wilKbsNfT6V9llTzWRoFgPy1ryRhlKlTpNSk",
    email: "Mohamedgabel1@gmail.com",
    phone: "+90 (535) 627 60 29",
    location: "Turkiye ,Sakarya",
    bio: "Mohammed Geabel is a passionate information systems engineering student with a growing interest in technology, software development, and AI. He is committed to continuous learning and creating impactful digital solutions.",
    social: {
      linkedin: "https://www.linkedin.com/in/mohammed-geabel-9b60921b5/",
      github: "https://github.com/mo-geabel",
      twitter: "https://x.com/Mohammed_Geabel",
      website: "/",
    },
  },
  experiences: [
    {
      id: "1",
      company: "Yemeni Student Union.",
      position: "Rapporteur of the Yemeni Student Union",
      startDate: "2023-09",
      endDate: "2024-09",
      current: false,
      description:
        "As a rapporteur for the Yemeni Student Union, I played a pivotal role in facilitating effective communication and collaboration among members during the 10th cycle of elections. My responsibilities included documenting discussions, decisions, and action items during meetings, ensuring that all voices were heard and accurately represented. I organized meeting agendas and prepared comprehensive reports summarizing key points, which contributed to transparent decision-making processes.In this capacity, I worked closely with committee members and stakeholders to coordinate election logistics, manage timelines, and uphold the union’s objectives. My experience as a rapporteur enhanced my skills in organization, communication, and teamwork while fostering a sense of community among students.",
      achievements: [
        "Successfully coordinated election logistics and timelines, ensuring a smooth and organized 10th cycle of elections.",
        "Delivered clear, actionable reports that supported transparent decision-making and strengthened trust among members.",
        "Facilitated effective communication and collaboration, uniting diverse student voices during a critical election period.",
      ],
    },
    {
      id: "2",
      company: "Yanabee Aden",
      position: "Field Supervisor",
      startDate: "2020-07",
      endDate: "2021-07",
      current: false,
      description:
        "As a Field Supervisor at Yanabea, I was responsible for overseeing on-site operations, coordinating team activities, and ensuring that daily field tasks were executed efficiently and in compliance with company standards. I supervised field staff, monitored work progress, resolved on-ground issues, and ensured that safety and quality standards were consistently upheld. My role required strong communication, leadership, and problem-solving skills to ensure smooth operations and successful project delivery.",
      achievements: [
        "Team Leadership: Guided field teams to meet operational goals and deadlines.",
        "Communication: Acted as a liaison between management and field staff.",
        "Problem-Solving: Quickly addressed challenges and ensured workflow continuity.",
        "Project Coordination: Managed daily field activities and progress tracking.",
        "Quality Control: Ensured compliance with safety and performance standards.",
        "Time Management: Prioritized tasks to optimize on-site productivity.",
        "Adaptability: Responded effectively to dynamic field conditions and requirements.",
      ],
    },
  ],
  education: [
    {
      id: "1",
      institution: "Sakarya University",
      degree: "Bachelor degree ",
      field: "Information Systems Engineering",
      startDate: "2022",
      endDate: "2027",
      description:
        "Information Systems Engineering is an interdisciplinary field that combines computer science, engineering, and business to design, develop, and manage information systems. It focuses on creating efficient technological solutions that support organizational operations, decision-making, and digital transformation.",
    },
    {
      id: "2",
      institution: "Nagib Salami Sec.School",
      degree: "High School Degree",
      field: "Science",
      startDate: "2018",
      endDate: "2021",
      description:
        "Graduated with honors from Nagib Salami Secondary School, specializing in Science. Developed a strong foundation in scientific principles and analytical thinking, preparing for further studies in Information Systems Engineering.",
    },
  ],
  skills: [
    {
      id: "1",
      name: "JavaScript",
      level: 4,
      category: "Programming Languages",
    },
    { id: "2", name: "C++", level: 3, category: "Programming Languages" },
    { id: "3", name: "React", level: 4, category: "Frontend" },
    { id: "4", name: "Node.js", level: 3, category: "Backend" },
    { id: "5", name: "SQL", level: 4, category: "Databases" },
    { id: "6", name: "MongoDB", level: 4, category: "Databases" },
    { id: "7", name: "Decision Making", level: 3, category: "Leadership" },
    { id: "8", name: "Graphic Design", level: 3, category: "Art" },
    { id: "9", name: "Restful API", level: 4, category: "API" },
    { id: "10", name: "Python", level: 4, category: "Programming Languages" },
    { id: "11", name: "CSS", level: 4, category: "Frontend" },
    { id: "12", name: "English", level: 4, category: "Language" },
    { id: "13", name: "Arabic", level: 5, category: "Language" },
    { id: "14", name: "Turkish", level: 4, category: "Language" },
    { id: "15", name: "German", level: 2, category: "Language" },
  ],
  projects: [
    {
      id: "1",
      title: "Collaborative Insights into House Pricing Using Data Science",
      description:
        "As a team, we’ve just wrapped up and successfully presented our class project: “Exploratory Data Analysis on Turkish Housing Market” 📊",
      technologies: ["Jupyter", "Python", "Pandas", "Matplotlib"],
      link: "https://github.com/MamoMGD1/data_science_st",
      image:
        "https://raw.githubusercontent.com/MamoMGD1/data_science_st/main/images/cover.png",
    },
    {
      id: "2",
      title:
        "📊 Reconstructing and Analyzing Türkiye’s Earthquake Data with Machine Learning",
      description:
        "The ProblemWhile studying seismic activity in Türkiye, I encountered a major challenge:76% of the Moment Magnitude (Mw) values were missing — the most essential metric for evaluating earthquake strength.This data gap made it nearly impossible to conduct meaningful statistical or geophysical analysis across three decades of records.",
      technologies: [
        "Python",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "Scikit-learn",
        "xgboost",
      ],
      link: "https://github.com/mo-geabel/Analysis-earthquakes-in-Turkiye/tree/main",
      image: Earth,
    },
    {
      id: "3",
      title: "Faculty of Medicine Assistant Management System",
      description:
        "MERN-based web app for assistant scheduling, emergency case management, and role-based access in medical faculties.",
      technologies: [
        "nodejs",
        "React",
        "Bcrypt",
        "MongoDB,jwt",
        "Express",
        "Mongoose",
        "context-api",
        "vite",
      ],
      link: "https://github.com/alexjohnson/collab-tool",
      image: Assistant,
    },
    {
      id: "4",
      title: "Candy Crush Game",
      description:
        "Windows-based Candy Crush game built with C# and .Net, featuring colorful graphics and engaging gameplay.",
      technologies: ["C#", ".Net", "Windows Forms", "Visual Studio"],
      link: "https://github.com/mo-geabel/CandyGame",
      image: candy,
    },
  ],
  certificates: [
    {
      id: "1",
      name: "Supervised Machine Learning: Regression and Classification ",
      issuer: "DeepLearning.AI",
      date: "2025-03",
      link: "https://www.coursera.org/account/accomplishments/verify/V7BH1P7QB7BL",
    },
    {
      id: "2",
      name: "Qisasna Virtual Exchange Participant",
      issuer: "Amideast/Yemen امديست اليمن",
      date: "2022-02",
      link: "https://api.badgr.io/public/assertions/Srmulr5LTjG2FXcwoOC96g?identity__email=mohamedgabel1%40gmail.com",
    },
    {
      id: "3",
      name: "Best Qisasna Podcast",
      issuer: "Amideast/Yemen امديست اليمن",
      date: "2022-05",
      link: "https://api.badgr.io/public/assertions/lHmFKiv7TzKbshQ3H3J4EA?identity__email=mohamedgabel1%40gmail.com",
    },
  ],
};
