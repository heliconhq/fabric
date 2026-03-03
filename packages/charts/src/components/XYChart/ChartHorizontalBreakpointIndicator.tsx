import { DataContext } from '@visx/xychart';
import { Line } from '@visx/shape';

import { ComponentProps, useContext } from 'react';
import { useTheme } from '@heliconhq/core';

interface Props extends Omit<ComponentProps<typeof Line>, 'from' | 'to'> {
  dataKey?: string
  breakpoint: Date | number
}

const ChartHorizontalBreakpointIndicator = ({ breakpoint, ...props }: Props) => {
  const {
    yScale,
    innerWidth = 0,
    margin,
  } = useContext(DataContext);

  const { theme } = useTheme();

  if (!yScale) {
    return null;
  }

  const { left = 0 } = margin || {};

  const breakpointValue = yScale(breakpoint) as number;

  return (
    <Line
      from={{ x: left, y: breakpointValue }}
      to={{
        x: innerWidth + left, y: breakpointValue,
      }}
      stroke={theme.layer.palette.neutrals[500]}
      strokeWidth={1}
      pointerEvents="none"
      strokeDasharray="4,2"
      {...props}
    />
  );
};

export default ChartHorizontalBreakpointIndicator;
