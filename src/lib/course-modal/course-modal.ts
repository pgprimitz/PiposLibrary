import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';
import { GenericBadge } from '../badge/badge';
import { GenericIcon } from '../icon/icon';
import { GenericProgress } from '../progress/progress';
import { GenericCourseBadge, GenericCourseTone } from './course-modal.models';

@Component({
  selector: 'generic-course-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GenericBadge, GenericIcon, GenericProgress],
  templateUrl: './course-modal.html',
  styleUrl: './course-modal.css',
  host: {
    '(document:keydown.escape)': 'close()',
  },
})
export class GenericCourseModal {
  readonly open = model(false);
  readonly tone = input<GenericCourseTone>('celeste');
  readonly kicker = input('');
  readonly title = input('');
  readonly subtitle = input('');
  readonly lives = input(0);
  readonly maxLives = input(3);
  readonly coins = input<number | null>(null);
  readonly badges = input<GenericCourseBadge[]>([]);
  readonly progressLabel = input('Progreso del curso');
  readonly progressValue = input(0);
  readonly progressMax = input(100);
  readonly actionLabel = input('Ver curso');
  readonly dismissable = input(true);
  readonly closeLabel = input('Cerrar');

  readonly actionClick = output<void>();
  readonly closed = output<void>();

  close(): void {
    if (!this.dismissable()) return;
    this.open.set(false);
    this.closed.emit();
  }

  onBackdrop(): void {
    this.close();
  }

  onAction(): void {
    this.actionClick.emit();
  }
}
