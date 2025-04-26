import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * PageContainer ensures consistent max-width, horizontal centering, and responsive padding for all major page layouts.
 * - Max width: 1500px (from Figma)
 * - Centered: Yes (mx-auto)
 * - Responsive side padding: px-6 (24px) on mobile, px-8 (32px) on md+
 */
const PageContainer: React.FC<PageContainerProps> = ({ children, className = '' }) => (
  <div className={`w-full max-w-[1500px] mx-auto px-6 md:px-8 ${className}`}>
    {children}
  </div>
);

export default PageContainer;
