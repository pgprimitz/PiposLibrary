import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { GenericIcon } from '../icon/icon';
import { GenericAchievementBadge } from './badge-showcase.models';

@Component({
  selector: 'generic-badge-showcase',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GenericIcon],
  templateUrl: './badge-showcase.html',
  styleUrl: './badge-showcase.css',
})
export class GenericBadgeShowcase {
  readonly badges = input<GenericAchievementBadge[]>([]);
  readonly badgeClick = output<GenericAchievementBadge>();

  ariaLabelFor(badge: GenericAchievementBadge): string {
    return `Insignia: ${badge.label} (${badge.earned ? 'obtenida' : 'no obtenida'})`;
  }

  onClick(badge: GenericAchievementBadge): void {
    this.badgeClick.emit(badge);
  }
}
