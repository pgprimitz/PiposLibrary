import React from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { useDialogBehavior } from '../hooks/useDialogBehavior';

export interface ArcadeDrawerProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  side?: 'left' | 'right';
  size?: 'sm' | 'md' | 'lg';
  footer?: React.ReactNode;
  closeLabel?: string;
  children?: React.ReactNode;
  className?: string;
}

const sizes = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-xl',
};

export const ArcadeDrawer: React.FC<ArcadeDrawerProps> = ({
  open,
  onClose,
  title,
  subtitle,
  side = 'right',
  size = 'md',
  footer,
  closeLabel = 'Close',
  children,
  className = '',
}) => {
  const panelRef = useDialogBehavior(open, onClose);

  if (!open || typeof document === 'undefined') return null;

  const sideClasses = side === 'right' ? 'right-0 border-l-2' : 'left-0 border-r-2';

  return createPortal(
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        className={`absolute top-0 bottom-0 w-full ${sizes[size]} ${sideClasses} flex flex-col bg-surface border-brand-2 outline-none ${className}`}
      >
        <div className="flex items-start justify-between gap-4 px-5 py-4 border-b border-line">
          <div className="flex flex-col gap-1 text-left">
            {title && <h2 className="font-retro text-xs text-brand-2 tracking-wider">{title}</h2>}
            {subtitle && <p className="font-mono text-xs text-ink-soft">{subtitle}</p>}
          </div>
          <button
            type="button"
            onClick={onClose}
            title={closeLabel}
            aria-label={closeLabel}
            className="shrink-0 p-1 rounded border border-line text-ink-soft hover:text-danger hover:border-danger transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 px-5 py-4 overflow-y-auto font-mono text-sm text-ink">{children}</div>

        {footer && (
          <div className="flex items-center justify-end gap-3 px-5 py-4 border-t border-line">{footer}</div>
        )}
      </div>
    </div>,
    document.body,
  );
};
