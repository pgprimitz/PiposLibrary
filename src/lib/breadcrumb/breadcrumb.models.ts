import { GenericIconName } from '../icon/icon-names';

export interface GenericBreadcrumbItem {
  id: string;
  label: string;
  href?: string;
  icon?: GenericIconName;
}
