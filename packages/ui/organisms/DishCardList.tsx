import React from "react";
import DishCard, { Dish } from "../molecules/DishCard";

export interface DishCardListProps {
  dishes: Dish[];
  onOrder: (dish: Dish) => void;
  className?: string;
}

/**
 * DishCardList organism — horizontally scrollable row of DishCards.
 */
// NOTE: flex, gap-7, and overflow-x-auto are design tokens for layout, spacing, and overflow. Update if the design system changes.
export const DishCardList: React.FC<DishCardListProps> = ({ dishes, onOrder, className = "" }) => (
  <div className={`flex gap-7 overflow-x-auto ${className}`}>
    {dishes.map((dish) => (
      <DishCard key={dish.id} dish={dish} onOrder={onOrder} />
    ))}
  </div>
);

export default DishCardList;
