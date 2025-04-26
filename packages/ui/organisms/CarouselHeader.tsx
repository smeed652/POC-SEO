import React from "react";

export interface CarouselHeaderProps {
  title: string;
  onExploreAll: () => void;
  className?: string;
}

/**
 * CarouselHeader organism — displays carousel section title and "Explore All" button.
 */
export const CarouselHeader: React.FC<CarouselHeaderProps> = ({ title, onExploreAll, className = "" }) => (
  <div className={`flex justify-between items-center mb-4 ${className}`}>
    <div className="text-slate-900 text-xl font-bold font-['Plus_Jakarta_Sans']">{title}</div>
    <button
      onClick={onExploreAll}
      className="flex items-center gap-1 text-slate-600 text-sm font-medium font-['Plus_Jakarta_Sans'] leading-tight hover:underline"
      type="button"
    >
      Explore All
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70712C6.90237 6.3166 6.90237 5.68343 7.29289 5.29291C7.68342 4.90238 8.31658 4.90238 8.70711 5.29291L12.7071 9.2929C13.0976 9.68343 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="#526176"/>
      </svg>
    </button>
  </div>
);

export default CarouselHeader;
