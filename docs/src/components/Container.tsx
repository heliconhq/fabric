import React from 'react';
import { TextBlock, Container } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      <code>Container</code> is the dumbest of all layout components. Its only
      responsibility is to hook into the current theme's standard spacing system
      (i.e. add a <code>margin-bottom</code> value). The
      <code>margin-bottom</code> value can be controlled via the
      <code>margin</code> prop.
    </TextBlock>
    <Example Component={Container}>
      {(_, props) => (
        <>
          <Container {...props}>
            <TextBlock>Some text in the container</TextBlock>
          </Container>
          <Container {...props}>
            <TextBlock>Some text in another container</TextBlock>
          </Container>
        </>
      )}
    </Example>
  </>
);
