import { ReactNode } from 'react';

import { useTheme } from '../../hooks';

import StyledWrapper from './DonutPartials/Wrapper';
import StyledContent from './DonutPartials/Content';
import { SeriesData } from './types';
import CalculateCircle from './DonutPartials/functions';

type Props = {
  children?: ReactNode;
  series: SeriesData[];
  strokeWidth?: number;
};

export default function Donut({
  children,
  series = [
    { id: 'danger', appearance: 'positive', value: 80 },
    { id: 'warning', appearance: 'warning', value: 75 },
    { id: 'success', appearance: 'negative', value: 100 },
  ],
  strokeWidth = 16,
  ...props
}: Props) {
  const { layer } = useTheme();
  const r = 50 - strokeWidth / 2;
  const { circles } = CalculateCircle(series, r, layer);

  return (
    <StyledWrapper className="fabric--donut" {...props}>
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        {circles.map(
          ({
            id,
            rotation,
            strokeColor,
            strokeLinecap,
            strokeDasharray,
            strokeDashoffset,
          }) => (
            <circle
              key={id}
              cx="50"
              cy="50"
              r={r}
              fill="transparent"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              strokeLinecap={strokeLinecap}
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              transform={`rotate(${rotation} 50 50)`}
            />
          )
        )}
      </svg>
      {children && (
        <StyledContent className="fabric--donut-children">
          {children}
        </StyledContent>
      )}
    </StyledWrapper>
  );
}
