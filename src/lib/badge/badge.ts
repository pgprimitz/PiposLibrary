import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ArcadeTone } from '../types';

@Component({
  selector: 'generic-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './badge.html',
  styleUrl: './badge.css',
})
export class GenericBadge {
  readonly tone = input<ArcadeTone>('cyan');
  readonly appearance = input<'solid' | 'outline'>('outline');
  readonly size = input<'sm' | 'md'>('md');
}
