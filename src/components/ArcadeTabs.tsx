import React from 'react';

export interface ArcadeTab {
  id: string;
  label: string;
  icon?: React.ReactNode;
  /** Count rendered as a small pill after the label. */
  badge?: number;
  disabled?: boolean;
}

export interface ArcadeTabsProps {
  tabs: ArcadeTab[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
}

export const ArcadeTabs: React.FC<ArcadeTabsProps> = ({ tabs, activeId, onChange, className = '' }) => {
  const enabled = tabs.filter((tab) => !tab.disabled);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();
    const current = enabled.findIndex((tab) => tab.id === activeId);
    const delta = event.key === 'ArrowRight' ? 1 : -1;
    const next = enabled[(current + delta + enabled.length) % enabled.length];
    if (next) onChange(next.id);
  };

  return (
    <div
      role="tablist"
      onKeyDown={handleKeyDown}
      className={`flex items-end gap-1 border-b-2 border-line overflow-x-auto ${className}`}
    >
      {tabs.map((tab) => {
        const active = tab.id === activeId;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active}
            tabIndex={active ? 0 : -1}
            disabled={tab.disabled}
            onClick={() => onChange(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 -mb-0.5 font-retro text-[10px] uppercase tracking-wider border-2 border-b-0 rounded-t-sm whitespace-nowrap transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
              active
                ? 'bg-surface border-brand-2 text-brand-2'
                : 'bg-surface-2/50 border-transparent text-ink-soft hover:text-ink'
            }`}
          >
            {tab.icon}
            {tab.label}
            {tab.badge !== undefined && tab.badge > 0 && (
              <span className="bg-brand text-white rounded-full px-1.5 py-0.5 text-[8px] leading-none">
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
