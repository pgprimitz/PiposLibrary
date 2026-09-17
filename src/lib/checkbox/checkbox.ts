import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';

@Component({
  selector: 'generic-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.css',
})
export class GenericCheckbox {
  readonly label = input('');
  readonly description = input('');
  readonly error = input('');
  readonly disabled = input(false);
  readonly checked = model(false);

  toggle(): void {
    if (this.disabled()) return;
    this.checked.set(!this.checked());
  }
}
