import React from 'react';
import { TextBlock, Loader } from '@heliconhq/core';

import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      A block component that fills the entire parent element and displays a
      horizontally and vertically centered spinner. Typically used within a
      <code>LayoutContent</code> component or in the wrapper component of a
      chart while the data is loading.
    </TextBlock>
    <TextBlock>
      Just displaying a spinner is often sufficient. You can use the
      <code>text</code> prop to provide more context if necessary.
    </TextBlock>
    <Example presetProps={{ text: 'Loading..' }} Component={Loader} />
  </>
);
