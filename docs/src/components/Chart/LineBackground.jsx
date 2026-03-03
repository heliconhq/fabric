import React from 'react';

import { RunningText, useTheme } from '@heliconhq/core';

import {
  Chart,
  XYChart,
  ChartTooltip,
  ChartLegend,
  Grid,
  AnimatedAxis,
  LineSeries,
  ChartRect,
} from '@heliconhq/charts';

import { format } from 'date-fns';

import { curveCardinal, curveLinear, curveStep } from '@visx/curve';
import { first } from 'lodash';
import Example from '../../Example';
import Args from '../../Args';
import TooltipMetric from './TooltipMetric';
import { historicalData } from './data';

const keyToLabelMap = {
  load: 'Load',
};

export default () => {
  const { theme } = useTheme();

  const { blue } = theme.layer.palette.definitive;

  const colorMap = {
    load: blue[700],
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
          curve: { type: 'text', default: 'linear' },
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
          withLabelToggle,
          formatDates,
          curve,
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

          const selectedCurve = {
            linear: curveLinear,
            cardinal: curveCardinal,
            step: curveStep,
          }[curve];

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
                {({ innerWidth }) => (
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

                    <ChartRect
                      x={first(historicalData).date}
                      y={800}
                      y2={600}
                      width={innerWidth}
                      fill={theme.layer.palette.definitive.yellow[200]}
                    />

                    <ChartRect
                      x={first(historicalData).date}
                      y={300}
                      y2={0}
                      width={innerWidth}
                      fill={theme.layer.palette.definitive.yellow[200]}
                    />

                    {withGrid ? (
                      <Grid
                        numTicks={10}
                        lineStyle={{
                          strokeLinecap: 'round',
                          strokeWidth: 1,
                          stroke: theme.layer.palette.neutrals[700],
                        }}
                        columns={false}
                      />
                    ) : null}

                    <LineSeries
                      dataKey="load"
                      data={historicalData}
                      xAccessor={(datapoint) => datapoint.date}
                      yAccessor={(datapoint) => datapoint.value}
                      curve={selectedCurve || curveLinear}
                    />

                    {withTooltip ? (
                      <ChartTooltip snapTooltipToDatumX snapTooltipToDatumY showSeriesGlyphs>
                        {({
                          tooltipData,
                          colorScale,
                        }) => (
                          <div style={{ minWidth: 'fit-content' }}>
                            <TooltipMetric
                              dataKey="load"
                              label={keyToLabelMap.load}
                              color={colorScale('load')}
                              tooltipData={tooltipData}
                            />
                          </div>
                        )}
                      </ChartTooltip>
                    ) : null}
                  </>
                )}
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
