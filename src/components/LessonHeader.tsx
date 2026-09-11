import React from 'react';
import { Clock } from 'lucide-react';
import { ActivityStatusBadge } from './StatusBadges';
import type { ActivityStatus } from '../types/domain';

export interface LessonHeaderProps {
  title: string;
  /** Section path, e.g. "Unidad 2 > Tema 1.4". Rendered above the title. */
  section?: string;
  estimatedMinutes?: number;
  status?: ActivityStatus;
  statusLabels?: Partial<Record<ActivityStatus, string>>;
  /** Formats the estimate. Defaults to "1h 30m". */
  formatDuration?: (minutes: number) => string;
  /** Badges, buttons or meta rendered on the right of the title row. */
  actions?: React.ReactNode;
  className?: string;
}

function defaultFormatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  if (hours === 0) return `${rest}m`;
  return rest === 0 ? `${hours}h` : `${hours}h ${rest}m`;
}

export const LessonHeader: React.FC<LessonHeaderProps> = ({
  title,
  section,
  estimatedMinutes,
  status,
  statusLabels,
  formatDuration = defaultFormatDuration,
  actions,
  className = '',
}) => (
  <header className={`flex flex-col gap-2 pb-4 border-b-2 border-line ${className}`}>
    {section && <p className="font-mono text-xs text-ink-soft tracking-wide">{section}</p>}
    <div className="flex flex-wrap items-start justify-between gap-3">
      <h1 className="font-retro text-sm sm:text-base text-ink tracking-wider leading-relaxed">{title}</h1>
      {actions}
    </div>
    <div className="flex flex-wrap items-center gap-3">
      {status && <ActivityStatusBadge status={status} labels={statusLabels} size="sm" />}
      {estimatedMinutes !== undefined && (
        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-soft">
          <Clock className="w-3.5 h-3.5" />
          {formatDuration(estimatedMinutes)}
        </span>
      )}
    </div>
  </header>
);
