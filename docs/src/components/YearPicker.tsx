import React, { useState } from 'react';

import { RunningText } from '@heliconhq/core';

import { YearPicker } from '@heliconhq/dates';
import Example from '../docsComponents/Example/Example';

export default () => {
  const [date, setDate] = useState(new Date('1992-10-06'));

  return (
    <>
      <RunningText>
        <p>Custom implementation of the date picker</p>
      </RunningText>
      <Example
        Component={YearPicker}
        controlProps={{
          startDate: date,
          selected: date,
          onChange: (d) => setDate(d as Date),
        }}
      ></Example>
    </>
  );
};
