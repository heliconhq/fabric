import { Point } from './types';

export const percentage = (
  val: number,
  values: Point[],
  defaultMax?: number
) => {
  const max =
    typeof defaultMax === 'undefined'
      ? Math.max(...values.map(({ value }) => value))
      : defaultMax;

  return Math.min(100, (val / max) * 100);
};
