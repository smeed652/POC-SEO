import React from 'react';
import PageContainer from '../layout/PageContainer';
import { SeoNavigation } from '../organisms/SeoNavigation';
import Breadcrumbs from '../molecules/Breadcrumbs';
import RestaurantTile from '../molecules/RestaurantTile';
import DishDetailCard from '../molecules/DishDetailCard';
import DietaryBanner from '../molecules/DietaryBanner';
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
import SampleAtom from '../atoms/SampleAtom';
import IconArrow from '../atoms/icons/IconArrow';
import IconMenu from '../atoms/icons/IconMenu';
import IconUser from '../atoms/icons/IconUser';

// ...DishDetailPage definition remains unchanged...

const AtomicShowcase: React.FC = () => (
  <section className="my-12 p-6 bg-white border rounded-lg shadow-sm">
    <h2 className="text-xl font-bold mb-4">Atomic Components Showcase</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      <div><b>BreadcrumbItem:</b> <BreadcrumbItem label="Menu" href="/menus" /></div>
      <div><b>BreadcrumbSeparator:</b> <BreadcrumbSeparator /></div>
      <div><b>CategoryLabel:</b> <CategoryLabel label="Vegan" /></div>
      <div><b>DietaryIcon:</b> <DietaryIcon type="vegan" /></div>
      <div><b>DietaryText:</b> <DietaryText text="Gluten-Free" /></div>
      <div><b>DishDescription:</b> <DishDescription description="A tasty dish." /></div>
      <div><b>DishImage:</b> <DishImage src="/assets/dish-sushi-salad-combo.png" alt="Dish" className="w-72 h-36 rounded-tl-[10px] rounded-tr-[10px] object-cover" /></div>
      <div><b>DishIngredients:</b> <DishIngredients ingredients={["Rice", "Avocado"]} /></div>
      <div><b>DishName:</b> <DishName name="Sushi Roll" /></div>
      <div><b>DishNutrition:</b> <DishNutrition calories={200} protein={10} fat={5} carbs={30} /></div>
      <div><b>DishStats:</b> <DishStats calories={200} sizes={2} customizable={true} /></div>
      <div><b>HeartIcon:</b> <HeartIcon active /></div>
      <div><b>Logo:</b> <Logo className="w-10 h-10 object-contain rounded-full" /></div>
      <div><b>NavLink:</b> <NavLink href="/about">About</NavLink> </div>
      <div><b>OrderButton:</b> <OrderButton onClick={()=>{}}>Order Now</OrderButton></div>
      <div><b>RestaurantLogo:</b> <RestaurantLogo src="/assets/honeygrow-badge-icon.png" alt="Logo" className="w-10 h-10 rounded-full object-cover border border-zinc-200 bg-white" /></div>
      <div><b>RestaurantMeta:</b> <RestaurantMeta cuisine="Italian" distance="2 mi" /></div>
      <div><b>RestaurantName:</b> <RestaurantName name="Pasta House" /></div>
      <div><b>SampleAtom:</b> <SampleAtom label="Demo" /></div>
      <div><b>IconArrow:</b> <IconArrow /> <b>IconMenu:</b> <IconMenu /> <b>IconUser:</b> <IconUser /></div>
    </div>
  </section>
);

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
            logo="/assets/honeygrow-badge-icon.png"
            name="Sushi Place"
            cuisine="Japanese"
            distance="1.2 mi"
          />
        </div>

        {/* --- Dish Detail Card --- */}
        <div className="py-4">
          <DishDetailCard
            image="/assets/mediterranean-burger.png"
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
                image: "/assets/dish-sushi-salad-combo.png",
                name: "Sushi & Salad Combo with Salad",
                category: "Menu Category",
                calories: 123,
                sizes: 3,
                customizable: true,
                favorite: true,
              },
              {
                id: 2,
                image: "/assets/dish-sushi-salad-combo.png",
                name: "Chicken Teriyaki Bowl",
                category: "Asian",
                calories: 450,
                sizes: 2,
                customizable: false,
                favorite: false,
              },
              {
                id: 3,
                image: "/assets/dish-sushi-salad-combo.png",
                name: "Vegan Delight",
                category: "Vegan",
                calories: 320,
                sizes: 1,
                customizable: true,
                favorite: false,
              },
              {
                id: 4,
                image: "/assets/dish-sushi-salad-combo.png",
                name: "Pasta Primavera",
                category: "Italian",
                calories: 390,
                sizes: 2,
                customizable: true,
                favorite: false,
              },
              {
                id: 5,
                image: "/assets/dish-sushi-salad-combo.png",
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

        {/* --- Atomic Components Showcase --- */}
        <AtomicShowcase />
      </PageContainer>
    </div>
  );
};

export default DishDetailPage;
