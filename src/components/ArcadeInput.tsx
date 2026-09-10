import React from 'react';

export interface ArcadeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const ArcadeInput: React.FC<ArcadeInputProps> = ({
  label,
  error,
  id,
  className = '',
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1.5 w-full text-left">
      {label && (
        <label htmlFor={id} className="font-['Press_Start_2P',monospace] text-[10px] text-brand-2 tracking-wider">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`bg-canvas/80 border-2 border-line focus:border-brand-2 focus:shadow-[0_0_10px_rgba(6,182,212,0.5)] focus:outline-none px-3 py-2 text-brand-2 font-mono text-sm rounded-sm transition-all ${error ? 'border-danger' : ''} ${className}`}
        {...props}
      />
      {error && <span className="text-danger text-xs font-mono">{error}</span>}
    </div>
  );
};
