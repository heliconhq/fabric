import React from 'react';

import { RunningText, useTheme } from '@heliconhq/core';

import {
  Chart,
  XYChart,
  ChartTooltip,
  ChartLegend,
  Grid,
  BarSeries,
  ChartHorizontalBreakpointIndicator,
} from '@heliconhq/charts';

import Example from '../../Example';
import Args from '../../Args';
import TooltipMetric from './TooltipMetric';
import { completeData } from './data';

const keyToLabelMap = {
  up: 'Up',
  down: 'Down',
};

export default () => {
  const { theme } = useTheme();

  const { cyan } = theme.layer.palette.definitive;

  const colorMap = {
    up: cyan[700],
    down: cyan[1200],
  };

  return (
    <>
      <RunningText>
        <p>Composable Chart component for XYCharts</p>
      </RunningText>
      <Example
        wide
        previewStyle={{ display: 'flex', justifyContent: 'center' }}
        controls={{
          withGrid: { type: 'boolean', default: true },
          withTooltip: { type: 'boolean', default: true },
          height: { type: 'number', default: 300 },
          marginX: { type: 'number', default: 100 },
          marginY: { type: 'number', default: 50 },
          numTicks: { type: 'number', default: 5 },
        }}
      >
        {({
          marginX,
          marginY,
          numTicks,
          withGrid,
          withTooltip,
          withLabelToggle,
          ...props
        }) => {
          const xScale = { type: 'band', paddingInner: 0.2 };
          const yScale = { type: 'linear' };
          const margin = {
            top: marginY,
            right: marginX,
            bottom: marginY,
            left: marginX,
          };

          return (
            <Chart
              colorMap={colorMap}
              mapKeyToLabel={(key) => keyToLabelMap[key]}
              margin={margin}
            >
              <XYChart
                xScale={xScale}
                yScale={yScale}
                {...props}
              >
                <>
                  {withGrid ? (
                    <Grid
                      numTicks={numTicks}
                      lineStyle={{
                        strokeLinecap: 'round',
                        strokeWidth: 1,
                      }}
                      strokeDasharray="0, 4"
                    />
                  ) : null}

                  <BarSeries
                    dataKey="up"
                    data={completeData}
                    xAccessor={(datapoint) => datapoint.date}
                    yAccessor={(datapoint) => datapoint.value}
                  />

                  <BarSeries
                    dataKey="down"
                    data={completeData.map((datapoint) => ({
                      ...datapoint,
                      value: (datapoint.value - (datapoint.value * 0.3)) * -1,
                    }))}
                    xAccessor={(datapoint) => datapoint.date}
                    yAccessor={(datapoint) => datapoint.value}
                  />

                  <ChartHorizontalBreakpointIndicator breakpoint={0} strokeWidth={15} stroke="white" strokeDasharray="0" />
                  <ChartHorizontalBreakpointIndicator breakpoint={0} strokeDasharray="0" />

                  {withTooltip ? (
                    <ChartTooltip snapTooltipToDatumX snapTooltipToDatumY>
                      {({
                        tooltipData,
                        colorScale,
                      }) => (
                        <div style={{ minWidth: 'fit-content' }}>
                          <TooltipMetric
                            dataKey="up"
                            label={keyToLabelMap.up}
                            color={colorScale('up')}
                            tooltipData={tooltipData}
                          />
                          <TooltipMetric
                            dataKey="down"
                            label={keyToLabelMap.down}
                            color={colorScale('down')}
                            tooltipData={tooltipData}
                          />
                        </div>
                      )}
                    </ChartTooltip>
                  ) : null}
                </>
              </XYChart>

              <ChartLegend shouldToggle={!!withLabelToggle} />
            </Chart>
          );
        }}
      </Example>
      <Args component={XYChart} />
    </>
  );
};
