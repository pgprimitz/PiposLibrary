import React from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { useDialogBehavior } from '../hooks/useDialogBehavior';

export type ArcadeModalTone = 'cyan' | 'magenta' | 'yellow' | 'green' | 'red';

export interface ArcadeModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  /** Rendered under the title in a lighter mono font. */
  subtitle?: string;
  tone?: ArcadeModalTone;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Action row pinned to the bottom of the panel. */
  footer?: React.ReactNode;
  /** When false, backdrop click, Escape and the close button are all disabled. */
  dismissable?: boolean;
  closeLabel?: string;
  children?: React.ReactNode;
  className?: string;
}

const toneBorders: Record<ArcadeModalTone, string> = {
  cyan: 'border-brand-2',
  magenta: 'border-brand',
  yellow: 'border-gold',
  green: 'border-success',
  red: 'border-danger',
};

const toneTitles: Record<ArcadeModalTone, string> = {
  cyan: 'text-brand-2',
  magenta: 'text-brand',
  yellow: 'text-gold',
  green: 'text-success',
  red: 'text-danger',
};

const sizes = {
  sm: 'max-w-sm',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
};

const noop = () => {};

export const ArcadeModal: React.FC<ArcadeModalProps> = ({
  open,
  onClose,
  title,
  subtitle,
  tone = 'cyan',
  size = 'md',
  footer,
  dismissable = true,
  closeLabel = 'Close',
  children,
  className = '',
}) => {
  const panelRef = useDialogBehavior(open, dismissable ? onClose : noop);

  if (!open || typeof document === 'undefined') return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={dismissable ? onClose : undefined}
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        className={`relative w-full ${sizes[size]} max-h-[85vh] flex flex-col bg-surface border-2 rounded-md outline-none ${toneBorders[tone]} ${className}`}
      >
        <span className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-line" />
        <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-line" />
        <span className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-line" />
        <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-line" />

        {(title || dismissable) && (
          <div className="flex items-start justify-between gap-4 px-5 py-4 border-b border-line">
            <div className="flex flex-col gap-1 text-left">
              {title && <h2 className={`font-retro text-xs tracking-wider ${toneTitles[tone]}`}>{title}</h2>}
              {subtitle && <p className="font-mono text-xs text-ink-soft">{subtitle}</p>}
            </div>
            {dismissable && (
              <button
                type="button"
                onClick={onClose}
                title={closeLabel}
                aria-label={closeLabel}
                className="shrink-0 p-1 rounded border border-line text-ink-soft hover:text-danger hover:border-danger transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        )}

        <div className="px-5 py-4 overflow-y-auto font-mono text-sm text-ink">{children}</div>

        {footer && (
          <div className="flex items-center justify-end gap-3 px-5 py-4 border-t border-line">{footer}</div>
        )}
      </div>
    </div>,
    document.body,
  );
};
