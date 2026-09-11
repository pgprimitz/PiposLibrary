import React from 'react';
import { Check } from 'lucide-react';

export interface LessonStep {
  id: string;
  label: string;
  /** Locked steps cannot be clicked even when onStepClick is provided. */
  locked?: boolean;
}

export interface LessonStepperProps {
  steps: LessonStep[];
  /** Index of the step the learner is on. Everything before it counts as done. */
  currentIndex: number;
  onStepClick?: (step: LessonStep, index: number) => void;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export const LessonStepper: React.FC<LessonStepperProps> = ({
  steps,
  currentIndex,
  onStepClick,
  orientation = 'horizontal',
  className = '',
}) => (
  <ol
    className={`flex ${orientation === 'horizontal' ? 'flex-row items-start overflow-x-auto' : 'flex-col'} gap-0 ${className}`}
  >
    {steps.map((step, index) => {
      const done = index < currentIndex;
      const active = index === currentIndex;
      const clickable = Boolean(onStepClick) && !step.locked;

      const circle = done
        ? 'bg-success border-success text-slate-950'
        : active
          ? 'bg-brand-2 border-brand-2 text-slate-950'
          : 'bg-surface-2 border-line text-ink-soft';

      return (
        <li
          key={step.id}
          aria-current={active ? 'step' : undefined}
          className={`flex ${orientation === 'horizontal' ? 'flex-col items-center text-center flex-1 min-w-24' : 'flex-row items-start gap-3'}`}
        >
          <div className={`flex ${orientation === 'horizontal' ? 'flex-row items-center w-full' : 'flex-col items-center'}`}>
            {orientation === 'horizontal' && (
              <span className={`h-0.5 flex-1 ${index === 0 ? 'invisible' : done || active ? 'bg-brand-2' : 'bg-line'}`} />
            )}
            <button
              type="button"
              disabled={!clickable}
              onClick={() => onStepClick?.(step, index)}
              className={`shrink-0 w-8 h-8 flex items-center justify-center border-2 rounded-sm font-retro text-[10px] transition-colors ${circle} ${
                clickable ? 'cursor-pointer hover:brightness-110' : 'cursor-default'
              } ${step.locked ? 'opacity-40' : ''}`}
            >
              {done ? <Check className="w-4 h-4" /> : index + 1}
            </button>
            {orientation === 'horizontal' ? (
              <span
                className={`h-0.5 flex-1 ${index === steps.length - 1 ? 'invisible' : done ? 'bg-brand-2' : 'bg-line'}`}
              />
            ) : (
              index < steps.length - 1 && <span className={`w-0.5 h-6 ${done ? 'bg-brand-2' : 'bg-line'}`} />
            )}
          </div>
          <span
            className={`font-mono text-xs leading-tight ${orientation === 'horizontal' ? 'mt-2 px-1' : 'pt-1.5'} ${
              active ? 'text-brand-2' : 'text-ink-soft'
            }`}
          >
            {step.label}
          </span>
        </li>
      );
    })}
  </ol>
);
