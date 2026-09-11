import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface ArcadePaginationProps {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  /** How many numbered buttons to show around the current page. */
  siblingCount?: number;
  previousLabel?: string;
  nextLabel?: string;
  className?: string;
}

/** Builds the visible page list, using -1 as an ellipsis marker. */
function buildRange(page: number, pageCount: number, siblingCount: number): number[] {
  const pages = new Set<number>([1, pageCount]);
  for (let i = page - siblingCount; i <= page + siblingCount; i += 1) {
    if (i >= 1 && i <= pageCount) pages.add(i);
  }

  const sorted = Array.from(pages).sort((a, b) => a - b);
  const result: number[] = [];
  sorted.forEach((value, index) => {
    if (index > 0 && value - sorted[index - 1] > 1) result.push(-1);
    result.push(value);
  });
  return result;
}

export const ArcadePagination: React.FC<ArcadePaginationProps> = ({
  page,
  pageCount,
  onPageChange,
  siblingCount = 1,
  previousLabel = 'Previous page',
  nextLabel = 'Next page',
  className = '',
}) => {
  if (pageCount <= 1) return null;

  const buttonBase =
    'min-w-8 h-8 px-2 flex items-center justify-center font-retro text-[9px] border-2 rounded-sm transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed';

  return (
    <nav aria-label="pagination" className={`flex items-center justify-center gap-1.5 ${className}`}>
      <button
        type="button"
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
        title={previousLabel}
        aria-label={previousLabel}
        className={`${buttonBase} border-line text-ink-soft hover:border-brand-2 hover:text-brand-2`}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {buildRange(page, pageCount, siblingCount).map((value, index) =>
        value === -1 ? (
          <span key={`gap-${index}`} className="px-1 font-retro text-[9px] text-ink-soft">
            ...
          </span>
        ) : (
          <button
            key={value}
            type="button"
            onClick={() => onPageChange(value)}
            aria-current={value === page ? 'page' : undefined}
            className={`${buttonBase} ${
              value === page
                ? 'bg-brand-2 border-brand-2 text-slate-950'
                : 'border-line text-ink-soft hover:border-brand-2 hover:text-brand-2'
            }`}
          >
            {value}
          </button>
        ),
      )}

      <button
        type="button"
        onClick={() => onPageChange(page + 1)}
        disabled={page >= pageCount}
        title={nextLabel}
        aria-label={nextLabel}
        className={`${buttonBase} border-line text-ink-soft hover:border-brand-2 hover:text-brand-2`}
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
};
