import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';

@Component({
  selector: 'generic-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './switch.html',
  styleUrl: './switch.css',
})
export class GenericSwitch {
  readonly label = input('');
  readonly disabled = input(false);
  readonly checked = model(false);

  toggle(): void {
    if (this.disabled()) return;
    this.checked.set(!this.checked());
  }
}
