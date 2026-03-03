import React from 'react';
import { Dot, TextBlock } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      <p>
        A small dot that can be used in dropdowns and when constructing badges.
      </p>
    </TextBlock>
    <Example overrideControls={{ size: 'union' }} Component={Dot}></Example>
  </>
);
