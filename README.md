# Figma-to-React POC

This project demonstrates the workflow of taking a Figma design and building a working React component, leveraging Storybook for isolated development and control.

## Goal
Take a UI element from Figma, break it down using atomic design, and build it as a reusable React component. Use Storybook to develop, document, and manipulate the component in isolation. The end result is a single, production-quality component rendered on a page, fully controllable and documented using this approach and tooling.

## Process
1. Analyze the Figma design and break it into atomic components.
2. Set up the project environment (clone, install, run dev server and Storybook).
3. Build atomic components, add Storybook stories, and assemble pages.
4. Test components visually and with Jest/React Testing Library.
5. Review for accessibility and responsiveness.

## How to Run
- Install dependencies: `npm install`
- Start the dev server: `npm run dev`
- Start Storybook: `npm run storybook`
- Run tests: `npm test`

See the buildout checklist for step-by-step progress.


A comprehensive template for building scalable, maintainable, and modern React applications using Atomic Design, TypeScript, Tailwind CSS, Storybook, and Vite.

---

## 🚀 What is AtomicReactKit?

AtomicReactKit is a base project template designed for rapid development of robust React applications with a strong emphasis on atomic design principles, reusable components, and a best-practices workflow.

---

## 🛠️ Buildout Checklist

The Buildout Checklist is now maintained in a dedicated file for easier tracking and updates. Please see [buildout-checklist.md](./buildout-checklist.md) at the root of this repository for the full step-by-step buildout guide.

---

## 🏗️ Tech Stack & Tooling

- **React** (with TypeScript)
- **Vite** (fast dev server, hot reloading)
- **Atomic Design** (atoms, molecules, cells, organisms, templates, pages)
- **Tailwind CSS** (utility-first styling)
- **Storybook** (interactive component documentation)
- **Jest + React Testing Library** (unit/integration tests)
- **ESLint + Prettier** (linting/formatting)
- **Husky + lint-staged** (pre-commit hooks)

---

## 📁 Full Project Directory Structure

```
AtomicReactKit/
├── public/
│   └── index.html
├── src/
│   ├── api/
│   │   ├── apolloClient.ts
│   │   ├── queries/
│   │   └── mutations/
│   ├── components/
│   │   ├── atoms/
│   │   ├── molecules/
│   │   ├── cells/
│   │   ├── organisms/
│   │   ├── templates/
│   │   └── pages/
│   ├── hooks/
│   ├── stories/
│   ├── utils/
│   ├── types/
│   └── index.tsx
├── .storybook/
│   ├── main.ts
│   ├── preview.ts
│   └── manager.ts
├── .env.example
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── jest.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── README.md
```

---

## 📚 Documentation

---

## 📝 Coding Conventions & Defaults

- **Naming:** Use camelCase for all variables, functions, and file names unless otherwise specified.
- **Consistency:** All agreed-upon conventions and project defaults are tracked in `conventions.md` at the root of this repository.
- **Updates:** Update `conventions.md` whenever a new standard or default is established.

---

## ✅ Verification Process

- After each major buildout step, a verification test or check must be performed to confirm that the step is correctly implemented.
- This is a required part of the workflow and is tracked in the buildout checklist.
- Verification can include running automated tests, manual checks, or code reviews as appropriate.

---

## 📚 Previous Vite Template Reference

The following section contains the original Vite-generated README for reference:

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
