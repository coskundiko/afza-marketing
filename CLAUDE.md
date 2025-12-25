# Claude Code - AI Development Context

**⚠️ THIS FILE IS IN .GITIGNORE - NOT COMMITTED TO GIT**

## Project Overview

**Project:** Afza Marketing Website
**Purpose:** Health tourism lead generation via organic SEO
**Developer:** Djoshkun Diko
**Timeline:** 3 weeks (Dec 25 → Jan 15, 2025)
**Deadline:** January 15, 2025 (USA partner meeting)
**Position:** Family partnership project (Hafsa & Cihan)

This is a marketing website built to showcase health tourism services and generate USA customer leads via organic SEO. The project demonstrates:
- Modern web development (Astro + Alpine.js + TypeScript + Tailwind v4)
- Elite SEO optimization (98-100 Lighthouse target)
- Static site generation for maximum performance
- AI search optimization (Google, ChatGPT, Perplexity)

---

## Documentation Structure

This project uses four main documentation files:

### 📖 README.md
**Purpose:** Quick reference for developers
**Audience:** Developers, reviewers
**Contains:**
- Project overview
- Quick start commands
- Tech stack
- Project structure
- Links to other documentation

### ✅ DEVELOPMENT.md
**Purpose:** Feature tracking and code documentation
**Audience:** AI (Claude), Developer, Reviewer
**Format:** High-level features by week
**Contains:**
- Implemented features with code locations
- Feature status (complete, pending, in progress)
- Code organization
- Git commit history

### 📂 features/FEAT-XXX.md
**Purpose:** Detailed task breakdown per feature
**Audience:** AI (Claude), Developer
**Format:** Individual feature files with task checklists
**Contains:**
- Detailed tasks per feature
- Code implementation examples
- Testing checklist
- Human review checklist

### 🤖 CLAUDE.md (This File)
**Purpose:** AI context, workflow, and architecture decisions
**Audience:** AI assistants (Claude Code)
**Contains:**
- Project context and background
- Development workflow
- Architecture decisions and rationale
- AI-specific instructions
- Production considerations

---

## Environment & Tooling

**Local Development:**
- Node.js 20+ required
- npm commands run locally
- No Docker needed (pure Node.js project)

**NPM Commands:**
```bash
# Install dependencies
npm install

# Start dev server (localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for issues
npm run astro check
```

**Workflow:**
- User runs commands manually (AI lists them out)
- Commands are provided as copy-paste blocks
- Branch name: `main` (not master)

**Development Order:**
1. Install dependencies (already done)
2. Create layouts and components
3. Build pages
4. Deploy to Vercel
5. Test and optimize

---

## Development Workflow

### Feature-Based Development

**Process:**
1. **Read feature file:** Check `features/FEAT-XXX.md` for detailed tasks
2. **Implement:** Create components, pages, layouts
3. **Test manually:** Verify functionality works
4. **Update feature file:** Mark tasks complete
5. **Update DEVELOPMENT.md:** Mark feature complete
6. **Commit:** Git commit with feature reference

**Example:**
1. Read `features/FEAT-001-week1-homepage.md`
2. Create Layout.astro, Header.astro, Footer.astro, Hero.astro
3. Test on `localhost:4321`
4. Mark tasks complete in FEAT-001 file
5. Update DEVELOPMENT.md status
6. Commit: `feat: [FEAT-001] homepage with hero and SEO`

---

### Git Commit Strategy

**IMPORTANT:** Clean, logical git history

**Workflow:**
1. Complete entire feature (backend + frontend if applicable)
2. Test thoroughly
3. Update DEVELOPMENT.md with feature documentation
4. Create commit with descriptive message
5. Move to next feature

**Commit Format:**
```bash
# Format: <type>: [FEAT-XXX] <description>

# Examples:
git commit -m "feat: [FEAT-001] homepage with hero and SEO"
git commit -m "feat: [FEAT-002] procedures pages (DHI, FUE, Sapphire)"
git commit -m "feat: [FEAT-003] doctors directory"
git commit -m "feat: [FEAT-004] contact page with lead form"
git commit -m "feat: [FEAT-005] about page"
git commit -m "feat: [FEAT-006] SEO configuration (sitemap, robots.txt)"
git commit -m "feat: [FEAT-007] blog setup with content collections"
git commit -m "feat: [FEAT-008] mobile optimization and polish"
git commit -m "docs: final documentation updates"
```

**Commit Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `chore`: Maintenance/setup (use sparingly)

**Best Practices:**
- ✅ Prefer complete features (all files at once)
- ✅ Keep git history clean and readable
- ✅ Write descriptive commit messages
- ✅ One feature = one commit (not per file)

---

## Architecture Decisions

### Tech Stack
**Astro 5 + Alpine.js + TypeScript + Tailwind CSS v4**

**Rationale:**
- **Astro 5:** Best SEO (98-100 Lighthouse), static site generation, partial hydration
- **Alpine.js:** Lightweight JavaScript framework (15KB) for reactive components, perfect for interactive islands
- **TypeScript:** Type safety, better IDE support, modern development standard
- **Tailwind CSS v4:** Utility-first CSS, Vite plugin (no PostCSS), auto-optimized

### Why Astro for Marketing Website

**Problem:** Need maximum SEO performance for organic traffic (Google, ChatGPT, Perplexity)

**Solution:** Astro static site generation
- 0KB JavaScript for content pages (pure HTML)
- 98-100 Lighthouse score achievable
- Perfect for AI search engines (clean, structured HTML)
- Partial hydration (Alpine.js for interactive parts only - just 15KB)

**Alternative considered:** Next.js or Nuxt
- Would work but ships more JavaScript
- Harder to achieve 98-100 Lighthouse
- Overkill for mostly static content

### File Structure Strategy

**Separation:**
- `/pages/` - Routes (file-based routing)
- `/layouts/` - Layout components (shared structure)
- `/components/` - Reusable components (Astro + Alpine.js)
- `/content/blog/` - Markdown blog posts (content collections)
- `/styles/` - Global CSS (Tailwind imports)
- `/lib/` - Utilities (helper functions)
- `/public/` - Static assets (images, robots.txt)

**Component Strategy:**
- **Astro components (.astro):** All components use .astro extension
- **Alpine.js directives:** Add reactivity with `x-data`, `@click`, `x-show` for interactive parts (header menu, forms, chat widget in Phase 2)

### Tailwind CSS v4 (No PostCSS)

**Important:** Tailwind v4 is a complete rewrite

**Changes from v3:**
- Uses Vite plugin (no PostCSS)
- No `postcss.config.js` needed
- Faster compilation
- Auto-optimized for production (Lightning CSS)

**Configuration:**
- Added to Vite plugins in `astro.config.mjs`
- Global CSS imported in Layout.astro
- Production optimization automatic (based on NODE_ENV)

### SEO Strategy

**Target:** 98-100 Lighthouse score

**Implementation:**
1. **Meta tags:** Unique per page (title, description, OG, Twitter)
2. **Schema.org:** JSON-LD structured data (MedicalBusiness)
3. **Sitemap:** Auto-generated by @astrojs/sitemap
4. **Performance:** Static HTML, lazy load images, minimal JS
5. **Content:** Blog posts targeting USA keywords
6. **AI Search:** Clean HTML structure for ChatGPT/Perplexity citations

**Target Keywords (USA customers):**
- "hair transplant cost USA"
- "best hair transplant doctors USA"
- "DHI vs FUE hair transplant"
- "Sapphire FUE technique"

---

## Production Considerations

### Deployment Strategy
- **Platform:** Vercel (FREE tier)
- **Trigger:** Git push to main branch (auto-deploy)
- **Build:** `npm run build` (static site generation)
- **Output:** `/dist/` folder (static HTML/CSS/JS)
- **CDN:** Global (Vercel's edge network)

### Performance
- ✅ Static site generation (all pages pre-rendered)
- ✅ 0KB JavaScript for content pages
- ✅ Lazy loading images
- ✅ Tailwind CSS purged (unused styles removed)
- ✅ Lightning CSS optimization (production)

### SEO
- ✅ 98-100 Lighthouse target
- ✅ Schema.org structured data
- ✅ Sitemap.xml auto-generated
- ✅ robots.txt configured
- ✅ Meta tags per page
- ✅ Fast load times (<1s FCP)

---

## AI Workflow Notes

### When Developing:

1. **Check feature files FIRST**
   - Read `features/FEAT-XXX.md` for detailed tasks
   - Don't ask "what should I build" - it's in the feature file

2. **Follow the feature structure**
   - Complete tasks in order
   - Mark tasks complete as you go
   - Test after each task

3. **Update documentation**
   - Update feature file (mark tasks complete)
   - Update DEVELOPMENT.md (mark feature complete)

4. **Commit properly**
   - One commit per feature (not per file)
   - Use format: `feat: [FEAT-XXX] description`

### Code Quality Standards:
- Follow Astro best practices (official docs)
- Keep components small and focused
- Use TypeScript for type safety
- Use Alpine.js directives (`x-data`, `@click`, `x-show`) for interactivity
- Tailwind classes only (no custom CSS)
- Meaningful variable/component names
- Comments only where logic is non-obvious

### Feature Completion Checklist:
Before committing a feature, verify:
- [ ] All tasks in feature file complete
- [ ] Components created and working
- [ ] Pages render correctly
- [ ] SEO tags present
- [ ] Mobile responsive
- [ ] Manually tested (working correctly)
- [ ] DEVELOPMENT.md updated (feature documented)
- [ ] Ready to commit

### Testing Approach:
- Manual testing with comprehensive checklist
- Test each feature immediately after implementation
- Document test steps in feature files
- Lighthouse testing for performance/SEO
- Cross-browser testing (Chrome, Safari, Firefox)

---

## Project Context

**Family Partnership:**
- Built for Hafsa & Cihan (health tourism business)
- Meeting with USA partner on Jan 15, 2025
- Need live website to show organic SEO strategy
- Phase 1 (marketing website) → Phase 2 (Laravel backend if needed)

**Business Model:**
- Generate USA customer leads via organic SEO
- Referral/commission from USA hospitals
- Partner in USA handles hospital relationships

**Cost:**
- Phase 1: ~$1/month (domain only, Vercel FREE)
- Phase 2+: $50-124/month (VPS + Laravel backend if added)

---

## Important Reminders

### For AI (Claude):
1. **Read feature files FIRST** - All tasks are in `features/FEAT-XXX.md`
2. **Don't duplicate work** - Check DEVELOPMENT.md for what's done
3. **Update as you go** - Mark tasks complete in feature files
4. **Test before committing** - Verify functionality works
5. **Clean code** - Follow Astro/Alpine.js conventions strictly
6. **One feature = one commit** - Not per file

### For Human (Djoshkun):
1. **Review AI output** - Check code quality and logic
2. **Test manually** - Verify each feature works
3. **Git history** - Should be clean and professional
4. **Jan 15 deadline** - Live website needed for partner meeting
5. **Focus on Phase 1** - Don't over-engineer (marketing website only)

---

## Diko's Patterns to Watch

**From CLAUDE.md context in `/career/` folder:**

### ⚠️ Pattern #5: Over-Engineering
- **Risk:** Building too complex for "simple marketing website"
- **Mitigation:** Follow feature files exactly, don't add extras
- **Example:** Don't build Laravel backend in Phase 1 (that's Phase 2+)

### ⚠️ Pattern #2: Claiming Done When Not Tested
- **Risk:** Marking tasks complete without manual testing
- **Mitigation:** Test on `localhost:4321` before marking complete

### ⚠️ Pattern #6: Motivation-Driven Work
- **Risk:** Losing momentum if progress slows
- **Mitigation:** Small wins daily, mark tasks complete as you go

**This is Phase 1 ONLY** - Marketing website for Jan 15 meeting. Laravel backend (Phase 2) comes AFTER meeting if partner wants it.

---

**Last Updated:** December 25, 2025
**Status:** Week 1 in progress (setup complete, homepage next)
**Next:** Create Layout.astro and start building homepage (FEAT-001)
