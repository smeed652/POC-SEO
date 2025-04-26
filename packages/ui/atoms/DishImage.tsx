import React from "react";

export interface DishImageProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * DishImage atom — displays the dish image with rounded top corners.
 */
export const DishImage: React.FC<DishImageProps> = ({ src, alt, className = "" }) => (
  <img
    src={src}
    alt={alt}
    className={`w-72 h-36 rounded-tl-[10px] rounded-tr-[10px] object-cover ${className}`}
    loading="lazy"
  />
);

export default DishImage;
