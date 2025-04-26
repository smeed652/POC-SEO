# Atomic Component Build & Figma-to-React Workflow

## Pre-Setup Checklist

- [x] Dependencies installed (`npm install`)
- [x] Storybook runs (`npm run storybook`)
- [ ] Figma-to-Code plugin installed in Figma
- [ ] (Optional) Storybook Figma addon installed ([storybook-addon-designs](https://storybook.js.org/addons/storybook-addon-designs))
- [ ] Design tokens available (colors, spacing, typography)
- [x] Directory structure for atoms in `/packages/ui/atoms/`
- [x] README for tracking progress

---

## Atomic Components Progress Tracker

| Atom Name             | Figma Export | Component | Storybook | Docs/Props | Pixel Perfect | Done |
|----------------------|:------------:|:---------:|:---------:|:----------:|:-------------:|:----:|
| seo-navigation       | [ ]          | [ ]       | [ ]       | [ ]        | [ ]           | [ ]  |
| seo-dish-image       | [ ]          | [ ]       | [ ]       | [ ]        | [ ]           | [ ]  |
| seo-restaurant-tile  | [ ]          | [ ]       | [ ]       | [ ]        | [ ]           | [ ]  |
| seo-dish-details     | [ ]          | [ ]       | [ ]       | [ ]        | [ ]           | [ ]  |
| seo-breadcrumbs      | [ ]          | [ ]       | [ ]       | [ ]        | [ ]           | [ ]  |
| seo-dish-name        | [ ]          | [ ]       | [ ]       | [ ]        | [ ]           | [ ]  |
| seo-dish-description | [ ]          | [ ]       | [ ]       | [ ]        | [ ]           | [ ]  |
| seo-dish-ingredients | [ ]          | [ ]       | [ ]       | [ ]        | [ ]           | [ ]  |
| seo-banner           | [ ]          | [ ]       | [ ]       | [ ]        | [ ]           | [ ]  |
| seo-dish-tile        | [ ]          | [ ]       | [ ]       | [ ]        | [ ]           | [ ]  |
| seo-carousel         | [ ]          | [ ]       | [ ]       | [ ]        | [ ]           | [ ]  |

---

## Step-by-Step Workflow

### 1. Identify and Name Each Atom
  - List all atomic components in this README for tracking.

### 2. For Each Atom

#### a. Export or Inspect from Figma
  - Use Figma-to-Code to generate JSX/CSS.
  - Inspect for props, states, and variants.

#### b. Create the Component File
  - E.g., `/packages/ui/atoms/SeoNavigation.tsx`
  - Paste Figma-to-Code output, refactor to use Tailwind/design tokens, abstract props.

#### c. Create the Storybook Story
  - E.g., `/packages/ui/atoms/SeoNavigation.stories.tsx`
  - Add stories for all states/variants.
  - (Optional) Embed Figma frame with Storybook Figma addon.

#### d. Test in Storybook
  - Run Storybook, visually compare to Figma.
  - Adjust for pixel perfection.

#### e. Document Props and Usage
  - Use Args/Controls in Storybook.
  - Add comments/MDX docs.

### 3. Repeat for Each Atom
  - Commit after each is working and documented.

### 4. Refactor and Compose
  - Build molecules/organisms from atoms.

### 5. (Optional) Visual Regression Testing
  - Set up Chromatic or Percy for automated UI tests.

---

## Tips
- Always refactor Figma-to-Code output to use your design system.
- Use Storybook as your dev sandbox.
- Keep components small and focused.
- Document everything.
- Sync regularly with designers.

---

## Resources
- [Storybook Docs](https://storybook.js.org/docs/react/get-started/introduction)
- [storybook-addon-designs](https://storybook.js.org/addons/storybook-addon-designs)
- [Figma-to-Code Plugin](https://www.figma.com/community/plugin/1082711815819198581/Figma-to-Code)

---

_Update this checklist as you complete each step for every atom!_
