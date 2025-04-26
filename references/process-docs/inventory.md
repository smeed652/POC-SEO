# Atomic Design Inventory: SEO Page Components

This document inventories all atomic UI classes (atoms, molecules, organisms) created for the Sample SEO Page. This helps ensure coverage, reusability, and design consistency.

---

## Atoms (`/packages/ui/atoms/`)
- **BreadcrumbItem** — Single item in a breadcrumb trail
- **BreadcrumbSeparator** — Separator symbol for breadcrumbs
- **CategoryLabel** — Displays a category/tag label
- **DietaryIcon** — Icon for dietary type (e.g., vegan, gluten-free)
- **DietaryText** — Text label for dietary info
- **DishDescription** — Description text for a dish
- **DishImage** — Image for a dish
- **DishIngredients** — List or string of ingredients
- **DishName** — Name/title of a dish
- **DishNutrition** — Nutrition facts for a dish
- **DishStats** — Macro/micro nutrition stats
- **HeartIcon** — Favorite/like icon
- **Logo** — EveryBite brand logo
- **NavLink** — Navigation link (header, nav, etc.)
- **OrderButton** — Button to order a dish
- **RestaurantLogo** — Logo for a restaurant
- **RestaurantMeta** — Cuisine and distance info
- **RestaurantName** — Restaurant name text
- **SampleAtom** — Example/test atom
- **icons/IconArrow** — Arrow icon for navigation
- **icons/IconMenu** — Menu (hamburger) icon
- **icons/IconUser** — User/profile icon

## Molecules (`/packages/ui/molecules/`)
- **RestaurantTile** — Card with logo, name, and meta info (locations, dishes, distance). Now uses card styling and supports locations/dishes meta info for Figma parity. Updated April 2025 after Figma parity review. Location: `/packages/ui/molecules/RestaurantTile.tsx`.
  - *Note: Updated to match Figma design and atomic coverage; card styling and meta info were missing in the original version.*
- **ShareDishButton** — Button for sharing a dish, with icon. Added April 2025 after gap discovered during Figma parity review. Location: `/packages/ui/molecules/ShareDishButton.tsx`.
  - *Note: Not present in the original inventory; need identified when actual Figma requirements were compared to atomic coverage.*
- **DishIngredientsSection** — Heading, dietary icon row, and ingredient list for a dish. Added April 2025 after gap discovered during Figma parity review. Location: `/packages/ui/molecules/DishIngredientsSection.tsx`.
  - *Note: Not present in the original inventory; need identified when actual Figma requirements were compared to atomic coverage.*
- **CtaBanner** — Flexible call-to-action/info banner with icon, message, and CTA link. Added April 2025 after gap discovered during Figma parity review. Location: `/packages/ui/molecules/CtaBanner.tsx`.
  - *Note: Not present in the original inventory; need identified when actual Figma requirements were compared to atomic coverage.*
- **NutritionTable** — Accessible, reusable nutrition facts table. Added April 2025 after gap discovered during Figma parity review. Location: `/packages/ui/molecules/NutritionTable.tsx`. 
  - *Note: Not present in the original inventory; need identified when actual Figma requirements were compared to atomic coverage.*
- **Breadcrumbs** — Full breadcrumb navigation
- **DietaryBanner** — Banner for dietary info (e.g., Vegan, Spicy)
- **DishCard** — Card displaying dish summary
- **DishDetailCard** — Detailed card for a dish (image, stats, etc.)
- **RestaurantTile** — Tile for a restaurant summary

## Organisms (`/packages/ui/organisms/`)
- **CarouselContainer** — Carousel UI container
- **CarouselHeader** — Header for carousel sections
- **CarouselNavButton** — Navigation button for carousel
- **DishCardList** — List of dish cards in carousel
- **SeoNavigation** — Top navigation bar for SEO page

## Image Assets Needed for DishDetailPage
Store all images in `/public/assets/` as `.png` files. These assets will replace placeholder images throughout the UI.

| Usage                        | Filename                        |
|------------------------------|----------------------------------|
| Main dish image              | dish-sushi-salad-combo.png       |
| Carousel: Chicken Teriyaki   | dish-chicken-teriyaki-bowl.png   |
| Carousel: Vegan Delight      | dish-vegan-delight.png           |
| Carousel: Pasta Primavera    | dish-pasta-primavera.png         |
| Carousel: BBQ Chicken Pizza  | dish-bbq-chicken-pizza.png       |
| Sushi Place logo             | logo-sushi-place.png             |
| Pasta House logo             | logo-pasta-house.png             |

- All images should be placed in `public/assets/`.
- Update component `src` props to `/assets/[filename]` after uploading.
- All files may use `.png` extension (preferred for transparency and quality).

## Page (`/packages/ui/pages/`)
- **DishDetailPage** — SEO-optimized menu detail page (composes all above)

---

**Notes:**
- This inventory matches the current structure of the DishDetailPage and its UI building blocks.
- For each new design, update this inventory to ensure atomic coverage and reusability.
- See also: `conventions.md` for atomic design guidelines.

_Last updated: 2025-04-26_
