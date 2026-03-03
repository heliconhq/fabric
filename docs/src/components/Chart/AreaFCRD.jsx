import React from 'react';

import { RunningText, useTheme } from '@heliconhq/core';

import {
  Chart,
  XYChart,
  ChartTooltip,
  ChartLegend,
  Grid,
  AnimatedAxis,
  AreaSeries,
  ChartBreakpoint,
  ChartVerticalBreakpointIndicator,
} from '@heliconhq/charts';

import { format } from 'date-fns';

import { curveCardinal, curveLinear, curveStep } from '@visx/curve';
import Example from '../../Example';
import Args from '../../Args';
import TooltipMetric from './TooltipMetric';
import { completeData, forecastData } from './data';

const keyToLabelMap = {
  'fcrd-up': 'FCR-D Up',
  'fcrd-up-forecast': 'FCR-D Up Forecast',
  'fcrd-down': 'FCR-D Down',
  'fcrd-down-forecast': 'FCR-D Down Forecast',
};

const breakpoint = forecastData[0].date;

export default () => {
  const { theme } = useTheme();

  const { blue, gray, red } = theme.layer.palette.definitive;

  const colorMap = {
    'fcrd-up': blue[700],
    'fcrd-down': red[700],
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
          withGrid: { type: 'boolean', default: false },
          withTooltip: { type: 'boolean', default: true },
          formatDates: { type: 'boolean', default: true },
          withLabelToggle: { type: 'boolean', default: true },
          curve: { type: 'text', default: 'step' },
          height: { type: 'number', default: 300 },
          marginX: { type: 'number', default: 100 },
          marginY: { type: 'number', default: 70 },
          numTicks: { type: 'number', default: 12 },
          xLabel: { type: 'text', default: 'Date' },
          yLabel: { type: 'text', default: 'kW' },
        }}
      >
        {({
          marginX,
          marginY,
          numTicks,
          xLabel,
          withGrid,
          withTooltip,
          withLabelToggle,
          formatDates,
          curve,
          ...props
        }) => {
          const xScale = { type: 'band', paddingInner: 1 };
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
                {({ getIsSeriesDisabled }) => (
                  <>
                    <ChartBreakpoint breakpoint={breakpoint} />
                    <ChartVerticalBreakpointIndicator breakpoint={breakpoint}/>

                    <AnimatedAxis
                      orientation="bottom"
                      numTicks={numTicks}
                      label={xLabel}
                      tickFormat={(date) => (formatDates ? format(new Date(date), 'MMM') : date)}
                      hideAxisLine
                      top={250}
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

                    <AreaSeries
                      dataKey="fcrd-up"
                      data={completeData}
                      xAccessor={(datapoint) => datapoint.date}
                      yAccessor={(datapoint) => datapoint.value}
                      curve={selectedCurve || curveLinear}
                      fill={getIsSeriesDisabled('fcrd-up') ? gray[100] : blue[300]}
                      clipPath='url(#breakpoint-historical)'
                      lineProps={{
                        clipPath: 'url(#breakpoint-historical)',
                      }}
                    />

                    <AreaSeries
                      dataKey="fcrd-up"
                      data={completeData}
                      xAccessor={(datapoint) => datapoint.date}
                      yAccessor={(datapoint) => datapoint.value}
                      curve={selectedCurve || curveLinear}
                      fillOpacity={0.3}
                      clipPath='url(#breakpoint-forecast)'
                      lineProps={{
                        strokeOpacity: 0.3,
                        clipPath: 'url(#breakpoint-forecast)',
                      }}
                    />

                    <AreaSeries
                      dataKey="fcrd-down"
                      data={completeData.map((datapoint) => ({
                        ...datapoint,
                        value: (datapoint.value - (datapoint.value * 0.3)) * -1,
                      }))}
                      xAccessor={(datapoint) => datapoint.date}
                      yAccessor={(datapoint) => datapoint.value}
                      curve={selectedCurve || curveLinear}
                      fill={getIsSeriesDisabled('fcrd-down') ? gray[100] : red[300]}
                      clipPath='url(#breakpoint-historical)'
                      lineProps={{
                        clipPath: 'url(#breakpoint-historical)',
                      }}
                    />

                    <AreaSeries
                      dataKey="fcrd-down"
                      data={completeData.map((datapoint) => ({
                        ...datapoint,
                        value: (datapoint.value - (datapoint.value * 0.3)) * -1,
                      }))}
                      xAccessor={(datapoint) => datapoint.date}
                      yAccessor={(datapoint) => datapoint.value}
                      curve={selectedCurve || curveLinear}
                      fillOpacity={0.3}
                      clipPath='url(#breakpoint-forecast)'
                      lineProps={{
                        strokeOpacity: 0.3,
                        clipPath: 'url(#breakpoint-forecast)',
                      }}
                    />

                    {withTooltip ? (
                      <ChartTooltip
                        snapTooltipToDatumX
                        snapTooltipToDatumY
                        showSeriesGlyphs
                      >
                        {({
                          tooltipData,
                          colorScale,
                        }) => (
                          <div style={{ minWidth: 'fit-content' }}>
                            <TooltipMetric
                              dataKey="fcrd-up"
                              label={keyToLabelMap['fcrd-up']}
                              color={colorScale('fcrd-up')}
                              tooltipData={tooltipData}
                            />
                            <TooltipMetric
                              dataKey="fcrd-down"
                              label={keyToLabelMap['fcrd-down']}
                              color={colorScale('fcrd-down')}
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
