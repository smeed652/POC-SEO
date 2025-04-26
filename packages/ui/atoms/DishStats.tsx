import React from "react";

export interface DishStatsProps {
  calories: number;
  sizes: number;
  customizable: boolean;
  className?: string;
}

/**
 * DishStats atom — shows calories, sizes, and customizable status.
 */
export const DishStats: React.FC<DishStatsProps> = ({ calories, sizes, customizable, className = "" }) => (
  // font-sans is mapped to 'Plus Jakarta Sans' in Tailwind config for design system consistency
  <div className={`flex items-center gap-1 text-xs text-slate-900 font-medium font-sans leading-tight ${className}`}>
    <span>{calories} Calories</span>
    <span className="text-[9px]">•</span>
    <span>{sizes} Sizes</span>
    <span className="text-[9px]">•</span>
    <span>{customizable ? "Customizable" : "Fixed"}</span>
  </div>
);

export default DishStats;
