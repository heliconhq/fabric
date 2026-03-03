import React from 'react';
import { Input, Field, TextBlock } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      <p>
        Wrapper around a form <code>Field</code>.
      </p>
    </TextBlock>

    <Example
      presetProps={{
        helpText: 'Your real name please',
        labelExtra: '(required)',
        label: 'Name',
      }}
      Component={Field}
    >
      {(_, props) => (
        <Field labelFor="name-field" {...props}>
          <Input placeholder="Enter name" id="name-field" />
        </Field>
      )}
    </Example>
  </>
);
