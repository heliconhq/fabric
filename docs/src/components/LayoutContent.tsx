import React from 'react';
import { TextBlock, LayoutContent } from '@heliconhq/core';

import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      <p>
        A component that aligns content within a <code>Layout</code> component.
      </p>
    </TextBlock>
    <Example
      wide
      Component={LayoutContent}
      presetProps={{ children: <p>This is some text</p> }}
      overrideControls={{ maxWidth: 'overrideStringExtended' }}
    />
  </>
);
