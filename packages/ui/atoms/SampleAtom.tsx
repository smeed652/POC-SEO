import React from 'react';

export interface SampleAtomProps {
  label: string;
  className?: string;
}

/**
 * SampleAtom – a starter atomic component.
 * Replace with your own atom implementation!
 */
export const SampleAtom: React.FC<SampleAtomProps> = ({ label, className = '' }) => {
  return (
    <span className={`text-base font-medium text-blue-700 px-2 py-1 rounded ${className}`}>
      {label}
    </span>
  );
};

export default SampleAtom;
