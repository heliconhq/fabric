import React, { useState } from 'react';
import { TextBlock } from '@heliconhq/core';
import { SchemaForm } from '@heliconhq/rjsf';

import Example from '../Example';
import Args from '../Args';

export default () => {
  const [formData, setFormData] = useState({
    name: 'Saruman',
    age: 3231,
    married: true,
    siblings: [{ name: 'Gandalf', age: 3232 }],
  });

  return (
    <>
      <TextBlock>
        Wrapper around RJSF exposed through <code>SchemaForm</code> available in{' '}
        <code>@heliconhq/rjsf</code> This is a work in progress. Use it by all
        accounts, but expect problems.
      </TextBlock>
      <Example
        wide
        controls={{
          embedded: { type: 'boolean', default: false },
        }}
      >
        {(props) => (
          <SchemaForm
            {...props}
            onChange={(e) => setFormData(e.formData)}
            schema={{
              title: 'My title',
              description: 'My description',
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  title: 'Name',
                  minLength: 3,
                },
                age: {
                  type: 'number',
                  title: 'Age',
                },
                bio: {
                  type: 'string',
                  title: 'Bio',
                },
                married: {
                  type: 'boolean',
                  default: true,
                },
                numberEnumRadio: {
                  type: 'number',
                  title: 'Number enum',
                  default: 1,
                  enum: [1, 2, 3],
                },
                radio: {
                  type: 'boolean',
                  title: 'Yes or no',
                  description: 'This is the description',
                },
                siblings: {
                  type: 'array',
                  title: 'Siblings',
                  items: {
                    type: 'object',
                    properties: {
                      name: { type: 'string' },
                      age: { type: 'number' },
                    },
                  },
                },
              },
            }}
            formData={formData}
            uiSchema={{
              bio: {
                'ui:widget': 'textarea',
              },
              name: {
                'ui:help': 'Hint: wizards only!',
                'ui:description': 'Hint: wizards only!',
              },
              radio: {
                'ui:widget': 'radio',
              },
            }}
          />
        )}
      </Example>
      <Args component={SchemaForm} />
    </>
  );
};
