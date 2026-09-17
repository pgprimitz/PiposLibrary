import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';

export interface GenericSelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

@Component({
  selector: 'generic-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './select.html',
  styleUrl: './select.css',
})
export class GenericSelect {
  readonly label = input('');
  readonly placeholder = input('');
  readonly error = input('');
  readonly disabled = input(false);
  readonly options = input<GenericSelectOption[]>([]);
  readonly value = model('');
}
