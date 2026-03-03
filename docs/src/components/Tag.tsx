import React from 'react';
import { Tag, TextBlock } from '@heliconhq/core';

import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      <p>
        A <code>Tag</code> component accepts props for customization.
      </p>
    </TextBlock>
    <Example presetProps={{ value: 'Tag' }} Component={Tag} />
  </>
);
