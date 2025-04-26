import React from "react";

export interface BreadcrumbItemProps {
  label: string;
  href?: string;
  isActive?: boolean;
  className?: string;
}

/**
 * BreadcrumbItem atom — displays a single breadcrumb link or text.
 */
// NOTE: font-sans uses 'Plus Jakarta Sans' as set in Tailwind config
export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ label, href, isActive = false, className = "" }) => (
  href ? (
    <a
      href={href}
      className={`text-xs font-medium font-sans ${isActive ? 'text-indigo-700' : 'text-slate-600'} hover:underline ${className}`}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </a>
  ) : (
    <span className={`text-xs font-medium font-sans text-slate-600 ${className}`}>{label}</span>
  )
);

export default BreadcrumbItem;
