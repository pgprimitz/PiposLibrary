import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ArcadeTone } from '../types';
import { GenericProgress } from '../progress/progress';

@Component({
  selector: 'generic-xp-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GenericProgress],
  templateUrl: './xp-bar.html',
  styleUrl: './xp-bar.css',
})
export class GenericXpBar {
  readonly currentXp = input.required<number>();
  readonly levelXp = input.required<number>();
  readonly level = input<number | null>(null);
  readonly tone = input<Exclude<ArcadeTone, 'neutral'>>('gold');
  readonly caption = input('XP');

  readonly ariaLabel = computed(() => `Experiencia: ${this.currentXp()} de ${this.levelXp()}`);
}
