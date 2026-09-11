import React from 'react';
import { ArcadeBadge, type ArcadeBadgeTone } from './ArcadeBadge';
import type { ActivityKind, ActivityStatus, CourseStatus, Difficulty } from '../types/domain';

const statusTones: Record<ActivityStatus, ArcadeBadgeTone> = {
  pending: 'neutral',
  in_progress: 'cyan',
  submitted: 'magenta',
  graded: 'yellow',
  completed: 'green',
  overdue: 'red',
  locked: 'neutral',
};

const defaultStatusLabels: Record<ActivityStatus, string> = {
  pending: 'Pending',
  in_progress: 'In progress',
  submitted: 'Submitted',
  graded: 'Graded',
  completed: 'Completed',
  overdue: 'Overdue',
  locked: 'Locked',
};

export interface ActivityStatusBadgeProps {
  status: ActivityStatus;
  /** Override the English defaults to localise the badge. */
  labels?: Partial<Record<ActivityStatus, string>>;
  size?: 'sm' | 'md';
  className?: string;
}

export const ActivityStatusBadge: React.FC<ActivityStatusBadgeProps> = ({
  status,
  labels,
  size = 'md',
  className,
}) => (
  <ArcadeBadge tone={statusTones[status]} appearance="outline" size={size} className={className}>
    {labels?.[status] ?? defaultStatusLabels[status]}
  </ArcadeBadge>
);

const kindTones: Record<ActivityKind, ArcadeBadgeTone> = {
  required: 'red',
  optional: 'neutral',
  formative: 'cyan',
  summative: 'magenta',
  peer: 'yellow',
};

const defaultKindLabels: Record<ActivityKind, string> = {
  required: 'Required',
  optional: 'Optional',
  formative: 'Formative',
  summative: 'Summative',
  peer: 'Peer review',
};

export interface ActivityKindBadgeProps {
  kind: ActivityKind;
  labels?: Partial<Record<ActivityKind, string>>;
  size?: 'sm' | 'md';
  className?: string;
}

export const ActivityKindBadge: React.FC<ActivityKindBadgeProps> = ({ kind, labels, size = 'md', className }) => (
  <ArcadeBadge tone={kindTones[kind]} appearance="solid" size={size} className={className}>
    {labels?.[kind] ?? defaultKindLabels[kind]}
  </ArcadeBadge>
);

const courseStatusTones: Record<CourseStatus, ArcadeBadgeTone> = {
  draft: 'neutral',
  active: 'green',
  archived: 'yellow',
};

const defaultCourseStatusLabels: Record<CourseStatus, string> = {
  draft: 'Draft',
  active: 'Active',
  archived: 'Archived',
};

export interface CourseStatusBadgeProps {
  status: CourseStatus;
  labels?: Partial<Record<CourseStatus, string>>;
  size?: 'sm' | 'md';
  className?: string;
}

export const CourseStatusBadge: React.FC<CourseStatusBadgeProps> = ({
  status,
  labels,
  size = 'md',
  className,
}) => (
  <ArcadeBadge tone={courseStatusTones[status]} appearance="outline" size={size} className={className}>
    {labels?.[status] ?? defaultCourseStatusLabels[status]}
  </ArcadeBadge>
);

export interface GradeBadgeProps {
  score: number;
  maxScore?: number;
  /** Score at or above which the grade counts as passing. */
  passingScore?: number;
  /** Weight of this grade in the final mark, as a percentage. */
  weight?: number;
  passLabel?: string;
  failLabel?: string;
  size?: 'sm' | 'md';
  className?: string;
}

/** Numeric score plus pass/fail verdict and optional weighting, as one unit. */
export const GradeBadge: React.FC<GradeBadgeProps> = ({
  score,
  maxScore = 100,
  passingScore,
  weight,
  passLabel = 'Passed',
  failLabel = 'Needs review',
  size = 'md',
  className = '',
}) => {
  const passed = passingScore !== undefined ? score >= passingScore : undefined;
  const tone: ArcadeBadgeTone = passed === undefined ? 'cyan' : passed ? 'green' : 'red';

  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <ArcadeBadge tone={tone} appearance="solid" size={size}>
        {score}/{maxScore}
      </ArcadeBadge>
      {passed !== undefined && (
        <ArcadeBadge tone={tone} appearance="outline" size={size}>
          {passed ? passLabel : failLabel}
        </ArcadeBadge>
      )}
      {weight !== undefined && (
        <ArcadeBadge tone="neutral" appearance="outline" size={size}>
          {weight}%
        </ArcadeBadge>
      )}
    </span>
  );
};

const difficultyTones: Record<Difficulty, ArcadeBadgeTone> = {
  beginner: 'green',
  intermediate: 'yellow',
  advanced: 'red',
};

const defaultDifficultyLabels: Record<Difficulty, string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};

export interface CourseMetaBadgesProps {
  difficulty?: Difficulty;
  /** Free text, e.g. "Español" — the consumer already knows its own language names. */
  language?: string;
  /** Estimated duration in minutes. */
  durationMinutes?: number;
  difficultyLabels?: Partial<Record<Difficulty, string>>;
  /** Formats the duration. Defaults to "1h 30m". */
  formatDuration?: (minutes: number) => string;
  size?: 'sm' | 'md';
  className?: string;
}

function defaultFormatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  if (hours === 0) return `${rest}m`;
  return rest === 0 ? `${hours}h` : `${hours}h ${rest}m`;
}

export const CourseMetaBadges: React.FC<CourseMetaBadgesProps> = ({
  difficulty,
  language,
  durationMinutes,
  difficultyLabels,
  formatDuration = defaultFormatDuration,
  size = 'sm',
  className = '',
}) => (
  <span className={`inline-flex flex-wrap items-center gap-1.5 ${className}`}>
    {difficulty && (
      <ArcadeBadge tone={difficultyTones[difficulty]} appearance="outline" size={size}>
        {difficultyLabels?.[difficulty] ?? defaultDifficultyLabels[difficulty]}
      </ArcadeBadge>
    )}
    {language && (
      <ArcadeBadge tone="neutral" appearance="outline" size={size}>
        {language}
      </ArcadeBadge>
    )}
    {durationMinutes !== undefined && (
      <ArcadeBadge tone="cyan" appearance="outline" size={size}>
        {formatDuration(durationMinutes)}
      </ArcadeBadge>
    )}
  </span>
);
