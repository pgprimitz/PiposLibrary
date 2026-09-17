import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { GenericRubricCriterion } from './rubric-panel.models';

@Component({
  selector: 'generic-rubric-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './rubric-panel.html',
  styleUrl: './rubric-panel.css',
})
export class GenericRubricPanel {
  readonly criteria = input<GenericRubricCriterion[]>([]);
  readonly readonly = input(true);
  readonly levelSelect = output<{ criterion: GenericRubricCriterion; levelIndex: number }>();

  /** Public: sum of each criterion's currently-selected level points (0 if none selected). */
  readonly totalPoints = computed(() =>
    this.criteria().reduce((sum, criterion) => {
      const index = criterion.selectedLevelIndex;
      if (index == null || index < 0) return sum;
      const level = criterion.levels[index];
      return sum + (level ? level.points : 0);
    }, 0),
  );

  isSelected(criterion: GenericRubricCriterion, levelIndex: number): boolean {
    return criterion.selectedLevelIndex === levelIndex;
  }

  onLevelClick(criterion: GenericRubricCriterion, levelIndex: number): void {
    if (this.readonly()) return;
    this.levelSelect.emit({ criterion, levelIndex });
  }
}
