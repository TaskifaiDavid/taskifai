# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Plan & Review

### Before starting work
- Always be in plan mode to make a plan.
- After you get the plan, make sure you write the plan to `.claude/tasks/TASK_NAME.md`.
- The plan should be a detailed implementation plan and the reasoning behind them, as well as tasks broken down.
- If the task requires external knowledge or a certain package, also research to get the latest knowledge (use Task tool for research).
- Don’t over plan it, always think MVP.
- Once you write the plan, firstly ask me to review it. Do not continue until I approve the plan.

### While implementing
- You should update the plan as you work.
- After you complete tasks in the plan, you should update and append detailed descriptions of the changes you made, so following tasks can be easily handed over to other engineers.


## Project Overview

This is a Next.js 14 landing page for TaskifAI, a reseller analytics platform that helps consumer brands transform messy reseller spreadsheets into automated insights using AI. The site uses the App Router, TypeScript, and Tailwind CSS with a mobile-first Progressive Web App (PWA) approach.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting and type checking
npm run lint
```

## Architecture & Code Structure

### Core Technologies
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Language**: TypeScript with strict mode
- **PWA Features**: Service worker, manifest, mobile optimizations

### Key Directories
- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - React components (all functional components)
- `src/hooks/` - Custom React hooks for mobile interactions
- `src/utils/` - Utility functions for performance and haptics
- `public/` - Static assets including PWA manifest and icons

### Component Architecture
- **Layout Components**: Header, Footer provide consistent structure
- **Section Components**: Hero, Problem, Solution, Features, Pricing, etc. form the landing page
- **Interactive Components**: ROICalculator (modal), AIChatDemo, Contact form
- **Mobile Components**: PullToRefresh, haptic feedback utilities

### Design System
The project follows a Stripe-inspired design system defined in `style_guides/style_guide.md`:
- **Colors**: Primary purple (#635BFF), gradients, gray scale
- **Typography**: Inter for UI, Sora for display text
- **Components**: Cards with shadows, gradient buttons, consistent spacing
- **Layout**: 1200px max container, 12-column grid system

### Mobile & PWA Features
- Service worker for offline functionality
- App manifest for install prompts
- Haptic feedback for iOS devices
- Pull-to-refresh functionality
- Optimized viewport and touch interactions
- Mobile performance monitoring

### SEO & Analytics
- Comprehensive structured data (Schema.org)
- LinkedIn Insight Tag integration
- Open Graph and Twitter Card meta tags
- Robots.txt and sitemap generation

## Development Workflow


### Code Conventions
- Use functional components with TypeScript
- Follow the established design system tokens
- Maintain mobile-first responsive design
- Keep components simple and focused
- Use the existing utility functions for mobile features

### Key Configuration Files
- `next.config.js` - PWA headers, image optimization, compression
- `tailwind.config.ts` - Extended design system configuration
- `tsconfig.json` - TypeScript with path aliases (@/*)

### Important Patterns
- **Mobile Interactions**: Use existing hooks (usePullToRefresh, useSwipe)
- **Performance**: Lazy loading components, optimized images
- **Forms**: Contact form uses Formspree integration pattern
- **Modals**: Portal-based rendering (see ROICalculator)
- **State Management**: Local component state with useState