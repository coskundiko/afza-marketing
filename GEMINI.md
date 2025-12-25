# AFZA MARKETING WEBSITE - GEMINI AI GUIDE

**Project:** Health Tourism Lead Generation - Marketing Website
**Developer:** Diko
**AI Assistant:** Gemini (You)
**Started:** December 25, 2025
**Deadline:** January 15, 2025 (USA partner meeting)

---

## CONTEXT FOR GEMINI

This is a marketing website for health tourism lead generation.

**What this file is:**
- Development guide for Gemini AI
- Task tracking and progress
- Technical reference

**Related Documentation:**
- `/career/projects/afza/` - Business planning and strategy
- This folder (`/afza-marketing/`) - Implementation details

---

## PROJECT OVERVIEW

**Goal:** Build SEO-optimized marketing website to generate USA customer leads for USA hospitals

**Business Model:** Referral/commission from USA hospitals (partner meeting Jan 15, 2025)

**What we're building:**
- Multi-page marketing website (NOT single landing page)
- Homepage, Procedures, Doctors, Blog, Contact pages
- Optimized for organic SEO traffic (Google, ChatGPT, Perplexity)
- Target: 98-100 Lighthouse score

**Phase 1 (Now → Jan 15):** Astro marketing website (~$1/month cost)
**Phase 2+ (After Jan 15):** Laravel backend (if partner needs it)

---

## TECH STACK

**Frontend:**
- Astro 5 (static site generation)
- Vue 3 (interactive components/islands)
- Tailwind CSS v4 (Vite plugin, no PostCSS)
- TypeScript (type safety)

**Deployment:**
- Vercel (FREE tier)
- Global CDN, auto-SSL

**Content:**
- Markdown blog posts
- Content collections

---

## PROJECT STRUCTURE

```
/afza-marketing/
├── src/
│   ├── pages/              # Routes (*.astro files)
│   ├── layouts/            # Layout components
│   ├── components/         # Reusable components (Astro + Vue)
│   ├── content/blog/       # Markdown blog posts
│   ├── styles/             # Tailwind global CSS
│   └── lib/                # Utilities
├── public/                 # Static assets
├── astro.config.mjs
├── package.json
├── CLAUDE.md               # Claude AI guide
├── GEMINI.md               # This file (Gemini AI guide)
└── README.md
```

---

## TASK CHECKLIST (PHASE 1)

### ✅ SETUP (COMPLETED)
- [x] Create Astro project
- [x] Add Tailwind CSS v4
- [x] Add Vue 3
- [x] Create documentation files

### 📋 WEEK 1 (Dec 25-31): Homepage
- [ ] Create main layout (Layout.astro)
- [ ] Create Header (Vue component)
- [ ] Create Footer (Astro component)
- [ ] Build homepage (index.astro)
- [ ] Add SEO meta tags
- [ ] Deploy to Vercel
- [ ] Test Lighthouse score

### 📋 WEEK 2 (Jan 1-7): Content Pages
- [ ] Procedures pages (DHI, FUE, Sapphire)
- [ ] Doctors page
- [ ] Contact page (with lead form)
- [ ] About page
- [ ] Configure SEO (sitemap, robots.txt)

### 📋 WEEK 3 (Jan 8-14): Blog & Polish
- [ ] Setup blog (content collections)
- [ ] Write 5-10 blog posts (SEO keywords)
- [ ] Mobile optimization
- [ ] Final Lighthouse test (98-100 target)
- [ ] Cross-browser testing

### 🚀 JAN 15: Launch
- [ ] Production deployment
- [ ] Domain setup (afza.ai)
- [ ] Final checks
- [ ] Demo ready for USA partner

---

## TECHNICAL NOTES

**Tailwind CSS v4:**
- Uses Vite plugin (not PostCSS)
- No `postcss.config.js` needed
- Auto-optimized for production

**Vue 3 Islands:**
- Only interactive components use Vue
- Rest is static HTML (better SEO)
- Persistent state with `transition:persist`

**SEO Strategy:**
- Target USA keywords (hair transplant cost, DHI vs FUE, etc.)
- Optimize for Google + AI search (ChatGPT, Perplexity)
- Blog posts for long-term organic traffic

**Deployment:**
- Vercel FREE tier
- Auto-deploy on git push
- Global CDN, instant deployments

---

## CURRENT STATUS

**Last Updated:** December 25, 2025

**Phase:** Setup Complete

**Next Steps:**
1. Create Layout.astro (main layout)
2. Import Tailwind CSS
3. Create Header + Footer components
4. Build homepage

**Blockers:** None

---

## DEVELOPMENT COMMANDS

```bash
# Start dev server (localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for issues
npm run astro check
```

---

## REMINDERS FOR GEMINI

**When helping Diko:**
1. Read this file (GEMINI.md) for context
2. Update task checklist as work progresses
3. Reference `/career/projects/afza/` for business strategy
4. Keep code simple (avoid over-engineering)
5. Test before marking tasks complete

**This is Phase 1 only** - Marketing website. Backend comes later (Phase 2+).

**Focus:** Simple, working, SEO-optimized marketing website ready by Jan 15.

---

**Status:** Ready to build homepage
**Next:** Create main layout and components
