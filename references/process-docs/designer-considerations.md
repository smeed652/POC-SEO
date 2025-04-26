# Designer Considerations: Figma-to-React Handoff Issues & Solutions

_Last updated: 2025-04-26_

---

## Purpose
This document summarizes the issues encountered during the Figma-to-React workflow, where they appeared, and why they caused problems in our codebase. It is intended to foster a shared understanding between designers and developers, and to guide more efficient, design-system-aligned handoffs in the future.

---

## Issues Found & Where

### HeartIcon Design Intent
- The HeartIcon should have a transparent background.
- When inactive, the heart is a white outline (stroke), no fill.
- When active (favorited), the heart is solid red (fill), no outline.
- There should be no background rectangle behind the heart.
- User interaction (click/tap) toggles the state.
- Refer to the provided reference image for exact appearance.


### 1. Dietary Icons Lacked Accessibility and Used Hardcoded Colors
- **Where:** Dietary icons
- **Why it caused issues:**
  - Hardcoded hex values for color resulted in design inconsistency.
  - Lack of accessibility attributes made icons inaccessible to users with disabilities.
  - **Solution:** All icons now use Tailwind color classes and have role="img" and aria-label for accessibility compliance.

### 2. Non-Standard Border Radius (e.g., `rounded-[10px]`)
- **Where:** `DishDetailCard`, `DishImage`, and other atoms/molecules
- **Why it caused issues:**
  - Not part of the default Tailwind palette, so it results in arbitrary values in code (`rounded-[10px]`).
  - Harder to maintain, audit, and standardize; may cause inconsistent appearance if not used everywhere.
  - **Solution:** If a custom radius is a design standard, add it as a design token in Tailwind config and use that class everywhere.

### 2. Custom Font Family (e.g., `font-['Plus_Jakarta_Sans']`)
- **Where:** `DishName` atom
- **Why it caused issues:**
  - Not part of the global typography scale or Tailwind config.
  - Can lead to inconsistent typography and extra manual work for developers.
  - **Solution:** Define all brand fonts in the design system and Tailwind config so they can be referenced by a class (e.g., `font-brand`).

### 3. Arbitrary Outline/Shadow/Color Values
- **Where:** `OrderButton`, `DishDetailCard`
- **Why it caused issues:**
  - Use of arbitrary outline width or color (`outline-1`, `outline-indigo-700`) not always mapped to design tokens.
  - Inconsistent use can lead to subtle visual mismatches and more code overrides.
  - **Solution:** Standardize outline/shadow/color values in the design system and Tailwind config.

### 4. Hardcoded Spacing (e.g., `p-6`, `gap-4`)
- **Where:** Multiple atoms/molecules/organisms
- **Why it caused issues:**
  - If spacing is not part of the design system, it can drift over time and cause layout inconsistencies.
  - **Solution:** Use only spacing values defined in the design system and Tailwind config.

### 5. Lack of Accessibility Guidance
- **Where:** Most components before refactor
- **Why it caused issues:**
  - Missing ARIA labels, roles, or alt text can make components inaccessible to users with disabilities.
  - **Solution:** Designers should annotate Figma files with accessibility requirements (e.g., alt text, roles, keyboard focus).

---

## Recommendations for Designers
- **Define all custom values (radius, color, font, spacing) as design tokens** in Figma and communicate them clearly to developers.
- **Use only design-system-approved values** for spacing, color, typography, and border radii in your designs.
- **Annotate accessibility requirements** directly in Figma (alt text, ARIA roles, focus order, etc.).
- **Collaborate with developers** to update the design system and Tailwind config when new standards are needed.

---

## Next Steps
- Review these issues as a team and agree on which custom values should become part of the design system.
- Update Figma libraries and Tailwind config to reflect agreed-upon tokens and standards.
- Use this document as a checklist for future design handoffs.

---

_This document is a living resource. Update it as new issues or solutions arise!_
