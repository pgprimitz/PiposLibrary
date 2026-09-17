import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

export interface GenericStep {
  id: string;
  label: string;
  locked?: boolean;
}

@Component({
  selector: 'generic-stepper',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stepper.html',
  styleUrl: './stepper.css',
})
export class GenericStepper {
  readonly steps = input<GenericStep[]>([]);
  readonly currentIndex = input(0);
  readonly orientation = input<'horizontal' | 'vertical'>('horizontal');
  readonly stepClick = output<{ step: GenericStep; index: number }>();

  stateOf(index: number): 'done' | 'active' | 'todo' {
    if (index < this.currentIndex()) return 'done';
    if (index === this.currentIndex()) return 'active';
    return 'todo';
  }

  onClick(step: GenericStep, index: number): void {
    if (step.locked) return;
    this.stepClick.emit({ step, index });
  }
}
