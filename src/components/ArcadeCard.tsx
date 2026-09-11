import React from 'react';

export interface ArcadeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'cyan' | 'magenta' | 'yellow' | 'green' | 'default';
  glow?: boolean;
  /**
   * Inner spacing. Use 'none' for edge-to-edge layouts (a header bar, a
   * scrollable list, a table) instead of passing `p-0` through `className`:
   * both are single-class selectors of equal specificity, so the winner is
   * decided by the order Tailwind emits them in the stylesheet, not by the
   * order they appear in the attribute. Tailwind sorts by scale, so `p-5`
   * always lands after `p-0` and wins.
   */
  padding?: 'none' | 'sm' | 'md';
}

export const ArcadeCard: React.FC<ArcadeCardProps> = ({
  children,
  variant = 'cyan',
  glow = false,
  padding = 'md',
  className = '',
  ...props
}) => {
  const borderColors = {
    cyan: 'border-brand-2/60',
    magenta: 'border-brand/60',
    yellow: 'border-gold/60',
    green: 'border-success/60',
    default: 'border-line',
  };

  const paddings = {
    none: '',
    sm: 'p-3',
    md: 'p-5',
  };

  return (
    <div
      className={`relative bg-surface/90 border rounded-md backdrop-blur-sm transition-colors duration-200 ${paddings[padding]} ${borderColors[variant]} ${glow ? 'hover:border-opacity-100' : ''} ${className}`}
      {...props}
    >
      <span className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-line" />
      <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-line" />
      <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-line" />
      <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-line" />
      {children}
    </div>
  );
};
