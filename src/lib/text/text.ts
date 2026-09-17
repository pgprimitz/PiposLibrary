import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ArcadeSize } from '../types';

@Component({
  selector: 'generic-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './text.html',
  styleUrl: './text.css',
})
export class GenericText {
  readonly muted = input(false);
  readonly size = input<ArcadeSize>('md');
}
