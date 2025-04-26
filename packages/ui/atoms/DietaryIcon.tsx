import React from "react";

export interface DietaryIconProps {
  type: "vegan" | "vegetarian" | "gluten-free" | "dairy-free" | "nut-free" | "spicy";
  className?: string;
}

/**
 * DietaryIcon atom — renders a dietary icon for the specified type.
 */
// Icons use Tailwind color classes for fill and are accessible.
export const DietaryIcon: React.FC<DietaryIconProps> = ({ type, className = "" }) => {
  const ariaLabel = type.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  switch (type) {
    case "vegan":
      return <svg className={className + " text-green-500"} width="20" height="20" viewBox="0 0 20 20" role="img" aria-label={ariaLabel}><circle cx="10" cy="10" r="10" fill="currentColor" /><path d="M6 10l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    case "vegetarian":
      return <svg className={className + " text-lime-300"} width="20" height="20" viewBox="0 0 20 20" role="img" aria-label={ariaLabel}><circle cx="10" cy="10" r="10" fill="currentColor" /><path d="M7 13l3-3 3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    case "gluten-free":
      return <svg className={className + " text-yellow-400"} width="20" height="20" viewBox="0 0 20 20" role="img" aria-label={ariaLabel}><circle cx="10" cy="10" r="10" fill="currentColor" /><path d="M6 14l8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>;
    case "dairy-free":
      return <svg className={className + " text-pink-400"} width="20" height="20" viewBox="0 0 20 20" role="img" aria-label={ariaLabel}><circle cx="10" cy="10" r="10" fill="currentColor" /><path d="M6 14l8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>;
    case "nut-free":
      return <svg className={className + " text-blue-400"} width="20" height="20" viewBox="0 0 20 20" role="img" aria-label={ariaLabel}><circle cx="10" cy="10" r="10" fill="currentColor" /><path d="M6 14l8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>;
    case "spicy":
      return <svg className={className + " text-red-400"} width="20" height="20" viewBox="0 0 20 20" role="img" aria-label={ariaLabel}><circle cx="10" cy="10" r="10" fill="currentColor" /><path d="M10 6v5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><circle cx="10" cy="13" r="1" fill="#fff"/></svg>;
    default:
      return null;
  }
};

export default DietaryIcon;
