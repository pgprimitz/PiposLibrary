import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ArcadeSize, ArcadeTone } from '../types';
import { GenericIcon } from '../icon/icon';

@Component({
  selector: 'generic-progress',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GenericIcon],
  templateUrl: './progress.html',
  styleUrl: './progress.css',
  host: {
    '[class.hearts-mode]': 'hearts()',
  },
})
export class GenericProgress {
  readonly value = input(0);
  readonly max = input(100);
  readonly tone = input<Exclude<ArcadeTone, 'neutral'>>('cyan');
  readonly size = input<ArcadeSize>('md');
  readonly label = input('');
  readonly showValue = input(false);
  readonly showPercent = input(false);
  readonly segmented = input(false);
  readonly hearts = input(false);

  readonly percent = computed(() => {
    const max = this.max() > 0 ? this.max() : 1;
    const clamped = Math.min(Math.max(this.value(), 0), max);
    return (clamped / max) * 100;
  });

  readonly segments = Array.from({ length: 20 }, (_, i) => i);

  readonly heartSlots = computed(() => {
    const max = Math.max(0, Math.round(this.max()));
    const filled = Math.min(Math.max(Math.round(this.value()), 0), max);
    return Array.from({ length: max }, (_, i) => i < filled);
  });

  readonly heartPx = computed(() => {
    if (this.size() === 'sm') return 16;
    if (this.size() === 'lg') return 28;
    return 22;
  });

  readonly roundedPercent = computed(() => Math.round(this.percent()));
}
