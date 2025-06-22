# Kwangsung Company Website

## Overview

This is a modern Korean company website for Kwangsung (광성), a technology company specializing in precision control systems for military/police training facilities and smart farm ICT equipment. The application is built as a full-stack web application with a React frontend and Express.js backend, featuring a contact form system and company portfolio showcase.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom color schemes for military-gray, agri-green, and tech-blue themes
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth animations and transitions
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Validation**: Zod for request/response validation
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Storage Layer**: Abstracted storage interface with in-memory fallback

### Component Structure
- Single-page application with modular sections (Hero, About, Services, Projects, Contact, Footer)
- Responsive design optimized for mobile and desktop
- Korean language content with professional business styling

## Key Components

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contact Inquiries Table**: Stores form submissions with fields for name, company, email, phone, category, message, and timestamps
- Schema definitions shared between frontend and backend via `shared/schema.ts`

### API Endpoints
- `POST /api/contact`: Submit contact form inquiries with validation
- `GET /api/contact`: Retrieve all contact inquiries (internal use)

### UI Components
- Custom themed components using Shadcn/ui
- Form components with proper validation and error handling
- Responsive navigation with smooth scrolling
- Project showcase with professional styling
- Contact form with category selection and validation

## Data Flow

1. **Contact Form Submission**:
   - User fills contact form → Form validation (Zod) → API submission → Database storage → Success feedback

2. **Page Navigation**:
   - Smooth scrolling navigation between sections using intersection observers

3. **State Management**:
   - TanStack Query handles API calls and caching
   - Form state managed by React Hook Form
   - Toast notifications for user feedback

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM, React Hook Form)
- Express.js for backend API
- Drizzle ORM with PostgreSQL dialect
- Neon Database for serverless PostgreSQL hosting

### UI and Styling
- Tailwind CSS for utility-first styling
- Radix UI primitives for accessible components
- Framer Motion for animations
- Lucide React for consistent iconography

### Development Tools
- TypeScript for type safety
- Vite for development and build tooling
- ESBuild for server bundling
- TSX for TypeScript execution in development

## Deployment Strategy

### Development Environment
- Replit-hosted with automatic reloads
- Vite dev server with HMR (Hot Module Replacement)
- Development server runs on port 5000
- PostgreSQL module included in Replit environment

### Production Build
- Frontend: Vite builds optimized static assets to `dist/public`
- Backend: ESBuild bundles server code to `dist/index.js`
- Static file serving handled by Express in production
- Environment variable `DATABASE_URL` required for database connection

### Configuration
- Development: `npm run dev` (TSX execution)
- Production: `npm run build && npm run start`
- Database migrations: `npm run db:push` (Drizzle Kit)

## Changelog

Changelog:
- June 22, 2025. Initial setup
- June 22, 2025. Added 3D animation effects, particle system, and enhanced UI components
- June 22, 2025. Added certifications section and product gallery based on business plan
- June 22, 2025. Updated company address and corrected government project timeline to 2023

## User Preferences

Preferred communication style: Simple, everyday language.