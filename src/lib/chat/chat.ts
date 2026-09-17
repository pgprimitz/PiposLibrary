import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ArcadeTone } from '../types';
import { GenericChatMessage } from './chat.models';

@Component({
  selector: 'generic-chat',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class GenericChat {
  readonly name = input('');
  readonly messages = input<GenericChatMessage[]>([]);
  readonly tone = input<ArcadeTone>('cyan');
}
