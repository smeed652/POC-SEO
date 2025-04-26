import React, { useRef } from "react";
import CarouselHeader from "./CarouselHeader";
import CarouselNavButton from "./CarouselNavButton";
import DishCardList from "./DishCardList";
import type { Dish } from "../molecules/DishCard";

export interface CarouselContainerProps {
  dishes: Dish[];
  onOrder: (dish: Dish) => void;
  onExploreAll: () => void;
  className?: string;
}

/**
 * CarouselContainer organism — full carousel section, composes header, nav buttons, and card list.
 * Handles horizontal scrolling via nav buttons.
 */
// NOTE: relative, w-full, max-w-[1280px], mx-auto, flex, items-center, overflow-x-auto, left-[-27px], and right-[-27px] are design tokens for layout, sizing, and spacing. Update if the design system changes.
export const CarouselContainer: React.FC<CarouselContainerProps> = ({ dishes, onOrder, onExploreAll, className = "" }) => {
  const listRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (listRef.current) {
      const { scrollLeft, clientWidth } = listRef.current;
      listRef.current.scrollTo({
        left: dir === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`relative w-full max-w-[1280px] mx-auto ${className}`}>
      <CarouselHeader title="Similar Dishes on EveryBite" onExploreAll={onExploreAll} />
      <div className="relative flex items-center">
        <CarouselNavButton direction="left" onClick={() => scroll("left")} className="left-[-27px]" />
        <div ref={listRef} className="w-full overflow-x-auto">
          <DishCardList dishes={dishes} onOrder={onOrder} />
        </div>
        <CarouselNavButton direction="right" onClick={() => scroll("right")} className="right-[-27px]" />
      </div>
    </div>
  );
};

export default CarouselContainer;
