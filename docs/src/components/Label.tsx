import React from 'react';
import { Label, TextBlock } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      <p>
        <code>Label</code> for use with form fields.
      </p>
    </TextBlock>
    <Example
      Component={Label}
      presetProps={{ extra: '(required)', children: 'Name' }}
      overrideControls={{ children: 'string' }}
    ></Example>
  </>
);
