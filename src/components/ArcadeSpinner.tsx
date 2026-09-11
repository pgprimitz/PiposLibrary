import React from 'react';

export interface ArcadeSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  /** Accessible label announced while the spinner is visible. */
  label?: string;
  className?: string;
}

const sizeStyles = {
  sm: 'w-4 h-4 border-2',
  md: 'w-8 h-8 border-4',
  lg: 'w-12 h-12 border-4',
};

export const ArcadeSpinner: React.FC<ArcadeSpinnerProps> = ({
  size = 'md',
  label = 'Loading',
  className = '',
}) => (
  <span
    role="status"
    aria-label={label}
    className={`inline-block animate-spin border-brand-2 border-t-transparent ${sizeStyles[size]} ${className}`}
    style={{ imageRendering: 'pixelated' }}
  />
);
