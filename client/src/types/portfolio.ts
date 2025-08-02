export interface PortfolioData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  about: {
    content: string;
    skills: string[];
  };
  experience: Experience[];
  projects: Project[];
  skills: SkillCategory[];
  contact: {
    email: string;
    phone: string;
    location: string;
  };
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string[];
  technologies: string[];
  isCurrent: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  projectUrl?: string;
  githubUrl?: string;
  featured: boolean;
  metrics?: Record<string, any>;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
