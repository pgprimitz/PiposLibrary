import React from 'react';

export interface ArcadeAvatarProps {
  /** Image URL. When absent, initials derived from `name` are shown instead. */
  src?: string;
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Small number rendered in the bottom-right corner (course level). */
  level?: number;
  /** Colored ring — useful to mark ranking zones or online state. */
  ring?: 'cyan' | 'magenta' | 'gold' | 'green' | 'red' | 'none';
  className?: string;
}

const sizes = {
  xs: 'w-6 h-6 text-[8px]',
  sm: 'w-8 h-8 text-[9px]',
  md: 'w-12 h-12 text-[10px]',
  lg: 'w-16 h-16 text-xs',
  xl: 'w-24 h-24 text-sm',
};

const rings = {
  cyan: 'border-brand-2',
  magenta: 'border-brand',
  gold: 'border-gold',
  green: 'border-success',
  red: 'border-danger',
  none: 'border-line',
};

function initials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('');
}

export const ArcadeAvatar: React.FC<ArcadeAvatarProps> = ({
  src,
  name,
  size = 'md',
  level,
  ring = 'cyan',
  className = '',
}) => (
  <span className={`relative inline-flex shrink-0 ${className}`}>
    <span
      className={`flex items-center justify-center overflow-hidden rounded-sm border-2 bg-surface-2 font-retro text-brand-2 ${sizes[size]} ${rings[ring]}`}
    >
      {src ? (
        <img src={src} alt={name} className="w-full h-full object-cover" style={{ imageRendering: 'pixelated' }} />
      ) : (
        initials(name)
      )}
    </span>
    {level !== undefined && (
      <span className="absolute -bottom-1 -right-1 min-w-4 px-1 py-0.5 rounded-sm bg-gold text-slate-950 font-retro text-[8px] text-center leading-none border border-slate-950">
        {level}
      </span>
    )}
  </span>
);
