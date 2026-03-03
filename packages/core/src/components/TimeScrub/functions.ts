import type { incrementUnitType } from './types';

export const toRepr = (unit: incrementUnitType, value: number) => {
  if (unit === 'm') {
    const h = Math.floor(value / 60);
    const m = value - h * 60;
    return `${String(h % 24).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
  }

  return 'Unknown';
};

export const timeValues = (
  steps: number,
  increment: number,
  incrementUnit: incrementUnitType
) =>
  Array(steps)
    .fill(null)
    .map((_, i) => {
      const incrementValue = i * increment;
      return {
        incrementValue,
        marker: incrementUnit === 'm' && incrementValue % 60 === 0,
        repr: toRepr(incrementUnit, incrementValue),
      };
    });
