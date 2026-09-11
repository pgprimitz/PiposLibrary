import React from 'react';

export interface ChoiceOption {
  id: string;
  label: string;
  /** Explanation revealed once the answer is graded. */
  feedback?: string;
}

export interface MultipleChoiceProps {
  question: string;
  options: ChoiceOption[];
  /** Selected option ids. Single-choice questions hold at most one. */
  value: string[];
  onChange: (value: string[]) => void;
  /** Allows more than one selection. */
  multiple?: boolean;
  /** Locks the control and paints correct / incorrect states. */
  revealed?: boolean;
  correctIds?: string[];
  disabled?: boolean;
  className?: string;
}

/** Quiz control for single or multiple answer questions, with post-grading reveal. */
export const MultipleChoice: React.FC<MultipleChoiceProps> = ({
  question,
  options,
  value,
  onChange,
  multiple = false,
  revealed = false,
  correctIds = [],
  disabled = false,
  className = '',
}) => {
  const locked = disabled || revealed;

  const toggle = (id: string) => {
    if (locked) return;
    if (!multiple) {
      onChange([id]);
      return;
    }
    onChange(value.includes(id) ? value.filter((v) => v !== id) : [...value, id]);
  };

  return (
    <fieldset className={`flex flex-col gap-3 border-0 p-0 m-0 ${className}`}>
      <legend className="font-mono text-sm text-ink leading-relaxed mb-2">{question}</legend>

      {options.map((option, index) => {
        const selected = value.includes(option.id);
        const correct = correctIds.includes(option.id);

        let tone = 'border-line bg-surface/60 hover:border-brand-2';
        if (revealed && correct) tone = 'border-success bg-success/10';
        else if (revealed && selected) tone = 'border-danger bg-danger/10';
        else if (selected) tone = 'border-brand-2 bg-brand-2/10';

        return (
          <label
            key={option.id}
            className={`flex items-start gap-3 px-3 py-2.5 border-2 rounded-sm transition-colors ${tone} ${
              locked ? 'cursor-default' : 'cursor-pointer'
            }`}
          >
            <input
              type={multiple ? 'checkbox' : 'radio'}
              name={question}
              checked={selected}
              disabled={locked}
              onChange={() => toggle(option.id)}
              className="sr-only"
            />
            <span
              className={`shrink-0 w-6 h-6 flex items-center justify-center border-2 font-retro text-[9px] ${
                multiple ? 'rounded-sm' : 'rounded-full'
              } ${selected ? 'bg-brand-2 border-brand-2 text-slate-950' : 'border-line text-ink-soft'}`}
            >
              {String.fromCharCode(65 + index)}
            </span>
            <span className="flex flex-col gap-1 pt-0.5">
              <span className="font-mono text-sm text-ink">{option.label}</span>
              {revealed && option.feedback && (
                <span className="font-mono text-xs text-ink-soft">{option.feedback}</span>
              )}
            </span>
          </label>
        );
      })}
    </fieldset>
  );
};
