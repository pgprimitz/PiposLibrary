import { ArcadeTone } from '../types';

export type GenericCourseTone =
  | 'celeste'
  | 'rosa'
  | 'naranja'
  | 'verde'
  | 'violeta'
  | 'dorado'
  | 'magenta';

export interface GenericCourseBadge {
  label: string;
  tone?: ArcadeTone;
  appearance?: 'solid' | 'outline';
}
