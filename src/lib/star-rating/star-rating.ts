import { ChangeDetectionStrategy, Component, computed, input, model, signal } from '@angular/core';
import { ArcadeSize } from '../types';
import { GenericIcon } from '../icon/icon';

@Component({
  selector: 'generic-star-rating',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GenericIcon],
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.css',
  host: {
    '[attr.role]': "'slider'",
    '[attr.tabindex]': 'readonly() ? null : 0',
    '[attr.aria-valuemin]': '0',
    '[attr.aria-valuemax]': 'max()',
    '[attr.aria-valuenow]': 'value()',
    '(keydown)': 'onKeydown($event)',
    '(mouseleave)': 'onLeave()',
  },
})
export class GenericStarRating {
  readonly value = model(0);
  readonly max = input(5);
  readonly readonly = input(false);
  readonly size = input<ArcadeSize>('md');

  protected readonly hovered = signal<number | null>(null);

  protected readonly stars = computed(() => Array.from({ length: this.max() }, (_, i) => i + 1));

  protected readonly starPx = computed(() => {
    if (this.size() === 'sm') return 16;
    if (this.size() === 'lg') return 28;
    return 22;
  });

  protected readonly previewValue = computed(() => this.hovered() ?? this.value());

  onHover(star: number): void {
    if (this.readonly()) return;
    this.hovered.set(star);
  }

  onLeave(): void {
    this.hovered.set(null);
  }

  onClick(star: number): void {
    if (this.readonly()) return;
    this.value.set(star);
  }

  onKeydown(event: KeyboardEvent): void {
    if (this.readonly()) return;
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;

    event.preventDefault();
    const delta = event.key === 'ArrowRight' ? 1 : -1;
    const next = Math.min(Math.max(this.value() + delta, 0), this.max());
    this.value.set(next);
  }
}
