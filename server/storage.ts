import { 
  type User as UserSchema,
  type InsertUser, 
  type PortfolioContent as PortfolioContentSchema,
  type InsertPortfolioContent,
  type Project as ProjectSchema,
  type InsertProject,
  type Experience as ExperienceSchema,
  type InsertExperience,
  type ContactMessage as ContactMessageSchema,
  type InsertContactMessage
} from "@shared/schema";
import User from './models/user';
import Project from './models/project';
import Experience from './models/experience';
import ContactMessage from './models/contactMessage';
import PortfolioContent from './models/portfolioContent';

export interface IStorage {
  // User methods
  getUser(id: string): Promise<UserSchema | undefined>;
  getUserByUsername(username: string): Promise<UserSchema | undefined>;
  createUser(user: InsertUser): Promise<UserSchema>;
  
  // Portfolio content methods
  getPortfolioContent(): Promise<PortfolioContentSchema[]>;
  getPortfolioContentBySection(section: string): Promise<PortfolioContentSchema | undefined>;
  createPortfolioContent(content: InsertPortfolioContent): Promise<PortfolioContentSchema>;
  
  // Project methods
  getProjects(): Promise<ProjectSchema[]>;
  getProject(id: string): Promise<ProjectSchema | undefined>;
  getFeaturedProjects(): Promise<ProjectSchema[]>;
  createProject(project: InsertProject): Promise<ProjectSchema>;
  updateProject(id: string, project: Partial<InsertProject>): Promise<ProjectSchema>;
  deleteProject(id: string): Promise<void>;
  
  // Experience methods
  getExperiences(): Promise<ExperienceSchema[]>;
  createExperience(experience: InsertExperience): Promise<ExperienceSchema>;
  
  // Contact message methods
  getContactMessages(): Promise<ContactMessageSchema[]>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessageSchema>;
}

export class DbStorage implements IStorage {
  // User methods
  async getUser(id: string): Promise<UserSchema | undefined> {
    const user = await User.findByPk(id);
    return user?.get({ plain: true });
  }

  async getUserByUsername(username: string): Promise<UserSchema | undefined> {
    const user = await User.findOne({ where: { username } });
    return user?.get({ plain: true });
  }

  async createUser(insertUser: InsertUser): Promise<UserSchema> {
    const user = await User.create(insertUser as any);
    return user.get({ plain: true });
  }

  // Portfolio content methods
  async getPortfolioContent(): Promise<PortfolioContentSchema[]> {
    const content = await PortfolioContent.findAll({ where: { isActive: true } });
    return content.map(c => c.get({ plain: true }));
  }

  async getPortfolioContentBySection(section: string): Promise<PortfolioContentSchema | undefined> {
    const content = await PortfolioContent.findOne({ where: { section, isActive: true } });
    return content?.get({ plain: true });
  }

  async createPortfolioContent(insertContent: InsertPortfolioContent): Promise<PortfolioContentSchema> {
    const content = await PortfolioContent.create(insertContent as any);
    return content.get({ plain: true });
  }

  // Project methods
  async getProjects(): Promise<ProjectSchema[]> {
    const projects = await Project.findAll({ order: [['createdAt', 'DESC']] });
    return projects.map(p => p.get({ plain: true }));
  }

  async getProject(id: string): Promise<ProjectSchema | undefined> {
    const project = await Project.findByPk(id);
    return project?.get({ plain: true });
  }

  async getFeaturedProjects(): Promise<ProjectSchema[]> {
    const projects = await Project.findAll({ where: { featured: true }, order: [['createdAt', 'DESC']] });
    return projects.map(p => p.get({ plain: true }));
  }

  async createProject(insertProject: InsertProject): Promise<ProjectSchema> {
    const project = await Project.create(insertProject as any);
    return project.get({ plain: true });
  }

  async updateProject(id: string, data: Partial<InsertProject>): Promise<ProjectSchema> {
    const project = await Project.findByPk(id);
    if (!project) {
      throw new Error('Project not found');
    }
    await project.update(data);
    return project.get({ plain: true });
  }

  async deleteProject(id: string): Promise<void> {
    const project = await Project.findByPk(id);
    if (!project) {
      throw new Error('Project not found');
    }
    await project.destroy();
  }

  // Experience methods
  async getExperiences(): Promise<ExperienceSchema[]> {
    const experiences = await Experience.findAll({ order: [['isCurrent', 'DESC'], ['startDate', 'DESC']] });
    return experiences.map(e => e.get({ plain: true }));
  }

  async createExperience(insertExperience: InsertExperience): Promise<ExperienceSchema> {
    const experience = await Experience.create(insertExperience as any);
    return experience.get({ plain: true });
  }

  // Contact message methods
  async getContactMessages(): Promise<ContactMessageSchema[]> {
    const messages = await ContactMessage.findAll({ order: [['createdAt', 'DESC']] });
    return messages.map(m => m.get({ plain: true }));
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessageSchema> {
    const message = await ContactMessage.create(insertMessage as any);
    return message.get({ plain: true });
  }
}

export const storage = new DbStorage();
