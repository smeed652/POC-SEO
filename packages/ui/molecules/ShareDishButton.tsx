import React from "react";

/**
 * ShareDishButton molecule — button for sharing a dish, with icon.
 *
 * Design tokens: border, border-indigo-500, text-indigo-700, rounded-lg, px-5, py-2, flex, items-center, gap-2, font-sans, font-medium, text-sm, hover:bg-indigo-50, transition
 * Update tokens if the design system changes.
 */
export interface ShareDishButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

const ShareDishButton: React.FC<ShareDishButtonProps> = ({
  label = "Share Dish",
  onClick,
  className = "",
  icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      className="h-5 w-5 text-indigo-700"
      aria-hidden="true"
    >
      <path
        d="M15 8.75a2.25 2.25 0 1 0-2.122-3.02l-5.46 2.184a2.25 2.25 0 1 0 0 3.172l5.46 2.184A2.25 2.25 0 1 0 15 11.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`border border-indigo-500 text-indigo-700 rounded-lg px-5 py-2 flex items-center gap-2 font-sans font-medium text-sm hover:bg-indigo-50 transition ${className}`}
  >
    {label}
    {icon}
  </button>
);

export default ShareDishButton;
