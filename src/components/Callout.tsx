import React from 'react';
import { Info, AlertTriangle, Lightbulb, Quote } from 'lucide-react';

export type CalloutVariant = 'note' | 'warning' | 'tip' | 'citation';

export interface CalloutProps {
  variant?: CalloutVariant;
  /** Defaults to the variant name in English; override it to localise. */
  title?: string;
  /** Citation only: the source rendered under the quote, in APA/IEEE style. */
  source?: string;
  children?: React.ReactNode;
  className?: string;
}

const variantStyles: Record<CalloutVariant, { border: string; text: string; bg: string; icon: React.ReactNode }> = {
  note: {
    border: 'border-brand-2',
    text: 'text-brand-2',
    bg: 'bg-brand-2/5',
    icon: <Info className="w-4 h-4" />,
  },
  warning: {
    border: 'border-danger',
    text: 'text-danger',
    bg: 'bg-danger/5',
    icon: <AlertTriangle className="w-4 h-4" />,
  },
  tip: {
    border: 'border-success',
    text: 'text-success',
    bg: 'bg-success/5',
    icon: <Lightbulb className="w-4 h-4" />,
  },
  citation: {
    border: 'border-gold',
    text: 'text-gold',
    bg: 'bg-gold/5',
    icon: <Quote className="w-4 h-4" />,
  },
};

const defaultTitles: Record<CalloutVariant, string> = {
  note: 'Note',
  warning: 'Warning',
  tip: 'Tip',
  citation: 'Reference',
};

/** Pedagogical highlight block: definition, prerequisite warning, tutor tip or academic citation. */
export const Callout: React.FC<CalloutProps> = ({
  variant = 'note',
  title,
  source,
  children,
  className = '',
}) => {
  const style = variantStyles[variant];
  const heading = title ?? defaultTitles[variant];

  return (
    <aside className={`border-l-4 border-2 rounded-sm px-4 py-3 ${style.border} ${style.bg} ${className}`}>
      <p className={`flex items-center gap-2 font-retro text-[10px] uppercase tracking-wider mb-2 ${style.text}`}>
        {style.icon}
        {heading}
      </p>
      <div
        className={`font-mono text-sm text-ink leading-relaxed ${variant === 'citation' ? 'italic' : ''}`}
      >
        {children}
      </div>
      {source && <p className="mt-2 font-mono text-xs text-ink-soft not-italic">— {source}</p>}
    </aside>
  );
};
