import { DataContext } from '@visx/xychart';
import { Line } from '@visx/shape';

import { ComponentProps, useContext } from 'react';
import { useTheme } from '@heliconhq/core';

interface Props extends Omit<ComponentProps<typeof Line>, 'from' | 'to'> {
  dataKey?: string
  breakpoint: Date | number
}

const ChartVerticalBreakpointIndicator = ({ breakpoint, ...props }: Props) => {
  const {
    xScale,
    innerHeight = 0,
    margin,
  } = useContext(DataContext);

  const { theme } = useTheme();

  if (!xScale) {
    return null;
  }

  const { top = 0, bottom = 0 } = margin || {};

  const breakpointValue = xScale(breakpoint) as number;
  const height = innerHeight + top + bottom;

  return (
    <Line
      from={{ x: breakpointValue, y: height - bottom }}
      to={{
        x: breakpointValue, y: top,
      }}
      stroke={theme.layer.palette.neutrals[500]}
      strokeWidth={1}
      pointerEvents="none"
      strokeDasharray="4,2"
      {...props}
    />
  );
};

export default ChartVerticalBreakpointIndicator;
