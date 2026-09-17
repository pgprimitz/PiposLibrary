import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ArcadeTone } from '../types';
import { GenericBadge } from '../badge/badge';
import { GenericProgress } from '../progress/progress';

@Component({
  selector: 'generic-lesson-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GenericBadge, GenericProgress],
  templateUrl: './lesson-header.html',
  styleUrl: './lesson-header.css',
})
export class GenericLessonHeader {
  readonly title = input.required<string>();
  readonly subtitle = input('');
  readonly progress = input(0);
  readonly tone = input<ArcadeTone>('cyan');
  readonly badgeLabel = input('');

  /** generic-progress doesn't support the 'neutral' tone; fall back to 'cyan'. */
  readonly progressTone = computed(() => {
    const tone = this.tone();
    return tone === 'neutral' ? 'cyan' : tone;
  });
}
