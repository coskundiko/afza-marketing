# FEAT-001: Week 1 - Homepage

**Status:** ⏳ In Progress
**Priority:** High (Jan 15 deadline)
**Week:** 1 (Dec 25-31)

## Overview

Build complete homepage with hero section, SEO optimization, and responsive design.

**Goal:** Live homepage on Vercel by Dec 31

---

## Tasks

### FEAT-001-01: Main Layout ⏳
- [ ] Create `src/layouts/Layout.astro`
- [ ] Import Tailwind CSS (`import '../styles/global.css'`)
- [ ] Add HTML structure (head, body)
- [ ] Add SEO meta tags component
- [ ] Add Header component (Vue island, transition:persist)
- [ ] Add Footer component (static)
- [ ] Add slot for page content

**File:** `src/layouts/Layout.astro`

**Implementation:**
```astro
---
import Header from '../components/Header.vue';
import Footer from '../components/Footer.astro';
import MetaTags from '../components/SEO/MetaTags.astro';
import '../styles/global.css';

const { title, description } = Astro.props;
---
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <MetaTags title={title} description={description} />
    <title>{title}</title>
  </head>
  <body>
    <Header client:load transition:persist="header" />
    <main>
      <slot />
    </main>
    <Footer />
  </body>
</html>
```

---

### FEAT-001-02: Header Component ⏳
- [ ] Create `src/components/Header.vue` (Vue component)
- [ ] Add navigation links (Home, Procedures, Doctors, Blog, Contact)
- [ ] Add responsive mobile menu (hamburger)
- [ ] Add Tailwind styling
- [ ] Make it persistent across page navigation

**File:** `src/components/Header.vue`

**Features:**
- Responsive navigation
- Mobile hamburger menu
- Active link highlighting
- Tailwind CSS styling

---

### FEAT-001-03: Footer Component ⏳
- [ ] Create `src/components/Footer.astro`
- [ ] Add company info
- [ ] Add quick links
- [ ] Add copyright notice
- [ ] Add Tailwind styling

**File:** `src/components/Footer.astro`

**Sections:**
- Company name and tagline
- Quick links (Home, Procedures, Doctors, Blog, Contact)
- Copyright © 2025

---

### FEAT-001-04: SEO Components ⏳
- [ ] Create `src/components/SEO/MetaTags.astro`
- [ ] Add meta description
- [ ] Add Open Graph tags
- [ ] Add Twitter Card tags
- [ ] Create `src/components/SEO/SchemaOrg.astro`
- [ ] Add MedicalBusiness schema

**Files:**
- `src/components/SEO/MetaTags.astro`
- `src/components/SEO/SchemaOrg.astro`

**Schema.org types:**
- MedicalBusiness
- Organization

---

### FEAT-001-05: Hero Component ⏳
- [ ] Create `src/components/Hero.astro`
- [ ] Add headline (H1)
- [ ] Add subheadline
- [ ] Add CTA button
- [ ] Add hero image/background
- [ ] Add Tailwind styling
- [ ] Make it responsive

**File:** `src/components/Hero.astro`

**Content:**
- Headline: "Hair Transplant Excellence in the USA"
- Subheadline: "Connect with top-rated hair transplant doctors"
- CTA: "Explore Procedures" (links to /procedures)

---

### FEAT-001-06: Homepage ⏳
- [ ] Create `src/pages/index.astro`
- [ ] Use Layout component
- [ ] Add Hero component
- [ ] Add features section (optional)
- [ ] Add CTA section
- [ ] Add SEO meta tags

**File:** `src/pages/index.astro`

**Sections:**
- Hero
- Features (3 cards: DHI, FUE, Sapphire)
- CTA section ("Ready to get started?")

---

### FEAT-001-07: Deploy to Vercel ⏳
- [ ] Connect GitHub repo to Vercel
- [ ] Configure Vercel project
- [ ] Set environment variables (if needed)
- [ ] Deploy to production
- [ ] Test live site
- [ ] Verify Lighthouse score

**Steps:**
1. Push code to GitHub
2. Import project in Vercel
3. Deploy
4. Test live URL

**Target:** Live homepage by Dec 31

---

### FEAT-001-08: Testing & Verification ⏳
- [ ] Test all navigation links
- [ ] Test mobile responsiveness
- [ ] Run Lighthouse test (target: 98-100)
- [ ] Verify SEO meta tags
- [ ] Test on different browsers
- [ ] Check loading speed

**Checklist:**
- [ ] Homepage loads correctly
- [ ] Header navigation works
- [ ] Footer displays correctly
- [ ] Hero section responsive
- [ ] CTA buttons work
- [ ] Mobile menu works
- [ ] Lighthouse score: 98-100

---

## Code Locations

**Layout:**
- `src/layouts/Layout.astro`

**Components:**
- `src/components/Header.vue`
- `src/components/Footer.astro`
- `src/components/Hero.astro`
- `src/components/SEO/MetaTags.astro`
- `src/components/SEO/SchemaOrg.astro`

**Pages:**
- `src/pages/index.astro`

**Routes:**
```
/ → Homepage (index.astro)
```

---

## Human Review

- [ ] Layout renders correctly
- [ ] Header navigation functional
- [ ] Footer displays properly
- [ ] Hero section looks professional
- [ ] SEO tags present
- [ ] Mobile responsive
- [ ] Lighthouse score 98-100
- [ ] Live on Vercel

---

## Git Commit

**After completion:**
```bash
git add .
git commit -m "feat: [FEAT-001] homepage with hero and SEO"
git push origin main
```

---

**Status:** In Progress
**Target Completion:** December 31, 2025
