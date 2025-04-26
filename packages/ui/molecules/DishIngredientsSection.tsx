import React from "react";
import DietaryIcon from "../atoms/DietaryIcon";
import DishIngredients from "../atoms/DishIngredients";

/**
 * DishIngredientsSection molecule — heading, dietary icon row, and ingredient list for a dish.
 *
 * Design tokens: mb-2, flex, gap-2, text-slate-500, text-sm, font-sans, font-semibold, mt-1
 * Update tokens if the design system changes.
 */
export interface DishIngredientsSectionProps {
  dietaryTypes: string[]; // e.g., ["Soy", "Seafood"]
  ingredients: string[]; // list of ingredients
  className?: string;
}

const DishIngredientsSection: React.FC<DishIngredientsSectionProps> = ({ dietaryTypes, ingredients, className = "" }) => (
  <section className={`mb-2 ${className}`}>
    <h3 className="text-slate-900 text-sm font-sans font-semibold mb-1">Ingredients</h3>
    <div className="flex gap-2 mb-1">
      {dietaryTypes.map(type => (
        <DietaryIcon key={type} type={type} />
      ))}
    </div>
    <DishIngredients ingredients={ingredients} />
  </section>
);

export default DishIngredientsSection;
