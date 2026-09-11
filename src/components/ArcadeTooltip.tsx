import React, { useCallback, useId, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export interface ArcadeTooltipProps {
  content: React.ReactNode;
  side?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactElement;
  className?: string;
}

/** Gap in pixels between the trigger and the tooltip. */
const OFFSET = 8;

/**
 * Wraps a single interactive child and shows a tooltip on hover and on focus.
 * Focus support is what keeps it usable by keyboard, so it is not optional.
 *
 * The bubble renders through a portal, like ArcadeModal and ArcadeDrawer: an
 * absolutely positioned sibling gets clipped by any ancestor with
 * `overflow-hidden`, which is exactly what a card with a flush header is.
 * Because it leaves the flow, the position is measured from the trigger rect
 * on every open rather than expressed in utility classes.
 */
export const ArcadeTooltip: React.FC<ArcadeTooltipProps> = ({
  content,
  side = 'top',
  children,
  className = '',
}) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLSpanElement>(null);
  const bubbleRef = useRef<HTMLSpanElement>(null);
  const id = useId();

  const place = useCallback(() => {
    const trigger = triggerRef.current;
    const bubble = bubbleRef.current;
    if (!trigger || !bubble) return;

    const anchor = trigger.getBoundingClientRect();
    const { width, height } = bubble.getBoundingClientRect();

    const placements = {
      top: { top: anchor.top - height - OFFSET, left: anchor.left + anchor.width / 2 - width / 2 },
      bottom: { top: anchor.bottom + OFFSET, left: anchor.left + anchor.width / 2 - width / 2 },
      left: { top: anchor.top + anchor.height / 2 - height / 2, left: anchor.left - width - OFFSET },
      right: { top: anchor.top + anchor.height / 2 - height / 2, left: anchor.right + OFFSET },
    };

    const placed = placements[side];

    // Keep the bubble inside the viewport — a tooltip nobody can read is worse
    // than one on the wrong side.
    setPosition({
      top: Math.max(OFFSET, Math.min(placed.top, window.innerHeight - height - OFFSET)),
      left: Math.max(OFFSET, Math.min(placed.left, window.innerWidth - width - OFFSET)),
    });
  }, [side]);

  useLayoutEffect(() => {
    if (!visible) return;
    place();

    window.addEventListener('scroll', place, true);
    window.addEventListener('resize', place);
    return () => {
      window.removeEventListener('scroll', place, true);
      window.removeEventListener('resize', place);
    };
  }, [visible, place]);

  return (
    <span
      ref={triggerRef}
      className={`relative inline-flex ${className}`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {React.cloneElement(children, { 'aria-describedby': id } as Partial<unknown>)}
      {visible &&
        typeof document !== 'undefined' &&
        createPortal(
          <span
            ref={bubbleRef}
            id={id}
            role="tooltip"
            style={{ top: position.top, left: position.left }}
            className="fixed z-[110] px-2 py-1 bg-surface border-2 border-brand-2 rounded-sm font-mono text-xs text-ink whitespace-nowrap pointer-events-none"
          >
            {content}
          </span>,
          document.body,
        )}
    </span>
  );
};
