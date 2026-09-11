import React from 'react';
import { ChevronDown } from 'lucide-react';

export interface ArcadeSelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface ArcadeSelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  label?: string;
  error?: string;
  options: ArcadeSelectOption[];
  /** Shown as a disabled first entry when no value is selected yet. */
  placeholder?: string;
}

export const ArcadeSelect: React.FC<ArcadeSelectProps> = ({
  label,
  error,
  options,
  placeholder,
  id,
  className = '',
  ...props
}) => (
  <div className="flex flex-col gap-1.5 w-full text-left">
    {label && (
      <label htmlFor={id} className="font-retro text-[10px] text-brand-2 tracking-wider">
        {label}
      </label>
    )}
    <div className="relative">
      <select
        id={id}
        aria-invalid={error ? true : undefined}
        className={`w-full appearance-none bg-canvas/80 border-2 border-line focus:border-brand-2 focus:outline-none px-3 py-2 pr-9 text-brand-2 font-mono text-sm rounded-sm transition-all cursor-pointer ${error ? 'border-danger' : ''} ${className}`}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="w-4 h-4 text-ink-soft absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
    {error && <span className="text-danger text-xs font-mono">{error}</span>}
  </div>
);
