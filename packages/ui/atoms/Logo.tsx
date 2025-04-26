import React from 'react';
import logoUrl from '../assets/group1_everybite_logo.png';

/**
 * Logo atom for EveryBite. Use everywhere a brand logo is needed.
 */
const Logo: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className = '', style = {} }) => (
  <img
    src={logoUrl}
    alt="EveryBite Logo"
    className={`h-10 w-10 object-contain rounded-full ${className}`}
    style={{ maxHeight: 40, ...style }}
  />
);

export default Logo;
