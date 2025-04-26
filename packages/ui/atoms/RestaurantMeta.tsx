import React from "react";

export interface RestaurantMetaProps {
  cuisine: string;
  distance?: string;
  locationCount?: number;
  dishCount?: number;
  className?: string;
}

/**
 * RestaurantMeta atom — displays cuisine and optional distance.
 */
// font-sans is mapped to 'Plus Jakarta Sans' in Tailwind config for design system consistency
// Now supports locationCount and dishCount with icons.
export const RestaurantMeta: React.FC<RestaurantMetaProps> = ({ cuisine, distance, locationCount, dishCount, className = "" }) => (
  <span className={`text-xs text-slate-500 font-sans flex items-center gap-2 ${className}`}>
    {cuisine}
    {typeof locationCount === "number" && (
      <span className="flex items-center gap-1">
        <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M10 2C6.686 2 4 4.686 4 8c0 3.314 6 10 6 10s6-6.686 6-10c0-3.314-2.686-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"/></svg>
        {locationCount} Locations
      </span>
    )}
    {typeof dishCount === "number" && (
      <span className="flex items-center gap-1">
        <svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h12M4 10h12M4 14h12"/></svg>
        {dishCount} Dishes
      </span>
    )}
    {distance && <span>• {distance}</span>}
  </span>
);

export default RestaurantMeta;
