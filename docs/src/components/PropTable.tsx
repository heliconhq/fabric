import React from 'react';
import { TextBlock, PropTable } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

const Properties = [
  { label: 'This is a label', value: 'This is a very long value.' },
  { label: 'This is a very long label', value: 'Short value.' },
  { label: 'Short lbl', value: 'Hi.' },
];

export default () => (
  <>
    <TextBlock>
      <p>
        A <code>PropTable</code> that displays a set of key-value-pairs in a
        table.
      </p>
    </TextBlock>
    <Example
      wide
      presetProps={{ properties: Properties }}
      Component={PropTable}
    ></Example>
  </>
);
