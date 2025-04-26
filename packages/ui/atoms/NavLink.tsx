import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  active?: boolean;
  fontWeight?: 'bold' | 'medium';
}

/**
 * NavLink atom for navigation links. Supports active state and custom font weight.
 */
const NavLink: React.FC<NavLinkProps> = ({ href, children, className = '', active = false, fontWeight = 'medium' }) => {
  // font-sans is mapped to 'Plus Jakarta Sans' in Tailwind config for design system consistency
  const base = 'text-[#526176] text-sm leading-[19.6px] font-sans hover:text-blue-700';
  const weight = fontWeight === 'bold' ? 'font-bold' : 'font-medium';
  const activeClass = active ? 'underline' : '';
  return (
    <a href={href} className={`${base} ${weight} ${activeClass} ${className}`.trim()}>
      {children}
    </a>
  );
};

export default NavLink;
