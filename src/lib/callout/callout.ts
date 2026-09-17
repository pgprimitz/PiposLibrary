import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ArcadeTone } from '../types';
import { GenericIcon } from '../icon/icon';
import { GenericIconName } from '../icon/icon-names';

export type GenericCalloutTone = Exclude<ArcadeTone, 'magenta'>;

const DEFAULT_TITLES: Record<GenericCalloutTone, string> = {
  cyan: 'Nota',
  gold: 'Advertencia',
  green: 'Éxito',
  red: 'Error',
  neutral: 'Info',
};

const TONE_ICONS: Record<GenericCalloutTone, GenericIconName> = {
  cyan: 'scroll',
  gold: 'fire',
  green: 'check',
  red: 'lock',
  neutral: 'chat',
};

@Component({
  selector: 'generic-callout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GenericIcon],
  templateUrl: './callout.html',
  styleUrl: './callout.css',
})
export class GenericCallout {
  readonly tone = input<GenericCalloutTone>('cyan');
  readonly title = input<string | undefined>(undefined);

  readonly resolvedTitle = computed(() => this.title() ?? DEFAULT_TITLES[this.tone()]);
  readonly icon = computed(() => TONE_ICONS[this.tone()]);
}
