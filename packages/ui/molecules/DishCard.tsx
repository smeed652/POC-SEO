import React from "react";
import DishImage from "../atoms/DishImage";
import HeartIcon from "../atoms/HeartIcon";
import CategoryLabel from "../atoms/CategoryLabel";
import DishName from "../atoms/DishName";
import DishStats from "../atoms/DishStats";
import OrderButton from "../atoms/OrderButton";

export interface Dish {
  id: string | number;
  image: string;
  name: string;
  category: string;
  calories: number;
  sizes: number;
  customizable: boolean;
  favorite?: boolean;
}

export interface DishCardProps {
  dish: Dish;
  onOrder: (dish: Dish) => void;
  className?: string;
}

/**
 * DishCard molecule — combines all atoms for a single dish tile.
 */
// NOTE: relative, flex, flex-col, items-center, bg-white, rounded-[10px], outline, outline-1, outline-zinc-200, w-72, h-80, w-full, p-4, gap-4 are design tokens for layout, spacing, color, border, and sizing. Update if the design system changes.
export const DishCard: React.FC<DishCardProps> = ({ dish, onOrder, className = "" }) => (
  <div className={`relative flex flex-col items-center bg-white rounded-[10px] outline outline-1 outline-zinc-200 w-72 h-80 ${className}`}>
    <div className="relative w-full">
      <DishImage src={dish.image} alt={dish.name} />
      <HeartIcon active={dish.favorite} />
    </div>
    <div className="p-4 flex flex-col gap-4 w-full">
      <CategoryLabel label={dish.category} />
      <DishName name={dish.name} />
      <DishStats calories={dish.calories} sizes={dish.sizes} customizable={dish.customizable} />
      <OrderButton onClick={() => onOrder(dish)} />
    </div>
  </div>
);

export default DishCard;
