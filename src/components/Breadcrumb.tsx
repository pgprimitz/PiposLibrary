import React, { Fragment } from 'react';
import { Home, ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  onHome?: () => void;
  /** Texto del tooltip del ícono de inicio. */
  homeLabel?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, onHome, homeLabel = 'Inicio' }) => {
  return (
    <div
      className="flex items-center gap-1.5 text-xs font-mono text-ink-soft whitespace-nowrap overflow-x-auto"
      role="navigation"
      aria-label="breadcrumb"
    >
      <button
        type="button"
        onClick={onHome}
        title={homeLabel}
        className="p-1 -ml-1 rounded text-ink-soft hover:text-brand-2 hover:bg-surface-2/60 transition-colors cursor-pointer flex items-center"
      >
        <Home className="w-3.5 h-3.5" />
      </button>

      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <Fragment key={i}>
            <ChevronRight className="w-3 h-3 text-line shrink-0" />
            {item.onClick && !isLast ? (
              <button
                type="button"
                onClick={item.onClick}
                className="hover:text-brand-2 transition-colors cursor-pointer truncate max-w-[180px]"
              >
                {item.label}
              </button>
            ) : (
              <span className={`truncate max-w-[220px] ${isLast ? 'text-ink font-bold' : ''}`}>
                {item.label}
              </span>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};
