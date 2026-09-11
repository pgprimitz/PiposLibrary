import React from 'react';

export interface ArcadeEmptyStateProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  /** Rendered below the description — typically an ArcadeButton. */
  action?: React.ReactNode;
  className?: string;
}

export const ArcadeEmptyState: React.FC<ArcadeEmptyStateProps> = ({
  title,
  description,
  icon,
  action,
  className = '',
}) => (
  <div className={`flex flex-col items-center justify-center text-center gap-3 py-10 px-6 ${className}`}>
    {icon && <div className="text-ink-soft opacity-60">{icon}</div>}
    <p className="font-retro text-xs text-ink tracking-wider">{title}</p>
    {description && <p className="font-mono text-sm text-ink-soft max-w-md">{description}</p>}
    {action}
  </div>
);
