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
export const DishCardList: React.FC<DishCardListProps> = ({ dishes, onOrder, className = "" }) => (
  <div className={`flex gap-7 overflow-x-auto ${className}`}>
    {dishes.map((dish) => (
      <DishCard key={dish.id} dish={dish} onOrder={onOrder} />
    ))}
  </div>
);

export default DishCardList;
