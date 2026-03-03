import React, { useState } from 'react';
import { TextBlock } from '@heliconhq/core';
import { DatePicker } from '@heliconhq/dates';
import Example from '../docsComponents/Example/Example';

export default () => {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date>();

  return (
    <>
      <TextBlock>
        <p>Custom implementation of the date range picker</p>
      </TextBlock>

      <Example<typeof DatePicker>
        Component={DatePicker}
        presetProps={{
          block: false,
          width: '200px',
        }}
        controlProps={{
          startDate,
          endDate,
          onChange: ([start, end]) => {
            setStartDate(start ?? undefined);
            setEndDate(end ?? undefined);
          },
          selected: startDate,
          selectsRange: true,
        }}
      >
        {(Component) => (
          <div>
            {Component}
            {endDate === null ? (
              <p style={{ marginTop: '6px' }}>Output: {String(startDate)}</p>
            ) : (
              <div
                style={{
                  marginTop: '6px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <p>Output: {String(startDate)}</p>
                <p>until {String(endDate)}</p>
              </div>
            )}
          </div>
        )}
      </Example>
    </>
  );
};
