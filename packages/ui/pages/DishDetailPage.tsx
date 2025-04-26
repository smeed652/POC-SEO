import React from 'react';
import PageContainer from '../layout/PageContainer';
import { SeoNavigation } from '../organisms/SeoNavigation';
import Breadcrumbs from '../molecules/Breadcrumbs';
import RestaurantTile from '../molecules/RestaurantTile';
import ShareDishButton from '../molecules/ShareDishButton';
import CtaBanner from '../molecules/CtaBanner';
// import DishIngredientsSection from '../molecules/DishIngredientsSection';
import NutritionTable from '../molecules/NutritionTable';

import CarouselContainer from '../organisms/CarouselContainer';
import type { Dish } from '../molecules/DishCard';
import BreadcrumbItem from '../atoms/BreadcrumbItem';
import BreadcrumbSeparator from '../atoms/BreadcrumbSeparator';
import CategoryLabel from '../atoms/CategoryLabel';
import DietaryIcon from '../atoms/DietaryIcon';
import DietaryText from '../atoms/DietaryText';
import DishDescription from '../atoms/DishDescription';
import DishImage from '../atoms/DishImage';
import DishIngredients from '../atoms/DishIngredients';
import DishName from '../atoms/DishName';
import DishNutrition from '../atoms/DishNutrition';
import DishStats from '../atoms/DishStats';
import HeartIcon from '../atoms/HeartIcon';
import Logo from '../atoms/Logo';
import NavLink from '../atoms/NavLink';
import OrderButton from '../atoms/OrderButton';
import RestaurantLogo from '../atoms/RestaurantLogo';
import RestaurantMeta from '../atoms/RestaurantMeta';
import RestaurantName from '../atoms/RestaurantName';

import IconArrow from '../atoms/icons/IconArrow';
import IconMenu from '../atoms/icons/IconMenu';
import IconUser from '../atoms/icons/IconUser';

// ...DishDetailPage definition remains unchanged...


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

        {/* --- Main Dish Section: Image + Details Side by Side --- */}
        <div className="flex flex-col md:flex-row gap-8 py-6">
          {/* Dish Image Left */}
          <div className="flex-shrink-0 w-full md:w-[340px] flex items-start justify-center">
            <DishImage
              src="/assets/mediterranean-burger.png"
              alt="The Mediterranean Burger"
              className="w-full max-w-xs h-64 object-cover rounded-2xl shadow-md"
            />
          </div>
          {/* Details Right */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <span className="text-xs text-slate-700 font-sans">Restaurant Name</span>
              <ShareDishButton label="Share Dish" />
            </div>
            <div className="flex items-center justify-between mt-1">
              <h1 className="text-2xl font-bold text-slate-900 font-sans">The Mediterranean Burger</h1>
            </div>
            <div className="mt-2 mb-5">
              <p className="text-base text-slate-600 font-sans">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              {/* Ingredients Left */}
              <div className="flex-1 min-w-0">
                <h2 className="text-lg font-semibold text-slate-800 mb-2">Ingredients</h2>
                <div className="mb-2 flex gap-3">
                  <span className="flex items-center gap-1 text-slate-500 text-sm font-sans"><DietaryIcon type="soy" /> Contains Soy</span>
                  <span className="flex items-center gap-1 text-slate-500 text-sm font-sans"><DietaryIcon type="seafood" /> Contains Seafood</span>
                </div>
                <div className="text-slate-600 text-sm font-sans">
                  Nori Seaweed, Rice, Rice Wine Vinegar, Wasabi paste (Horseradish, Sorbitol, Rice Bran Oil, Sugar, Modified Food Starch, Salt, Water, Cellulose, Wasabi, Artificial Flavor, Citric Acid, Turmeric, Xanthan Gum, Artificial Color), Vegetable Oil, White Sugar, Salmon, Tuna, Eel, Shrimp, Pickled Ginger (Ginger, Rice Wine Vinegar, Water, Salt, Sugar), Salmon Roe, Soy Sauce (gluten free).
                </div>
              </div>
              {/* Nutrition Right */}
              <div className="flex-1 min-w-0">
                <h2 className="text-lg font-semibold text-slate-800 mb-2">Nutrition</h2>
                <NutritionTable
                  rows={[
                    { label: "520", value: "Calories" },
                    { label: "175", value: "Calories from Fat" },
                    { label: "18g", value: "Total Fat" },
                    { label: "3g", value: "Saturated Fat" },
                    { label: "<1g", value: "Trans Fat" },
                    { label: "65g", value: "Total Carbohydrates" },
                    { label: "8g", value: "Sugars" },
                    { label: "20g", value: "Protein" },
                    { label: "35mg", value: "Cholesterol" },
                    { label: "900mg", value: "Sodium" },
                    { label: "6g", value: "Dietary Fibre" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        {/* --- Restaurant Tile & CTA Banner Below Main Section --- */}
        <div className="flex flex-col gap-4 pb-8">
          <RestaurantTile
            logo="/assets/honeygrow-badge-icon.png"
            name="Honeygrow"
            cuisine="Healthy fast-casual"
            locationCount={3}
            dishCount={37}
          />
          <CtaBanner
            icon={<svg className="h-5 w-5 text-indigo-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m0 10v1m8-5h-1M4 10H3m13.657-6.657l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 2.343l-.707-.707"/></svg>}
            message="Does this dish match your dietary requirements?"
            ctaLabel="Check with EveryBite"
            ctaHref="#"
            className="mt-2"
          />
        </div>

        {/* --- Dish Stats, Heart, and Order Button --- */}
        <div className="flex items-center gap-4 py-4">
          <DishStats calories={450} sizes={2} customizable={true} />
          <HeartIcon active={true} className="text-red-500 w-6 h-6 cursor-pointer" />
          <OrderButton onClick={() => {}}>
            Order Now
          </OrderButton>
        </div>

        {/* --- Carousel of Related Dishes --- */}
        <div className="pt-8">
          <CarouselContainer
            dishes={[
              { id: 1, image: "https://placehold.co/297x152", name: "Sushi & Salad Combo with Salad", category: "Menu Category", calories: 123, sizes: 3, customizable: true, favorite: true },
              { id: 2, image: "https://placehold.co/297x152", name: "Chicken Teriyaki Bowl", category: "Asian", calories: 450, sizes: 2, customizable: false, favorite: false },
              { id: 3, image: "https://placehold.co/297x152", name: "Vegan Delight", category: "Vegan", calories: 320, sizes: 1, customizable: true, favorite: false },
              { id: 4, image: "https://placehold.co/297x152", name: "Pasta Primavera", category: "Italian", calories: 390, sizes: 2, customizable: true, favorite: false },
              { id: 5, image: "https://placehold.co/297x152", name: "BBQ Chicken Pizza", category: "Pizza", calories: 500, sizes: 3, customizable: false, favorite: true },
            ]}
            onOrder={() => {}}
            onExploreAll={() => {}}
          />
        </div>




      </PageContainer>
    </div>
  );
};

export default DishDetailPage;
