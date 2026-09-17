import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { GenericBadge } from '../badge/badge';
import { ArcadeTone } from '../types';
import { ActivityKind } from '../domain-types';

const TONE_BY_KIND: Record<ActivityKind, ArcadeTone> = {
  reading: 'neutral',
  video: 'cyan',
  quiz: 'gold',
  assignment: 'magenta',
  discussion: 'green',
};

const LABEL_BY_KIND: Record<ActivityKind, string> = {
  reading: 'Lectura',
  video: 'Video',
  quiz: 'Quiz',
  assignment: 'Tarea',
  discussion: 'Discusión',
};

@Component({
  selector: 'generic-activity-kind-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './activity-kind-badge.html',
  styleUrl: './activity-kind-badge.css',
  imports: [GenericBadge],
})
export class GenericActivityKindBadge {
  readonly kind = input.required<ActivityKind>();
  readonly size = input<'sm' | 'md'>('md');

  readonly tone = computed(() => TONE_BY_KIND[this.kind()]);
  readonly label = computed(() => LABEL_BY_KIND[this.kind()]);
}
