// ============================================================
// Global TypeScript Types
// ============================================================

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  github: string;
  demo: string;
  image: string;
  gradient: string;
  featured?: boolean;
  status: "live" | "wip" | "archived";
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 0-100
  color: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  type: "work" | "freelance" | "project" | "education";
  tech: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  date: string;
  type: "certification" | "hackathon" | "achievement" | "opensource";
  link?: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
