import React from "react";

export interface DietaryTextProps {
  text: string;
  className?: string;
}

/**
 * DietaryText atom — displays dietary restriction text label.
 */
export const DietaryText: React.FC<DietaryTextProps> = ({ text, className = "" }) => (
  <span className={`text-xs text-slate-600 font-['Plus_Jakarta_Sans'] ${className}`}>{text}</span>
);

export default DietaryText;
