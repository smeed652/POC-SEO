# Figma-to-React Atomic Refactoring: Best Practices & Checklist

_Last updated: 2025-04-26_

---

## Purpose
A living document to guide and standardize the process of refactoring Figma-to-Code React components into a scalable, maintainable atomic design system using Tailwind CSS and design tokens.

---

## 1. Principles
- **Atomic Design:** Break UI into Atoms (single elements), Molecules (combinations of atoms), and Organisms (complex structures).
- **Reusability:** Components should be flexible, composable, and accept props for content, style, and behavior.
- **Design Tokens & Tailwind:** Replace all hardcoded values (colors, spacing, fonts) with Tailwind classes or design tokens.
- **Single Responsibility:** Each component should do one thing well.
- **Accessibility:** Follow WCAG standards for keyboard navigation, ARIA, and color contrast.
- **Documentation:** Every component should have Storybook stories and clear prop documentation.
- **Testing:** Add unit and integration tests for critical logic and rendering.

---

## 2. Refactoring Checklist

### Atoms
- [ ] Single visual element or concept
- [ ] All styles via Tailwind or tokens (no inline styles)
- [ ] Accepts props for content and style (`className`, `children`, etc.)
- [ ] Storybook story exists
- [ ] Accessibility considered

### Molecules
- [ ] Composed only of atoms
- [ ] No hardcoded values; uses props and classes
- [ ] Storybook story exists
- [ ] Accessibility considered

### Organisms
- [ ] Composed of molecules and atoms only
- [ ] Layout logic is minimal; push styles down to children
- [ ] Responsive and accessible

### Pages
- [ ] Assembled only from organisms, molecules, and atoms
- [ ] No direct Figma-to-Code output or large unrefactored blocks

---

## 3. Step-by-Step Refactor Process
1. **Audit**: Identify large components, repeated patterns, and hardcoded styles.
2. **Extract**: Break down large blocks into atoms/molecules.
3. **Replace Styles**: Convert inline/hardcoded styles to Tailwind or tokens.
4. **Add Props**: Make components flexible and reusable.
5. **Update Usage**: Refactor parent components to use new atoms/molecules.
6. **Storybook**: Add or update stories for visual testing.
7. **Test**: Add or update tests for new/changed components.
8. **Document**: Update this document as new patterns or decisions arise.

---

## 4. Handling Custom Values

- When you encounter a custom value (e.g., `rounded-[10px]`, custom font family, outline color) used in multiple places, add it to your Tailwind config as a design token or utility class.
- If a custom value is unique to one component, document its usage in the component file and in this best practices doc.
- Strive for consistency: prefer using existing Tailwind classes or your design tokens over introducing new arbitrary values.
- Document any new design tokens or config changes in this section for team reference.

## 4. Automation Ideas
- Script to detect inline styles or repeated JSX blocks
- Codemods to replace common hardcoded values with Tailwind classes

---

## 5. Refactor Progress Checklist

- [ ] All icons use Tailwind color classes or design tokens for fill/stroke (no hardcoded hex values)
- [ ] All meaningful icons have role="img" and aria-label for accessibility

| Component         | Status      | Notes                                    |
|------------------|------------|------------------------------------------|
| DishDetailCard   | In Progress| Standardizing custom values, auditing atoms |

## 6. Next Steps
- [ ] Continue refactoring molecules/organisms
- [ ] Track progress in this document (add a table or checklist of completed components)
- [ ] Regularly review and update best practices as the codebase evolves

---

## 6. References
- [Atomic Design by Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/)

---

_This document is a work in progress. Update it as your team discovers new patterns, tools, or challenges!_
