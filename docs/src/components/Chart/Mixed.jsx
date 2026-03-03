import React from 'react';

import { RunningText, useTheme } from '@heliconhq/core';

import {
  Chart,
  XYChart,
  ChartTooltip,
  ChartLegend,
  ChartBreakpoint,
  Grid,
  AreaSeries,
  LineSeries,
  BarSeries,
  BarStack,
  BarGroup,
  AnimatedAxis,
} from '@heliconhq/charts';

import { format } from 'date-fns';

import { curveNatural } from '@visx/curve';
import { LinearGradient } from '@visx/gradient';
import Example from '../../Example';
import Args from '../../Args';
import TooltipMetric from './TooltipMetric';

const historicChartData = [
  {
    date: '2023-02-11',
    value: 469,
  },
  {
    date: '2023-01-09',
    value: 500,
  },
  {
    date: '2022-12-28',
    value: 410,
  },
  {
    date: '2022-10-28',
    value: 844,
  },
];

const forecastedChartData = [
  {
    date: '2024-04-20',
    value: 900,
  },
  {
    date: '2024-08-17',
    value: 280,
  },
  {
    date: '2025-03-5',
    value: 740,
  },
];

const chartData = [...historicChartData, ...forecastedChartData];

const keyToLabelMap = {
  consumption: 'Consumption',
  solar: 'Solar Production',
  wind: 'Wind Production',
  'solar-forecast': 'Forecast Solar Production',
  'wind-forecast': 'Forecast Wind Production',
};

export default () => {
  const { theme } = useTheme();

  const definitiveColors = theme.layer.palette.definitive;
  const {
    gray,
    red,
    yellow,
    green,
    orange,
  } = definitiveColors;

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
          withArea: { type: 'boolean', default: true },
          withBars: { type: 'boolean', default: true },
          withForecast: { type: 'boolean', default: true },
          withLabelToggle: { type: 'boolean', default: true },
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
          withArea,
          withBars,
          withForecast,
          withLabelToggle,
          formatDates,
          ...props
        }) => {
          const shouldShowForecastBars = withBars && withForecast;

          const colorMap = {
            ...(withArea ? { consumption: red['700'] } : {}),
            ...(withBars ? {
              solar: orange['700'],
              wind: green['700'],
            } : {}),
            ...(shouldShowForecastBars ? {
              'solar-forecast': yellow['400'],
              'wind-forecast': green['400'],
            } : {}),
          };

          const xScale = { type: 'band', paddingInner: 0.5 };
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
                {({ getIsSeriesDisabled, getIsSeriesActive }) => (
                  <>
                    <ChartBreakpoint breakpoint={forecastedChartData[0].date} />

                    {getIsSeriesActive('consumption') && (
                      <LinearGradient
                        id="area-gradient"
                        from={getIsSeriesDisabled('consumption') ? gray[300] : red[700]}
                        to={getIsSeriesDisabled('consumption') ? gray[100] : red[400]}
                      />
                    )}

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

                    {withArea && withForecast && getIsSeriesActive('consumption') ? (
                      <>
                        <AreaSeries
                          dataKey="consumption"
                          strokeDasharray="4, 8"
                          data={chartData}
                          xAccessor={(datapoint) => datapoint.date}
                          yAccessor={(datapoint) => datapoint.value}
                          clipPath='url(#breakpoint-historical)'
                          fill="url(#area-gradient)"
                          curve={curveNatural}
                        />

                        <LineSeries
                          dataKey="consumption"
                          strokeDasharray="4, 8"
                          stroke='#fff'
                          data={chartData}
                          xAccessor={(d) => d.date}
                          yAccessor={(d) => d.value}
                          clipPath='url(#breakpoint-forecast)'
                          curve={curveNatural}
                        />
                      </>
                    ) : null}

                    {withArea && !withForecast && getIsSeriesActive('consumption') ? (
                      <AreaSeries
                        dataKey="consumption"
                        data={chartData}
                        xAccessor={(d) => d.date}
                        yAccessor={(d) => d.value}
                        fill="url(#area-gradient)"
                        curve={curveNatural}
                      />
                    ) : null}

                    {withBars && withForecast ? (
                      <BarStack>
                        {getIsSeriesActive('solar') ? (
                          <BarSeries
                            dataKey="solar"
                            data={historicChartData.map((datapoint) => (
                              {
                                ...datapoint,
                                value: datapoint.value - 100,
                              }
                            ))}
                            xAccessor={(datapoint) => datapoint.date}
                            yAccessor={(datapoint) => datapoint.value}
                          />
                        ) : null}

                        {getIsSeriesActive('wind') ? (
                          <BarSeries
                            dataKey="wind"
                            data={historicChartData.map((datapoint) => (
                              {
                                ...datapoint,
                                value: datapoint.value - 150,
                              }
                            ))}
                            xAccessor={(datapoint) => datapoint.date}
                            yAccessor={(datapoint) => datapoint.value}
                          />
                        ) : null}

                      </BarStack>
                    ) : null}

                    {shouldShowForecastBars && (
                      <BarGroup>
                        {getIsSeriesActive('solar-forecast') ? (
                          <BarSeries
                            dataKey="solar-forecast"
                            data={forecastedChartData.map((datapoint) => (
                              {
                                ...datapoint,
                                value: datapoint.value + 35,
                              }
                            ))}
                            xAccessor={(datapoint) => datapoint.date}
                            yAccessor={(datapoint) => datapoint.value}
                          />
                        ) : null}

                        {getIsSeriesActive('wind-forecast') ? (
                          <BarSeries
                            dataKey="wind-forecast"
                            data={forecastedChartData.map((datapoint) => (
                              {
                                ...datapoint,
                                value: datapoint.value + 40,
                              }
                            ))}
                            xAccessor={(datapoint) => datapoint.date}
                            yAccessor={(datapoint) => datapoint.value}
                          />
                        ) : null}
                      </BarGroup>
                    )}

                    {withBars && !withForecast ? (
                      <BarStack>
                        {getIsSeriesActive('solar') ? (
                          <BarSeries
                            dataKey="solar"
                            data={chartData.map((datapoint) => (
                              {
                                ...datapoint,
                                value: datapoint.value - 10,
                              }
                            ))}
                            xAccessor={(datapoint) => datapoint.date}
                            yAccessor={(datapoint) => datapoint.value}
                          />
                        ) : null}

                        {getIsSeriesActive('wind') ? (
                          <BarSeries
                            dataKey="wind"
                            data={chartData.map((datapoint) => (
                              {
                                ...datapoint,
                                value: datapoint.value - 20,
                              }
                            ))}
                            xAccessor={(datapoint) => datapoint.date}
                            yAccessor={(datapoint) => datapoint.value}
                          />
                        ) : null}
                      </BarStack>
                    ) : null}

                    {withTooltip ? (
                      <ChartTooltip>
                        {({
                          tooltipData,
                          colorScale,
                        }) => (
                          <div style={{ minWidth: 'fit-content' }}>
                            <TooltipMetric
                              dataKey="solar"
                              label="Solar Production"
                              color={colorScale('solar')}
                              tooltipData={tooltipData}
                            />

                            <TooltipMetric
                              dataKey="wind"
                              label="Wind Production"
                              color={colorScale('wind')}
                              tooltipData={tooltipData}
                            />

                            <TooltipMetric
                              dataKey="solar-forecast"
                              label="Forecast Solar Production"
                              color={colorScale('solar-forecast')}
                              tooltipData={tooltipData}
                            />

                            <TooltipMetric
                              dataKey="wind-forecast"
                              label="Forecast Wind Production"
                              color={colorScale('wind-forecast')}
                              tooltipData={tooltipData}
                            />

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
