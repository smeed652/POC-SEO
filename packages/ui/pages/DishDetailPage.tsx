import React from 'react';
import PageContainer from '../layout/PageContainer';
import { SeoNavigation } from '../organisms/SeoNavigation';
import Breadcrumbs from '../molecules/Breadcrumbs';
import RestaurantTile from '../molecules/RestaurantTile';
import DishDetailCard from '../molecules/DishDetailCard';
import DietaryBanner from '../molecules/DietaryBanner';
import CarouselContainer from '../organisms/CarouselContainer';
import type { Dish } from '../molecules/DishCard';

const DishDetailPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SeoNavigation />
      <PageContainer>
        {/* --- Breadcrumbs --- */}
        <div className="py-4">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Menus", href: "/menus" },
              { label: "Sushi & Salad Combo", isActive: true },
            ]}
          />
        </div>

        {/* --- Restaurant Tile --- */}
        <div className="py-2">
          <RestaurantTile
            logo="https://placehold.co/40x40"
            name="Sushi Place"
            cuisine="Japanese"
            distance="1.2 mi"
          />
        </div>

        {/* --- Dish Detail Card --- */}
        <div className="py-4">
          <DishDetailCard
            image="https://placehold.co/400x192"
            name="Sushi & Salad Combo"
            calories={450}
            sizes={2}
            customizable={true}
            description="A delicious combo of fresh sushi, crisp greens, and house-made dressing."
            ingredients={["Salmon", "Avocado", "Rice", "Mixed Greens", "Sesame Seeds"]}
            nutrition={{ protein: 22, fat: 14, carbs: 55 }}
            onOrder={() => alert("Order placed!")}
          />
        </div>

        {/* --- Dietary Banner --- */}
        <div className="py-2">
          <DietaryBanner
            items={[
              { type: "vegan", text: "Vegan" },
              { type: "gluten-free", text: "Gluten-Free" },
              { type: "spicy", text: "Spicy" },
            ]}
          />
        </div>

        {/* --- Similar Dishes Carousel --- */}
        <div className="py-8">
          <CarouselContainer
            dishes={[
              {
                id: 1,
                image: "https://placehold.co/297x152",
                name: "Sushi & Salad Combo with Salad",
                category: "Menu Category",
                calories: 123,
                sizes: 3,
                customizable: true,
                favorite: true,
              },
              {
                id: 2,
                image: "https://placehold.co/297x152",
                name: "Chicken Teriyaki Bowl",
                category: "Asian",
                calories: 450,
                sizes: 2,
                customizable: false,
                favorite: false,
              },
              {
                id: 3,
                image: "https://placehold.co/297x152",
                name: "Vegan Delight",
                category: "Vegan",
                calories: 320,
                sizes: 1,
                customizable: true,
                favorite: false,
              },
              {
                id: 4,
                image: "https://placehold.co/297x152",
                name: "Pasta Primavera",
                category: "Italian",
                calories: 390,
                sizes: 2,
                customizable: true,
                favorite: false,
              },
              {
                id: 5,
                image: "https://placehold.co/297x152",
                name: "BBQ Chicken Pizza",
                category: "Pizza",
                calories: 500,
                sizes: 3,
                customizable: false,
                favorite: true,
              },
            ]}
            onOrder={(dish: Dish) => alert(`Order placed for ${dish.name}!`)}
            onExploreAll={() => alert("Explore All clicked!")}
          />
        </div>
      </PageContainer>
    </div>
  );
};

export default DishDetailPage;
