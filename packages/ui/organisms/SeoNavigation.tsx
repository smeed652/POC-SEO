// SeoNavigation.tsx
// Add your Figma-to-Code output here and refactor as needed.

import React from 'react';

import Logo from '../atoms/Logo';
import NavLink from '../atoms/NavLink';
import { IconUser } from '../atoms/icons';
import PageContainer from '../layout/PageContainer';

// NOTE: w-full, h-16, bg-white, shadow-[0px_0px_33px_0px_rgba(0,0,0,0.13)], border-b, border-zinc-200, max-w-[1500px], h-[72px], flex, flex-row, items-center, justify-between, px-8, mx-auto, gap-x-6, inline-flex, h-6, w-6, and text-[#526176] are design tokens for layout, spacing, color, border, and shadow. Update if the design system changes.
export const SeoNavigation: React.FC = () => {
  return (
    <nav className="w-full h-16 bg-white shadow-[0px_0px_33px_0px_rgba(0,0,0,0.13)] border-b border-zinc-200">
      <PageContainer className="max-w-[1500px] h-[72px] flex flex-row items-center justify-between px-8 mx-auto">
        {/* Left: Logo */}
        <Logo />
        {/* Right: Links and Icon */}
        <div className="flex flex-row items-center gap-x-6">
          <NavLink href="/menus" fontWeight="bold" className="inline-flex items-center">
            Explore Menus
          </NavLink>
          <span className="inline-flex items-center">
            <IconUser className="h-6 w-6 text-[#526176]" />
          </span>
          <NavLink href="/signin" fontWeight="medium" className="inline-flex items-center">
            Sign in
          </NavLink>
        </div>
      </PageContainer>
    </nav>
  );
};
