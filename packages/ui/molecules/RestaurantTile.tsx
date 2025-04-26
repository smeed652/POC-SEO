import React from "react";
import RestaurantLogo from "../atoms/RestaurantLogo";
import RestaurantName from "../atoms/RestaurantName";
import RestaurantMeta from "../atoms/RestaurantMeta";

export interface RestaurantTileProps {
  logo: string;
  name: string;
  cuisine: string;
  distance?: string;
  locationCount?: number;
  dishCount?: number;
  className?: string;
}

/**
 * RestaurantTile molecule — combines logo, name, and meta into a tile.
 */
// NOTE: flex, items-center, gap-3, and flex-col are design tokens for layout and spacing. Update if the design system changes.
/**
 * RestaurantTile molecule — card with logo, name, and meta info (locations, dishes, distance).
 * Card design tokens: rounded-xl, border, border-zinc-200, bg-white, px-5, py-4, shadow-sm, flex, items-center, gap-3
 * Update tokens if the design system changes.
 */
export const RestaurantTile: React.FC<RestaurantTileProps> = ({ logo, name, cuisine, distance, locationCount, dishCount, className = "" }) => (
  <div className={`rounded-xl border border-zinc-200 bg-white px-5 py-4 shadow-sm flex items-center gap-3 ${className}`}>
    <RestaurantLogo src={logo} alt={name} />
    <div className="flex flex-col">
      <RestaurantName name={name} />
      <RestaurantMeta cuisine={cuisine} distance={distance} locationCount={locationCount} dishCount={dishCount} />
    </div>
  </div>
);

export default RestaurantTile;
