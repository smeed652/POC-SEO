import React from "react";
import RestaurantLogo from "../atoms/RestaurantLogo";
import RestaurantName from "../atoms/RestaurantName";
import RestaurantMeta from "../atoms/RestaurantMeta";

export interface RestaurantTileProps {
  logo: string;
  name: string;
  cuisine: string;
  distance?: string;
  className?: string;
}

/**
 * RestaurantTile molecule — combines logo, name, and meta into a tile.
 */
export const RestaurantTile: React.FC<RestaurantTileProps> = ({ logo, name, cuisine, distance, className = "" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <RestaurantLogo src={logo} alt={name} />
    <div className="flex flex-col">
      <RestaurantName name={name} />
      <RestaurantMeta cuisine={cuisine} distance={distance} />
    </div>
  </div>
);

export default RestaurantTile;
