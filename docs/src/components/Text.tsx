import React from 'react';
import { Text, TextBlock } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>A piece of text</TextBlock>
    <Example<typeof Text> Component={Text}>
      {(_, props) => (
        <Text {...props}>
          This is text <code>code</code> that will wrap
          <br />
          testar test tewat testset etwetwe <a href="#">twetwetwetwe</a>
        </Text>
      )}
    </Example>
  </>
);
