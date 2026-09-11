import React from 'react';
import { ArcadeProgressBar } from './ArcadeProgressBar';
import { GradeBadge } from './StatusBadges';
import type { RubricCriterion } from '../types/domain';

export interface RubricPanelProps {
  criteria: RubricCriterion[];
  /** Overall grade. When omitted it is computed from the weighted criteria. */
  totalScore?: number;
  maxScore?: number;
  passingScore?: number;
  /** Free-text feedback from the evaluator, shown under the criteria. */
  comment?: string;
  totalLabel?: string;
  commentLabel?: string;
  weightLabel?: string;
  className?: string;
}

/** Weighted score for one criterion, normalised to the 0-100 scale. */
function weightedScore(criterion: RubricCriterion): number {
  if (criterion.maxScore <= 0) return 0;
  return (criterion.score / criterion.maxScore) * criterion.weight;
}

/** Grade breakdown by rubric criterion, as returned by the evaluation service. */
export const RubricPanel: React.FC<RubricPanelProps> = ({
  criteria,
  totalScore,
  maxScore = 100,
  passingScore,
  comment,
  totalLabel = 'Total',
  commentLabel = 'Feedback',
  weightLabel = 'weight',
  className = '',
}) => {
  const computed = criteria.reduce((sum, criterion) => sum + weightedScore(criterion), 0);
  const total = totalScore ?? Math.round(computed);

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className="flex items-center justify-between gap-3 pb-3 border-b-2 border-line">
        <span className="font-retro text-[10px] text-ink tracking-wider">{totalLabel}</span>
        <GradeBadge score={total} maxScore={maxScore} passingScore={passingScore} />
      </div>

      <ul className="flex flex-col gap-4">
        {criteria.map((criterion) => (
          <li key={criterion.id} className="flex flex-col gap-1.5">
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-mono text-sm text-ink">{criterion.label}</span>
              <span className="font-retro text-[9px] text-ink-soft shrink-0">
                {criterion.score}/{criterion.maxScore} · {criterion.weight}% {weightLabel}
              </span>
            </div>
            <ArcadeProgressBar
              value={criterion.score}
              max={criterion.maxScore}
              tone={criterion.score / criterion.maxScore >= 0.6 ? 'green' : 'red'}
              size="sm"
            />
            {criterion.comment && <p className="font-mono text-xs text-ink-soft">{criterion.comment}</p>}
          </li>
        ))}
      </ul>

      {comment && (
        <div className="pt-3 border-t border-line">
          <p className="font-retro text-[9px] text-brand-2 tracking-wider mb-1.5">{commentLabel}</p>
          <p className="font-mono text-sm text-ink leading-relaxed">{comment}</p>
        </div>
      )}
    </div>
  );
};
