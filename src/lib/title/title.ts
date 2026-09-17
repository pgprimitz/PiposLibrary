import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ArcadeTone } from '../types';

@Component({
  selector: 'generic-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './title.html',
  styleUrl: './title.css',
})
export class GenericTitle {
  readonly level = input<1 | 2 | 3>(1);
  readonly tone = input<ArcadeTone>('cyan');
}
