import React from "react";
import DishImage from "../atoms/DishImage";
import DishName from "../atoms/DishName";
import DishStats from "../atoms/DishStats";
import DishDescription from "../atoms/DishDescription";
import DishIngredients from "../atoms/DishIngredients";
import DishNutrition from "../atoms/DishNutrition";
import OrderButton from "../atoms/OrderButton";

export interface DishDetailCardProps {
  image: string;
  name: string;
  calories: number;
  sizes: number;
  customizable: boolean;
  description: string;
  ingredients: string[];
  nutrition: { protein?: number; fat?: number; carbs?: number };
  onOrder: () => void;
  className?: string;
}

/**
 * DishDetailCard molecule — full detail card for a dish, with image, name, stats, description, ingredients, nutrition, and order button.
 */
// NOTE: rounded-[10px], outline-1, outline-zinc-200, max-w-md, p-6, gap-4, aspect-[16/9] are design tokens for layout, spacing, color, border, and aspect ratio.
// Update if the design system changes. Review and add to Tailwind config if reused across components.
export const DishDetailCard: React.FC<DishDetailCardProps> = ({
  image,
  name,
  calories,
  sizes,
  customizable,
  description,
  ingredients,
  nutrition,
  onOrder,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col bg-white rounded-[10px] outline outline-1 outline-zinc-200 w-full max-w-md p-6 gap-4 ${className}`}
      aria-label={`Details for ${name}`}
      role="region"
    >
      <div className="relative w-full aspect-[16/9] rounded-[10px] overflow-hidden">
        <DishImage src={image} alt={name} className="absolute inset-0 w-full h-full object-cover rounded-[10px]" />
      </div>
      <DishName name={name} />
      <DishStats calories={calories} sizes={sizes} customizable={customizable} />
      <DishDescription description={description} />
      <DishIngredients ingredients={ingredients} />
      <DishNutrition calories={calories} {...nutrition} />
      <OrderButton onClick={onOrder} />
    </div>
  );
};

export default DishDetailCard;
