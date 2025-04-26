import React from "react";

export interface RestaurantMetaProps {
  cuisine: string;
  distance?: string;
  className?: string;
}

/**
 * RestaurantMeta atom — displays cuisine and optional distance.
 */
export const RestaurantMeta: React.FC<RestaurantMetaProps> = ({ cuisine, distance, className = "" }) => (
  // font-sans is mapped to 'Plus Jakarta Sans' in Tailwind config for design system consistency
  <span className={`text-xs text-slate-500 font-sans ${className}`}>
    {cuisine}{distance ? ` • ${distance}` : ""}
  </span>
);

export default RestaurantMeta;
