import React from "react";

export interface RestaurantLogoProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * RestaurantLogo atom — displays the restaurant logo image.
 */
// NOTE: w-10, h-10, rounded-full, border-zinc-200, and bg-white are design tokens for sizing, border, and background. Update if the design system changes.
export const RestaurantLogo: React.FC<RestaurantLogoProps> = ({ src, alt, className = "" }) => (
  <img
    src={src}
    alt={alt}
    className={`w-10 h-10 rounded-full object-cover border border-zinc-200 bg-white ${className}`}
    loading="lazy"
  />
);

export default RestaurantLogo;
