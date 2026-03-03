import React from 'react';
import { Icon, ListItem, TextBlock } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      Component suitable for listing different resources. You can add{' '}
      <code>before</code>-content and <code>after</code>-content as well as make
      the item <code>inline</code>.
    </TextBlock>
    <Example
      wide
      presetProps={{
        before: <Icon icon="home" size="2.2rem" />,
        after: <Icon icon="add" size="2.2rem" />,
      }}
      Component={ListItem}
    >
      {(_, props) => <ListItem {...props}>A list item</ListItem>}
    </Example>
  </>
);
