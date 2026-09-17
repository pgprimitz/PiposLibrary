import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ArcadeTone } from '../types';

@Component({
  selector: 'generic-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class GenericCard {
  readonly tone = input<ArcadeTone | 'default'>('cyan');
  readonly padding = input<'none' | 'sm' | 'md'>('md');
}
