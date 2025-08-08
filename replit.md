# Knowledge Wave India - Professional Learning Platform

## Overview

Knowledge Wave India is a comprehensive online learning platform that offers digital courses and skill-based training across multiple disciplines. The platform features a modern, responsive web interface built with React and TypeScript, with a complete multi-page application including Home, About, Courses, Packages, Instructors, and Contact pages. Each page features professional animations, hover effects, and a consistent white/gray design theme with blue accents. The application follows a full-stack architecture with an Express.js backend, PostgreSQL database with Drizzle ORM, and beautifully designed frontend using shadcn/ui components and Tailwind CSS.

## Recent Changes (January 2025)

- **Complete Multi-Page Application**: Created all individual pages (About, Courses, Packages, Instructors, Contact) with professional animations and responsive design
- **Enhanced Navigation**: Fixed dropdown menus to show only on hover for desktop, simplified mobile navigation
- **Professional Animations**: Implemented scroll-triggered animations and hover effects across all pages using intersection observers
- **Route Implementation**: Added proper routing with wouter for all pages including navigation updates
- **Accessibility Improvements**: Fixed dialog accessibility warnings and screen reader support
- **Vercel Deployment Ready**: Created deployment configuration and build scripts for production

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system variables and shadcn/ui component library
- **UI Components**: Radix UI primitives with custom styling for accessibility and consistency
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds
- **Design System**: Professional color palette with CSS custom properties for theming

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for fast bundling and compilation
- **Session Management**: Prepared for connect-pg-simple for PostgreSQL session storage
- **API Structure**: RESTful API design with `/api` prefix routing

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **ORM**: Drizzle ORM with type-safe schema definitions and migrations
- **Connection**: Neon Database serverless PostgreSQL for cloud deployment
- **Schema**: Well-structured tables for users, courses, packages, instructors, and newsletters
- **Migrations**: Automated database schema management through drizzle-kit
- **Development Storage**: In-memory storage implementation for rapid prototyping

### Authentication and Authorization
- **Prepared Architecture**: User authentication system with username/password storage
- **Session Management**: Cookie-based sessions with PostgreSQL storage backend
- **Security**: Structured for secure credential handling and session management

### Component Architecture
- **Design System**: shadcn/ui components with Radix UI primitives
- **Layout**: Modular component structure with dedicated sections (Hero, Courses, Packages, Instructors, etc.)
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Animations**: CSS-based animations with intersection observer for scroll effects
- **Accessibility**: ARIA compliance through Radix UI components

## External Dependencies

### Core Technologies
- **React Ecosystem**: React 18, React DOM, React Hook Form with Zod validation
- **TypeScript**: Full type safety across frontend and backend
- **Database**: PostgreSQL with Neon Database serverless connection
- **ORM**: Drizzle ORM with PostgreSQL dialect and Zod schema validation

### UI and Styling
- **Component Library**: Radix UI primitives for accessible component foundation
- **Styling Framework**: Tailwind CSS with PostCSS processing
- **Icons**: Lucide React for consistent iconography
- **Utilities**: clsx and tailwind-merge for conditional styling

### Development Tools
- **Build System**: Vite with React plugin for frontend, esbuild for backend
- **Development**: tsx for TypeScript execution, nodemon-like functionality
- **Linting/Formatting**: TypeScript compiler for type checking
- **Replit Integration**: Cartographer and runtime error modal plugins

### Production Services
- **Database Hosting**: Neon Database for PostgreSQL hosting
- **Session Storage**: connect-pg-simple for PostgreSQL session management
- **Date Handling**: date-fns for date manipulation and formatting
- **HTTP Client**: Native fetch API with TanStack Query for data fetching

### Additional Features
- **Carousel**: Embla Carousel for image and content carousels
- **Form Validation**: React Hook Form with Hookform Resolvers and Zod schemas
- **Toast Notifications**: Custom toast system for user feedback
- **Command Menu**: cmdk for search and command interfaces
- **Utility Libraries**: nanoid for ID generation, class-variance-authority for component variants