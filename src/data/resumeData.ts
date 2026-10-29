export interface Project {
  id: string;
  title: string;
  year: string;
  tech: string[];
  category: 'Web Development' | 'Hardware & Systems';
  summary: string;
  description: string;
  keyFeatures: string[];
  githubUrl?: string;
  badge: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'training' | 'internship' | 'community' | 'leadership' | 'education' | 'event';
  advancementTitle: string;
  advancementTier: 'common' | 'uncommon' | 'rare' | 'challenge';
  highlights: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  score: string;
  scoreLabel: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  subtitle: string;
  iconName: string;
  skills: {
    name: string;
    level: string;
    rarity: 'Common' | 'Uncommon' | 'Rare' | 'Brewing';
    detail: string;
  }[];
}

export const RESUME_DATA = {
  name: "Manjeet Singh",
  title: "Web Developer & B.Tech IT Student",
  location: "Jodhpur & Kota, Rajasthan, India",
  tagline: "Building clean, responsive web experiences with structured semantic code and creative precision.",
  bio: "Information Technology undergraduate at Rajasthan Technical University, Kota (CGPA: 9.3). Building responsive web interfaces using HTML, CSS, and JavaScript. Trained at Curious Team Learning Pvt. Ltd., active developer in DSC RTU, and continuous learner expanding into React.js, Node.js, and Data Structures.",
  level: "9.3",
  hp: 10,
  xpProgress: 93,
  
  contact: {
    phone: "+91-6377907860",
    email: "manjeetsinghcharan1444@gmail.com",
    github: "https://github.com/manjeetsinghcharan",
    githubHandle: "manjeetsinghcharan",
    linkedin: "https://www.linkedin.com/in/manjeetsinghh1444/",
    linkedinHandle: "manjeetsinghh1444",
    locationPrimary: "Kota, Rajasthan",
    hometown: "Jodhpur, Rajasthan",
  },

  education: [
    {
      institution: "Rajasthan Technical University, Kota",
      degree: "Bachelor of Technology in Information Technology",
      period: "2024 – 2028",
      location: "Kota, Rajasthan",
      score: "9.3 CGPA",
      scoreLabel: "Academic Standing",
      highlights: [
        "Specializing in Information Technology core curriculum",
        "Achieved a 9.3 CGPA in foundational semesters",
        "Active contributor to student technical initiatives and campus placement cells"
      ]
    },
    {
      institution: "Swami Vivekanand Govt. Model School, Balesar",
      degree: "Senior Secondary (12th Board)",
      period: "2022 – 2023",
      location: "Jodhpur, Rajasthan",
      score: "86%",
      scoreLabel: "Board Result",
      highlights: [
        "Completed rigorous science & mathematics high school curriculum with 86%",
        "Developed analytical problem-solving mindset that led to studying engineering"
      ]
    }
  ] as EducationItem[],

  skills: [
    {
      category: "Core Languages",
      subtitle: "Programming & markup languages",
      iconName: "Code2",
      skills: [
        { name: "C", level: "Procedural", rarity: "Common", detail: "Memory management, pointers, data types, standard library" },
        { name: "C++", level: "OOP & STL", rarity: "Uncommon", detail: "Object-oriented programming, STL containers, problem solving" },
        { name: "Java", level: "Object-Oriented", rarity: "Uncommon", detail: "Classes, inheritance, polymorphism, collections framework" },
        { name: "JavaScript", level: "ES6+", rarity: "Uncommon", detail: "DOM manipulation, async operations, event handling" },
        { name: "HTML5", level: "Semantic", rarity: "Common", detail: "Accessible layouts, SEO structure, semantic elements" },
        { name: "CSS3", level: "Responsive", rarity: "Common", detail: "Flexbox, Grid, media queries, animations" }
      ]
    },
    {
      category: "Core CS Fundamentals",
      subtitle: "Computer science theory & problem solving",
      iconName: "BookOpen",
      skills: [
        { name: "Object-Oriented Programming", level: "Core Concept", rarity: "Uncommon", detail: "Encapsulation, inheritance, polymorphism, abstraction" },
        { name: "Data Structures & Algorithms", level: "Foundations", rarity: "Uncommon", detail: "Arrays, linked lists, stacks, queues, searching & sorting" },
        { name: "Operating Systems", level: "Fundamentals", rarity: "Common", detail: "Process management, memory management, scheduling, file systems" },
        { name: "Computer Networks", level: "Fundamentals", rarity: "Common", detail: "OSI model, TCP/IP, HTTP, DNS, network protocols" }
      ]
    },
    {
      category: "Web Technologies",
      subtitle: "Frontend development & DOM control",
      iconName: "Globe",
      skills: [
        { name: "Responsive Design", level: "Cross-Device", rarity: "Uncommon", detail: "Mobile-first viewports, fluid units, adaptive grids" },
        { name: "DOM Manipulation", level: "Interactive UI", rarity: "Uncommon", detail: "Dynamic elements, event listeners, form handling" }
      ]
    },
    {
      category: "Developer Tools",
      subtitle: "Version control & development environment",
      iconName: "Terminal",
      skills: [
        { name: "Git", level: "Version Control", rarity: "Rare", detail: "Branching, merging, commit staging, conflict resolution" },
        { name: "GitHub", level: "Collaboration", rarity: "Rare", detail: "Remote repos, pull requests, issue tracking" },
        { name: "VS Code", level: "Primary IDE", rarity: "Common", detail: "Extensions, debugging, workspace setup" }
      ]
    },
    {
      category: "Currently Learning",
      subtitle: "Active learning stack",
      iconName: "FlaskConical",
      skills: [
        { name: "React.js", level: "In Progress", rarity: "Brewing", detail: "Components, hooks, state management, modern UI" },
        { name: "Node.js", level: "In Progress", rarity: "Brewing", detail: "Server fundamentals, npm ecosystem, runtime" }
      ]
    },
    {
      category: "Soft Skills",
      subtitle: "Collaboration & execution",
      iconName: "Users",
      skills: [
        { name: "Communication", level: "Active", rarity: "Common", detail: "Clear technical and interpersonal exchange" },
        { name: "Team Collaboration", level: "Collaborator", rarity: "Common", detail: "Pair programming, code reviews, DSC initiatives" },
        { name: "Event Coordination", level: "Leadership", rarity: "Uncommon", detail: "Organizing coding contests and student bootcamps" },
        { name: "Problem Solving", level: "Analytical", rarity: "Uncommon", detail: "Breaking complex tasks into modular steps" },
        { name: "Time Management", level: "Structured", rarity: "Common", detail: "Balancing academics with web projects" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "flashcard-generator",
      title: "FlashCard Generator App",
      year: "2026",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "Web Development",
      badge: "Training Project",
      summary: "Dynamic flashcard generator built during 45-day training at Curious Team Learning Pvt. Ltd.",
      description: "An interactive educational application that lets users create, organize, and flip through custom flashcard decks. Features dynamic card rendering, interactive flip animations, and responsive layout across devices.",
      keyFeatures: [
        "Dynamic flashcard creation with form validation",
        "CSS 3D card flip animation for question/answer transitions",
        "Responsive layout using flexbox and grid",
        "Built during 45-day training at Curious Team Learning Pvt. Ltd."
      ],
      githubUrl: "https://github.com/manjeetsinghcharan",
    },
    {
      id: "school-website",
      title: "School Website (Frontend)",
      year: "2025",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "Web Development",
      badge: "Institutional Portal",
      summary: "Multi-page school portal with academic and administrative sections.",
      description: "A comprehensive school website providing students, parents, and faculty with access to academic programs, announcements, and campus contacts. Built with semantic HTML, custom CSS, and JavaScript for navigation.",
      keyFeatures: [
        "Multi-page architecture: Home, About, Academics, Contact",
        "Clean educational design system",
        "Interactive navigation with responsive mobile menu",
        "Accessible contact directory and academic info"
      ],
      githubUrl: "https://github.com/manjeetsinghcharan/school-website",
    },
    {
      id: "portfolio-website",
      title: "Personal Portfolio Website",
      year: "2025",
      tech: ["HTML", "CSS"],
      category: "Web Development",
      badge: "Responsive Showcase",
      summary: "Lightweight personal portfolio showcasing projects, skills, and contact channels.",
      description: "A clean portfolio website using vanilla HTML and CSS. Focuses on crisp layout, fluid responsive breakpoints across all viewports, and accessible contact pathways with zero external dependencies.",
      keyFeatures: [
        "Hand-coded responsive layout with CSS Flexbox",
        "Project showcase with direct GitHub links",
        "Technical skills and education section",
        "Zero external dependencies, fast page load"
      ],
      githubUrl: "https://github.com/manjeetsinghcharan/portfoliomanjeetcharan",
    },
    {
      id: "autotank-exhibition",
      title: "AutoTank Project Exhibition",
      year: "2024",
      tech: ["Automation", "Hardware Logic", "Team Engineering"],
      category: "Hardware & Systems",
      badge: "Campus Exhibition",
      summary: "Automated tank project demonstrated at RTU Campus technical exhibition.",
      description: "Participated as a team member in a university technical exhibition, building and demonstrating an automated tank vehicle. Gained hands-on experience in hardware-software coordination and team collaboration.",
      keyFeatures: [
        "Demonstrated automated navigation at university tech expo",
        "Multidisciplinary team collaboration",
        "Sensor integration and physical logic workflows",
        "Live demonstrations to faculty and students"
      ]
    }
  ] as Project[],

  experience: [
    {
      id: "curious-team",
      role: "Web Development Trainee",
      organization: "Curious Team Learning Pvt. Ltd.",
      location: "Kota, Rajasthan",
      period: "15 May 2026 – 30 June 2026 (45 Days)",
      type: "training",
      advancementTitle: "Training Milestone",
      advancementTier: "rare",
      highlights: [
        "Completed an intensive 45-day hands-on Web Development training program",
        "Built FlashCard Generator app with dynamic card generation and interactive UI",
        "Strengthened practical skills in HTML, CSS, JavaScript, and responsive design"
      ]
    },
    {
      id: "xpert-coders",
      role: "Web Developer Intern",
      organization: "XPERT CODERS Pvt. Ltd.",
      location: "Jodhpur, Rajasthan",
      period: "June 2025 – June 2025",
      type: "internship",
      advancementTitle: "Industry Experience",
      advancementTier: "rare",
      highlights: [
        "Worked on frontend development using HTML, CSS, and JavaScript",
        "Assisted senior developers in building and improving website layouts",
        "Translated wireframes into responsive, functional web pages"
      ]
    },
    {
      id: "dsc-rtu",
      role: "Web Developer",
      organization: "Developer Student Club RTU",
      location: "Kota, Rajasthan",
      period: "Sep 2025 – Present",
      type: "community",
      advancementTitle: "Community Builder",
      advancementTier: "uncommon",
      highlights: [
        "Contributed to web-related initiatives and community projects",
        "Collaborated with student developers using Git and GitHub",
        "Promoted open-source habits and frontend best practices"
      ]
    },
    {
      id: "placement-cell",
      role: "Core Member",
      organization: "Placement Cell – Rajasthan Technical University",
      location: "Kota, Rajasthan",
      period: "Sep 2025 – Present",
      type: "leadership",
      advancementTitle: "Campus Leadership",
      advancementTier: "uncommon",
      highlights: [
        "Coordinated placement-related student operations and drive announcements",
        "Bridged communications between administration and students",
        "Supported logistics for campus recruitment drives"
      ]
    },
    {
      id: "coding-events",
      role: "Event Organizer / Volunteer",
      organization: "Technical & Coding Events",
      location: "RTU Campus",
      period: "2024 – Present",
      type: "event",
      advancementTitle: "Event Organizer",
      advancementTier: "common",
      highlights: [
        "Organized coding workshops and technical events for university students",
        "Managed attendee registration and on-ground execution",
        "Fostered problem-solving culture among engineering cohorts"
      ]
    }
  ] as ExperienceItem[],

  certifications: [
    {
      title: "Git Basics",
      issuer: "Version Control Fundamentals",
      icon: "GitBranch",
      badge: "Certified",
      skillsApplied: ["Branching", "Commit Discipline", "Merge Strategies"]
    },
    {
      title: "Practical GitHub Actions",
      issuer: "CI/CD & Automation",
      icon: "Workflow",
      badge: "Certified",
      skillsApplied: ["Continuous Integration", "Workflow YAML", "Automated Checks"]
    }
  ]
};
