# Programmer Considerations

## Component Migration Audit (Critical)

**Note:** Not all molecules and organisms were transferred during the initial migration of the component library. Several gaps were only discovered after comparing the codebase to Figma/UX requirements during the atomic audit phase.

**Best Practice:**
- After any initial transfer/migration, always perform a thorough audit of the new codebase against Figma/UX and the original design system/component inventory.
- Ensure all required atoms, molecules, and organisms are present and match design intent.
- Document and fill any gaps immediately to avoid downstream integration issues.
- Update the inventory and migration checklist to reflect any missing or newly created components.

This step is essential for design parity, maintainability, and minimizing rework.

This document collects programming and implementation-specific issues, gotchas, and best practices encountered during the SmartMenus atomic refactor and design system alignment. Update as needed to help future developers avoid common pitfalls.

---

## SVG Icon Coloring with Tailwind
- **Issue:** Tailwind's `fill-*` and `text-*` classes only work on SVG shapes if the shape uses `fill="currentColor"` (not `fill="none"` or a hardcoded color).
- **Fix:**
  - Apply the desired Tailwind `text-*` color class to the parent `<svg>`.
  - Set `fill="currentColor"` on the SVG shape (e.g., `<circle>`).
  - Do not use `fill-none` or hardcoded fill attributes if you want to leverage Tailwind color utilities.
- **Why:** This ensures icons inherit color from the design system and can be themed or updated globally.
- **Reference:** See `DietaryIcon.tsx` for a working example.

---

## DietaryIcon Atom: Unique Icons Needed
- **Issue:** Currently, the DietaryIcon atom does not use unique SVG icons for each dietary type. Several types share the same icon (e.g., Gluten Free, Dairy Free, Nut Free all use a diagonal slash), which does not match the intended design system.
- **Action Needed:** Once the correct SVGs for each dietary type are available (from Figma or design), update the component so each type has its own unique icon.
- **Status:** Pending new SVGs/design assets.

## DietaryBanner Molecule: Not Integrated
- **Issue:** The DietaryBanner molecule, which uses DietaryIcon, is not currently used in any organism or page. As a result, any issues with icon rendering are not visible in the main UI.
- **Action Needed:** Review and update DietaryBanner if/when it is integrated into higher-level components or pages.
- **Status:** Not in use; mark for future review.

Add additional programming considerations below as you encounter them.
