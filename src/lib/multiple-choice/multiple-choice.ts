import { ChangeDetectionStrategy, Component, computed, input, model } from '@angular/core';
import { GenericChoiceOption } from './multiple-choice.models';

let uid = 0;

@Component({
  selector: 'generic-multiple-choice',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './multiple-choice.html',
  styleUrl: './multiple-choice.css',
})
export class GenericMultipleChoice {
  readonly question = input.required<string>();
  readonly options = input<GenericChoiceOption[]>([]);
  readonly value = model<string | null>(null);
  readonly disabled = input(false);
  readonly showResult = input(false);
  readonly correctOptionId = input<string | null>(null);

  protected readonly name = `generic-multiple-choice-${++uid}`;
  protected readonly questionId = `${this.name}-question`;

  protected readonly resultTone = computed(() => {
    const map: Record<string, 'correct' | 'incorrect' | null> = {};
    if (!this.showResult()) return map;
    const selected = this.value();
    const correct = this.correctOptionId();
    for (const option of this.options()) {
      if (option.id === correct) {
        map[option.id] = 'correct';
      } else if (option.id === selected) {
        map[option.id] = 'incorrect';
      } else {
        map[option.id] = null;
      }
    }
    return map;
  });

  optionId(option: GenericChoiceOption): string {
    return `${this.name}-${option.id}`;
  }

  isDisabled(option: GenericChoiceOption): boolean {
    return this.disabled() || !!option.disabled;
  }

  select(option: GenericChoiceOption): void {
    if (this.isDisabled(option)) return;
    this.value.set(option.id);
  }
}
