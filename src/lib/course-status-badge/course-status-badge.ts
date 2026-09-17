import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { GenericBadge } from '../badge/badge';
import { ArcadeTone } from '../types';
import { CourseStatus } from '../domain-types';

const TONE_BY_STATUS: Record<CourseStatus, ArcadeTone> = {
  draft: 'neutral',
  published: 'green',
  archived: 'red',
};

const LABEL_BY_STATUS: Record<CourseStatus, string> = {
  draft: 'Borrador',
  published: 'Publicado',
  archived: 'Archivado',
};

@Component({
  selector: 'generic-course-status-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './course-status-badge.html',
  styleUrl: './course-status-badge.css',
  imports: [GenericBadge],
})
export class GenericCourseStatusBadge {
  readonly status = input.required<CourseStatus>();
  readonly size = input<'sm' | 'md'>('md');

  readonly tone = computed(() => TONE_BY_STATUS[this.status()]);
  readonly label = computed(() => LABEL_BY_STATUS[this.status()]);
}
