import React from 'react';
import { Hr, TextBlock } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      <p>
        A<code>Horizontal Ruler</code> that accepts props for margin, which are
        used to set the spacing of the divider.
      </p>
    </TextBlock>
    <Example wide Component={Hr}>
      {(Component) => (
        <>
          <p>This is some text before</p>
          {Component}
          <p>This is some text after</p>
        </>
      )}
    </Example>
  </>
);
