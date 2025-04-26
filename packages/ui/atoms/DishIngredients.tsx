import React from "react";

export interface DishIngredientsProps {
  ingredients: string[];
  className?: string;
}

/**
 * DishIngredients atom — displays a comma-separated list of ingredients.
 */
export const DishIngredients: React.FC<DishIngredientsProps> = ({ ingredients, className = "" }) => (
  <div className={`text-xs text-slate-500 font-['Plus_Jakarta_Sans'] ${className}`}>{ingredients.join(", ")}</div>
);

export default DishIngredients;
