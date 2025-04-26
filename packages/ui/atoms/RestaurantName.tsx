import React from "react";

export interface RestaurantNameProps {
  name: string;
  className?: string;
}

/**
 * RestaurantName atom — displays the restaurant name.
 */
export const RestaurantName: React.FC<RestaurantNameProps> = ({ name, className = "" }) => (
  <span className={`text-sm font-semibold font-['Plus_Jakarta_Sans'] text-slate-900 ${className}`}>{name}</span>
);

export default RestaurantName;
