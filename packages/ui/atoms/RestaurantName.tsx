import React from "react";

export interface RestaurantNameProps {
  name: string;
  className?: string;
}

/**
 * RestaurantName atom — displays the restaurant name.
 */
export const RestaurantName: React.FC<RestaurantNameProps> = ({ name, className = "" }) => (
  // font-sans is mapped to 'Plus Jakarta Sans' in Tailwind config for design system consistency
  <span className={`text-sm font-semibold font-sans text-slate-900 ${className}`}>{name}</span>
);

export default RestaurantName;
