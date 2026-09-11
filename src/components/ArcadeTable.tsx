import React from 'react';

export interface ArcadeTableColumn<T> {
  /** Stable key, also used as the sort key reported by onSort. */
  key: string;
  header: React.ReactNode;
  render: (row: T, index: number) => React.ReactNode;
  align?: 'left' | 'center' | 'right';
  width?: string;
  sortable?: boolean;
}

export interface ArcadeTableProps<T> {
  columns: ArcadeTableColumn<T>[];
  rows: T[];
  rowKey: (row: T, index: number) => string;
  /** Extra classes per row — this is how ranking marks its P90 / P10 zones. */
  rowClassName?: (row: T, index: number) => string;
  onRowClick?: (row: T, index: number) => void;
  sortKey?: string;
  sortDirection?: 'asc' | 'desc';
  onSort?: (key: string) => void;
  /** Rendered in place of the body when there are no rows. */
  emptyState?: React.ReactNode;
  className?: string;
}

const alignments = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export function ArcadeTable<T>({
  columns,
  rows,
  rowKey,
  rowClassName,
  onRowClick,
  sortKey,
  sortDirection = 'asc',
  onSort,
  emptyState,
  className = '',
}: ArcadeTableProps<T>) {
  if (rows.length === 0 && emptyState) {
    return <div className="border-2 border-line rounded-sm bg-surface/60">{emptyState}</div>;
  }

  return (
    <div className={`w-full overflow-x-auto border-2 border-line rounded-sm bg-surface/60 ${className}`}>
      <table className="w-full border-collapse font-mono text-sm">
        <thead>
          <tr className="bg-surface-2">
            {columns.map((column) => {
              const sorted = sortKey === column.key;
              return (
                <th
                  key={column.key}
                  scope="col"
                  style={{ width: column.width }}
                  aria-sort={sorted ? (sortDirection === 'asc' ? 'ascending' : 'descending') : undefined}
                  className={`px-3 py-2.5 font-retro text-[9px] uppercase tracking-wider text-brand-2 border-b-2 border-line ${alignments[column.align ?? 'left']}`}
                >
                  {column.sortable && onSort ? (
                    <button
                      type="button"
                      onClick={() => onSort(column.key)}
                      className="inline-flex items-center gap-1 hover:text-ink transition-colors cursor-pointer uppercase"
                    >
                      {column.header}
                      <span aria-hidden="true" className={sorted ? 'text-gold' : 'opacity-30'}>
                        {sorted && sortDirection === 'desc' ? '▼' : '▲'}
                      </span>
                    </button>
                  ) : (
                    column.header
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={rowKey(row, index)}
              onClick={onRowClick ? () => onRowClick(row, index) : undefined}
              className={`border-b border-line last:border-b-0 transition-colors ${
                onRowClick ? 'cursor-pointer hover:bg-surface-2/70' : ''
              } ${rowClassName?.(row, index) ?? ''}`}
            >
              {columns.map((column) => (
                <td key={column.key} className={`px-3 py-2.5 text-ink ${alignments[column.align ?? 'left']}`}>
                  {column.render(row, index)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
