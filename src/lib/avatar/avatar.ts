import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ArcadeTone } from '../types';

export type GenericAvatarRing = ArcadeTone | 'none';

@Component({
  selector: 'generic-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './avatar.html',
  styleUrl: './avatar.css',
})
export class GenericAvatar {
  readonly src = input<string | undefined>(undefined);
  readonly name = input.required<string>();
  readonly size = input<'xs' | 'sm' | 'md' | 'lg' | 'xl'>('md');
  readonly level = input<number | undefined>(undefined);
  readonly ring = input<GenericAvatarRing>('cyan');

  readonly initials = computed(() => this.getInitials(this.name()));

  private getInitials(name: string): string {
    return name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((word) => word.charAt(0).toUpperCase())
      .join('');
  }
}
