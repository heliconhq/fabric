import React from 'react';
import { WrappingHorizontalLayout, TextBlock, Panel } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

const children = [    <Panel>First panel</Panel>,
  <Panel>Second panel</Panel>,
  <Panel>Third panel</Panel>,
  <Panel>Fourth panel</Panel>,
  <Panel>Fifth panel</Panel>,
  <Panel>Sixth panel</Panel>]
export default () => (
  <>
    <TextBlock>
      A layout container that takes full width and wraps when any of the child
      elements cannot fit comfortably within `minChildWidth`.
    </TextBlock>
    <Example<typeof WrappingHorizontalLayout>
      wide
      presetProps={{children}}
      Component={WrappingHorizontalLayout}
    >

    </Example>
  </>
);
