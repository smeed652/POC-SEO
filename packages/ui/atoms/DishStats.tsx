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
  <div className={`flex items-center gap-1 text-xs text-slate-900 font-medium font-['Plus_Jakarta_Sans'] leading-tight ${className}`}>
    <span>{calories} Calories</span>
    <span className="text-[9px]">•</span>
    <span>{sizes} Sizes</span>
    <span className="text-[9px]">•</span>
    <span>{customizable ? "Customizable" : "Fixed"}</span>
  </div>
);

export default DishStats;
