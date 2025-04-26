import React from "react";

export interface HeartIconProps {
  active?: boolean;
  className?: string;
}

/**
 * HeartIcon atom — overlays a heart/favorite icon, filled if active.
 */
// NOTE: absolute, right-5, top-5 are positioning tokens. Update if design system changes.
// DESIGN: Heart icon should have a transparent background. When inactive: white outline. When active: solid red fill. No background rectangle. Update if design system changes.
export const HeartIcon: React.FC<HeartIconProps> = ({ active = false, className = "" }) => (
  <span className={`absolute right-5 top-5 ${className}`} title={active ? "Favorited" : "Not favorited"}>
    {active ? (
      <svg
        width="40" height="40" viewBox="0 0 40 40"
        role="img"
        aria-label="Favorited"
        className="text-red-500"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.43 12c-1.15 0-2.3.5-3.15 1.5-1.7 2-1.7 5.14 0 7.12l6.02 7.05c.09.1.2.19.32.24.12.06.25.09.38.09.13 0 .26-.03.38-.09.12-.05.23-.14.32-.24l6.02-7.04c1.7-2 1.7-5.14 0-7.12-1.7-2-4.6-2-6.31 0l-.41.48-.42-.48C18.73 12.5 17.58 12 16.43 12z" fill="currentColor"/>
      </svg>
    ) : (
      <svg
        width="40" height="40" viewBox="0 0 40 40"
        role="img"
        aria-label="Not favorited"
        className="text-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.43 12c-1.15 0-2.3.5-3.15 1.5-1.7 2-1.7 5.14 0 7.12l6.02 7.05c.09.1.2.19.32.24.12.06.25.09.38.09.13 0 .26-.03.38-.09.12-.05.23-.14.32-.24l6.02-7.04c1.7-2 1.7-5.14 0-7.12-1.7-2-4.6-2-6.31 0l-.41.48-.42-.48C18.73 12.5 17.58 12 16.43 12z" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    )}
  </span>
);

export default HeartIcon;
