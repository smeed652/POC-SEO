# Astro Static Site Generator for SmartMenu

This directory contains the Astro project used to generate static HTML pages for SEO, utilizing your existing React components and Tailwind CSS.

## Structure
- `/src/pages` — Static pages (e.g., index.astro, about.astro)
- `/src/components` — Reusable React components
- `/public` — Static assets (images, favicon, etc.)

## Usage

### 1. Install dependencies
```
npm install
```

### 2. Develop locally
```
npm run dev
```

### 3. Build static site
```
npm run build
```
Output will be in `/dist` as static HTML files.

### 4. Preview production build
```
npm run preview
```

## SEO
- Edit `src/pages/*.astro` to add custom meta tags, OpenGraph, and structured data.
- Use Astro’s `<head>` component for SEO customization.

## React Integration
- Import and use your React components in `.astro` files:
  ```astro
  ---
  import MyComponent from '../components/MyComponent.jsx';
  ---
  <MyComponent someProp="value" />
  ```

## Tailwind CSS
- Tailwind is pre-configured via `astro.config.mjs` and `tailwind.config.cjs`.

## Extending
- Add new pages in `/src/pages`.
- Add new React components in `/src/components`.

## Reference
- [Astro Docs](https://docs.astro.build)
- [Astro + React](https://docs.astro.build/en/guides/integrations-guide/react/)
- [SEO Guide](https://docs.astro.build/en/guides/seo/)
