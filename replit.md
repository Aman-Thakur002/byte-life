# Overview

This is a modern full-stack web application for a personal portfolio website. It features a dark-themed, component-based architecture built with React and TypeScript on the frontend, and Express.js with Node.js on the backend. The application includes sections for displaying personal information, work experience, projects, skills, and a contact form. The portfolio uses a card-based layout with glass morphism effects and smooth animations.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development and building
- **Styling**: Tailwind CSS with custom CSS variables for theming, featuring a dark color scheme
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for consistent, accessible components
- **State Management**: TanStack Query (React Query) for server state management and API caching
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Layout**: CSS Grid-based responsive design with card components for portfolio sections

## Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints for portfolio content, projects, experiences, and contact form submission
- **Data Validation**: Zod schemas for request/response validation shared between client and server
- **Error Handling**: Centralized error handling middleware with structured error responses
- **Development**: Hot module replacement via Vite integration for seamless development experience

## Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema**: Defined in shared TypeScript files with tables for users, portfolio content, projects, experiences, and contact messages
- **Connection**: Neon Database serverless PostgreSQL for cloud hosting
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development and database implementation for production
- **Migrations**: Drizzle Kit for database schema migrations and management

## External Dependencies

### Database & ORM
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: Type-safe SQL toolkit and query builder
- **Drizzle Kit**: Migration tool and schema management

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Unstyled, accessible UI primitives
- **Shadcn/ui**: Pre-built component library
- **Lucide React**: Icon library
- **Class Variance Authority**: Utility for creating variant-based component APIs

### Development & Build Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Autoprefixer

### Form Handling & Validation
- **React Hook Form**: Performant form library
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Validation resolver for React Hook Form

### Potential CMS Integration
- **Sanity CMS**: Placeholder configuration included for potential headless CMS integration (not currently implemented)

### Deployment & Hosting
- **Replit**: Development environment with integrated deployment capabilities
- **Environment Variables**: Configuration for database connections and API settings