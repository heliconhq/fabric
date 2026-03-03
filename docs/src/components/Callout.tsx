import React from 'react';
import { Callout, TextBlock } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      <p>
        A<code>Callout</code>box with a title and content. It has props for
        customizing the appearance, padding, and margin of the box, as well as a
        title prop for displaying a title at the top of the box.
      </p>
    </TextBlock>
    <Example wide Component={Callout}>
      {(_, props) => (
        <Callout title="Important information" {...props}>
          <TextBlock>This is some info</TextBlock>
        </Callout>
      )}
    </Example>
  </>
);
