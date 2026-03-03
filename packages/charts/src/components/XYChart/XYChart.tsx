import { ReactNode } from 'react';
import {
  XYChart as BaseXYChart,
  DataProvider,
  Margin,
  buildChartTheme,
  darkTheme,
  lightTheme,
} from '@visx/xychart';

import { ParentSize } from '@visx/responsive';
import { ScaleConfig } from '@visx/scale';
import { AxisScaleOutput } from '@visx/axis';

import { useTheme } from '@heliconhq/core';

import useChart from '../Chart/useChart';

interface BodyRenderParams {
  getIsSeriesActive: (labelKey: string) => boolean;
  getIsSeriesDisabled: (labelKey: string) => boolean;
  getSeriesColor: (labelKey: string) => string;
  margin: Margin;
  width: number;
  innerWidth: number;
}

type Props = {
  xScale: ScaleConfig<AxisScaleOutput>;
  yScale: ScaleConfig<AxisScaleOutput>;
  children: ReactNode | ((bodyRenderParams: BodyRenderParams) => ReactNode);
};

const defaultMargin = {
  top: 50,
  right: 70,
  bottom: 50,
  left: 70,
};

const XYChart = ({ xScale, yScale, children, ...props }: Props) => {
  const { theme, layer } = useTheme();
  const {
    getIsSeriesActive,
    getIsSeriesDisabled,
    getSeriesColor,
    availableColors,
    margin = defaultMargin,
  } = useChart();

  const isDarkMode = theme.name.includes('dark');

  const baseChartTheme = isDarkMode ? darkTheme : lightTheme;

  const chartTheme = buildChartTheme({
    ...baseChartTheme,
    backgroundColor: layer.palette.contextual.background,
    gridColor: layer.palette.contextual.border,
    gridColorDark: layer.palette.contextual.border,
    tickLength: 1,
    ...(availableColors.length ? { colors: availableColors } : {}),
  });

  return (
    <DataProvider xScale={xScale} yScale={yScale} theme={chartTheme}>
      <ParentSize>
        {({ width }) => (
          <BaseXYChart width={width} margin={margin} {...props}>
            {typeof children === 'function'
              ? children({
                  getIsSeriesActive,
                  getIsSeriesDisabled,
                  getSeriesColor,
                  width,
                  margin,
                  innerWidth: width - margin.left - margin.right,
                })
              : children}
          </BaseXYChart>
        )}
      </ParentSize>
    </DataProvider>
  );
};

export default XYChart;
