import React from 'react';
import { Panel, RunningText, TextBlock } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <RunningText>
      <p>
        <code>Panels</code> are used as containers for content that should be
        visually distinguishable from other content.
      </p>

      <p>
        The layout of <code>Panels</code> can be adjusted and they are often
        used in conjunction with other components such as <code>Panes</code>
        to display related information. They can be <code>elevated</code> and
        marked as being <code>active</code>. Their <code>backdrop</code>
        context can also be set via props.
      </p>

      <p>
        Nested <code>Panels</code> will automatically alternate backdrops
        between <code>root</code> and <code>light</code> if no
        <code>backdrop</code> property was set and the closes
        <code>BackdropProvider</code> is set to either of those values. See
        example at bottom of page.
      </p>
    </RunningText>
    <Example
      wide
      presetProps={{
        children: <TextBlock>This is the panel that you control </TextBlock>,
      }}
      Component={Panel}
    >
      {(Component) => (
        <>
          {Component}
          <br />
          <Panel>
            <TextBlock>Some content here</TextBlock>
            <Panel>
              <TextBlock>Some nested content</TextBlock>
            </Panel>
          </Panel>
        </>
      )}
    </Example>
  </>
);
