import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ArcadeTone } from '../types';
import { GenericIconName } from '../icon/icon-names';
import { GenericIcon } from '../icon/icon';

@Component({
  selector: 'generic-stat',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GenericIcon],
  templateUrl: './stat.html',
  styleUrl: './stat.css',
})
export class GenericStat {
  readonly label = input('');
  readonly value = input<string | number>('');
  readonly hint = input('');
  readonly tone = input<ArcadeTone>('cyan');
  readonly icon = input<GenericIconName | undefined>(undefined);
}
