import React from 'react';
import { Check } from 'lucide-react';

export interface ArcadeCheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  /** Secondary line under the label. */
  description?: string;
  error?: string;
}

export const ArcadeCheckbox: React.FC<ArcadeCheckboxProps> = ({
  label,
  description,
  error,
  id,
  className = '',
  checked,
  disabled,
  ...props
}) => (
  <div className="flex flex-col gap-1 text-left">
    <label
      htmlFor={id}
      className={`flex items-start gap-2.5 ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <span className="relative flex items-center justify-center shrink-0 mt-0.5">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          className="peer appearance-none w-5 h-5 bg-canvas/80 border-2 border-line rounded-sm checked:bg-brand-2 checked:border-brand-2 focus:outline-none focus:border-brand-2 transition-colors cursor-pointer disabled:cursor-not-allowed"
          {...props}
        />
        <Check className="w-3.5 h-3.5 text-slate-950 absolute opacity-0 peer-checked:opacity-100 pointer-events-none" />
      </span>
      <span className="flex flex-col gap-0.5">
        <span className="font-mono text-sm text-ink">{label}</span>
        {description && <span className="font-mono text-xs text-ink-soft">{description}</span>}
      </span>
    </label>
    {error && <span className="text-danger text-xs font-mono ml-7">{error}</span>}
  </div>
);
