import React from "react";

export interface CategoryLabelProps {
  label: string;
  className?: string;
}

/**
 * CategoryLabel atom — shows the dish category in the carousel and elsewhere.
 */
// NOTE: font-sans uses 'Plus Jakarta Sans' as set in Tailwind config
export const CategoryLabel: React.FC<CategoryLabelProps> = ({ label, className = "" }) => (
  <div className={`text-slate-900 text-xs font-medium font-sans ${className}`}>{label}</div>
);

export default CategoryLabel;
