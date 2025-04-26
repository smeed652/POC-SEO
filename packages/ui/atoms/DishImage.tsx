import React from "react";

export interface DishImageProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * DishImage atom — displays the dish image with rounded top corners.
 */
// NOTE: w-72, h-36, rounded-tl-[10px], and rounded-tr-[10px] are custom values used as design tokens for sizing and radius.
// If the design system updates, review these values for consistency.
export const DishImage: React.FC<DishImageProps> = ({ src, alt, className = "" }) => (
  <img
    src={src}
    alt={alt}
    className={`w-72 h-36 rounded-tl-[10px] rounded-tr-[10px] object-cover ${className}`}
    loading="lazy"
  />
);

export default DishImage;
