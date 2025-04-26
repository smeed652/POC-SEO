import React from "react";

export interface DishNameProps {
  name: string;
  className?: string;
}

/**
 * DishName atom — bold prominent dish name for carousel and cards.
 */
export const DishName: React.FC<DishNameProps> = ({ name, className = "" }) => (
  <div className={`text-slate-900 text-base font-bold font-['Plus_Jakarta_Sans'] ${className}`}>{name}</div>
);

export default DishName;
