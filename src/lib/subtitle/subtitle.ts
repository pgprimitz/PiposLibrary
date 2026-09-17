import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ArcadeTone } from '../types';

@Component({
  selector: 'generic-subtitle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './subtitle.html',
  styleUrl: './subtitle.css',
})
export class GenericSubtitle {
  readonly tone = input<ArcadeTone>('neutral');
}
