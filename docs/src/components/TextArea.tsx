import React from 'react';
import { TextArea, TextBlock } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      <p>
        Custom wrapper around the standard HTML <code>TextArea</code> component.
      </p>
    </TextBlock>
    <Example<typeof TextArea>
      presetProps={{ placeholder: 'Write something', rows: 1 }}
      Component={TextArea}
    />
  </>
);
