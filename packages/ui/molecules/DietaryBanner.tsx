import React from "react";
import DietaryIcon from "../atoms/DietaryIcon";
import DietaryText from "../atoms/DietaryText";

export interface DietaryBannerProps {
  items: { type: "vegan" | "vegetarian" | "gluten-free" | "dairy-free" | "nut-free" | "spicy"; text: string }[];
  className?: string;
}

/**
 * DietaryBanner molecule — displays a row of dietary icons and their labels.
 */
export const DietaryBanner: React.FC<DietaryBannerProps> = ({ items, className = "" }) => (
  <div className={`flex gap-3 items-center bg-slate-50 rounded px-3 py-1 ${className}`}>
    {items.map((item, idx) => (
      <div key={item.type + idx} className="flex items-center gap-1">
        <DietaryIcon type={item.type} />
        <DietaryText text={item.text} />
      </div>
    ))}
  </div>
);

export default DietaryBanner;
