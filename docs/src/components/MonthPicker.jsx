import React, { useState } from 'react';

import { RunningText } from '@heliconhq/core';

import { MonthPicker } from '@heliconhq/dates';

import Example from '../Example';
import Args from '../Args';

export default () => {
  const [date, setDate] = useState(new Date('1992-10-06'));

  return (
    <>
      <RunningText>
        <p>Custom implementation of the date picker</p>
      </RunningText>
      <Example
        wide
        previewStyle={{ display: 'flex', justifyContent: 'center' }}
        controls={{
          block: { type: 'boolean', default: false },
          isDisabled: { type: 'boolean', default: false },
        }}
      >
        {({ ...props }) => (
          <div>
            <MonthPicker
              {...props}
              selected={date}
              onChange={setDate}
              excludeDates={[new Date('1992-10-13')]}
            />
            <p style={{ marginTop: '6px' }}>Output: {String(date)}</p>
          </div>
        )}
      </Example>
      <Args component={MonthPicker} />
    </>
  );
};
