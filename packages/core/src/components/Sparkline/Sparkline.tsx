import { useMemo } from 'react';
import style from '../../utils/style';

import { useTheme } from '../../hooks';
import { AppearanceValue } from '../../types/theme';
import getStroke from './functions';

type Props = {
  values: number[];
  appearance?: AppearanceValue;
  baselineMin?: number;
};

const StyledSparkline = style('div')({
  base: {
    width: '100%',
    height: '100%',

    '> svg': {
      width: '100%',
      height: '0',
      minHeight: '100%',
    },
  },
});

export default function Sparkline({
  values = [0],
  appearance = 'primary',
  baselineMin = 0,
  ...props
}: Props) {
  const { layer } = useTheme();

  if (values.length <= 1) {
    return null;
  }

  const max = Math.max(...values);
  const min = Math.min(...values, baselineMin);
  const width = values.length - 1;
  const height = Math.abs(max - min);

  const color =
    appearance === 'neutral'
      ? layer.palette.neutrals[500]
      : layer.palette.semantic[appearance][700];

  const { stroke, fill } = useMemo(
    () => getStroke(values, height, min),
    [values, baselineMin, min]
  );

  return (
    <StyledSparkline className="fabric--sparkline" {...props}>
      <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
        <path d={fill} fill={color} fillOpacity="0.5" />
        <path
          d={stroke}
          strokeLinejoin="round"
          fill="none"
          stroke={color}
          strokeWidth={2}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </StyledSparkline>
  );
}
