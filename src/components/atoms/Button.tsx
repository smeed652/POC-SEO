// Atom: Button
import React from 'react';
export const Button = ({
  children,
  className = '',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={`
      box-border flex flex-row justify-center items-center
      px-[11px] py-[7px] gap-2
      border border-[#4338CA]
      rounded
      shadow-sm
      filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.05)]
      bg-white
      ${className}
    `}
    {...props}
  >
    {children}
  </button>
);
