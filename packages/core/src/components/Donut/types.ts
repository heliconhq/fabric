import { AppearanceValue } from '../../types/theme';

export type CircleData = {
  id: string;
  rotation: number;
  strokeColor?: string;
  strokeLinecap?: 'round' | 'butt';
  strokeDasharray?: number;
  strokeDashoffset?: number;
};
export type SeriesData = {
  id: string;
  appearance: AppearanceValue;
  color?: string;
  value: number;
  rounded?: boolean;
  circles?: Array<CircleData>;
  filled?: number;
};
