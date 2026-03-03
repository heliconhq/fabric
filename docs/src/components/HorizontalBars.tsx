import React from 'react';
import { TextBlock, HorizontalBars } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

const barValues = [
  { value: 18, label: 'M' },
  { value: 20, label: 'T' },
  { value: 13, label: 'W' },
  { value: 18, label: 'M' },
  { value: 20, label: 'T' },
  { value: 13, label: 'W' },
  { value: 18, label: 'M' },
  { value: 20, label: 'T' },
  { value: 13, label: 'W' },
  { value: 20, label: 'T' },
  { value: 13, label: 'W' },
  { value: 18, label: 'M' },
  { value: 20, label: 'T' },
  { value: 13, label: 'W' },
  { value: 20, label: 'T' },
  { value: 13, label: 'W' },
  { value: 18, label: 'M' },
  { value: 20, label: 'T' },
  { value: 13, label: 'W' },
  { value: 18, label: 'M' },
  { value: 20, label: 'T' },
  { value: 13, label: 'W' },
  { value: 20, label: 'T' },
  { value: 13, label: 'W' },
  { value: 18, label: 'M' },
  { value: 20, label: 'T' },
  { value: 13, label: 'W' },
];

export default () => (
  <>
    <TextBlock>
      <p>
        Renders a set of <code>HorizontalBars</code> that displays metrics. Can
        be customized using <code>appearance</code>,<code>shadows</code> and{' '}
        <code>label</code> props.
      </p>
    </TextBlock>
    <Example
      wide
      presetProps={{ values: barValues }}
      Component={HorizontalBars}
    >
      {(Component) => <div style={{ height: '5rem' }}>{Component}</div>}
    </Example>
  </>
);
