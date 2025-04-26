import React from "react";
import BreadcrumbItem from "../atoms/BreadcrumbItem";
import BreadcrumbSeparator from "../atoms/BreadcrumbSeparator";

export interface Breadcrumb {
  label: string;
  href?: string;
  isActive?: boolean;
}

export interface BreadcrumbsProps {
  items: Breadcrumb[];
  className?: string;
}

/**
 * Breadcrumbs molecule — displays a row of breadcrumb items with separators.
 */
export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = "" }) => (
  <nav className={`flex items-center ${className}`} aria-label="Breadcrumb">
    {items.map((item, idx) => (
      <React.Fragment key={item.label + idx}>
        <BreadcrumbItem {...item} />
        {idx < items.length - 1 && <BreadcrumbSeparator />}
      </React.Fragment>
    ))}
  </nav>
);

export default Breadcrumbs;
