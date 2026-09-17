import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

let uniqueId = 0;

@Component({
  selector: 'generic-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tooltip.html',
  styleUrl: './tooltip.css',
  host: {
    '[attr.aria-describedby]': 'visible() && !disabled() ? tooltipId : null',
    '(mouseenter)': 'show()',
    '(mouseleave)': 'hide()',
    '(focusin)': 'show()',
    '(focusout)': 'hide()',
  },
})
export class GenericTooltip {
  readonly text = input.required<string>();
  readonly position = input<'top' | 'bottom' | 'left' | 'right'>('top');
  readonly disabled = input(false);

  readonly visible = signal(false);

  readonly tooltipId = `generic-tooltip-${++uniqueId}`;

  show(): void {
    if (this.disabled()) return;
    this.visible.set(true);
  }

  hide(): void {
    this.visible.set(false);
  }
}
