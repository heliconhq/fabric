import { LayerValue } from '../../../types/theme';
import { CircleData, SeriesData } from '../types';

export default function CalculateCircle(
  series: SeriesData[],
  r: number,
  layer: LayerValue
) {
  const total = series.reduce((acc, { value }) => acc + value, 0);
  const circumference = 2 * Math.PI * r;

  return series.reduce<{
    circles: Array<CircleData>;
    filled: number;
  }>(
    (
      { circles, filled },
      { id, appearance, color, value, rounded = false }
    ) => {
      const fill = value / total;

      let strokeColor = color;
      if (!color) {
        strokeColor =
          appearance === 'neutral'
            ? layer.palette.neutrals[200]
            : layer.palette.semantic[appearance][700];
      }

      return {
        filled: filled + fill,
        circles: [
          {
            id,
            rotation: filled * 360 - 90,
            strokeColor,
            strokeLinecap: rounded ? 'round' : 'butt',
            strokeDasharray: circumference,
            strokeDashoffset: circumference - circumference * fill,
          },
          ...circles,
        ],
      };
    },
    { circles: [], filled: 0 }
  );
}
