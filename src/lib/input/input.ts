import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';

@Component({
  selector: 'generic-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class GenericInput {
  readonly label = input('');
  readonly type = input('text');
  readonly placeholder = input('');
  readonly error = input('');
  readonly disabled = input(false);
  readonly value = model('');
}
