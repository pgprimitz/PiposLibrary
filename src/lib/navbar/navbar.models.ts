import { GenericIconName } from '../icon/icon-names';

export interface GenericNavItem {
  id: string;
  label: string;
  href?: string;
  icon?: GenericIconName;
}
