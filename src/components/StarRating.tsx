import React, { useState } from 'react';
import { PixelStar } from './PixelIcons';

export interface StarRatingProps {
  value: number;
  max?: number;
  /** Omit to render a read-only rating. */
  onChange?: (value: number) => void;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  /** Named descriptions per score, used as each star's accessible label. */
  starLabels?: string[];
  className?: string;
}

const sizes = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-9 h-9',
};

/** CSAT survey control. Read-only unless onChange is supplied. */
export const StarRating: React.FC<StarRatingProps> = ({
  value,
  max = 5,
  onChange,
  size = 'md',
  label = 'Rating',
  starLabels,
  className = '',
}) => {
  const [hovered, setHovered] = useState(0);
  const readOnly = !onChange;
  const shown = hovered || value;

  return (
    <div
      className={`inline-flex items-center gap-1 ${className}`}
      role={readOnly ? 'img' : 'radiogroup'}
      aria-label={`${label}: ${value}/${max}`}
      onMouseLeave={() => setHovered(0)}
    >
      {Array.from({ length: max }, (_, i) => {
        const score = i + 1;
        const filled = score <= shown;
        const starLabel = starLabels?.[i] ?? `${score}`;

        return (
          <button
            key={score}
            type="button"
            disabled={readOnly}
            role={readOnly ? undefined : 'radio'}
            aria-checked={readOnly ? undefined : score === value}
            aria-label={starLabel}
            title={starLabel}
            onClick={() => onChange?.(score)}
            onMouseEnter={() => !readOnly && setHovered(score)}
            className={`transition-transform ${readOnly ? 'cursor-default' : 'cursor-pointer hover:scale-110'} ${
              filled ? '' : 'opacity-25 grayscale'
            }`}
          >
            <PixelStar className={sizes[size]} />
          </button>
        );
      })}
    </div>
  );
};
