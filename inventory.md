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

## Page (`/packages/ui/pages/`)
- **DishDetailPage** — SEO-optimized menu detail page (composes all above)

---

**Notes:**
- This inventory matches the current structure of the DishDetailPage and its UI building blocks.
- For each new design, update this inventory to ensure atomic coverage and reusability.
- See also: `conventions.md` for atomic design guidelines.

_Last updated: 2025-04-26_
