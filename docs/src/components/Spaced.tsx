import React from 'react';
import { Spaced, Button, TextBlock } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      <p>A component that puts a small space between child items.</p>
    </TextBlock>
    <Example Component={Spaced}>
      {(_, props) => (
        <Spaced {...props}>
          <Button onClick={() => {}}>Button 1</Button>
          <Button onClick={() => {}}>Button 2</Button>
          <Button onClick={() => {}}>Button 3</Button>
        </Spaced>
      )}
    </Example>
  </>
);
