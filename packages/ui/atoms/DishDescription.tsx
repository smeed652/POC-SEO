import React from "react";

export interface DishDescriptionProps {
  description: string;
  className?: string;
}

/**
 * DishDescription atom — displays a dish description.
 */
export const DishDescription: React.FC<DishDescriptionProps> = ({ description, className = "" }) => (
  <p className={`text-slate-700 text-sm font-['Plus_Jakarta_Sans'] leading-snug ${className}`}>{description}</p>
);

export default DishDescription;
