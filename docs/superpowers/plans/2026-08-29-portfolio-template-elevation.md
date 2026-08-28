# Portfolio Template Elevation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the portfolio with a high-impact split 2-column hero, vibrant orange/amber dual-tone accent system, obsidian dark card containers, and harmonized downstream sections inspired by the template design.

**Architecture:** Update global design tokens in CSS to an obsidian/orange palette, refactor the Hero component into a split 2-column layout (left typography & stats, right glowing framed portrait), elevate project/tech/experience/contact cards with modern pill tags and ambient glows, and maintain full backward-compatibility with backend data fallbacks.

**Tech Stack:** React 18, Vite 5, Tailwind CSS v4, Framer Motion, Lucide React icons, Express backend.

## Global Constraints
- Primary Accent: `#f97316` (Orange-500) / `#fb923c` (Orange-400) / `#ea580c` (Orange-600).
- Dark Mode Surface: Deep Obsidian (`#09090b` / `#0f1117`), Translucent Card Surface (`bg-zinc-900/60 backdrop-blur-md`).
- Fully responsive across mobile, tablet, and wide desktop screens.
- Keep all interactive features intact: AI Assistant (`AIAssistant.jsx`), Architecture Viewer (`MermaidViewer.jsx`), PDF resume download, dynamic portfolio API fallback.

---

### Task 1: Global Theme & Color Tokens (`src/index.css`)

**Files:**
- Modify: `src/index.css:1-123`

**Interfaces:**
- Consumes: Tailwind CSS v4 `@theme` and `@layer base`
- Produces: CSS variables and utility classes: `--color-brand`, `--color-brand-light`, `--color-brand-dark`, `.card-obsidian`, `.glow-orange`, refined scrollbars and grid backgrounds.

- [ ] **Step 1: Update `src/index.css` with obsidian palette & warm orange brand tokens**

```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --color-brand: #F97316;
  --color-brand-light: #FB923C;
  --color-brand-dark: #EA580C;

  --font-sans: "Geist", "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "Geist Mono", "JetBrains Mono", monospace;

  --animate-scroll: scroll 40s linear infinite;

  @keyframes scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
}

@layer base {
  :root {
    --bg-primary: #FAFAFA;
    --bg-surface: #FFFFFF;
    --border-color: #E2E8F0;
    --text-primary: #0F172A;
    --text-secondary: #475569;
    --text-muted: #64748B;
  }

  .dark {
    --bg-primary: #09090B;
    --bg-surface: #12131A;
    --border-color: #27272A;
    --text-primary: #F8FAFC;
    --text-secondary: #CBD5E1;
    --text-muted: #94A3B8;
  }

  html {
    scroll-behavior: smooth;
    background-color: var(--bg-primary);
  }

  body {
    background-color: var(--bg-primary);
    color: var(--text-primary);
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: -0.01em;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    letter-spacing: -0.035em;
    font-weight: 700;
  }
}

/* Obsidian Glass Card Component */
.card-obsidian {
  background-color: #FFFFFF;
  border: 1px solid #E2E8F0;
  transition: all 0.2s ease;
}

.dark .card-obsidian {
  background-color: rgba(18, 19, 26, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(39, 39, 42, 0.8);
}

.dark .card-obsidian:hover {
  border-color: rgba(249, 115, 22, 0.35);
  box-shadow: 0 8px 30px -4px rgba(249, 115, 22, 0.08);
}

/* Linear / Ambient Grid Background */
.bg-linear-grid {
  background-size: 32px 32px;
  background-image: 
    linear-gradient(to right, rgba(226, 232, 240, 0.4) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(226, 232, 240, 0.4) 1px, transparent 1px);
}

.dark .bg-linear-grid {
  background-image: 
    linear-gradient(to right, rgba(39, 39, 42, 0.45) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(39, 39, 42, 0.45) 1px, transparent 1px);
}

.mask-ticker {
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #CBD5E1;
  border-radius: 9999px;
}

.dark ::-webkit-scrollbar-thumb {
  background: #27272A;
}

::-webkit-scrollbar-thumb:hover {
  background: #F97316;
}
```

- [ ] **Step 2: Verify CSS builds cleanly**
Run: `npm run build`
Expected: PASS with 0 build errors.

---

### Task 2: Rebuilding the Hero Section (`src/components/Hero.jsx`)

**Files:**
- Modify: `src/components/Hero.jsx`

**Interfaces:**
- Consumes: `portfolioData` from `../data/portfolioData`, `framer-motion`, `lucide-react`
- Produces: Responsive 2-column Hero section with left-aligned typography, orange accent highlights, capsule CTA buttons, live stats counter, and right-aligned framed portrait with warm ambient backdrop glow.

- [ ] **Step 1: Implement the Split 2-Column Hero layout in `src/components/Hero.jsx`**
  - Left column: Status pill (`Available for Roles`), Title (`Md. Mahmudur` `<span className="text-orange-500">Rahman</span>`), Subtitle, Bio, CTAs (Resume + Explore Projects), quick Social icons, and integrated Stats counter row.
  - Right column: Ambient warm radial glow, framed portrait card with glass styling, and bottom achievement banner.

- [ ] **Step 2: Verify Hero renders correctly and is responsive**
Verify layout on desktop and mobile viewports.

---

### Task 3: Elevate Featured Projects Grid (`src/components/Projects.jsx`)

**Files:**
- Modify: `src/components/Projects.jsx`

**Interfaces:**
- Consumes: `portfolioData.projects`, `framer-motion`, `lucide-react`
- Produces: Modern 3-column project card grid with visual preview zoom, orange category badges, tech pills, and live demo / source links.

- [ ] **Step 1: Refactor `src/components/Projects.jsx` card styling**
  - Update card border and hover effects to use `.card-obsidian` styling with subtle orange glows.
  - Highlight active category filters with solid orange pill styling.
  - Enhance card action buttons and typography.

- [ ] **Step 2: Verify project filtering and modal triggers work as expected**

---

### Task 4: Modernize Tech Stack & Competencies (`src/components/TechStack.jsx` & `src/components/Competencies.jsx`)

**Files:**
- Modify: `src/components/TechStack.jsx`
- Modify: `src/components/Competencies.jsx`

**Interfaces:**
- Consumes: `portfolioData.techStack`, `portfolioData.competencies`
- Produces: Categorized skill cards with category headers, tech badge chips, and competence cards with orange/amber accents.

- [ ] **Step 1: Update `src/components/TechStack.jsx` with category grouping and obsidian pill styling**
- [ ] **Step 2: Update `src/components/Competencies.jsx` with refined icons and ambient glow borders**

---

### Task 5: Harmonize Experience, Education, Certifications & Contact

**Files:**
- Modify: `src/components/Experience.jsx`
- Modify: `src/components/Education.jsx`
- Modify: `src/components/Certifications.jsx`
- Modify: `src/components/Contact.jsx`
- Modify: `src/components/Navbar.jsx`
- Modify: `src/components/Footer.jsx`

**Interfaces:**
- Consumes: `portfolioData.experience`, `portfolioData.education`, `portfolioData.certifications`, `portfolioData.contact`
- Produces: Cohesive obsidian cards across all sections with orange accent markers and a glow-framed split contact card.

- [ ] **Step 1: Update timeline bullet markers and cards in Experience & Education**
- [ ] **Step 2: Update Certifications with achievement cards and award icons**
- [ ] **Step 3: Update Contact section into a high-impact split card with warm orange radial glow**
- [ ] **Step 4: Update Navbar and Footer with orange active indicators and brand logo**

---

### Task 6: End-to-End Build & Verification

**Files:**
- All modified files

**Verification:**
- [ ] **Step 1: Run `npm run build` to verify clean production bundle**
- [ ] **Step 2: Test live dev server on `http://localhost:5173/` and backend `/api/portfolio`**
- [ ] **Step 3: Verify all interactive modals, navigation links, and theme toggle**
