// SeoNavigation.tsx
// Add your Figma-to-Code output here and refactor as needed.

import React from 'react';

import logoUrl from '../assets/group1_everybite_logo.png';
import { IconUser } from '../atoms/icons';
import PageContainer from '../layout/PageContainer';

export const SeoNavigation: React.FC = () => {
  return (
    <nav className="w-full h-16 bg-white shadow-[0px_0px_33px_0px_rgba(0,0,0,0.13)] border-b border-zinc-200 flex items-center">
      <PageContainer className="h-16 flex items-center">
        <img
          src={logoUrl}
          alt="EveryBite Logo"
          className="h-10 w-10 object-contain rounded-full"
          style={{ maxHeight: 40 }}
        />
        <div className="flex-1" />
        <a href="/menus" className="text-base text-zinc-700 hover:text-blue-700 px-4 font-medium">Explore Menus</a>
        <span className="px-2"><IconUser className="h-6 w-6 text-zinc-700" /></span>
        <a href="/signin" className="text-base text-zinc-700 hover:text-blue-700 px-4 font-medium">Sign in</a>
      </PageContainer>
    </nav>
  );
};
