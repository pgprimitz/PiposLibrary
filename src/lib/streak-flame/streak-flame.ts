import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { GenericIcon } from '../icon/icon';

@Component({
  selector: 'generic-streak-flame',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GenericIcon],
  templateUrl: './streak-flame.html',
  styleUrl: './streak-flame.css',
  host: {
    '[attr.role]': "'status'",
    '[attr.aria-label]': 'ariaLabel()',
    '[class.inactive]': '!active()',
  },
})
export class GenericStreakFlame {
  readonly days = input.required<number>();
  readonly active = input(true);

  readonly ariaLabel = computed(() =>
    this.active() ? `Racha de ${this.days()} días` : 'Racha perdida',
  );
}
