import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { GenericBadge } from '../badge/badge';
import { ArcadeTone } from '../types';
import { ActivityStatus } from '../domain-types';

const TONE_BY_STATUS: Record<ActivityStatus, ArcadeTone> = {
  'not-started': 'neutral',
  'in-progress': 'cyan',
  completed: 'green',
  overdue: 'red',
};

const LABEL_BY_STATUS: Record<ActivityStatus, string> = {
  'not-started': 'No iniciado',
  'in-progress': 'En progreso',
  completed: 'Completado',
  overdue: 'Atrasado',
};

@Component({
  selector: 'generic-activity-status-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './activity-status-badge.html',
  styleUrl: './activity-status-badge.css',
  imports: [GenericBadge],
})
export class GenericActivityStatusBadge {
  readonly status = input.required<ActivityStatus>();
  readonly size = input<'sm' | 'md'>('md');

  readonly tone = computed(() => TONE_BY_STATUS[this.status()]);
  readonly label = computed(() => LABEL_BY_STATUS[this.status()]);
}
