import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GenericIconName } from './icon-names';

@Component({
  selector: 'generic-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './icon.html',
  styleUrl: './icon.css',
})
export class GenericIcon {
  readonly name = input.required<GenericIconName>();
  readonly size = input(20);
  readonly label = input('');
}
