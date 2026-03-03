import React from 'react';

import { RunningText, useTheme } from '@heliconhq/core';

import {
  Chart,
  XYChart,
  ChartTooltip,
  ChartLegend,
  Grid,
  BarSeries,
  AnimatedAxis,
} from '@heliconhq/charts';

import { format } from 'date-fns';

import Example from '../../Example';
import Args from '../../Args';
import TooltipMetric from './TooltipMetric';
import { historicalData } from './data';

const keyToLabelMap = {
  consumption: 'Consumption',
};

export default () => {
  const { theme } = useTheme();

  const { red } = theme.layer.palette.definitive;

  const colorMap = {
    consumption: red[700],
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
          formatDates: { type: 'boolean', default: true },
          height: { type: 'number', default: 300 },
          marginX: { type: 'number', default: 100 },
          marginY: { type: 'number', default: 50 },
          numTicks: { type: 'number', default: 5 },
          xLabel: { type: 'text', default: 'Date' },
          yLabel: { type: 'text', default: 'kW' },
        }}
      >
        {({
          marginX,
          marginY,
          numTicks,
          xLabel,
          yLabel,
          withGrid,
          withTooltip,
          formatDates,
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
                  <AnimatedAxis
                    orientation="bottom"
                    numTicks={numTicks}
                    label={xLabel}
                    tickFormat={(date) => (formatDates ? format(new Date(date), 'MMM') : date)}
                  />

                  <AnimatedAxis
                    orientation="left"
                    label={yLabel}
                  />

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
                    dataKey="consumption"
                    data={historicalData}
                    xAccessor={(datapoint) => datapoint.date}
                    yAccessor={(datapoint) => datapoint.value}
                  />

                  {withTooltip ? (
                    <ChartTooltip snapTooltipToDatumX snapTooltipToDatumY>
                      {({
                        tooltipData,
                        colorScale,
                      }) => (
                        <div style={{ minWidth: 'fit-content' }}>
                          <TooltipMetric
                            dataKey="consumption"
                            label="Consumption"
                            color={colorScale('consumption')}
                            tooltipData={tooltipData}
                          />
                        </div>
                      )}
                    </ChartTooltip>
                  ) : null}
                </>
              </XYChart>

              <ChartLegend />
            </Chart>
          );
        }}
      </Example>
      <Args component={XYChart} />
    </>
  );
};
