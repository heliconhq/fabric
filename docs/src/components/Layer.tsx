import React from 'react';
import { TextBlock, Layer } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      <p>Switch layer, paint background, and set foreground color.</p>
    </TextBlock>
    <Example
      wide
      Component={Layer}
      overrideControls={{ layer: 'overrideStringExtended' }}
      presetProps={{
        children: (
          <TextBlock>
            Content goes here, this is a textblock in a layer
          </TextBlock>
        ),
      }}
    ></Example>
  </>
);
