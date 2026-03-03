import React from 'react';
import { TimeScrub, TextBlock } from '@heliconhq/core';

import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      <p>
        The <code>TimeScrub</code> component takes in props to display a time
        scroll bar with adjustable markers.
      </p>
    </TextBlock>
    <Example<typeof TimeScrub> Component={TimeScrub}></Example>
  </>
);
