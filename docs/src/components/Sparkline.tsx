import React from 'react';
import { Sparkline, TextBlock } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      A <code>Sparkline</code> is a simple line chart that can be embedded to
      visualize an array of numerical values.
    </TextBlock>
    <Example
      presetProps={{ values: [10, 8, 3, 8, 10, 8, 10, 6, 4] }}
      Component={Sparkline}
      overrideControls={{ values: 'array' }}
    >
      {(Component) => (
        <div style={{ width: '10rem', height: '3rem' }}>{Component}</div>
      )}
    </Example>
  </>
);
