import React from 'react';

export interface SampleAtomProps {
  label: string;
  className?: string;
}

/**
 * SampleAtom – a starter atomic component.
 * Replace with your own atom implementation!
 */
// NOTE: text-base, font-medium, text-blue-700, px-2, py-1, and rounded are design tokens for typography, color, spacing, and rounding. Update if the design system changes.
export const SampleAtom: React.FC<SampleAtomProps> = ({ label, className = '' }) => {
  return (
    <span className={`text-base font-medium text-blue-700 px-2 py-1 rounded ${className}`}>
      {label}
    </span>
  );
};

export default SampleAtom;
