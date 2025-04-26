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
  <span className={`text-xs text-slate-500 font-['Plus_Jakarta_Sans'] ${className}`}>
    {cuisine}{distance ? ` • ${distance}` : ""}
  </span>
);

export default RestaurantMeta;
