import { DataContext } from '@visx/xychart';
import { useContext } from 'react';

interface Props {
  dataKey?: string
  breakpoint: Date | number
}

const ChartBreakpoint = ({ dataKey = 'breakpoint', breakpoint }: Props) => {
  const {
    xScale,
    innerWidth = 0,
    innerHeight = 0,
    margin,
  } = useContext(DataContext);

  if (!xScale) {
    return null;
  }

  const { top = 0, left = 0, bottom = 0 } = margin || {};

  const breakpointValue = xScale(breakpoint) as number;
  const height = innerHeight + top + bottom;

  return (
    <>
      <defs>
        <clipPath id={`${dataKey}-historical`}>
          <rect
            x={0}
            y={0}
            width={breakpointValue}
            height={height}
          />
        </clipPath>
        <clipPath id={`${dataKey}-forecast`}>
          <rect
            x={breakpointValue}
            y={0}
            width={innerWidth - breakpointValue + left}
            height={height}
          />
        </clipPath>
      </defs>
    </>
  );
};

export default ChartBreakpoint;
