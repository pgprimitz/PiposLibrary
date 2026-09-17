import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ArcadeSize } from '../types';

@Component({
  selector: 'generic-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './spinner.html',
  styleUrl: './spinner.css',
})
export class GenericSpinner {
  readonly size = input<ArcadeSize>('md');
  readonly label = input('Cargando');
}
