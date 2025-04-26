# Figma Change Log & Mapping

This document tracks all changes made in Figma that impact the React component structure, naming, and atomic design mapping. Keep this up to date as you rename, regroup, or redesign layers in Figma so the codebase and design stay in sync.

---

## **Recent Figma Changes**

| Date       | Figma Layer Name           | Change Type         | New Name / Structure              | Reason/Notes                                   |
|------------|---------------------------|---------------------|-----------------------------------|------------------------------------------------|
| 2025-04-25 | Card Frame                | Rename              | RestaurantCard                    | Clarifies intent, matches React organism name   |
| 2025-04-25 | Logo Placeholder          | Rename              | RestaurantLogo                    | Consistent naming for logo atom/molecule        |
| 2025-04-25 | Icon_Molecule/Circular    | Rename              | RestaurantIcon                    | Distinguish from generic icons                  |
| 2025-04-25 | Restaurant Name           | Rename              | RestaurantNameText                | Atomic text element                            |
| 2025-04-25 | San Francisco, CA, USA    | Rename              | RestaurantLocationText            | Atomic text element                            |
| 2025-04-25 | Info + Button             | Regroup & Rename    | RestaurantActions                 | Molecule for info row + CTA                    |
| 2025-04-25 | Text link                 | Rename              | ActionLink                        | Atomic link                                    |
| 2025-04-25 | Dishes Saved (2)          | Rename              | DishesSavedText                   | Atomic stat text                               |
| 2025-04-25 | Button                    | Rename              | Button                            | General button atom                            |
| 2025-04-25 | Icon                      | Rename              | Icon                              | General icon atom                              |
| 2025-04-25 | Text                      | Rename              | ButtonText                        | For button labels                              |
| 2025-04-25 | Nutrition Section         | New Group           | NutritionPanel                    | Organism for nutrition info                    |
| 2025-04-25 | Nutrition Fact            | New Atom            | NutritionItem                     | For each nutrition label/value                 |
| 2025-04-25 | Section Title             | New Molecule        | SectionHeader                     | For section headings with/without icon         |
| 2025-04-25 | SEO Detail Page           | New Template        | SeoDetailPageTemplate             | Template for SEO-optimized page                |

---

## **Guidelines for Figma-to-React Mapping**

- **Always use clear, descriptive names for layers and groups.**
- **Group related elements into molecules and organisms** (e.g., meta info row, nutrition panel).
- **Update this log whenever you rename, regroup, or add/remove layers** that affect the codebase.
- **Coordinate with developers** to ensure code and design remain in sync.

---

## **Open Tasks / Next Steps**
- [ ] Generalize text atoms in codebase for DRYness (e.g., single `Text` atom with variants)
- [ ] Refactor stat/meta displays to use shared atoms
- [ ] Audit Figma for any remaining ambiguous or duplicate layers
- [ ] Update this log after each Figma design review

---

_Last updated: 2025-04-25_
