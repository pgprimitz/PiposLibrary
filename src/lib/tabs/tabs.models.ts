import { GenericIconName } from '../icon/icon-names';

export interface GenericTabItem {
  id: string;
  label: string;
  disabled?: boolean;
  icon?: GenericIconName;
}
