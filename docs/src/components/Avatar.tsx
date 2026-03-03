import React from 'react';
import { Avatar, TextBlock } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      <p>
        An <code>Avatar</code> component that displays a user's avatar image or
        initials. It accepts props for customization.
      </p>
    </TextBlock>
    <Example<typeof Avatar>
      presetProps={{ imageURL: 'https://picsum.photos/id/64/200' }}
      Component={Avatar}
    ></Example>
  </>
);
