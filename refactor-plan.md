# EveryBite POC SEO Refactor Plan

This document outlines the step-by-step process to refactor the existing project into a new, modular, SEO-optimized monorepo structure. The new project will be called `everybite-POC-SEO` and will live alongside the original repo.

## 1. Project Setup
- [ ] Clone the current repo into a new directory: `everybite-POC-SEO` (same parent directory)
- [ ] Remove `.git` folder and reinitialize git (optional, for clean history)
- [ ] Set up workspace/monorepo structure (using npm/yarn/pnpm workspaces):

```
/ (root)
  /packages
    /ui              # Shared React component library (RestaurantCard, atoms, molecules, etc.)
  /apps
    /spa             # Main React app (admin panel, etc.)
    /astro-ssg       # Astro static site for SEO
  package.json       # Workspaces config
  README.md
```

## 2. Refactor Steps
- [ ] Move all reusable components to `packages/ui`.
    - [ ] Migrate all atoms, molecules, organisms, and utilities.
    - [ ] Ensure all components are exportable and have proper TypeScript types.
- [ ] Update both `apps/spa` and `apps/astro-ssg` to import from `packages/ui`.
- [ ] Set up Tailwind CSS and shared config for both apps.
- [ ] Ensure both apps work independently (run, build, test).
- [ ] Add or update Storybook for `packages/ui` (optional but recommended).
- [ ] Add unit/integration tests for shared components.
- [ ] Add documentation for contributing, building, and using the monorepo.

## 3. Migration/Build Checklist
- [ ] Migrate environment variables, configs, and assets as needed.
- [ ] Test all major flows in both apps (UI, SSG output, etc.).
- [ ] Update CI/CD pipelines for monorepo.
- [ ] Remove any legacy or unused files.

## 4. Deployment
- [ ] Deploy `apps/spa` to Vercel/Netlify/Heroku as needed.
- [ ] Deploy `apps/astro-ssg` as a static site for SEO.

## 5. Final Steps
- [ ] Review and clean up documentation.
- [ ] Announce migration and archive the old repo if desired.

---

**See `buildout-checklist.md` for a granular, task-by-task buildout plan.**
