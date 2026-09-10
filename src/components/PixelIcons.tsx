import React from 'react';

export interface PixelIconProps {
  className?: string;
}

// 16-Bit Retro Pixel SVGs
export const PixelTrophy: React.FC<PixelIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} style={{ imageRendering: 'pixelated' }}>
    <path d="M3 2h10v2h-1v4h-1v2H9v2h2v2H5v-2h2v-2H6V8H5V4H4V2H3zM1 3h2v4H2V6H1V3zm12 0h2v3h-1v1h-1V3z" fill="#f59e0b" />
    <path d="M6 4h4v3H6z" fill="#fde047" />
  </svg>
);

export const PixelChest: React.FC<PixelIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} style={{ imageRendering: 'pixelated' }}>
    <path d="M1 4h14v10H1V4z" fill="#78350f" />
    <path d="M2 5h12v3H2V5z" fill="#d97706" />
    <path d="M1 8h14v1H1V8zm7 0h2v3H8V8z" fill="#fde047" />
    <path d="M3 10h10v3H3v-3z" fill="#92400e" />
  </svg>
);

export const PixelChat: React.FC<PixelIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} style={{ imageRendering: 'pixelated' }}>
    <path d="M2 2h12v9H9l-4 3v-3H2V2z" fill="#e879f9" />
    <path d="M4 4h8v5H4V4z" fill="#581c87" />
    <path d="M5 6h2v1H5V6zm4 0h2v1H9V6z" fill="#f5d0fe" />
  </svg>
);

export const PixelBell: React.FC<PixelIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} style={{ imageRendering: 'pixelated' }}>
    <path d="M7 1h2v1H7V1z" fill="#fde047" />
    <path d="M6 2h4v1H6V2z" fill="#f59e0b" />
    <path d="M5 3h6v1H5V3zm-1 1h8v1H4V4zm0 1h8v5H4V5z" fill="#fbbf24" />
    <path d="M5 6h6v3H5V6z" fill="#fde047" />
    <path d="M3 10h10v1H3v-1z" fill="#f59e0b" />
    <path d="M6 12h4v1H6v-1zm1 1h2v1H7v-1z" fill="#fde047" />
  </svg>
);

export const PixelUser: React.FC<PixelIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} style={{ imageRendering: 'pixelated' }}>
    <path d="M6 2h4v4H6V2zm-3 8h10v4H3v-4z" fill="#38bdf8" />
    <path d="M5 5h6v2H5V5zm-1 4h8v2H4V9z" fill="#0284c7" />
  </svg>
);

export const PixelScroll: React.FC<PixelIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} style={{ imageRendering: 'pixelated' }}>
    <path d="M4 2h8v12H4V2z" fill="#fef08a" />
    <path d="M3 3h1v10H3V3zm10 0h1v10h-1V3z" fill="#ca8a04" />
    <path d="M6 5h4v1H6V5zm0 3h4v1H6V8zm0 3h3v1H6v-1z" fill="#854d0e" />
  </svg>
);
