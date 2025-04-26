import React from "react";

export interface DishNutritionProps {
  calories: number;
  protein?: number;
  fat?: number;
  carbs?: number;
  className?: string;
}

/**
 * DishNutrition atom — displays nutrition facts for a dish.
 */
export const DishNutrition: React.FC<DishNutritionProps> = ({ calories, protein, fat, carbs, className = "" }) => (
  <div className={`flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 font-['Plus_Jakarta_Sans'] ${className}`}>
    <span>{calories} cal</span>
    {protein !== undefined && <span>{protein}g protein</span>}
    {fat !== undefined && <span>{fat}g fat</span>}
    {carbs !== undefined && <span>{carbs}g carbs</span>}
  </div>
);

export default DishNutrition;
