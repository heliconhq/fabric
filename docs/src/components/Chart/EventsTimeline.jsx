import React from 'react';

import { RunningText, useTheme } from '@heliconhq/core';

import sample from 'lodash/sample';

import {
  Chart,
  XYChart,
  ChartTooltip,
  ChartLegend,
  Grid,
  RangeSeries,
  AnimatedAxis,
  ChartBreakpoint,
  ChartVerticalBreakpointIndicator,
} from '@heliconhq/charts';

import format from 'date-fns/format';
import Example from '../../Example';
import Args from '../../Args';
import { allEvents, energyEvents, heatEvents } from './data';

const allDates = allEvents
  .map((event) => [event.startDate, event.endDate])
  .flat();
const sorted = allDates.sort((a, b) => a.getTime() - b.getTime());
const dateRange = [sorted.at(0), sorted.at(-1)];
const breakpoint = sample(allDates);

const keyToLabelMap = {
  energyOptimizations: 'Energy Optimizations',
  heatOptimizations: 'Heat Optimizations',
};

const TooltipMetric = ({ color, tooltipData }) => {
  if (!tooltipData) {
    return null;
  }

  const { startDate, endDate } = tooltipData.nearestDatum.datum;
  const label = keyToLabelMap[tooltipData.nearestDatum.key];

  return (
    <>
      <h4
        style={{
          color,
        }}
      >
        {label}
      </h4>
      <p>{format(startDate, 'MMM do')}</p>
      <p>{format(endDate, 'MMM do')}</p>
    </>
  );
};

export default () => {
  const { theme } = useTheme();

  const definitiveColors = theme.layer.palette.definitive;
  const { green, red } = definitiveColors;

  return (
    <>
      <RunningText>
        <p>Composable Chart component for XYCharts</p>
      </RunningText>
      <Example
        wide
        previewStyle={{ display: 'flex', justifyContent: 'center' }}
        controls={{
          height: { type: 'number', default: 180 },
          marginX: { type: 'number', default: 150 },
          marginY: { type: 'number', default: 60 },
          xLabel: { type: 'text', default: 'Date' },
          yLabel: { type: 'text', default: 'Event' },
        }}
      >
        {({ height, marginX, marginY, xLabel, yLabel, ...props }) => {
          const colorMap = {
            energyOptimizations: green['700'],
            heatOptimizations: red['700'],
          };

          const xScale = { type: 'time', domain: dateRange };
          const yScale = { type: 'band' };

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
                captureEvents={false}
                height={height}
                {...props}
              >
                {({ getIsSeriesActive }) => (
                  <>
                    <Grid
                      lineStyle={{
                        strokeLinecap: 'round',
                        strokeWidth: 1,
                      }}
                      strokeDasharray="0, 4"
                      columns={false}
                    />

                    <AnimatedAxis
                      orientation="bottom"
                      numTicks={allEvents.length}
                      label={xLabel}
                      tickFormat={(date) => format(date, 'MMM do')}
                      top={height - margin.bottom + 10}
                      labelOffset={20}
                      hideAxisLine
                    />

                    <AnimatedAxis
                      orientation="left"
                      label={yLabel}
                      left={margin.left - 20}
                      labelOffset={70}
                      hideAxisLine
                    />

                    {getIsSeriesActive('energyOptimizations') && (
                      <>
                        <RangeSeries
                          dataKey="energyOptimizations"
                          data={energyEvents}
                          xAccessor={(event) => event.startDate}
                          x2Accessor={(event) => event.endDate}
                          yAccessor={(event) => event.type}
                          clipPath="url(#breakpoint-historical)"
                        />
                        <RangeSeries
                          dataKey="energyOptimizations"
                          data={energyEvents}
                          xAccessor={(event) => event.startDate}
                          x2Accessor={(event) => event.endDate}
                          yAccessor={(event) => event.type}
                          clipPath="url(#breakpoint-forecast)"
                          fillOpacity={0.3}
                        />
                      </>
                    )}

                    {getIsSeriesActive('heatOptimizations') && (
                      <>
                        <RangeSeries
                          dataKey="heatOptimizations"
                          data={heatEvents}
                          xAccessor={(event) => event.startDate}
                          x2Accessor={(event) => event.endDate}
                          yAccessor={(event) => event.type}
                          clipPath="url(#breakpoint-historical)"
                        />
                        <RangeSeries
                          dataKey="heatOptimizations"
                          data={heatEvents}
                          xAccessor={(event) => event.startDate}
                          x2Accessor={(event) => event.endDate}
                          yAccessor={(event) => event.type}
                          clipPath="url(#breakpoint-forecast)"
                          fillOpacity={0.3}
                        />
                      </>
                    )}

                    <ChartBreakpoint breakpoint={breakpoint} />
                    <ChartVerticalBreakpointIndicator breakpoint={breakpoint} />

                    <ChartTooltip snapTooltipToDatumX snapTooltipToDatumY>
                      {({ tooltipData, colorScale }) => (
                        <div style={{ minWidth: 'fit-content' }}>
                          <TooltipMetric
                            color={colorScale(tooltipData.nearestDatum.key)}
                            tooltipData={tooltipData}
                          />
                        </div>
                      )}
                    </ChartTooltip>
                  </>
                )}
              </XYChart>

              <ChartLegend shouldToggle={true} />
            </Chart>
          );
        }}
      </Example>
      <Args component={XYChart} />
    </>
  );
};
