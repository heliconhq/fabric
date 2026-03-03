import React, { useState } from 'react';
import { PeriodPicker, RunningText } from '@heliconhq/core';

import {
  addDays,
  formatISO,
  startOfToday,
  endOfToday,
  subDays,
} from 'date-fns';
import Example from '../docsComponents/Example/Example';

export default () => {
  const [periodRange, setPeriodRange] = useState({
    startDate: startOfToday(),
    endDate: endOfToday(),
  });

  return (
    <>
      <RunningText>
        <p>Segmented period picker</p>
      </RunningText>
      <Example
        presetProps={{
          range: periodRange,
          defaultPeriod: 'day',
          maxDate: addDays(new Date(), 1),
          minDate: subDays(new Date(), 7),
          onChange: setPeriodRange,
        }}
        overrideControls={{ periods: 'overrideStringExtended' }}
        Component={PeriodPicker}
      >
        {(Component) => (
          <div>
            {Component}
            <div style={{ marginTop: '48px', textAlign: 'center' }}>
              <p style={{ marginBottom: '6px' }}>
                Start: {formatISO(periodRange.startDate)}
              </p>
              <p style={{ marginBottom: '6px' }}>
                End: {formatISO(periodRange.endDate)}
              </p>
            </div>
          </div>
        )}
      </Example>
    </>
  );
};
