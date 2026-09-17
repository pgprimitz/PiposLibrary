import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { GenericRadioOption } from './radio-group.models';

@Component({
  selector: 'generic-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './radio-group.html',
  styleUrl: './radio-group.css',
})
export class GenericRadioGroup {
  readonly name = input.required<string>();
  readonly options = input.required<GenericRadioOption[]>();
  readonly label = input('');
  readonly error = input('');
  readonly value = model<string | undefined>();

  optionId(option: GenericRadioOption): string {
    return `${this.name()}-${option.value}`;
  }

  select(option: GenericRadioOption): void {
    if (option.disabled) return;
    this.value.set(option.value);
  }
}
