import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ArcadeSize, ArcadeTone } from '../types';

@Component({
  selector: 'generic-level-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './level-badge.html',
  styleUrl: './level-badge.css',
  host: {
    '[attr.aria-label]': 'ariaLabel()',
    '[class]': 'hostClass()',
  },
})
export class GenericLevelBadge {
  readonly level = input.required<number>();
  readonly size = input<ArcadeSize>('md');
  readonly tone = input<ArcadeTone>('gold');

  readonly ariaLabel = computed(() => `Nivel ${this.level()}`);
  readonly hostClass = computed(() => `tone-${this.tone()} size-${this.size()}`);
}
