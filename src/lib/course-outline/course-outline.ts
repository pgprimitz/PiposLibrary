import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { GenericIcon } from '../icon/icon';
import { GenericOutlineLesson, GenericOutlineModule } from './course-outline.models';

@Component({
  selector: 'generic-course-outline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GenericIcon],
  templateUrl: './course-outline.html',
  styleUrl: './course-outline.css',
})
export class GenericCourseOutline {
  readonly modules = input<GenericOutlineModule[]>([]);
  readonly activeLessonId = input<string | null>(null);
  readonly lessonClick = output<{ module: GenericOutlineModule; lesson: GenericOutlineLesson }>();

  /** Modules start expanded by default; collapsing is tracked as an exception set. */
  private readonly collapsedIds = signal<Set<string>>(new Set());

  isExpanded(module: GenericOutlineModule): boolean {
    return !this.collapsedIds().has(module.id);
  }

  toggleModule(module: GenericOutlineModule): void {
    const next = new Set(this.collapsedIds());
    if (next.has(module.id)) {
      next.delete(module.id);
    } else {
      next.add(module.id);
    }
    this.collapsedIds.set(next);
  }

  onLessonClick(module: GenericOutlineModule, lesson: GenericOutlineLesson): void {
    if (lesson.locked) return;
    this.lessonClick.emit({ module, lesson });
  }
}
