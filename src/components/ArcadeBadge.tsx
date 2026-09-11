import React from 'react';

export type ArcadeBadgeTone = 'cyan' | 'magenta' | 'yellow' | 'green' | 'red' | 'neutral';

export interface ArcadeBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: ArcadeBadgeTone;
  /** Solid fills the badge; outline keeps it transparent with a colored border. */
  appearance?: 'solid' | 'outline';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
}

const toneStyles: Record<ArcadeBadgeTone, { solid: string; outline: string }> = {
  cyan: { solid: 'bg-brand-2 text-slate-950 border-brand-2', outline: 'text-brand-2 border-brand-2/60 bg-brand-2/10' },
  magenta: { solid: 'bg-brand text-white border-brand', outline: 'text-brand border-brand/60 bg-brand/10' },
  yellow: { solid: 'bg-gold text-slate-950 border-gold', outline: 'text-gold border-gold/60 bg-gold/10' },
  green: { solid: 'bg-success text-slate-950 border-success', outline: 'text-success border-success/60 bg-success/10' },
  red: { solid: 'bg-danger text-white border-danger', outline: 'text-danger border-danger/60 bg-danger/10' },
  neutral: { solid: 'bg-surface-2 text-ink border-line', outline: 'text-ink-soft border-line bg-surface-2/40' },
};

const sizeStyles = {
  sm: 'text-[8px] px-1.5 py-0.5 gap-1',
  md: 'text-[10px] px-2 py-1 gap-1.5',
};

export const ArcadeBadge: React.FC<ArcadeBadgeProps> = ({
  children,
  tone = 'cyan',
  appearance = 'outline',
  size = 'md',
  icon,
  className = '',
  ...props
}) => (
  <span
    className={`inline-flex items-center font-retro uppercase tracking-wider border rounded-sm whitespace-nowrap align-middle ${toneStyles[tone][appearance]} ${sizeStyles[size]} ${className}`}
    {...props}
  >
    {icon}
    {children}
  </span>
);
