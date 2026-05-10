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
    id: "rent-sellia",
    title: "Rent-Sellia",
    description:
      "A rent-and-sell marketplace platform with authentication, role-based access control, admin dashboard, and scalable backend architecture.",
    longDescription:
      "Rent-Sellia is a full-featured marketplace platform enabling users to list, rent, and sell items. Built with a scalable Node.js backend, it features JWT-based authentication, granular RBAC, a comprehensive admin dashboard, real-time notifications, and a responsive React frontend.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "React", "Tailwind CSS"],
    features: [
      "JWT Authentication & RBAC",
      "Admin Dashboard with analytics",
      "Real-time notifications",
      "Advanced search & filters",
      "Secure payment integration",
      "Image upload & optimization",
    ],
    github: "https://github.com/ankitsingh",
    demo: "https://rent-sellia.vercel.app",
    image: "/projects/rent-sellia.png",
    gradient: "from-violet-600/20 to-purple-600/20",
    featured: true,
    status: "live",
  },
  {
    id: "emotion-music",
    title: "Emotion-Based Music Recommender",
    description:
      "AI-powered music recommendation system that detects user emotions using a trained emotion detection model and recommends music accordingly.",
    longDescription:
      "An intelligent music recommendation engine that uses computer vision and deep learning to detect facial emotions in real-time, then curates personalized playlists matching the user's current emotional state. Built with TensorFlow for emotion detection and a MERN stack for the web interface.",
    tech: ["Python", "TensorFlow", "React", "Node.js", "MongoDB", "OpenCV"],
    features: [
      "Real-time emotion detection via webcam",
      "Deep learning model (CNN)",
      "Spotify API integration",
      "Personalized playlist generation",
      "Emotion history & analytics",
      "Cross-platform support",
    ],
    github: "https://github.com/ankitsingh",
    demo: "https://emotion-music.vercel.app",
    image: "/projects/emotion-music.png",
    gradient: "from-cyan-600/20 to-blue-600/20",
    featured: true,
    status: "live",
  },
  {
    id: "auth-system",
    title: "Authentication & Authorization System",
    description:
      "Secure JWT authentication system with RBAC, refresh tokens, protected routes, and admin management.",
    longDescription:
      "A production-ready authentication and authorization system featuring JWT access/refresh token rotation, role-based access control, OAuth2 social login, email verification, password reset flows, and a comprehensive admin panel for user management.",
    tech: ["Node.js", "NestJS", "PostgreSQL", "Redis", "JWT", "TypeScript"],
    features: [
      "JWT access & refresh token rotation",
      "Role-based access control (RBAC)",
      "OAuth2 social login",
      "Email verification & password reset",
      "Rate limiting & brute-force protection",
      "Admin user management panel",
    ],
    github: "https://github.com/ankitsingh",
    demo: "https://auth-system.vercel.app",
    image: "/projects/auth-system.png",
    gradient: "from-emerald-600/20 to-teal-600/20",
    status: "live",
  },
  {
    id: "realtime-chat",
    title: "Realtime Chat & Notification System",
    description:
      "Socket.IO based realtime communication system with rooms, direct messaging, and push notifications.",
    longDescription:
      "A high-performance realtime communication platform built on Socket.IO and Node.js. Features include public/private rooms, direct messaging, typing indicators, read receipts, push notifications, message history, and file sharing capabilities.",
    tech: ["Socket.IO", "Node.js", "React", "MongoDB", "Redis", "TypeScript"],
    features: [
      "Real-time messaging with Socket.IO",
      "Public & private chat rooms",
      "Typing indicators & read receipts",
      "Push notifications",
      "File & media sharing",
      "Message history & search",
    ],
    github: "https://github.com/ankitsingh",
    demo: "https://realtime-chat.vercel.app",
    image: "/projects/realtime-chat.png",
    gradient: "from-orange-600/20 to-red-600/20",
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
      { name: "Node.js", icon: "🟢", level: 93, color: "#339933" },
      { name: "Express.js", icon: "⚡", level: 90, color: "#FFFFFF" },
      { name: "NestJS", icon: "🐱", level: 82, color: "#E0234E" },
      { name: "REST APIs", icon: "🔗", level: 95, color: "#FF6B35" },
      { name: "Socket.IO", icon: "🔌", level: 85, color: "#010101" },
      { name: "JWT Auth", icon: "🔐", level: 90, color: "#D63AFF" },
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    color: "#10B981",
    skills: [
      { name: "MongoDB", icon: "🍃", level: 88, color: "#47A248" },
      { name: "PostgreSQL", icon: "🐘", level: 80, color: "#336791" },
      { name: "MySQL", icon: "🐬", level: 78, color: "#4479A1" },
      { name: "Redis", icon: "🔴", level: 75, color: "#DC382D" },
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
    id: "freelance-fullstack",
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    period: "2023 – Present",
    description:
      "Building scalable web applications and APIs for clients across various industries. Delivering end-to-end solutions from architecture design to deployment.",
    highlights: [
      "Delivered 10+ production-ready web applications",
      "Built RESTful APIs serving 10k+ daily requests",
      "Implemented secure authentication systems",
      "Reduced client infrastructure costs by 40%",
    ],
    type: "freelance",
    tech: ["Node.js", "React", "MongoDB", "AWS", "Docker"],
  },
  {
    id: "backend-dev",
    role: "Backend Developer",
    company: "Open Source & Personal Projects",
    period: "2022 – Present",
    description:
      "Architecting and developing robust backend systems with focus on scalability, security, and performance. Specializing in Node.js, NestJS, and database optimization.",
    highlights: [
      "Designed microservices architecture for high-traffic apps",
      "Implemented JWT + RBAC authentication systems",
      "Optimized database queries achieving 60% performance gain",
      "Built real-time features using Socket.IO",
    ],
    type: "work",
    tech: ["NestJS", "PostgreSQL", "Redis", "TypeScript", "Docker"],
  },
  {
    id: "mern-developer",
    role: "MERN Stack Developer",
    company: "Full Stack Projects",
    period: "2021 – 2022",
    description:
      "Developed full-stack web applications using the MERN stack. Focused on building responsive UIs and efficient backend APIs.",
    highlights: [
      "Built 5+ full-stack applications from scratch",
      "Integrated third-party APIs and payment gateways",
      "Implemented responsive designs with Tailwind CSS",
      "Deployed applications on Vercel and AWS",
    ],
    type: "project",
    tech: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
  },
  {
    id: "ai-ml",
    role: "AI/ML Enthusiast",
    company: "Research & Experimentation",
    period: "2022 – Present",
    description:
      "Exploring AI/ML applications in web development. Built emotion detection systems, recommendation engines, and integrated AI APIs into production applications.",
    highlights: [
      "Trained CNN model for emotion detection (92% accuracy)",
      "Built music recommendation system using ML",
      "Integrated OpenAI APIs into web applications",
      "Experimented with computer vision using OpenCV",
    ],
    type: "project",
    tech: ["Python", "TensorFlow", "OpenCV", "Scikit-learn", "FastAPI"],
  },
];

// ============================================================
// Achievements
// ============================================================
export const achievements: Achievement[] = [
  {
    id: "nodejs-cert",
    title: "Node.js Certified Developer",
    description: "Completed advanced Node.js certification covering performance, security, and scalable architecture patterns.",
    icon: "Award",
    date: "2023",
    type: "certification",
    link: "#",
  },
  {
    id: "hackathon-1",
    title: "Hackathon Finalist",
    description: "Reached finals in a national-level hackathon, building an AI-powered solution in 24 hours.",
    icon: "Trophy",
    date: "2023",
    type: "hackathon",
    link: "#",
  },
  {
    id: "opensource-contrib",
    title: "Open Source Contributor",
    description: "Active contributor to open-source projects with 50+ merged pull requests across multiple repositories.",
    icon: "GitMerge",
    date: "2022 – Present",
    type: "opensource",
    link: "https://github.com/ankitsingh",
  },
  {
    id: "aws-cert",
    title: "AWS Cloud Practitioner",
    description: "Certified in AWS fundamentals covering core services, security, architecture, and pricing.",
    icon: "Cloud",
    date: "2023",
    type: "certification",
    link: "#",
  },
  {
    id: "leetcode-achievement",
    title: "LeetCode 200+ Problems",
    description: "Solved 200+ algorithmic problems on LeetCode, demonstrating strong DSA and problem-solving skills.",
    icon: "Code2",
    date: "2022 – Present",
    type: "achievement",
    link: "https://leetcode.com/ankitsingh",
  },
  {
    id: "fullstack-cert",
    title: "Full Stack Web Development",
    description: "Completed comprehensive full-stack development program covering modern web technologies and best practices.",
    icon: "GraduationCap",
    date: "2022",
    type: "certification",
    link: "#",
  },
];

// ============================================================
// Stats
// ============================================================
export const stats: Stat[] = [
  { label: "Projects Built", value: 20, suffix: "+", icon: "FolderGit2" },
  { label: "LeetCode Problems", value: 200, suffix: "+", icon: "Code2" },
  { label: "GitHub Commits", value: 500, suffix: "+", icon: "GitCommitHorizontal" },
  { label: "Technologies", value: 18, suffix: "+", icon: "Layers" },
];
