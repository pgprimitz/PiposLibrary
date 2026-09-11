import React, { useEffect, useState } from 'react';
import { PixelClock } from './PixelIcons';

export interface CountdownTimerProps {
  /** Seconds remaining when the timer mounts. */
  seconds: number;
  /** Pauses the countdown without unmounting it. */
  paused?: boolean;
  /** Below this many seconds the timer turns amber, then red at half of it. */
  warningThreshold?: number;
  onExpire?: () => void;
  /** Fires on every tick with the seconds left. */
  onTick?: (remaining: number) => void;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

function format(total: number): string {
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const secs = total % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return hours > 0 ? `${pad(hours)}:${pad(minutes)}:${pad(secs)}` : `${pad(minutes)}:${pad(secs)}`;
}

const sizes = {
  sm: 'text-[10px] px-2 py-1',
  md: 'text-xs px-3 py-2',
  lg: 'text-base px-4 py-3',
};

/** Exam and auction clock. Colour escalates as the deadline approaches. */
export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  seconds,
  paused = false,
  warningThreshold = 60,
  onExpire,
  onTick,
  label = 'Time remaining',
  size = 'md',
  className = '',
}) => {
  const [remaining, setRemaining] = useState(seconds);

  // Restart whenever the caller hands us a new budget.
  useEffect(() => setRemaining(seconds), [seconds]);

  useEffect(() => {
    if (paused || remaining <= 0) return;
    const id = window.setInterval(() => setRemaining((prev) => Math.max(prev - 1, 0)), 1000);
    return () => window.clearInterval(id);
  }, [paused, remaining]);

  useEffect(() => {
    onTick?.(remaining);
    if (remaining === 0) onExpire?.();
    // onExpire must fire once per zero-crossing, not on every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remaining]);

  const critical = remaining <= warningThreshold / 2;
  const warning = !critical && remaining <= warningThreshold;
  const tone = critical
    ? 'border-danger text-danger bg-danger/10'
    : warning
      ? 'border-gold text-gold bg-gold/10'
      : 'border-brand-2 text-brand-2 bg-brand-2/10';

  return (
    <span
      role="timer"
      aria-live={warning ? 'assertive' : 'off'}
      aria-label={label}
      title={label}
      className={`inline-flex items-center gap-2 border-2 rounded-sm font-retro tracking-wider ${tone} ${sizes[size]} ${
        critical ? 'animate-pulse' : ''
      } ${className}`}
    >
      <PixelClock className={size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />
      {format(remaining)}
    </span>
  );
};
