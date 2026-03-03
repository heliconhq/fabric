import { PropsWithChildren } from 'react';

import { ParentSize } from '@visx/responsive';
import { Margin } from '@visx/xychart';
import { Pie } from '@visx/shape';
import { Group } from '@visx/group';

import useChart from '../Chart/useChart';

type PieDatapoint = {
  label: string;
  value: number;
};
interface Props {
  data: PieDatapoint[];
  height?: number;
  withSliceLabels?: boolean;
}

const defaultMargin: Margin = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 20,
};

const PieChart = ({
  data,
  height: customHeight,
  withSliceLabels,
  ...rest
}: PropsWithChildren<Props>) => {
  const {
    margin = defaultMargin,
    getSeriesColor,
    getIsSeriesActive,
    mapKeyToLabel,
  } = useChart();
  return (
    <ParentSize>
      {({ width, height: parentHeight }) => {
        const height = customHeight || parentHeight;

        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        const radius = Math.min(innerWidth, innerHeight) / 2;

        const centerY = innerHeight / 2;
        const centerX = innerWidth / 2;

        const top = centerY + margin.top;
        const left = centerX + margin.left;

        const availableData = data.filter(({ label }) =>
          getIsSeriesActive(label)
        );

        return (
          <svg width={width} height={height}>
            <Group top={top} left={left}>
              <Pie
                data={availableData}
                pieValue={(datapoint) => datapoint.value}
                outerRadius={radius}
                {...rest}
              >
                {(pie) =>
                  pie.arcs.map((arc, index) => {
                    const { label } = arc.data;
                    const [centroidX, centroidY] = pie.path.centroid(arc);
                    const hasSpaceForLabel =
                      arc.endAngle - arc.startAngle >= 0.1;

                    const shouldRenderSlideLabels =
                      withSliceLabels && hasSpaceForLabel;
                    const arcPath = pie.path(arc) || undefined;
                    const arcFill = getSeriesColor(label);
                    return (
                      <Group key={`arc-${label}-${index}`}>
                        <path d={arcPath} fill={arcFill} />
                        {shouldRenderSlideLabels && (
                          <text
                            x={centroidX}
                            y={centroidY}
                            dy=".33em"
                            fill="#ffffff"
                            fontSize={22}
                            textAnchor="middle"
                            pointerEvents="none"
                          >
                            {mapKeyToLabel
                              ? mapKeyToLabel(arc.data.label)
                              : arc.data.label}
                          </text>
                        )}
                      </Group>
                    );
                  })
                }
              </Pie>
            </Group>
          </svg>
        );
      }}
    </ParentSize>
  );
};

export default PieChart;
