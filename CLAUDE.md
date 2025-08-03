# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **modern Gatsby.js landing page** for Kotobaten, a Japanese vocabulary learning app designed for advanced learners. The site features a clean, Japanese-inspired design built with TypeScript, React, and modern CSS, using Gatsby's static site generation.

## Common Commands

### Development
- `npm run develop` or `npm start` - Start the development server
- `npm run build` - Build the production site
- `npm run serve` - Serve the built site locally
- `npm run clean` - Clean the Gatsby cache
- `npm run typecheck` - Run TypeScript type checking

### Development Workflow
1. Use `npm run develop` for local development with hot reloading
2. Always run `npm run typecheck` before committing changes
3. Test the production build with `npm run build && npm run serve`

## Architecture

### Component Structure
- **Pages**: Located in `src/pages/` - Gatsby automatically creates routes from these files
- **Components**: Organized in `src/components/` with two main categories:
  - `index/` - Landing page sections (Header, Hero, Features, Testimonials, Screenshots, FinalCta)
  - `layout/` - Shared layout components (LayoutPage, Footer, SEO)
- **Styles**: Global CSS files in `src/styles/` define design tokens:
  - `variables.css` - Comprehensive design system with Japanese-inspired colors, typography scale, spacing system
  - `effects.css` - Shared visual effects and utility classes

### Styling Approach
- **Component-Scoped CSS**: Each component has its own `.css` file co-located with the `.tsx` file
- **Design System**: Comprehensive CSS custom properties defining colors, typography, spacing, and breakpoints
- **Japanese-Inspired Design**: Deep red (#C41E3A) primary color with navy blue accents, modern geometric patterns
- **Responsive Design**: Mobile-first approach with systematic breakpoints (768px, 1024px, 1200px, 1440px)
- **Accessibility**: WCAG 2.1 compliant with proper focus states, semantic HTML, and screen reader support

### Key Features
- **Modern Landing Page**: Hero section, feature cards, user testimonials, screenshots, and strong CTAs
- **Social Proof**: Diverse testimonials highlighting JLPT success stories and consistent learning habits
- **Performance Optimized**: Lazy loading, optimized images, efficient CSS
- **SEO Optimization**: Structured data, semantic HTML, optimized meta tags
- **Conversion Focused**: Multiple CTAs driving users to https://web.kotobaten.app
- **Cross-Platform Messaging**: Emphasizes web availability with upcoming mobile/desktop apps

### TypeScript Configuration
- Strict mode enabled with comprehensive type checking
- JSX configured for React
- Module resolution set to "node" with JSON imports enabled
- Includes Gatsby-specific TypeScript files (gatsby-config.ts, gatsby-node.ts)

## Development Notes

### Component Patterns
- Use functional components with TypeScript interfaces for props
- Co-locate CSS files with components
- Import CSS files directly (no modules needed)
- Use classNames library for conditional CSS classes
- Reference design tokens via CSS custom properties (var(--primary-color))

### File Organization
- Static assets (images, favicons) go in `static/`
- Component images go in `src/images/`
- Legal documents (privacy.html, terms.html) are static HTML files

### Gatsby Specifics
- Site metadata is configured in `gatsby-config.ts`
- Sharp plugin handles image optimization automatically
- Google Fonts are loaded via gatsby-plugin-google-fonts
- CSS files are processed natively by Gatsby (no preprocessor needed)