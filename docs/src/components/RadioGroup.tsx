import React, { useState } from 'react';
import { RadioGroup, TextBlock } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

const options = [
  {
    value: 'yes',
    label: 'yes',
  },
  {
    value: 'no',
    label: 'no',
  },
  {
    value: 'maybe',
    label: 'maybe',
  },
];

export default () => {
  const [selected, setSelected] = useState<string | number>('yes');
  const handleSelect = ({ value }: { value: string | number }) => {
    setSelected(value);
  };
  return (
    <>
      <TextBlock>
        <p>A custom wrapper for RadioButtons</p>
      </TextBlock>
      <Example
        presetProps={{
          options,
          onSelect: handleSelect,
        }}
        controlProps={{ selected }}
        Component={RadioGroup}
      ></Example>
    </>
  );
};
