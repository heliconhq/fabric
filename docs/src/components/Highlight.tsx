import React from 'react';
import { TextBlock } from '@heliconhq/core';
import { Highlight } from '@heliconhq/highlight';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>Embed Prism to visualize code.</TextBlock>
    <Example
      wide
      overrideControls={{ code: 'overrideStringExtended' }}
      presetProps={{
        code: `def lol(x):
    print(lol);`,
      }}
      Component={Highlight as React.ComponentType}
    ></Example>
  </>
);
