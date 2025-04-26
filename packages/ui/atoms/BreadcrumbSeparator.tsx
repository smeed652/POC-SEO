import React from "react";

export interface BreadcrumbSeparatorProps {
  className?: string;
}

/**
 * BreadcrumbSeparator atom — displays a separator (chevron) between breadcrumb items.
 */
export const BreadcrumbSeparator: React.FC<BreadcrumbSeparatorProps> = ({ className = "" }) => (
  <span className={`mx-2 text-slate-400 ${className}`} aria-hidden="true">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline align-middle">
      <path d="M6 12L10 8L6 4" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
);

export default BreadcrumbSeparator;
