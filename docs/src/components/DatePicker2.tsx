import React, { useState } from 'react';

import { RunningText } from '@heliconhq/core';

import { DatePicker } from '@heliconhq/dates';
import Example from '../docsComponents/Example/Example';

export default () => {
  const [date, setDate] = useState(new Date('1992-10-06'));

  return (
    <>
      <RunningText>
        <p>Custom implementation of the date picker</p>
      </RunningText>
      <Example
        controlProps={{
          selected: date,
          onChange: (d) => setDate(d as Date),
          excludeDates: [new Date('1992-10-13')],
          date: new Date(),
        }}
        presetProps={{ block: true }}
        Component={DatePicker}
      >
        {(Component) => (
          <div>
            {Component}
            <p style={{ marginTop: '6px' }}>Output: {String(date)}</p>
          </div>
        )}
      </Example>
    </>
  );
};
