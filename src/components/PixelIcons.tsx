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

export const PixelHeart: React.FC<PixelIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} style={{ imageRendering: 'pixelated' }}>
    <path d="M2 3h4v1h4V3h4v5h-1v2h-1v2h-1v1H9v1H7v-1H5v-1H4v-2H3V8H2V3z" fill="#ef4444" />
    <path d="M4 5h2v2H4V5z" fill="#fca5a5" />
  </svg>
);

export const PixelHeartEmpty: React.FC<PixelIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 16 16" fill="none" className={className} style={{ imageRendering: 'pixelated' }}>
    <path
      d="M2 3h4v1h4V3h4v5h-1v2h-1v2h-1v1H9v1H7v-1H5v-1H4v-2H3V8H2V3z"
      fill="currentColor"
      fillOpacity="0.15"
      stroke="currentColor"
      strokeOpacity="0.5"
    />
  </svg>
);

export const PixelCoin: React.FC<PixelIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} style={{ imageRendering: 'pixelated' }}>
    <path d="M5 1h6v1h2v2h1v8h-1v2h-2v1H5v-1H3v-2H2V4h1V2h2V1z" fill="#b45309" />
    <path d="M5 2h6v1h1v1h1v8h-1v1h-1v1H5v-1H4v-1H3V4h1V3h1V2z" fill="#fbbf24" />
    <path d="M7 4h2v8H7V4zm-1 1h4v1H6V5zm0 5h4v1H6v-1z" fill="#fef3c7" />
  </svg>
);

export const PixelFire: React.FC<PixelIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} style={{ imageRendering: 'pixelated' }}>
    <path d="M8 1h1v2h1v1h1v1h1v2h1v5h-1v1h-2v1H6v-1H4v-1H3V9h1V7h1V5h1V3h1V1h1z" fill="#f97316" />
    <path d="M8 5h1v2h1v3h-1v2H7v-2H6V8h1V6h1V5z" fill="#fde047" />
  </svg>
);

export const PixelMedal: React.FC<PixelIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} style={{ imageRendering: 'pixelated' }}>
    <path d="M4 1h3v5H4V1zm5 0h3v5H9V1z" fill="#3b82f6" />
    <path d="M5 6h6v1h1v1h1v4h-1v1h-1v1H5v-1H4v-1H3V8h1V7h1V6z" fill="#a16207" />
    <path d="M6 7h4v1h1v3h-1v1H6v-1H5V8h1V7z" fill="#fbbf24" />
    <path d="M7 9h2v1H7V9z" fill="#fef3c7" />
  </svg>
);

export const PixelLock: React.FC<PixelIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} style={{ imageRendering: 'pixelated' }}>
    <path d="M5 2h6v1h1v4h-2V4H6v3H4V3h1V2z" fill="#94a3b8" />
    <path d="M3 7h10v7H3V7z" fill="#64748b" />
    <path d="M7 9h2v3H7V9z" fill="#1e293b" />
  </svg>
);

export const PixelClock: React.FC<PixelIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} style={{ imageRendering: 'pixelated' }}>
    <path d="M6 1h4v1H6V1zM5 3h6v1h2v2h1v6h-1v2h-2v1H5v-1H3v-2H2V6h1V4h2V3z" fill="#e2e8f0" />
    <path d="M6 4h4v1h2v2h1v4h-1v2h-2v1H6v-1H4v-2H3V7h1V5h2V4z" fill="#475569" />
    <path d="M7 5h2v4H7V5zm2 4h3v2H9V9z" fill="#f8fafc" />
  </svg>
);

export const PixelCheck: React.FC<PixelIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} style={{ imageRendering: 'pixelated' }}>
    <path d="M13 3h2v2h-2V3zm-2 2h2v2h-2V5zM9 7h2v2H9V7zM7 9h2v2H7V9zm-2 2h2v2H5v-2zM3 9h2v2H3V9zM1 7h2v2H1V7z" fill="#10b981" />
  </svg>
);

export const PixelStar: React.FC<PixelIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} style={{ imageRendering: 'pixelated' }}>
    <path d="M7 1h2v4h4v2h-2v2h1v5H9v-2H7v2H4V9h1V7H3V5h4V1z" fill="#fbbf24" />
    <path d="M7 5h2v2H7V5z" fill="#fef3c7" />
  </svg>
);

export const PixelVideo: React.FC<PixelIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} style={{ imageRendering: 'pixelated' }}>
    <path d="M1 3h10v10H1V3z" fill="#334155" />
    <path d="M11 6h1V5h1V4h2v8h-2v-1h-1v-1h-1V6z" fill="#64748b" />
    <path d="M5 6h1v1h1v1h1v1H7v1H6v1H5V6z" fill="#38bdf8" />
  </svg>
);

export const PixelAudio: React.FC<PixelIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} style={{ imageRendering: 'pixelated' }}>
    <path d="M1 6h3V5h1V4h1V3h1v10H6v-1H5v-1H4v-1H1V6z" fill="#a78bfa" />
    <path d="M9 5h1v1h1v4h-1v1H9V5zm3-2h1v1h1v8h-1v1h-1V3z" fill="#7c3aed" />
  </svg>
);

export const PixelLink: React.FC<PixelIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} style={{ imageRendering: 'pixelated' }}>
    <path d="M9 2h5v5h-2V5h-1V4H9V2zM2 9h2v2h1v1h2v2H2V9z" fill="#0ea5e9" />
    <path d="M6 9h1v1H6V9zm1-1h1v1H7V8zm1-1h1v1H8V7zm1-1h1v1H9V6zm1-1h1v1h-1V5z" fill="#38bdf8" />
  </svg>
);

export const PixelFolder: React.FC<PixelIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} style={{ imageRendering: 'pixelated' }}>
    <path d="M1 3h5v1h1v1H1V3z" fill="#b45309" />
    <path d="M1 5h14v9H1V5z" fill="#f59e0b" />
    <path d="M2 6h12v2H2V6z" fill="#fbbf24" />
  </svg>
);

export const PixelPdf: React.FC<PixelIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} style={{ imageRendering: 'pixelated' }}>
    <path d="M3 1h7v3h3v11H3V1z" fill="#f1f5f9" />
    <path d="M10 1h1v1h1v1h1v1h-3V1z" fill="#94a3b8" />
    <path d="M4 9h8v4H4V9z" fill="#dc2626" />
    <path d="M5 10h2v1H5v-1zm3 0h3v1H8v-1zm-3 2h6v1H5v-1z" fill="#fef2f2" />
  </svg>
);

export const PixelQuiz: React.FC<PixelIconProps> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} style={{ imageRendering: 'pixelated' }}>
    <path d="M2 1h12v14H2V1z" fill="#f8fafc" />
    <path d="M4 3h3v3H4V3zm0 5h3v3H4V8z" fill="#06b6d4" />
    <path d="M8 4h4v1H8V4zm0 5h4v1H8V9zm0 3h3v1H8v-1z" fill="#475569" />
  </svg>
);
