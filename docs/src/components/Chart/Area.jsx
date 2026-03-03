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
import { completeData, historicalData } from './data';

const keyToLabelMap = {
  'ev-charging': 'EV Charging',
  apartment: 'Apartment Electricity',
  'heat-pump': 'Heat Pump',
  other: 'Other Load',
};

const breakpoint = historicalData[historicalData.length - 1].date;

export default () => {
  const { theme } = useTheme();

  const {
    red, gray, green, blue, orange,
  } = theme.layer.palette.definitive;

  const colorMap = {
    'ev-charging': green[700],
    apartment: orange[700],
    'heat-pump': red[700],
    other: blue[700],
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
          withLabelToggle: { type: 'boolean', default: true },
          curve: { type: 'text', default: 'cardinal' },
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
                    <AnimatedAxis
                      orientation="bottom"
                      numTicks={numTicks}
                      label={xLabel}
                      tickFormat={(date) => (formatDates ? format(new Date(date), 'MMM') : date)}
                    />

                    <AnimatedAxis
                      orientation="left"
                      label={yLabel}
                      labelOffset={30}
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
                      dataKey="ev-charging"
                      data={completeData.map((datapoint) => ({
                        ...datapoint,
                        value: datapoint.value + 900,
                      }))}
                      xAccessor={(datapoint) => datapoint.date}
                      yAccessor={(datapoint) => datapoint.value}
                      curve={selectedCurve || curveLinear}
                      fill={getIsSeriesDisabled('ev-charging') ? gray[100] : green[300]}
                      clipPath='url(#breakpoint-historical)'
                      lineProps={{
                        clipPath: 'url(#breakpoint-historical)',
                      }}
                    />
                    <AreaSeries
                      dataKey="ev-charging"
                      data={completeData.map((datapoint) => ({
                        ...datapoint,
                        value: datapoint.value + 900,
                      }))}
                      xAccessor={(datapoint) => datapoint.date}
                      yAccessor={(datapoint) => datapoint.value}
                      curve={selectedCurve || curveLinear}
                      fillOpacity={0.3}
                      clipPath='url(#breakpoint-forecast)'
                      lineProps={{
                        strokeOpacity: 0.3,
                        strokeDasharray: '8',
                        clipPath: 'url(#breakpoint-forecast)',
                      }}
                    />

                    <AreaSeries
                      dataKey="apartment"
                      data={completeData.map((datapoint) => ({
                        ...datapoint,
                        value: datapoint.value + 600,
                      }))}
                      xAccessor={(datapoint) => datapoint.date}
                      yAccessor={(datapoint) => datapoint.value}
                      curve={selectedCurve || curveLinear}
                      fill={getIsSeriesDisabled('apartment') ? gray[100] : orange[300]}
                      clipPath='url(#breakpoint-historical)'
                      lineProps={{
                        clipPath: 'url(#breakpoint-historical)',
                      }}
                    />
                    <AreaSeries
                      dataKey="apartment"
                      data={completeData.map((datapoint) => ({
                        ...datapoint,
                        value: datapoint.value + 600,
                      }))}
                      xAccessor={(datapoint) => datapoint.date}
                      yAccessor={(datapoint) => datapoint.value}
                      curve={selectedCurve || curveLinear}
                      fillOpacity={0.3}
                      clipPath='url(#breakpoint-forecast)'
                      lineProps={{
                        strokeOpacity: 0.3,
                        strokeDasharray: '8',
                        clipPath: 'url(#breakpoint-forecast)',
                      }}
                    />

                    <AreaSeries
                      dataKey="heat-pump"
                      data={historicalData.map((datapoint) => ({
                        ...datapoint,
                        value: datapoint.value + 300,
                      }))}
                      xAccessor={(datapoint) => datapoint.date}
                      yAccessor={(datapoint) => datapoint.value}
                      curve={selectedCurve || curveLinear}
                      fill={getIsSeriesDisabled('heat-pump') ? gray[100] : red[300]}
                      clipPath='url(#breakpoint-historical)'
                      lineProps={{
                        clipPath: 'url(#breakpoint-historical)',
                      }}
                    />
                    <AreaSeries
                      dataKey="heat-pump"
                      data={completeData.map((datapoint) => ({
                        ...datapoint,
                        value: datapoint.value + 300,
                      }))}
                      xAccessor={(datapoint) => datapoint.date}
                      yAccessor={(datapoint) => datapoint.value}
                      curve={selectedCurve || curveLinear}
                      fillOpacity={0.3}
                      clipPath='url(#breakpoint-forecast)'
                      lineProps={{
                        strokeOpacity: 0.3,
                        strokeDasharray: '8',
                        clipPath: 'url(#breakpoint-forecast)',
                      }}
                    />

                    <AreaSeries
                      dataKey="other"
                      data={completeData}
                      xAccessor={(datapoint) => datapoint.date}
                      yAccessor={(datapoint) => datapoint.value}
                      curve={selectedCurve || curveLinear}
                      fill={getIsSeriesDisabled('other') ? gray[100] : blue[300]}
                      clipPath='url(#breakpoint-historical)'
                      lineProps={{
                        clipPath: 'url(#breakpoint-historical)',
                      }}
                    />
                    <AreaSeries
                      dataKey="other"
                      data={completeData}
                      xAccessor={(datapoint) => datapoint.date}
                      yAccessor={(datapoint) => datapoint.value}
                      curve={selectedCurve || curveLinear}
                      fillOpacity={0.3}
                      clipPath='url(#breakpoint-forecast)'
                      lineProps={{
                        strokeOpacity: 0.3,
                        strokeDasharray: '8',
                        clipPath: 'url(#breakpoint-forecast)',
                      }}
                    />

                    <ChartBreakpoint breakpoint={breakpoint} />
                    <ChartVerticalBreakpointIndicator
                      breakpoint={breakpoint}
                      stroke={theme.layer.palette.neutrals[100]}
                    />

                    {withTooltip ? (
                      <ChartTooltip
                        snapTooltipToDatumX
                        snapTooltipToDatumY
                        showSeriesGlyphs
                        showVerticalCrosshair
                      >
                        {({
                          tooltipData,
                          colorScale,
                        }) => (
                          <div style={{ minWidth: 'fit-content' }}>
                            <TooltipMetric
                              dataKey="other"
                              label={keyToLabelMap.other}
                              color={colorScale('other')}
                              tooltipData={tooltipData}
                            />
                            <TooltipMetric
                              dataKey="ev-charging"
                              label={keyToLabelMap['ev-charging']}
                              color={colorScale('ev-charging')}
                              tooltipData={tooltipData}
                            />
                            <TooltipMetric
                              dataKey="apartment"
                              label={keyToLabelMap.apartment}
                              color={colorScale('apartment')}
                              tooltipData={tooltipData}
                            />
                            <TooltipMetric
                              dataKey="heat-pump"
                              label={keyToLabelMap['heat-pump']}
                              color={colorScale('heat-pump')}
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
