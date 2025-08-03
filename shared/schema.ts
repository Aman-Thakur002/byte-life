import { z } from "zod";

// Schemas for data validation

export const insertUserSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export const insertPortfolioContentSchema = z.object({
  section: z.string(),
  title: z.string().optional(),
  content: z.any().optional(),
  isActive: z.boolean().optional(),
});

export const insertProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  technologies: z.array(z.string()).optional(),
  imageUrl: z.string().optional(),
  projectUrl: z.string().optional(),
  githubUrl: z.string().optional(),
  featured: z.boolean().optional(),
  metrics: z.any().optional(),
});

export const insertExperienceSchema = z.object({
  company: z.string(),
  position: z.string(),
  location: z.string().optional(),
  startDate: z.string(),
  endDate: z.string().optional(),
  description: z.array(z.string()).optional(),
  technologies: z.array(z.string()).optional(),
  isCurrent: z.boolean().optional(),
});

export const insertContactMessageSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

// Types inferred from schemas

export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertPortfolioContent = z.infer<typeof insertPortfolioContentSchema>;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type InsertExperience = z.infer<typeof insertExperienceSchema>;
export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;

// We still need the main types for the data returned from the API
// These are now disconnected from the database schema, which is defined in the Sequelize models.
// This is not ideal, but it's the quickest way to fix the current issue.
// A better solution would be to generate these types from the Sequelize models.

export interface User {
  id: string;
  username: string;
  password?: string; // Password should not be sent to client
}

export interface PortfolioContent {
  id: string;
  section: string;
  title?: string;
  content?: any;
  isActive?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  projectUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  metrics?: any;
  createdAt: Date;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location?: string;
  startDate: string;
  endDate?: string;
  description: string[];
  technologies: string[];
  isCurrent?: boolean;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  isRead?: boolean;
  createdAt: Date;
}
