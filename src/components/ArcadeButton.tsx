import React from 'react';

export interface ArcadeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'cyan' | 'magenta' | 'yellow' | 'green';
  size?: 'sm' | 'md' | 'lg';
}

export const ArcadeButton: React.FC<ArcadeButtonProps> = ({
  children,
  variant = 'magenta',
  size = 'md',
  className = '',
  ...props
}) => {
  const variantStyles = {
    cyan: 'bg-brand-2 hover:brightness-110 text-slate-950 border-brand-2 shadow-[0_4px_0_color-mix(in_srgb,var(--accent-secondary)_65%,black)]',
    magenta: 'bg-brand hover:brightness-110 text-white border-brand shadow-[0_4px_0_color-mix(in_srgb,var(--accent-primary)_65%,black)]',
    yellow: 'bg-gold hover:brightness-110 text-slate-950 border-gold shadow-[0_4px_0_color-mix(in_srgb,var(--accent-gold)_65%,black)]',
    green: 'bg-success hover:brightness-110 text-slate-950 border-success shadow-[0_4px_0_color-mix(in_srgb,var(--accent-success)_65%,black)]',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base tracking-wider',
  };

  return (
    <button
      className={`flex items-center justify-center font-['Press_Start_2P',monospace] uppercase font-bold border-2 active:translate-y-1 active:shadow-none transition-all cursor-pointer select-none rounded-sm ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
