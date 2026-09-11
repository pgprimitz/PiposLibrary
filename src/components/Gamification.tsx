import React from 'react';
import { ArcadeProgressBar } from './ArcadeProgressBar';
import { PixelHeart, PixelHeartEmpty, PixelCoin, PixelFire, PixelMedal } from './PixelIcons';

export interface XPBarProps {
  /** XP accumulated inside the current level. */
  currentXP: number;
  /** XP needed to reach the next level. */
  levelXP: number;
  level: number;
  levelLabel?: string;
  xpLabel?: string;
  className?: string;
}

/**
 * Level plus progress towards the next one. XP is per course-cohort and can go
 * down, so the caller always passes absolute values rather than increments.
 */
export const XPBar: React.FC<XPBarProps> = ({
  currentXP,
  levelXP,
  level,
  levelLabel = 'LV',
  xpLabel = 'XP',
  className = '',
}) => (
  <div className={`flex items-center gap-3 w-full ${className}`}>
    <span className="shrink-0 flex items-center justify-center min-w-12 px-2 py-1.5 bg-gold text-slate-950 font-retro text-[10px] border-2 border-gold rounded-sm">
      {levelLabel} {level}
    </span>
    <ArcadeProgressBar
      value={currentXP}
      max={levelXP}
      tone="cyan"
      size="md"
      label={xpLabel}
      showValue
      className="flex-1"
    />
  </div>
);

export interface LivesIndicatorProps {
  lives: number;
  maxLives?: number;
  label?: string;
  size?: 'sm' | 'md';
  className?: string;
}

/** Remaining lives as pixel hearts — empty hearts show what was lost. */
export const LivesIndicator: React.FC<LivesIndicatorProps> = ({
  lives,
  maxLives = 3,
  label = 'Lives',
  size = 'md',
  className = '',
}) => {
  const iconSize = size === 'sm' ? 'w-4 h-4' : 'w-6 h-6';

  return (
    <span
      className={`inline-flex items-center gap-1 ${className}`}
      role="img"
      aria-label={`${label}: ${lives}/${maxLives}`}
    >
      {Array.from({ length: maxLives }, (_, i) =>
        i < lives ? (
          <PixelHeart key={i} className={iconSize} />
        ) : (
          <PixelHeartEmpty key={i} className={iconSize} />
        ),
      )}
    </span>
  );
};

export interface CoinCounterProps {
  coins: number;
  label?: string;
  size?: 'sm' | 'md';
  className?: string;
}

/** Coins are purchasing power, scoped to a single course. */
export const CoinCounter: React.FC<CoinCounterProps> = ({
  coins,
  label = 'Coins',
  size = 'md',
  className = '',
}) => (
  <span
    className={`inline-flex items-center gap-1.5 px-2 py-1 border-2 border-gold/60 bg-gold/10 rounded-sm ${className}`}
    title={label}
  >
    <PixelCoin className={size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'} />
    <span className={`font-retro text-gold ${size === 'sm' ? 'text-[9px]' : 'text-[10px]'}`}>
      {coins.toLocaleString()}
    </span>
  </span>
);

export interface StreakFlameProps {
  days: number;
  /** Below this the flame is rendered dimmed. */
  activeThreshold?: number;
  label?: string;
  className?: string;
}

export const StreakFlame: React.FC<StreakFlameProps> = ({
  days,
  activeThreshold = 1,
  label = 'Day streak',
  className = '',
}) => {
  const active = days >= activeThreshold;

  return (
    <span
      className={`inline-flex items-center gap-1.5 ${active ? '' : 'opacity-40 grayscale'} ${className}`}
      title={`${days} ${label}`}
    >
      <PixelFire className="w-5 h-5" />
      <span className="font-retro text-[10px] text-gold">{days}</span>
    </span>
  );
};

export interface LevelBadgeProps {
  level: number;
  /** Gamified level name, e.g. "Compilador". */
  name?: string;
  maxLevel?: number;
  className?: string;
}

export const LevelBadge: React.FC<LevelBadgeProps> = ({ level, name, maxLevel, className = '' }) => (
  <span
    className={`inline-flex items-center gap-2 px-3 py-2 bg-surface-2 border-2 border-gold rounded-sm ${className}`}
  >
    <PixelMedal className="w-5 h-5" />
    <span className="flex flex-col leading-tight text-left">
      <span className="font-retro text-[10px] text-gold">
        {level}
        {maxLevel !== undefined && <span className="text-ink-soft">/{maxLevel}</span>}
      </span>
      {name && <span className="font-mono text-[10px] text-ink-soft">{name}</span>}
    </span>
  </span>
);

export interface EarnedBadge {
  id: string;
  name: string;
  /** Image URL; when absent a default medal icon is drawn. */
  iconUrl?: string;
  description?: string;
  /** Locked badges render dimmed — useful to tease what is still missing. */
  earned?: boolean;
}

export interface BadgeShowcaseProps {
  badges: EarnedBadge[];
  onSelect?: (badge: EarnedBadge) => void;
  className?: string;
}

export const BadgeShowcase: React.FC<BadgeShowcaseProps> = ({ badges, onSelect, className = '' }) => (
  <div className={`flex flex-wrap gap-3 ${className}`}>
    {badges.map((badge) => {
      const earned = badge.earned ?? true;
      return (
        <button
          key={badge.id}
          type="button"
          disabled={!onSelect}
          onClick={() => onSelect?.(badge)}
          title={badge.description ?? badge.name}
          className={`flex flex-col items-center gap-1.5 w-24 p-2 bg-surface-2 border-2 rounded-sm transition-colors ${
            earned ? 'border-gold/60 hover:border-gold' : 'border-line opacity-40 grayscale'
          } ${onSelect ? 'cursor-pointer' : 'cursor-default'}`}
        >
          {badge.iconUrl ? (
            <img
              src={badge.iconUrl}
              alt={badge.name}
              className="w-10 h-10 object-contain"
              style={{ imageRendering: 'pixelated' }}
            />
          ) : (
            <PixelMedal className="w-10 h-10" />
          )}
          <span className="font-mono text-[10px] text-ink text-center leading-tight">{badge.name}</span>
        </button>
      );
    })}
  </div>
);
