import React from "react";

export interface CarouselNavButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  className?: string;
}

/**
 * CarouselNavButton organism — navigation arrow button for carousels.
 */
// NOTE: absolute, top-1/2, -translate-y-1/2, z-10, bg-transparent, p-0, and border-none are design tokens for layout, positioning, and appearance. Update if the design system changes.
export const CarouselNavButton: React.FC<CarouselNavButtonProps> = ({ direction, onClick, className = "" }) => (
  <button
    onClick={onClick}
    aria-label={direction === "left" ? "Scroll left" : "Scroll right"}
    className={`absolute top-1/2 -translate-y-1/2 z-10 bg-transparent p-0 border-none ${className}`}
    type="button"
  >
    {direction === "left" ? (
      <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="54" y="54" width="54" height="54" rx="27" transform="rotate(180 54 54)" fill="black" fillOpacity="0.6" />
        <path d="M23.4034 35.434C22.8618 35.434 22.3424 35.2189 21.9595 34.8359L16.1839 29.0603C15.8009 28.6774 15.5858 28.158 15.5858 27.6164C15.5858 27.0749 15.8009 26.5555 16.1839 26.1725L21.9595 20.3969C22.3424 20.014 22.8618 19.7988 23.4034 19.7988C23.9449 19.7988 24.4643 20.014 24.8473 20.3969C25.2302 20.7799 25.4454 21.2993 25.4454 21.8408C25.4454 22.3824 25.2302 22.9018 24.8473 23.2847L22.5573 25.5748L28.7559 25.5748L34.9546 25.5748C35.4899 25.5841 36.0002 25.8033 36.3755 26.1851C36.7508 26.567 36.9611 27.081 36.9611 27.6164C36.9611 28.1519 36.7508 28.6659 36.3755 29.0477C36.0002 29.4296 35.4899 29.6488 34.9546 29.6581L22.5573 29.6581L24.8473 31.9481C25.2302 32.3311 25.4454 32.8505 25.4454 33.392C25.4454 33.9336 25.2302 34.453 24.8473 34.8359C24.4643 35.2189 23.9449 35.434 23.4034 35.434Z" fill="white"/>
      </svg>
    ) : (
      <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="54" height="54" rx="27" fill="black" fillOpacity="0.6" />
        <path d="M30.5966 18.566C31.1382 18.566 31.6576 18.7811 32.0405 19.1641L37.8161 24.9397C38.1991 25.3226 38.4142 25.842 38.4142 26.3836C38.4142 26.9251 38.1991 27.4445 37.8161 27.8275L32.0405 33.6031C31.6576 33.986 31.1382 34.2012 30.5966 34.2012C30.0551 34.2012 29.5357 33.986 29.1527 33.6031C28.7698 33.2201 28.5546 32.7007 28.5546 32.1592C28.5546 31.6176 28.7698 31.0982 29.1527 30.7153L31.4427 28.4252L25.2441 28.4252L19.0454 28.4252C18.5101 28.4159 17.9998 28.1967 17.6245 27.8149C17.2492 27.433 17.0389 26.919 17.0389 26.3836C17.0389 25.8481 17.2492 25.3341 17.6245 24.9523C17.9998 24.5704 18.5101 24.3512 19.0454 24.3419L31.4427 24.3419L29.1527 22.0519C28.7698 21.6689 28.5546 21.1495 28.5546 20.608C28.5546 20.0664 28.7698 19.547 29.1527 19.1641C29.5357 18.7811 30.0551 18.566 30.5966 18.566Z" fill="white"/>
      </svg>
    )}
  </button>
);

export default CarouselNavButton;
