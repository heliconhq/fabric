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
} from '@heliconhq/charts';

import { format } from 'date-fns';

import { curveCardinal, curveLinear, curveStep } from '@visx/curve';
import Example from '../../Example';
import Args from '../../Args';
import TooltipMetric from './TooltipMetric';
import { historicalData } from './data';

const keyToLabelMap = {
  avg: 'Avg',
  min: 'Min',
  max: 'Max',
};

export default () => {
  const { theme } = useTheme();

  const { red, green, blue } = theme.layer.palette.definitive;

  const colorMap = {
    max: green[700],
    avg: blue[700],
    min: red[700],
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

                  <LineSeries
                    dataKey="max"
                    data={historicalData.map((datapoint) => ({
                      ...datapoint,
                      value: datapoint.value + 100,
                    }))}
                    xAccessor={(datapoint) => datapoint.date}
                    yAccessor={(datapoint) => datapoint.value}
                    curve={selectedCurve || curveLinear}
                    strokeDasharray="8"
                  />
                  <LineSeries
                    dataKey="avg"
                    data={historicalData}
                    xAccessor={(datapoint) => datapoint.date}
                    yAccessor={(datapoint) => datapoint.value}
                    curve={selectedCurve || curveLinear}
                  />
                  <LineSeries
                    dataKey="min"
                    data={historicalData.map((datapoint) => ({
                      ...datapoint,
                      value: datapoint.value - 100,
                    }))}
                    xAccessor={(datapoint) => datapoint.date}
                    yAccessor={(datapoint) => datapoint.value}
                    curve={selectedCurve || curveLinear}
                    strokeDasharray="8"
                  />

                  {withTooltip ? (
                    <ChartTooltip snapTooltipToDatumX snapTooltipToDatumY showSeriesGlyphs>
                      {({
                        tooltipData,
                        colorScale,
                      }) => (
                        <div style={{ minWidth: 'fit-content' }}>
                          <TooltipMetric
                            dataKey="max"
                            label={keyToLabelMap.max}
                            color={colorScale('max')}
                            tooltipData={tooltipData}
                          />
                          <TooltipMetric
                            dataKey="avg"
                            label={keyToLabelMap.avg}
                            color={colorScale('avg')}
                            tooltipData={tooltipData}
                          />
                          <TooltipMetric
                            dataKey="min"
                            label={keyToLabelMap.min}
                            color={colorScale('min')}
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
