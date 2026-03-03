import React from 'react';
import { Input, TextBlock } from '@heliconhq/core';

import Example from '../Example';
import Args from '../Args';

export default () => (
  <>
    <TextBlock>
      <p>Custom wrapper around the standard HTML <code>Input</code> component.</p>
    </TextBlock>
    <Example
      wideIfProp="block"
      controls={{
        type: { type: 'inherit', from: Input },
        placeholder: { type: 'text', default: 'Write something ...' },
        disabled: { type: 'boolean', default: false },
        block: { type: 'boolean', default: false },
      }}
    >
      {(props) => (
        <Input {...props} />
      )}
    </Example>
    <Args component={Input} />
  </>
);
