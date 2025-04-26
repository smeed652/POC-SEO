import React from "react";

export interface CategoryLabelProps {
  label: string;
  className?: string;
}

/**
 * CategoryLabel atom — shows the dish category in the carousel and elsewhere.
 */
export const CategoryLabel: React.FC<CategoryLabelProps> = ({ label, className = "" }) => (
  <div className={`text-slate-900 text-xs font-medium font-['Plus_Jakarta_Sans'] ${className}`}>{label}</div>
);

export default CategoryLabel;
