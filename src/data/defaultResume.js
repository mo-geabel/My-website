import qrAttendance from "./qr_attendance.png";
import marketplace from "./marketplace.png";
import assistant from "./Assistant.png";
import candy from "./Candycrash.png";

export const defaultResumeData = {
  personalInfo: {
    name: "Mohammed Geabel",
    title: "Full-Stack Developer | Data Analyst",
    photo:
      "https://media.licdn.com/dms/image/v2/D4D03AQHs1JjLmHpv1g/profile-displayphoto-shrink_800_800/B4DZbtcfZIIEAc-/0/1747740391942?e=1753315200&v=beta&t=6-dIg38wilKbsNfT6V9llTzWRoFgPy1ryRhlKlTpNSk",
    email: "Mohamedgabel1@gmail.com",
    phone: "+90 (535) 627-6029",
    location: "Sakarya, Turkey",
    bio: "Mohammed Geabel is a passionate information systems engineering student with a growing interest in technology, software development, and AI. He is committed to continuous learning and creating impactful digital solutions.",
    social: {
      linkedin: "https://linkedin.com/in/mohammedgeabel",
      github: "https://github.com/mo-geabel",
      twitter: "https://x.com/Mohammed_Geabel",
      website: "https://fantastic-melba-c314f9.netlify.app",
    },
  },
  experiences: [
    {
      id: "1",
      company: "Yemeni Students Union",
      position: "Election Committee Coordinator",
      startDate: "2024-01",
      endDate: "2024-06",
      current: false,
      description:
        "Coordinated end-to-end election logistics for 200+ member student body, achieving on-schedule execution with zero procedural disputes across all voting rounds.",
      achievements: [
        "Coordinated end-to-end election logistics for 200+ member student body, achieving on-schedule execution with zero procedural disputes across all voting rounds."
      ],
    },
    {
      id: "2",
      company: "Ynabeea Aden",
      position: "Field Supervisor",
      startDate: "2020-01",
      endDate: "2021-12",
      current: false,
      description:
        "Led volunteers across communities, delegating tasks and tracking milestones to ensure on-schedule delivery of development initiatives.",
      achievements: [
        "Led 15+ volunteers across 3 communities, delegating tasks and tracking milestones to ensure on-schedule delivery of development initiatives."
      ],
    },
  ],
  education: [
    {
      id: "1",
      institution: "Sakarya University",
      degree: "B.Sc.",
      field: "Information Systems Engineering",
      startDate: "2022",
      endDate: "2027",
      description:
        "GPA: 3.33/4.0 | Expected Graduation: June 2027. Relevant Coursework: Data Structures, Algorithms, OOP, Database Systems, Operating Systems, Software Engineering.",
    },
  ],
  skills: [
    // Programming Languages
    { id: "1", name: "JavaScript", level: 4, category: "Programming Languages" },
    { id: "2", name: "TypeScript", level: 4, category: "Programming Languages" },
    { id: "3", name: "Python", level: 4, category: "Programming Languages" },
    { id: "4", name: "C#", level: 4, category: "Programming Languages" },
    { id: "5", name: "C++", level: 3, category: "Programming Languages" },
    { id: "6", name: "SQL", level: 4, category: "Programming Languages" },

    // Libraries & Frameworks
    { id: "7", name: "ASP.NET Core (MVC, Web API)", level: 4, category: "Libraries & Frameworks" },
    { id: "8", name: "React.js", level: 4, category: "Libraries & Frameworks" },
    { id: "9", name: "Next.js", level: 4, category: "Libraries & Frameworks" },
    { id: "10", name: "Node.js", level: 3, category: "Libraries & Frameworks" },
    { id: "11", name: "Pandas", level: 4, category: "Libraries & Frameworks" },
    { id: "12", name: "NumPy", level: 4, category: "Libraries & Frameworks" },
    { id: "13", name: "Scikit-learn", level: 4, category: "Libraries & Frameworks" },
    { id: "14", name: "Matplotlib", level: 4, category: "Libraries & Frameworks" },

    // AI & Machine Learning
    { id: "15", name: "Scikit-learn", level: 4, category: "AI & Machine Learning" },
    { id: "16", name: "Matplotlib", level: 4, category: "AI & Machine Learning" },
    { id: "17", name: "Keras", level: 3, category: "AI & Machine Learning" },
    { id: "18", name: "Jupyter Notebook", level: 4, category: "AI & Machine Learning" },

    // Web & APIs
    { id: "19", name: "RESTful APIs", level: 4, category: "Web & APIs" },
    { id: "20", name: "HTML", level: 4, category: "Web & APIs" },
    { id: "21", name: "CSS", level: 4, category: "Web & APIs" },
    { id: "22", name: "Drizzle ORM", level: 4, category: "Web & APIs" },

    // Databases
    { id: "23", name: "MS SQL Server", level: 4, category: "Databases" },
    { id: "24", name: "PostgreSQL", level: 4, category: "Databases" },
    { id: "25", name: "MySQL", level: 4, category: "Databases" },
    { id: "26", name: "MongoDB", level: 4, category: "Databases" },

    // Tools & Platforms
    { id: "27", name: "Git", level: 4, category: "Tools & Platforms" },
    { id: "28", name: "Linux", level: 3, category: "Tools & Platforms" },
    { id: "29", name: "Postman", level: 4, category: "Tools & Platforms" },
    { id: "30", name: "Docker", level: 3, category: "Tools & Platforms" },
    { id: "31", name: "VS Code", level: 4, category: "Tools & Platforms" },

    // Languages
    { id: "32", name: "Arabic (Native)", level: 5, category: "Languages" },
    { id: "33", name: "English (C1)", level: 4, category: "Languages" },
    { id: "34", name: "Turkish (C1)", level: 4, category: "Languages" },
    { id: "35", name: "German (A2)", level: 2, category: "Languages" },
  ],
  projects: [
    {
      id: "1",
      title: "QR Attendance & Automation Platform",
      description:
        "Engineered HMAC-SHA256 signed QR tokens rotating every 90 seconds with JWT session management, eliminating screenshot-based check-in fraud. Implemented GPS geo-fencing via Haversine formula, validating participant proximity within a configurable radius before granting attendance. Integrated n8n automation webhooks for real-time check-in notifications and one-click absence reporting; supports bulk Excel/CSV participant import.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "n8n"],
      link: "https://github.com/mo-geabel/QR-code-Attendence-system",
      image: qrAttendance,
    },
    {
      id: "2",
      title: "Second-Hand Marketplace (C2C)",
      description:
        "Engineered a full-stack C2C platform with a secure Escrow Payment System, supporting 50+ product listings across multiple transaction flows. Implemented Clean Architecture and Repository Pattern across 5+ decoupled service layers, improving testability and reducing inter-module coupling. Integrated real-time cargo tracking API serving end-to-end delivery status updates to buyers and sellers.",
      technologies: ["ASP.NET Core 8.0", "SQL Server", "Bootstrap", "Clean Architecture"],
      link: "https://github.com/mo-geabel/SecondHandPlatform",
      image: marketplace,
    },
    {
      id: "3",
      title: "Faculty of Medicine Portal",
      description:
        "Deployed a full-stack faculty portal serving 3 data domains (departments, courses, staff) across a 5+ page React frontend with an admin CMS. Designed RESTful API consolidating endpoints to reduce frontend data-fetch complexity, enabling non-technical staff to self-manage faculty content.",
      technologies: ["React.js", "Node.js", "MongoDB", "RESTful API"],
      link: "https://github.com/mo-geabel/Faculty_of_Medicine",
      image: assistant,
    },
    {
      id: "4",
      title: "Tile-Matching Puzzle Game",
      description:
        "Built a C# tile-matching game using OOP design patterns (State, Observer) with a custom animation engine and multi-level game state management.",
      technologies: ["C#", "Windows Forms", "OOP Design Patterns"],
      link: "https://github.com/mo-geabel/CandyGame",
      image: candy,
    },
  ],
  certificates: [
    {
      id: "1",
      name: "Machine Learning Specialization",
      issuer: "DeepLearning.AI & Stanford University",
      date: "2026",
      link: "https://www.coursera.org/specializations/machine-learning-introduction",
    },
    {
      id: "2",
      name: "Artificial Intelligence Program – Basic Education Certificate",
      issuer: "Turkey",
      date: "2026",
    },
    {
      id: "3",
      name: "The Complete Web Development Bootcamp",
      issuer: "Udemy",
      date: "2026",
      link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
    },
    {
      id: "4",
      name: "Supervised Machine Learning: Regression and Classification",
      issuer: "DeepLearning.AI",
      date: "2025-03",
      link: "https://www.coursera.org/account/accomplishments/verify/V7BH1P7QB7BL",
    },
    {
      id: "5",
      name: "Qisasna Virtual Exchange Participant",
      issuer: "Amideast/Yemen امديست اليمن",
      date: "2022-02",
      link: "https://api.badgr.io/public/assertions/Srmulr5LTjG2FXcwoOC96g?identity__email=mohamedgabel1%40gmail.com",
    },
    {
      id: "6",
      name: "Best Qisasna Podcast",
      issuer: "Amideast/Yemen امديست اليمن",
      date: "2022-05",
      link: "https://api.badgr.io/public/assertions/lHmFKiv7TzKbshQ3H3J4EA?identity__email=mohamedgabel1%40gmail.com",
    },
  ],
};
