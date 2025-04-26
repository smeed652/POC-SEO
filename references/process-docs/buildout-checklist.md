# EveryBite POC SEO Buildout Checklist

This checklist breaks down the granular steps and tasks needed to build out the new modular, SEO-optimized monorepo for EveryBite.

---

## 1. Project Initialization
- [ ] Clone the existing repo to `everybite-POC-SEO`
- [ ] Remove `.git` and reinitialize git (if desired)
- [ ] Set up workspace structure (`/packages/ui`, `/apps/spa`, `/apps/astro-ssg`)
- [ ] Initialize root `package.json` with workspace config

## 2. UI Component Library (`/packages/ui`)
- [ ] Move all reusable components (atoms, molecules, organisms) here
- [ ] Add index file for exports
- [ ] Add TypeScript config and types
- [ ] Add Storybook config (optional)
- [ ] Add unit tests
- [ ] Add README with usage instructions

## 3. SPA Setup (`/apps/spa`)
- [ ] Move/copy main React app code here
- [ ] Update imports to use `@everybite/ui` (or relative path)
- [ ] Set up Tailwind CSS and PostCSS
- [ ] Ensure app runs and builds
- [ ] Add integration tests

## 4. Astro SSG Setup (`/apps/astro-ssg`)
- [ ] Move/copy Astro SSG code here
- [ ] Update imports to use `@everybite/ui` (or relative path)
- [ ] Set up Tailwind CSS
- [ ] Add SEO meta tags and layouts
- [ ] Ensure SSG builds and outputs static HTML
- [ ] Add integration tests

## 5. Shared Config & Tooling
- [ ] Add shared ESLint, Prettier, and TSConfig at root
- [ ] Add workspace scripts for build, lint, test, etc.
- [ ] Add Husky/lint-staged if desired

## 6. Data & Assets
- [ ] Migrate public assets (images, icons, etc.)
- [ ] Migrate environment variables and configs

## 7. Documentation
- [ ] Update root README with monorepo usage
- [ ] Add contributing guide
- [ ] Document build, test, and deployment steps for each app

## 8. CI/CD
- [ ] Update or add CI/CD config for monorepo
- [ ] Add build/test/deploy steps for both apps

## 9. Final QA
- [ ] Test all flows in both SPA and SSG
- [ ] Review SEO output (meta tags, OpenGraph, etc.)
- [ ] Review accessibility (WCAG)
- [ ] Remove unused/legacy files

---

**Use this checklist to track progress as you migrate and build out the new project.**
