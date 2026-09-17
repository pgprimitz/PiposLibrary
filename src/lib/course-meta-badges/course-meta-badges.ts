import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { GenericBadge } from '../badge/badge';
import { GenericCourseStatusBadge } from '../course-status-badge/course-status-badge';
import { ArcadeTone } from '../types';
import { CourseStatus, Difficulty } from '../domain-types';

const TONE_BY_DIFFICULTY: Record<Difficulty, ArcadeTone> = {
  beginner: 'green',
  intermediate: 'gold',
  advanced: 'red',
};

const LABEL_BY_DIFFICULTY: Record<Difficulty, string> = {
  beginner: 'Principiante',
  intermediate: 'Intermedio',
  advanced: 'Avanzado',
};

@Component({
  selector: 'generic-course-meta-badges',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './course-meta-badges.html',
  styleUrl: './course-meta-badges.css',
  imports: [GenericBadge, GenericCourseStatusBadge],
})
export class GenericCourseMetaBadges {
  readonly difficulty = input<Difficulty | null>(null);
  readonly durationLabel = input('');
  readonly status = input<CourseStatus | null>(null);
  readonly size = input<'sm' | 'md'>('md');

  readonly difficultyTone = computed(() => {
    const difficulty = this.difficulty();
    return difficulty ? TONE_BY_DIFFICULTY[difficulty] : undefined;
  });

  readonly difficultyLabel = computed(() => {
    const difficulty = this.difficulty();
    return difficulty ? LABEL_BY_DIFFICULTY[difficulty] : '';
  });
}
