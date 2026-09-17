import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';

let uniqueId = 0;

@Component({
  selector: 'generic-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tooltip.html',
  styleUrl: './tooltip.css',
  host: {
    '[attr.aria-describedby]': 'visible() ? tooltipId : null',
    '(mouseenter)': 'hovering.set(true)',
    '(mouseleave)': 'hovering.set(false)',
    '(focusin)': 'focused.set(true)',
    '(focusout)': 'focused.set(false)',
  },
})
export class GenericTooltip {
  readonly text = input.required<string>();
  readonly position = input<'top' | 'bottom' | 'left' | 'right'>('top');
  readonly disabled = input(false);

  /** Hover and focus are tracked independently so the tooltip doesn't hide
   * on mouseleave while the trigger still has keyboard focus (or vice versa). */
  readonly hovering = signal(false);
  readonly focused = signal(false);

  readonly visible = computed(() => !this.disabled() && (this.hovering() || this.focused()));

  readonly tooltipId = `generic-tooltip-${++uniqueId}`;
}
