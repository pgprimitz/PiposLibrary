import React from 'react';

export interface ArcadeTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  /** Shows a "used / max" counter under the field. Requires maxLength. */
  showCount?: boolean;
}

export const ArcadeTextarea: React.FC<ArcadeTextareaProps> = ({
  label,
  error,
  showCount = false,
  id,
  className = '',
  value,
  maxLength,
  ...props
}) => {
  const used = typeof value === 'string' ? value.length : 0;

  return (
    <div className="flex flex-col gap-1.5 w-full text-left">
      {label && (
        <label htmlFor={id} className="font-retro text-[10px] text-brand-2 tracking-wider">
          {label}
        </label>
      )}
      <textarea
        id={id}
        value={value}
        maxLength={maxLength}
        aria-invalid={error ? true : undefined}
        className={`bg-canvas/80 border-2 border-line focus:border-brand-2 focus:outline-none px-3 py-2 text-brand-2 font-mono text-sm rounded-sm transition-all resize-y min-h-24 ${error ? 'border-danger' : ''} ${className}`}
        {...props}
      />
      <div className="flex items-center justify-between gap-2">
        {error ? <span className="text-danger text-xs font-mono">{error}</span> : <span />}
        {showCount && maxLength !== undefined && (
          <span className="text-ink-soft text-xs font-mono">
            {used}/{maxLength}
          </span>
        )}
      </div>
    </div>
  );
};
