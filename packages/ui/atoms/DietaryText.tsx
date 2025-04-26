import React from "react";

export interface DietaryTextProps {
  text: string;
  className?: string;
}

/**
 * DietaryText atom — displays dietary restriction text label.
 */
// NOTE: font-sans uses 'Plus Jakarta Sans' as set in Tailwind config
export const DietaryText: React.FC<DietaryTextProps> = ({ text, className = "" }) => (
  <span className={`text-xs text-slate-600 font-sans ${className}`}>{text}</span>
);

export default DietaryText;
