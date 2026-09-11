import React from 'react';

export interface MathBlockProps {
  /** The LaTeX source. */
  expression: string;
  /** Inline renders within a text line; block centres it on its own row. */
  display?: 'inline' | 'block';
  /**
   * Optional LaTeX renderer, e.g. a KaTeX wrapper. Without one the raw source
   * is shown in a monospace box — readable, and no 300KB dependency.
   */
  renderer?: (expression: string, display: 'inline' | 'block') => React.ReactNode;
  className?: string;
}

export const MathBlock: React.FC<MathBlockProps> = ({
  expression,
  display = 'block',
  renderer,
  className = '',
}) => {
  const content = renderer ? renderer(expression, display) : expression;

  if (display === 'inline') {
    return <span className={`font-mono text-sm text-brand-2 ${className}`}>{content}</span>;
  }

  return (
    <div
      className={`overflow-x-auto px-4 py-3 my-2 bg-surface-2/60 border-l-4 border-brand-2 rounded-sm text-center font-mono text-sm text-ink ${className}`}
    >
      {content}
    </div>
  );
};
