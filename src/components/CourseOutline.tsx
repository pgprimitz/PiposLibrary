import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { PixelCheck, PixelLock } from './PixelIcons';
import type { ActivityStatus, AssessmentType, ResourceType } from '../types/domain';

export interface CourseOutlineNode {
  id: string;
  label: string;
  /** Nested sections or activities. A node with children renders as a section. */
  children?: CourseOutlineNode[];
  status?: ActivityStatus;
  /** Drives the leading icon when the consumer provides an iconFor resolver. */
  kind?: ResourceType | AssessmentType;
}

export interface CourseOutlineProps {
  nodes: CourseOutlineNode[];
  /** Id of the activity currently open. */
  activeId?: string;
  onSelect?: (node: CourseOutlineNode) => void;
  /** Section ids expanded on first render. Defaults to all of them. */
  defaultExpandedIds?: string[];
  /** Maps a node kind to an icon, so the library stays icon-agnostic. */
  iconFor?: (node: CourseOutlineNode) => React.ReactNode;
  className?: string;
}

interface NodeProps extends Omit<CourseOutlineProps, 'nodes' | 'defaultExpandedIds' | 'className'> {
  node: CourseOutlineNode;
  depth: number;
  expanded: Set<string>;
  onToggle: (id: string) => void;
}

const OutlineNode: React.FC<NodeProps> = ({ node, depth, expanded, onToggle, activeId, onSelect, iconFor }) => {
  const hasChildren = Boolean(node.children?.length);
  const isOpen = expanded.has(node.id);
  const locked = node.status === 'locked';
  const done = node.status === 'completed';
  const active = node.id === activeId;

  const handleClick = () => {
    if (hasChildren) {
      onToggle(node.id);
      return;
    }
    if (!locked) onSelect?.(node);
  };

  return (
    <li>
      <button
        type="button"
        onClick={handleClick}
        disabled={locked && !hasChildren}
        aria-expanded={hasChildren ? isOpen : undefined}
        aria-current={active ? 'true' : undefined}
        style={{ paddingLeft: `${depth * 16 + 8}px` }}
        className={`w-full flex items-center gap-2 pr-2 py-2 text-left border-l-2 transition-colors ${
          active
            ? 'border-brand-2 bg-brand-2/10 text-brand-2'
            : 'border-transparent text-ink-soft hover:bg-surface-2/60 hover:text-ink'
        } ${locked && !hasChildren ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
      >
        {hasChildren ? (
          <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
        ) : (
          <span className="w-3.5 shrink-0" />
        )}

        {iconFor?.(node) ?? null}

        <span
          className={`flex-1 truncate ${
            hasChildren ? 'font-retro text-[10px] tracking-wider text-ink' : 'font-mono text-sm'
          }`}
        >
          {node.label}
        </span>

        {done && <PixelCheck className="w-4 h-4 shrink-0" />}
        {locked && <PixelLock className="w-4 h-4 shrink-0" />}
      </button>

      {hasChildren && isOpen && (
        <ul>
          {node.children!.map((child) => (
            <OutlineNode
              key={child.id}
              node={child}
              depth={depth + 1}
              expanded={expanded}
              onToggle={onToggle}
              activeId={activeId}
              onSelect={onSelect}
              iconFor={iconFor}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

function collectSectionIds(nodes: CourseOutlineNode[]): string[] {
  return nodes.flatMap((node) =>
    node.children?.length ? [node.id, ...collectSectionIds(node.children)] : [],
  );
}

/** Collapsible table of contents for a course, with per-node completion state. */
export const CourseOutline: React.FC<CourseOutlineProps> = ({
  nodes,
  activeId,
  onSelect,
  defaultExpandedIds,
  iconFor,
  className = '',
}) => {
  const [expanded, setExpanded] = useState<Set<string>>(
    () => new Set(defaultExpandedIds ?? collectSectionIds(nodes)),
  );

  const handleToggle = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <nav aria-label="course outline" className={`bg-surface/60 border-2 border-line rounded-sm py-2 ${className}`}>
      <ul>
        {nodes.map((node) => (
          <OutlineNode
            key={node.id}
            node={node}
            depth={0}
            expanded={expanded}
            onToggle={handleToggle}
            activeId={activeId}
            onSelect={onSelect}
            iconFor={iconFor}
          />
        ))}
      </ul>
    </nav>
  );
};
