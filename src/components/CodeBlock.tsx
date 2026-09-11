import React, { useState } from 'react';
import { Copy, Check, Play } from 'lucide-react';

export interface CodeBlockProps {
  code: string;
  /** Language tag shown in the header and handed to `highlight`. */
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  /**
   * Optional syntax highlighter. The library ships none on purpose — pass
   * Prism, Shiki or whatever the consuming app already bundles.
   */
  highlight?: (code: string, language?: string) => React.ReactNode;
  /** When provided, a run button appears next to the copy button. */
  onRun?: (code: string) => void;
  copyLabel?: string;
  copiedLabel?: string;
  runLabel?: string;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language,
  filename,
  showLineNumbers = false,
  highlight,
  onRun,
  copyLabel = 'Copy code',
  copiedLabel = 'Copied',
  runLabel = 'Run code',
  className = '',
}) => {
  const [copied, setCopied] = useState(false);
  const lines = code.replace(/\n$/, '').split('\n');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access can be denied; failing silently beats crashing a lesson.
    }
  };

  return (
    <div className={`border-2 border-line rounded-sm overflow-hidden bg-canvas ${className}`}>
      <div className="flex items-center justify-between gap-3 px-3 py-2 bg-surface-2 border-b border-line">
        <span className="font-retro text-[9px] uppercase tracking-wider text-brand-2 truncate">
          {filename ?? language ?? 'code'}
        </span>
        <span className="flex items-center gap-1.5 shrink-0">
          {onRun && (
            <button
              type="button"
              onClick={() => onRun(code)}
              title={runLabel}
              aria-label={runLabel}
              className="p-1 rounded border border-line text-success hover:border-success transition-colors cursor-pointer"
            >
              <Play className="w-3.5 h-3.5" />
            </button>
          )}
          <button
            type="button"
            onClick={handleCopy}
            title={copied ? copiedLabel : copyLabel}
            aria-label={copied ? copiedLabel : copyLabel}
            className="p-1 rounded border border-line text-ink-soft hover:text-brand-2 hover:border-brand-2 transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-success" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </span>
      </div>

      <pre className="overflow-x-auto p-3 font-mono text-xs leading-relaxed text-ink">
        <code>
          {highlight
            ? highlight(code, language)
            : lines.map((line, i) => (
                <span key={i} className="block">
                  {showLineNumbers && (
                    <span className="inline-block w-8 pr-3 text-right text-ink-soft select-none">{i + 1}</span>
                  )}
                  {line || ' '}
                </span>
              ))}
        </code>
      </pre>
    </div>
  );
};
