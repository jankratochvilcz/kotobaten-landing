# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Gatsby.js landing page** for Kotobaten, a Japanese vocabulary learning app. The site is built with TypeScript, React, and SCSS, using Gatsby's static site generation.

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
  - `index/` - Components specific to the landing page (Header, Author, BeYourself, etc.)
  - `layout/` - Shared layout components (LayoutPage, Footer, SEO)
- **Styles**: Global CSS files in `src/styles/` define design tokens:
  - `variables.css` - CSS custom properties for colors, breakpoints, and spacing
  - `effects.css` - Shared visual effects and utility classes

### Styling Approach
- **CSS Modules**: Each component has its own `.css` file co-located with the `.tsx` file
- **CSS Custom Properties**: Global design system using CSS variables in `src/styles/variables.css`
- **Modern CSS**: No preprocessors needed - uses native CSS features
- **Responsive Design**: Media query-driven with mobile-first approach

### Key Features
- **SEO Optimization**: Helmet-based meta tags with component-specific SEO data
- **Image Optimization**: Gatsby's Sharp plugin for automatic image processing
- **Font Loading**: Google Fonts (Noto Serif JP) with display swap
- **Static Assets**: Favicons and legal pages in `static/` directory

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