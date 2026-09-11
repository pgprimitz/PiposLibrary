import React from 'react';

export interface ArcadeRadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface ArcadeRadioGroupProps {
  name: string;
  options: ArcadeRadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  error?: string;
  className?: string;
}

export const ArcadeRadioGroup: React.FC<ArcadeRadioGroupProps> = ({
  name,
  options,
  value,
  onChange,
  label,
  error,
  className = '',
}) => (
  <fieldset className={`flex flex-col gap-2 text-left border-0 p-0 m-0 ${className}`}>
    {label && <legend className="font-retro text-[10px] text-brand-2 tracking-wider mb-1">{label}</legend>}
    {options.map((option) => {
      const id = `${name}-${option.value}`;
      return (
        <label
          key={option.value}
          htmlFor={id}
          className={`flex items-start gap-2.5 ${option.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          <input
            id={id}
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            disabled={option.disabled}
            onChange={() => onChange?.(option.value)}
            className="appearance-none shrink-0 mt-0.5 w-5 h-5 bg-canvas/80 border-2 border-line rounded-full checked:border-brand-2 checked:border-[6px] focus:outline-none transition-colors cursor-pointer disabled:cursor-not-allowed"
          />
          <span className="flex flex-col gap-0.5">
            <span className="font-mono text-sm text-ink">{option.label}</span>
            {option.description && <span className="font-mono text-xs text-ink-soft">{option.description}</span>}
          </span>
        </label>
      );
    })}
    {error && <span className="text-danger text-xs font-mono">{error}</span>}
  </fieldset>
);
