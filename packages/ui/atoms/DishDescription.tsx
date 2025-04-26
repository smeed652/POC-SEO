import React from "react";

export interface DishDescriptionProps {
  description: string;
  className?: string;
}

/**
 * DishDescription atom — displays a dish description.
 */
// font-sans is mapped to 'Plus Jakarta Sans' in Tailwind config for design system consistency
export const DishDescription: React.FC<DishDescriptionProps> = ({ description, className = "" }) => (
  <p className={`text-slate-700 text-sm font-sans leading-snug ${className}`}>{description}</p>
);

export default DishDescription;
