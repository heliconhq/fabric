import React, { useState } from 'react';
import { Select, TextBlock } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

const options = [
  { label: 'Option 1', value: 'Option 1' },
  { label: 'Option 2', value: 'Option 2' },
  { label: 'Option 3', value: 'Option 3' },
  { label: 'Option 4', value: 'Option 4' },
  { label: 'Option 5', value: 'Option 5' },
];

export default () => {
  const [option, setOption] = useState('');

  return (
    <>
      <TextBlock>
        <p>
          A custom <code>Select</code> input component.
        </p>
      </TextBlock>
      <Example
        presetProps={{
          options,
          onChange: (event) => setOption(event.target.value),
        }}
        controlProps={{ value: option }}
        Component={Select}
      ></Example>
    </>
  );
};
