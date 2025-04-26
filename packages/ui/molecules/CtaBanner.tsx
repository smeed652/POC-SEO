import React from "react";

/**
 * CtaBanner molecule — flexible call-to-action/info banner with icon, message, and CTA link.
 *
 * Design tokens: w-full, flex, items-center, gap-3, rounded-xl, bg-indigo-50, px-6, py-3, text-indigo-900, text-sm, font-sans, font-medium, hover:underline, transition, text-indigo-600, ml-auto
 * Update tokens if the design system changes.
 */
export interface CtaBannerProps {
  icon: React.ReactNode;
  message: React.ReactNode;
  ctaLabel: string;
  ctaHref: string;
  className?: string;
}

const CtaBanner: React.FC<CtaBannerProps> = ({ icon, message, ctaLabel, ctaHref, className = "" }) => (
  <div className={`w-full flex items-center gap-3 rounded-xl bg-indigo-50 px-6 py-3 ${className}`}>
    <span className="text-indigo-900">{icon}</span>
    <span className="text-sm font-sans font-medium text-indigo-900">{message}</span>
    <a
      href={ctaHref}
      className="ml-auto text-sm font-sans font-medium text-indigo-600 hover:underline transition"
    >
      {ctaLabel} <span aria-hidden="true">→</span>
    </a>
  </div>
);

export default CtaBanner;
