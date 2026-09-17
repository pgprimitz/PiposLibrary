import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'generic-math-block',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './math-block.html',
  styleUrl: './math-block.css',
})
export class GenericMathBlock {
  readonly expression = input.required<string>();
  readonly display = input<'inline' | 'block'>('block');
}
