import React from 'react';

export interface ArcadeProgressBarProps {
  value: number;
  max?: number;
  tone?: 'cyan' | 'magenta' | 'gold' | 'green' | 'red';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  /** Shows "value / max" on the right of the label row. */
  showValue?: boolean;
  /** Renders the fill in discrete blocks instead of a continuous bar. */
  segmented?: boolean;
  className?: string;
}

const fills = {
  cyan: 'bg-brand-2',
  magenta: 'bg-brand',
  gold: 'bg-gold',
  green: 'bg-success',
  red: 'bg-danger',
};

const heights = {
  sm: 'h-2',
  md: 'h-4',
  lg: 'h-6',
};

export const ArcadeProgressBar: React.FC<ArcadeProgressBarProps> = ({
  value,
  max = 100,
  tone = 'cyan',
  size = 'md',
  label,
  showValue = false,
  segmented = false,
  className = '',
}) => {
  const safeMax = max > 0 ? max : 1;
  const clamped = Math.min(Math.max(value, 0), safeMax);
  const percent = (clamped / safeMax) * 100;

  return (
    <div className={`flex flex-col gap-1.5 w-full text-left ${className}`}>
      {(label || showValue) && (
        <div className="flex items-baseline justify-between gap-3">
          {label && <span className="font-retro text-[10px] text-ink tracking-wider">{label}</span>}
          {showValue && (
            <span className="font-retro text-[10px] text-ink-soft">
              {clamped}/{safeMax}
            </span>
          )}
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={safeMax}
        aria-label={label}
        className={`w-full bg-canvas border-2 border-line rounded-sm overflow-hidden ${heights[size]}`}
      >
        {segmented ? (
          <div className="flex h-full w-full gap-0.5 p-0.5">
            {Array.from({ length: 20 }, (_, i) => (
              <span
                key={i}
                className={`flex-1 ${i < Math.round(percent / 5) ? fills[tone] : 'bg-surface-2'}`}
              />
            ))}
          </div>
        ) : (
          <div className={`h-full transition-[width] duration-300 ${fills[tone]}`} style={{ width: `${percent}%` }} />
        )}
      </div>
    </div>
  );
};
