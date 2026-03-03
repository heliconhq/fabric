import { Switch, TextBlock } from '@heliconhq/core';
import React from 'react';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      Custom wrapper around the standard HTML checkbox component.
    </TextBlock>
    <Example
      presetProps={{ label: 'This is a label' }}
      Component={Switch}
    ></Example>
  </>
);
