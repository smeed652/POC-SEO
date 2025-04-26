import React from "react";

export interface DishNameProps {
  name: string;
  className?: string;
}

/**
 * DishName atom — bold prominent dish name for carousel and cards.
 */
export const DishName: React.FC<DishNameProps> = ({ name, className = "" }) => (
  // font-sans is mapped to 'Plus Jakarta Sans' in Tailwind config for design system consistency
  <div className={`text-slate-900 text-base font-bold font-sans ${className}`}>{name}</div>
);

export default DishName;
