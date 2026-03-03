import React from 'react';
import { Pane, TextBlock, Panel } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      <code>Panes</code> are used as wrapper to easily position content within.
      They are often used in conjunction with other components such as{' '}
      <code>Panels</code>. By supplying a <code>sizes</code> array prop the
      content automatically takes up the space assigned to them.{' '}
      <code>Panes</code> can be transposed using the <code>vertical</code> prop.
    </TextBlock>
    <Example wide Component={Pane}>
      {(_, props) => (
        <Pane sizes={[1, 3, 1]} {...props}>
          <Panel>Panel 1</Panel>
          <Panel>Panel 2</Panel>
          <Panel>Panel 3</Panel>
        </Pane>
      )}
    </Example>
  </>
);
