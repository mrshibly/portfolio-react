# Sync Projects with GitHub READMEs Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Synchronize portfolio projects data with real architecture diagrams, descriptions, live deployment links, and accurate tech stacks extracted directly from GitHub repositories.

**Architecture:** Update central data store `src/data/portfolioData.js` and server fallback `server/routes/portfolioRoutes.js` with 13 verified projects featuring native Mermaid flowcharts and live links.

**Tech Stack:** React 19, Vite, Tailwind CSS v4, Mermaid.js, Express.

---

### Task 1: Update `src/data/portfolioData.js` with Real GitHub Projects

**Files:**
- Modify: `src/data/portfolioData.js`

- [ ] **Step 1: Update the projects array** with all 13 real projects (Bioacoustic AST, Song-Automation-N8N, Lumina Analyst, Autonomous Research Agent, Mini AI Assistant, PhantomAPI, BanglaSupport-LLM, ERAAO, IlmAI, MiniGPT-from-Scratch, Real-Time Analytics Pipeline, LexDraft, SETU Ops).
- [ ] **Step 2: Verify all Mermaid charts have valid syntax** and dark theme compatibility.

---

### Task 2: Synchronize Server Route Defaults in `server/routes/portfolioRoutes.js`

**Files:**
- Modify: `server/routes/portfolioRoutes.js`

- [ ] **Step 1: Update `defaultData.projects`** to reflect the new real projects.

---

### Task 3: Build & Live Verification

- [ ] **Step 1: Run `npm run build`** to verify clean code-splitting and asset bundling.
- [ ] **Step 2: Commit and push changes to GitHub**.
