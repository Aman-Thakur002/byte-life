import { 
  type User, 
  type InsertUser, 
  type PortfolioContent,
  type InsertPortfolioContent,
  type Project,
  type InsertProject,
  type Experience,
  type InsertExperience,
  type ContactMessage,
  type InsertContactMessage
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // User methods
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Portfolio content methods
  getPortfolioContent(): Promise<PortfolioContent[]>;
  getPortfolioContentBySection(section: string): Promise<PortfolioContent | undefined>;
  createPortfolioContent(content: InsertPortfolioContent): Promise<PortfolioContent>;
  
  // Project methods
  getProjects(): Promise<Project[]>;
  getFeaturedProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  
  // Experience methods
  getExperiences(): Promise<Experience[]>;
  createExperience(experience: InsertExperience): Promise<Experience>;
  
  // Contact message methods
  getContactMessages(): Promise<ContactMessage[]>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private portfolioContent: Map<string, PortfolioContent>;
  private projects: Map<string, Project>;
  private experiences: Map<string, Experience>;
  private contactMessages: Map<string, ContactMessage>;

  constructor() {
    this.users = new Map();
    this.portfolioContent = new Map();
    this.projects = new Map();
    this.experiences = new Map();
    this.contactMessages = new Map();
    
    // Initialize with sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Add sample projects
    const project1: Project = {
      id: randomUUID(),
      title: "Ribeez POS",
      description: "Restaurant management system processing 500+ daily orders across 30+ locations with 99.9% uptime.",
      technologies: ["Node.js", "MySQL", "BullMQ"],
      featured: true,
      metrics: { orders: "500+", locations: "30+", uptime: "99.9%" },
      createdAt: new Date(),
    };
    
    const project2: Project = {
      id: randomUUID(),
      title: "Spirestro SaaS",
      description: "Multi-tenant SaaS platform supporting 50+ restaurant entities with shared infrastructure and real-time analytics.",
      technologies: ["Multi-tenant", "Analytics", "BullMQ"],
      featured: true,
      metrics: { entities: "50+", jobs: "1000+", failure_rate: "<1%" },
      createdAt: new Date(),
    };
    
    this.projects.set(project1.id, project1);
    this.projects.set(project2.id, project2);
    
    // Add sample experience
    const experience: Experience = {
      id: randomUUID(),
      company: "Spirehub Softwares Pvt. Ltd",
      position: "Backend Developer",
      location: "Noida, UP",
      startDate: "Jul 2024",
      endDate: null,
      description: [
        "Developed and maintained 15+ RESTful APIs serving 500+ daily requests with 99.8% uptime",
        "Optimized database queries by 73%, reducing average latency from 450ms to 120ms",
        "Implemented Redis caching, decreasing database load by 40% and improving response times by 60%",
        "Established CI/CD pipelines reducing release times by 25%"
      ],
      technologies: ["Node.js", "Express.js", "MySQL", "Redis", "Docker"],
      isCurrent: true,
    };
    
    this.experiences.set(experience.id, experience);
  }

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Portfolio content methods
  async getPortfolioContent(): Promise<PortfolioContent[]> {
    return Array.from(this.portfolioContent.values()).filter(content => content.isActive);
  }

  async getPortfolioContentBySection(section: string): Promise<PortfolioContent | undefined> {
    return Array.from(this.portfolioContent.values()).find(
      content => content.section === section && content.isActive
    );
  }

  async createPortfolioContent(insertContent: InsertPortfolioContent): Promise<PortfolioContent> {
    const id = randomUUID();
    const content: PortfolioContent = {
      ...insertContent,
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.portfolioContent.set(id, content);
    return content;
  }

  // Project methods
  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return Array.from(this.projects.values())
      .filter(project => project.featured)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = randomUUID();
    const project: Project = {
      ...insertProject,
      id,
      createdAt: new Date(),
    };
    this.projects.set(id, project);
    return project;
  }

  // Experience methods
  async getExperiences(): Promise<Experience[]> {
    return Array.from(this.experiences.values()).sort((a, b) => {
      // Sort by current first, then by start date descending
      if (a.isCurrent && !b.isCurrent) return -1;
      if (!a.isCurrent && b.isCurrent) return 1;
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    });
  }

  async createExperience(insertExperience: InsertExperience): Promise<Experience> {
    const id = randomUUID();
    const experience: Experience = { ...insertExperience, id };
    this.experiences.set(id, experience);
    return experience;
  }

  // Contact message methods
  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values()).sort((a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const message: ContactMessage = {
      ...insertMessage,
      id,
      isRead: false,
      createdAt: new Date(),
    };
    this.contactMessages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();
