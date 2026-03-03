import React, { useState } from 'react';
import { TextBlock, ChoiceSelect } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => {
  const values = [
    { label: 'Bilbo', value: 'bilbo' },
    { label: 'Frodo', value: 'frodo' },
    { label: 'Gandalf', value: 'gandalf' },
  ];
  const [value, setValue] = useState<{
    label: string | number;
    value: string | number;
  }>(values[0]);
  return (
    <>
      <TextBlock>
        <p>
          A <code>ChoiceSelect</code> component that allows the user to select
          from a list of choices displayed in a grid layout.
        </p>
      </TextBlock>
      <Example<typeof ChoiceSelect>
        controlProps={{
          values,
          value,
          onChange: (val) => setValue(val),
        }}
        Component={ChoiceSelect}
      ></Example>
    </>
  );
};
