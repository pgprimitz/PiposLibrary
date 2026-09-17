import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type GenericCalloutVariant = 'note' | 'warning' | 'tip' | 'citation';

const DEFAULT_TITLES: Record<GenericCalloutVariant, string> = {
  note: 'Nota',
  warning: 'Advertencia',
  tip: 'Tip',
  citation: 'Cita',
};

@Component({
  selector: 'generic-callout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './callout.html',
  styleUrl: './callout.css',
})
export class GenericCallout {
  readonly variant = input<GenericCalloutVariant>('note');
  readonly title = input<string | undefined>(undefined);
  readonly source = input<string | undefined>(undefined);

  readonly resolvedTitle = computed(() => this.title() ?? DEFAULT_TITLES[this.variant()]);
}
