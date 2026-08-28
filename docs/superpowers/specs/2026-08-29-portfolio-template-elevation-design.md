# Design Specification: Portfolio Template Elevation

**Date**: 2026-08-29  
**Goal**: Transform the portfolio's visual hierarchy, hero section, and design aesthetic to incorporate the high-impact template design (split 2-column hero, warm ambient orange/amber accents, obsidian dark surfaces, and sleek card containers) while preserving all data integrity and dynamic capabilities.

---

## 1. Overview & Architectural Goals
The goal is to elevate the portfolio from a generic centered layout to a bespoke, premium AI Systems Architect portfolio inspired by the high-contrast dark template.

### Key Visual Pillars:
1. **Split 2-Column Hero**: 
   - Left: High-impact typography, status pill, dual-tone accented headline, concise architect bio, capsule CTAs, and integrated metrics bar.
   - Right: Framed portrait card with warm ambient radial glow and a floating achievement badge.
2. **Warm Amber / Radiant Orange Accent System**:
   - Primary accents: `#f97316`, `#ff5722`, `#fb923c`.
   - Dark background: `#09090b` / `#0d0e12` with translucent obsidian card surfaces (`bg-zinc-900/60`).
3. **Card & Component Harmonization**:
   - Featured projects grid with visual cover cards and tag pills.
   - Categorized technical competencies and tech stack badges.
   - Interactive contact section styled as a glowing split card.
   - Preserved features: AI Assistant, interactive architecture diagrams, and dynamic data fallbacks.

---

## 2. Component Specifications

### 2.1 Hero Section (`src/components/Hero.jsx`)
- **Layout Structure**:
  - Container: `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
  - Grid: `grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center`
- **Left Column (`lg:col-span-7`)**:
  - `Availability Badge`: Pill badge with emerald pulsing indicator (`Available for Roles / Consulting`).
  - `Headline`: Large bold text: `Md. Mahmudur` `<span className="text-orange-500">Rahman</span>`.
  - `Sub-headline`: `AI Systems Architect & NASA Space Apps Winner`.
  - `Bio`: Impact-focused copy highlighting autonomous multi-agent swarms, production RAG, and high-concurrency FastAPI microservices.
  - `CTAs`:
    - Primary: Solid orange pill button (`Download Resume` / `View Projects`) with hover glow.
    - Secondary: Glass bordered pill (`Let's Connect` / `Explore Systems`).
  - `Quick Socials`: Compact pill icons for GitHub, LinkedIn, Email.
  - `Integrated Metrics Row`: 4-column counter (`24+ Systems Built`, `150+ Agent Workflows`, `07 Years Exp`, `03x Global Nominee`).
- **Right Column (`lg:col-span-5`)**:
  - `Ambient Glow Mesh`: Radial gradient with orange/amber warm blur (`blur-3xl`).
  - `Framed Portrait Card`: Clean rounded container with subtle border (`border-zinc-800`), glass backdrop (`backdrop-blur-md`), and portrait image with hover scale.
  - `Floating Highlight Badge`: Bottom overlaid pill tag (`NASA Space Apps Global Winner`).

### 2.2 Global Styling & Theme System (`src/index.css`)
- Custom CSS tokens for orange brand accents:
  - `--color-brand: #f97316;`
  - `--color-brand-light: #fb923c;`
  - `--color-brand-dark: #ea580c;`
  - Background surface variables for deep obsidian dark mode and crisp light mode.
- Sleek card classes (`card-obsidian`, `glow-orange`, `border-subtle`).

### 2.3 Downstream Sections Harmonization
- **Projects (`src/components/Projects.jsx`)**: Refine card styling with orange category tags, clean repository/demo action buttons, and hover elevation.
- **Tech Stack (`src/components/TechStack.jsx`)**: Grouped categorization cards with crisp chip tags.
- **Experience & Education (`src/components/Experience.jsx`, `src/components/Education.jsx`)**: Sleek cards with orange accent markers.
- **Contact (`src/components/Contact.jsx`)**: Glow-framed split card container with quick direct channels and contact form.
- **Navbar & Footer (`src/components/Navbar.jsx`, `src/components/Footer.jsx`)**: Refined glassmorphism navbar and minimal footer.

---

## 3. Data & State Integrity
- Full backward-compatibility with `src/data/portfolioData.js` and Express backend (`/api/portfolio`).
- Support for dynamic fallback in case of missing MongoDB connection.
- Light/Dark theme switching maintained through `ThemeContext`.

---

## 4. Verification & Testing
- Visual verification across desktop, tablet, and mobile viewport sizes.
- Route navigation and smooth scroll hash links verification.
- API and form submission test.
- Dev build verification (`npm run build` or `vite build`) to confirm zero lint/type errors.
