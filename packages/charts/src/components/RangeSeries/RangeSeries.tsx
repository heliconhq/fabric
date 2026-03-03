import { SVGAttributes, useContext, useMemo } from 'react';

import { AxisScale, DataContext, TooltipContext } from '@visx/xychart';
import { ScaleInput } from '@visx/scale';
import withRegisteredData from '../../HOC/withRegisteredData';
import getScaledValueFactory from '../../utils/getScaledValueFactory';

type Props<
  XScale extends AxisScale,
  YScale extends AxisScale,
  Datum extends object
> = {
  dataKey: string;
  data: Datum[];
  xAccessor: (d: Datum) => ScaleInput<XScale>;
  yAccessor: (d: Datum) => ScaleInput<YScale>;
  x2Accessor: (d: Datum) => ScaleInput<XScale>;
  size?: number;
  clipPath?: SVGAttributes<SVGRectElement>['clipPath'];
  fillOpacity?: SVGAttributes<SVGRectElement>['fillOpacity'];
};

const RangeSeries = <
  XScale extends AxisScale,
  YScale extends AxisScale,
  Datum extends object
>({
  dataKey,
  data,
  xAccessor,
  x2Accessor,
  yAccessor,
  size = 8,
  clipPath,
  fillOpacity,
}: Props<XScale, YScale, Datum>) => {
  const { yScale, xScale, colorScale } = useContext(DataContext);
  const tooltipContext = useContext(TooltipContext);

  if (!xScale || !yScale || !colorScale || !tooltipContext) {
    return null;
  }

  const getScaledX = useMemo(
    () => getScaledValueFactory(xScale, xAccessor),
    [xScale, xAccessor]
  );
  const getScaledX2 = useMemo(
    () => getScaledValueFactory(xScale, x2Accessor),
    [xScale, x2Accessor]
  );
  const getScaledY = useMemo(
    () => getScaledValueFactory(yScale, yAccessor),
    [yScale, yAccessor]
  );

  const { showTooltip, hideTooltip } = tooltipContext;

  const getRangeWidth = (datum: Datum) => {
    const startDatePosition = getScaledX(datum);
    const endDatePosition = getScaledX2(datum);

    const width = endDatePosition - startDatePosition;

    return width;
  };

  return (
    <>
      {data.map((datapoint, index) => {
        const scaleLeft = getScaledX(datapoint);
        const scaleTop = getScaledY(datapoint);
        const color = colorScale(dataKey);

        const sizeFactor = size / 2;

        return (
          <rect
            key={`glyph-${index}`}
            x={scaleLeft || 0}
            y={scaleTop - sizeFactor}
            rx={sizeFactor}
            ry={sizeFactor}
            fill={color}
            height={size}
            width={getRangeWidth(datapoint)}
            onMouseLeave={() => {
              hideTooltip();
            }}
            onMouseMove={() => {
              showTooltip({
                index,
                key: dataKey,
                datum: datapoint,
              });
            }}
            clipPath={clipPath}
            fillOpacity={fillOpacity}
          />
        );
      })}
    </>
  );
};

export default withRegisteredData(RangeSeries);
