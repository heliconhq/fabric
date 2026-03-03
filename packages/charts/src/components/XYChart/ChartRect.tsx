import { DataContext } from '@visx/xychart';

import { ComponentProps, useContext } from 'react';

type ChartPoint = Date | number

interface Props extends Omit<ComponentProps<'rect'>, 'x' | 'y' | 'y2' |'width'| 'height'> {
  x: ChartPoint
  y: ChartPoint
  y2: ChartPoint
}

const ChartRect = ({
  x,
  y,
  y2,
  ...props
}: Props) => {
  const {
    xScale,
    yScale,
  } = useContext(DataContext);

  if (!xScale || !yScale) {
    return null;
  }

  const x1Value = xScale(x) as number;
  const y1Value = yScale(y) as number;
  const y2Value = yScale(y2) as number;

  const height = y2Value - y1Value;

  return (
    <rect
      x={x1Value}
      y={y1Value}
      height={height}
      {...props}
    />
  );
};

export default ChartRect;
