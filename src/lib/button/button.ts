import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ArcadeSize } from '../types';

export type ButtonVariant = 'cyan' | 'magenta' | 'gold' | 'green' | 'ghost';

@Component({
  selector: 'generic-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class GenericButton {
  readonly variant = input<ButtonVariant>('magenta');
  readonly size = input<ArcadeSize>('md');
  readonly type = input<'button' | 'submit'>('button');
  readonly disabled = input(false);
}
