import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ArcadeSize } from '../types';
import { GenericIcon } from '../icon/icon';

@Component({
  selector: 'generic-coin-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GenericIcon],
  templateUrl: './coin-counter.html',
  styleUrl: './coin-counter.css',
  host: {
    '[attr.role]': "'status'",
    '[attr.aria-label]': 'ariaLabel()',
  },
})
export class GenericCoinCounter {
  readonly count = input.required<number>();
  readonly size = input<ArcadeSize>('md');

  readonly ariaLabel = computed(() => `Monedas: ${this.count()}`);

  readonly iconPx = computed(() => {
    if (this.size() === 'sm') return 16;
    if (this.size() === 'lg') return 28;
    return 22;
  });
}
