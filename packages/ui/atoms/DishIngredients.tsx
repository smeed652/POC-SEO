import React from "react";

export interface DishIngredientsProps {
  ingredients: string[];
  className?: string;
}

/**
 * DishIngredients atom — displays a comma-separated list of ingredients.
 */
export const DishIngredients: React.FC<DishIngredientsProps> = ({ ingredients, className = "" }) => (
  // font-sans is mapped to 'Plus Jakarta Sans' in Tailwind config for design system consistency
  <div className={`text-xs text-slate-500 font-sans ${className}`}>{ingredients.join(", ")}</div>
);

export default DishIngredients;
