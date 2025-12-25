# AFZA MARKETING WEBSITE

**Project:** Health Tourism Lead Generation - Marketing Website
**Tech Stack:** Astro 5 + Alpine.js + Tailwind CSS v4 + TypeScript
**Type:** Marketing Website (SEO-optimized, multiple pages)
**Deadline:** January 15, 2025 (USA partner meeting)
**Deploy:** Vercel (FREE)

---

## ⚠️ NOINDEX TAG ACTIVE - REMOVE BEFORE PRODUCTION

**Current site has `<meta name="robots" content="noindex">` to prevent Google indexing.**

**Before launching with real domain:** Remove the noindex tag from `src/layouts/Layout.astro` (lines 27-29)

---

## WHAT THIS IS

Multi-page marketing website for health tourism lead generation:
- Homepage (landing page)
- Procedures (DHI, FUE, Sapphire hair transplant)
- Doctors (profiles)
- Blog (SEO content)
- Contact (lead capture)

**Goal:** Organic SEO traffic (Google, ChatGPT, Perplexity) → USA customers → USA hospitals

**Target:** 98-100 Lighthouse score

---

## QUICK START

```bash
# Install dependencies (if needed)
npm install

# Start development server
npm run dev
# Opens at http://localhost:4321

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## PROJECT DOCUMENTATION

**For Claude AI:** See `CLAUDE.md` (implementation guide, task checklist, progress tracking)
**For Gemini AI:** See `GEMINI.md` (same info, Gemini-formatted)
**For High-Level Planning:** See `/career/projects/afza/` (general overview, business model)

---

## TECH STACK

- **Astro 5:** Static site generation, partial hydration
- **Vue 3:** Interactive components (islands)
- **Tailwind CSS v4:** Utility-first CSS (Vite plugin, no PostCSS)
- **TypeScript:** Type safety

---

## PROJECT STRUCTURE

```
/afza-marketing/
├── src/
│   ├── pages/              # Routes (index.astro, about.astro, etc.)
│   ├── layouts/            # Layout components
│   ├── components/         # Reusable components
│   ├── content/            # Markdown blog posts (.md → HTML for SEO)
│   ├── styles/             # Global CSS (Tailwind)
│   └── lib/                # Utilities, API client
├── public/                 # Static assets (images, robots.txt)
├── astro.config.mjs        # Astro configuration
├── tailwind.config.cjs     # Tailwind configuration
├── package.json
├── CLAUDE.md               # Claude AI development guide
└── GEMINI.md               # Gemini AI development guide
```

---

## HOW BLOG POSTS WORK (Content Collections)

**Why .md files?** Easy to write content (markdown), Astro converts to HTML for production.

**Development:**
```
You write:  src/content/blog/dhi-vs-fue.md     (markdown)
               ↓
Astro shows: localhost:4321/blog/dhi-vs-fue    (HTML)
```

**Production:**
```bash
npm run build  # Converts .md → HTML
```
```
Output:  dist/blog/dhi-vs-fue/index.html       (static HTML)
Deploy:  https://afza-marketing.vercel.app/blog/dhi-vs-fue  (Google sees HTML, not .md)
```

**.md files = source code (for developers)**
**.html files = deployed output (for Google/users)**

**SEO benefit:** Blog posts rank in Google for keywords like "DHI vs FUE hair transplant" → Free organic traffic

---

## DEVELOPMENT TRACKING

**Current Phase:** Setup Complete
**Next:** Build homepage

**Task Progress:** See `CLAUDE.md` for detailed checklist

---

**Last Updated:** December 25, 2025
