import React from 'react';
import { TextBlock, useTheme } from '@heliconhq/core';
import { Chart, PieChart, ChartLegend } from '@heliconhq/charts';

import Example from '../../Example';
import Args from '../../Args';

const pieData = [
  {
    label: 'apartment-electricity',
    value: 135,
  },
  {
    label: 'heat-pumps',
    value: 87,
  },
  {
    label: 'batteries',
    value: 42,
  },
  {
    label: 'ev-chargers',
    value: 38,
  },
  {
    label: 'other',
    value: 35,
  },
];

const pieData3 = [
  {
    label: 'heat-pumps',
    value: 1,
  },

  {
    label: 'ev-chargers',
    value: 88,
  },
];

const keyToLabelMap = {
  'apartment-electricity': 'Apartment Electricity',
  'heat-pumps': 'Heat Pumps',
  'ev-chargers': 'EV Chargers',
  batteries: 'Batteries',
  bat: 'Batteriesa',
  other: 'Other Load',
};

export default () => {
  const { theme } = useTheme();

  const { blue, red, yellow, green, orange } = theme.layer.palette.definitive;

  const colorMap = {
    'apartment-electricity': blue[700],
    'heat-pumps': red[700],
    'ev-chargers': green[700],
    batteries: yellow[700],
    bat: yellow[700],
    other: orange[700],
  };

  return (
    <>
      <TextBlock>
        Pie chart supporting multiple labels with custom colors
      </TextBlock>
      <Example
        wide
        controls={{
          withLabelToggle: { type: 'boolean', default: true },
          withSliceLabels: { type: 'boolean', default: false },
        }}
      >
        {({ withLabelToggle, withSliceLabels }) => (
          <Chart
            colorMap={colorMap}
            mapKeyToLabel={(key) => keyToLabelMap[key]}
          >
            <PieChart
              data={pieData}
              height={300}
              withSliceLabels={withSliceLabels}
            />
            <PieChart
              data={pieData3}
              height={300}
              withSliceLabels={withSliceLabels}
            />
            <ChartLegend shouldToggle={withLabelToggle} />
          </Chart>
        )}
      </Example>
      <Args component={PieChart} />
    </>
  );
};
