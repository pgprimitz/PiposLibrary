import { GenericIconName } from '../icon/icon-names';

export interface GenericAchievementBadge {
  id: string;
  label: string;
  iconName: GenericIconName;
  earned: boolean;
  description?: string;
}
