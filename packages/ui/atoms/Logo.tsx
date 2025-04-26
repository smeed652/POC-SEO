import React from 'react';
// Using static path for logo in public/assets
// Logo atom for EveryBite. Renders the official logo image file (wordmark style).
// Update the logo file in /public/assets if branding changes. Accepts className and style for flexibility.
const defaultLogoUrl = '/assets/everybite-logo.png';

const Logo: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className = '', style = {} }) => (
  <img
    src={defaultLogoUrl}
    alt="EveryBite Logo wordmark"
    className={className}
    style={style}
  />
);

export default Logo;
