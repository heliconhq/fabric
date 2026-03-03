import React from 'react';
import { Checkbox, TextBlock } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      Custom wrapper around the standard HTML <code>checkbox</code> component.
    </TextBlock>
    <Example presetProps={{ label: 'Hello ' }} Component={Checkbox}></Example>
  </>
);
