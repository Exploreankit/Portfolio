import type { Project, SkillCategory, Experience, Achievement, Stat, NavItem } from "@/types";

// ============================================================
// Navigation
// ============================================================
export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Stats", href: "#stats" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

// ============================================================
// Projects
// ============================================================
export const projects: Project[] = [
  {
    id: "smart-crm",
    title: "Smart CRM",
    description:
      "A full-stack Customer Relationship Management platform for managing leads, sales pipelines, and team performance with analytics and admin controls.",
    longDescription:
      "Built a production-grade CRM platform with secure JWT authentication, role-based access control, and refresh token rotation. Features a Kanban pipeline with drag-and-drop workflow, lead management with CRUD, filtering, pagination and scoring, an analytics dashboard with Recharts, task management, CSV export, and full admin controls.",
    tech: ["React.js", "Vite", "Tailwind CSS", "Zustand", "Axios", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "JWT", "Recharts"],
    features: [
      "JWT auth with refresh token rotation & RBAC",
      "Lead management with filtering, pagination & scoring",
      "Kanban pipeline with drag-and-drop workflow",
      "Analytics dashboard with Recharts",
      "Task management & CSV export",
      "Admin controls & team performance tracking",
    ],
    github: "https://github.com/Exploreankit/CrmSync",
    demo: "https://smart-crm-frontend-woad.vercel.app/",
    image: "/projects/smart-crm.png",
    gradient: "from-violet-600/20 to-purple-600/20",
    featured: true,
    status: "live",
  },
  {
    id: "syncly-chat",
    title: "Syncly",
    description:
      "A scalable real-time chat application with 1-to-1 and group messaging, typing indicators, read receipts, emoji reactions, and online presence tracking.",
    longDescription:
      "Developed a full-featured real-time chat app using React 19, Node.js, and Socket.IO. Implements secure JWT authentication with refresh token rotation, 1-to-1 and group chat with admin controls, typing indicators, read receipts, emoji reactions, reply-to messages, soft delete, online/offline presence, last seen tracking, and multi-tab synchronization.",
    tech: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Zustand", "Axios", "Node.js", "Express.js", "MongoDB", "Mongoose", "Socket.IO", "JWT"],
    features: [
      "JWT auth with refresh token rotation & session handling",
      "1-to-1 and group chat with admin controls",
      "Typing indicators, read receipts & emoji reactions",
      "Reply-to messages & soft delete",
      "Online/offline presence & last seen tracking",
      "Multi-tab synchronization",
    ],
    github: "https://github.com/Exploreankit/syncly_chat",
    demo: "https://chat-app-frontend-ebon-three.vercel.app/",
    image: "/projects/syncly-chat.png",
    gradient: "from-cyan-600/20 to-blue-600/20",
    featured: false,
    status: "live",
  },
  {
    id: "crypto-place",
    title: "CryptoPlace",
    description:
      "A responsive cryptocurrency price tracker integrating the CoinGecko API to display live prices, market cap, and trading volume for 500+ cryptocurrencies.",
    longDescription:
      "Built a responsive crypto tracker using React.js and Vite with CoinGecko API integration. Displays live price, market cap, and trading volume for 500+ cryptocurrencies. Features search and filter functionality, optimized state management with React Hooks for smooth dynamic updates, and a clean responsive UI.",
    tech: ["React.js", "Vite", "CoinGecko API", "React Hooks", "CSS3"],
    features: [
      "Live price, market cap & trading volume for 500+ coins",
      "Search and filter functionality",
      "Optimized state management with React Hooks",
      "Responsive UI with smooth dynamic updates",
    ],
    github: "https://github.com/Exploreankit/CryptoPlace",
    demo: "https://crypto-place-nine-xi.vercel.app/",
    image: "/projects/crypto-place.png",
    gradient: "from-emerald-600/20 to-teal-600/20",
    featured: false,
    status: "live",
  },
  {
    id: "music-to",
    title: "MusicTo",
    description:
      "Final year project — an automated music player using micro-facial expression detection with a custom LEARNet CNN achieving 95% accuracy.",
    longDescription:
      "Final Year Group Project: Automated Music Player with Micro-Facial Expression Detection. Preprocessed the CASME-I dataset to generate dynamic images representing temporal facial movements, standardized to 112×112 resolution. Designed and trained LEARNet (custom CNN with cross-connected conv layers, skip connections, and dropout) achieving 95% accuracy across 8 micro-expression classes. Integrated with a real-time music recommendation engine mapping predicted emotions to mood-based playlists.",
    tech: ["React", "Flask", "Python", "LEARNet CNN", "WebRTC", "HTML5 Canvas", "TensorFlow"],
    features: [
      "Custom LEARNet CNN with 95% micro-expression accuracy",
      "CASME-I dataset preprocessing & dynamic image generation",
      "Real-time emotion detection via WebRTC",
      "8-class emotion-to-playlist mapping",
      "Cross-connected conv layers, skip connections & dropout",
    ],
    github: "https://github.com/FlashSajjan/Micro-Expression-detection",
    demo: "https://github.com/FlashSajjan/Micro-Expression-detection",
    image: "/projects/music-to.png",
    gradient: "from-pink-600/20 to-rose-600/20",
    featured: false,
    status: "live",
  },
];

// ============================================================
// Skills
// ============================================================
export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "Monitor",
    color: "#7C3AED",
    skills: [
      { name: "React", icon: "⚛️", level: 90, color: "#61DAFB" },
      { name: "Next.js", icon: "▲", level: 88, color: "#FFFFFF" },
      { name: "TypeScript", icon: "TS", level: 85, color: "#3178C6" },
      { name: "Tailwind CSS", icon: "🎨", level: 92, color: "#06B6D4" },
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    color: "#06B6D4",
    skills: [
      { name: "Node.js",    icon: "🟢", level: 93, color: "#339933" },
      { name: "NestJS",     icon: "🐱", level: 88, color: "#E0234E" },
      { name: "Express.js", icon: "⚡", level: 90, color: "#FFFFFF" },
      { name: "TypeScript", icon: "TS", level: 87, color: "#3178C6" },
      { name: "REST APIs",  icon: "🔗", level: 95, color: "#FF6B35" },
      { name: "Socket.IO",  icon: "🔌", level: 85, color: "#010101" },
      { name: "JWT Auth",   icon: "🔐", level: 90, color: "#D63AFF" },
      { name: "TypeORM",    icon: "🗂️", level: 82, color: "#E83524" },
      { name: "Prisma",     icon: "◈",  level: 78, color: "#5A67D8" },
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    color: "#10B981",
    skills: [
      { name: "MySQL",      icon: "🐬", level: 85, color: "#4479A1" },
      { name: "MongoDB",    icon: "🍃", level: 88, color: "#47A248" },
      { name: "PostgreSQL", icon: "🐘", level: 80, color: "#336791" },
      { name: "Redis",      icon: "🔴", level: 75, color: "#DC382D" },
    ],
  },
  {
    category: "DevOps",
    icon: "Cloud",
    color: "#F59E0B",
    skills: [
      { name: "Docker", icon: "🐳", level: 78, color: "#2496ED" },
      { name: "AWS", icon: "☁️", level: 72, color: "#FF9900" },
      { name: "Git", icon: "📦", level: 92, color: "#F05032" },
      { name: "CI/CD", icon: "🔄", level: 75, color: "#2088FF" },
    ],
  },
  {
    category: "AI / ML",
    icon: "Brain",
    color: "#EC4899",
    skills: [
      { name: "Python", icon: "🐍", level: 82, color: "#3776AB" },
      { name: "TensorFlow", icon: "🧠", level: 72, color: "#FF6F00" },
      { name: "OpenCV", icon: "👁️", level: 68, color: "#5C3EE8" },
      { name: "Scikit-learn", icon: "📊", level: 65, color: "#F7931E" },
    ],
  },
  {
    category: "Tools",
    icon: "Wrench",
    color: "#8B5CF6",
    skills: [
      { name: "VS Code", icon: "💻", level: 95, color: "#007ACC" },
      { name: "Postman", icon: "📮", level: 90, color: "#FF6C37" },
      { name: "Figma", icon: "🎭", level: 70, color: "#F24E1E" },
      { name: "Linux", icon: "🐧", level: 78, color: "#FCC624" },
    ],
  },
];

// ============================================================
// Experience
// ============================================================
export const experiences: Experience[] = [
  {
    id: "ttsit-node-developer",
    role: "Node Developer",
    company: "TTSIT – Umar Tech Systems Pvt. Ltd.",
    location: "Greater Noida, Uttar Pradesh",
    period: "Dec 2025 – Present",
    description:
      "Building production-grade backend systems for real-world SaaS products, handling everything from architecture design to third-party integrations and cloud deployment.",
    highlights: [
      "Developed backend systems for Rent Sellia and KwikM using NestJS, TypeScript, and MySQL, deployed on AWS.",
      "Migrated a legacy PHP backend to NestJS, improving maintainability and API scalability.",
      "Implemented secure authentication using JWT, OTP, MPIN, refresh token rotation, and RBAC authorization.",
      "Built real-time modules using Socket.IO for chat, notifications, and live status tracking.",
      "Developed enterprise modules including CRM, ERP, HRM, wallet systems, and admin dashboards.",
      "Integrated third-party services such as Razorpay, Firebase, OpenAI, and external APIs.",
    ],
    type: "work",
    tech: ["NestJS", "TypeScript", "MySQL", "AWS", "Socket.IO", "JWT", "Razorpay", "Firebase", "OpenAI"],
  },
];

// ============================================================
// Achievements
// ============================================================
export const achievements: Achievement[] = [
  {
    id: "hackathon-1",
    title: "Hackathon Participant",
    description:
      "Participated in a college-level hackathon, built and presented a working project under time constraints, and advanced through multiple elimination rounds reaching a competitive stage.",
    icon: "Trophy",
    date: "2023",
    type: "hackathon",
    link: "#",
  },
  {
    id: "opensource-contrib",
    title: "Open Source Contributor",
    description:
      "Actively contributed to open-source repositories on GitHub — submitted pull requests, reported issues, and improved documentation across multiple projects.",
    icon: "GitMerge",
    date: "2022 – Present",
    type: "opensource",
    link: "https://github.com/Exploreankit",
  },
  {
    id: "leetcode-achievement",
    title: "LeetCode 200+ Problems",
    description:
      "Solved 200+ algorithmic problems on LeetCode covering arrays, trees, graphs, dynamic programming, and system design patterns.",
    icon: "Code2",
    date: "2022 – Present",
    type: "achievement",
    link: "https://leetcode.com/u/ankitsingh7167/",
  },
  {
    id: "fullstack-cert",
    title: "Full Stack Web Development",
    description:
      "Completed a comprehensive full-stack web development program on Udemy, covering modern frontend, backend, databases, and deployment best practices.",
    icon: "GraduationCap",
    date: "2022",
    type: "certification",
    link: "https://www.udemy.com/certificate/UC-dd831371-9b39-4455-b4ca-71e45c8c40b0/",
  },
];

// ============================================================
// Stats
// ============================================================
export const stats: Stat[] = [
  { label: "Projects Built", value: 20, suffix: "+", icon: "FolderGit2" },
  { label: "LeetCode Problems", value: 200, suffix: "+", icon: "Code2" },
  { label: "GitHub Commits", value: 200, suffix: "+", icon: "GitCommitHorizontal" },
  { label: "Technologies", value: 18, suffix: "+", icon: "Layers" },
];
