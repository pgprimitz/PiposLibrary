import React from 'react';

export interface ArcadeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'cyan' | 'magenta' | 'yellow' | 'green' | 'default';
  glow?: boolean;
}

export const ArcadeCard: React.FC<ArcadeCardProps> = ({
  children,
  variant = 'cyan',
  glow = false,
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

  return (
    <div
      className={`relative bg-surface/90 border rounded-md p-5 backdrop-blur-sm transition-colors duration-200 ${borderColors[variant]} ${glow ? 'hover:border-opacity-100' : ''} ${className}`}
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
