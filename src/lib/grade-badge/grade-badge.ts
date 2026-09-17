import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { GenericBadge } from '../badge/badge';
import { ArcadeTone } from '../types';

@Component({
  selector: 'generic-grade-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './grade-badge.html',
  styleUrl: './grade-badge.css',
  imports: [GenericBadge],
})
export class GenericGradeBadge {
  readonly score = input.required<number>();
  readonly passingThreshold = input(60);
  readonly size = input<'sm' | 'md'>('md');

  readonly tone = computed<ArcadeTone>(() => {
    const score = this.score();
    const threshold = this.passingThreshold();
    if (score >= threshold) return 'green';
    if (score >= threshold * 0.7) return 'gold';
    return 'red';
  });
}
