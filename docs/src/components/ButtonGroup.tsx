import React from 'react';
import { Button, ButtonGroup, TextBlock } from '@heliconhq/core';

import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      The <code>ButtonGroup</code> component can be used to toggle between
      different content.
    </TextBlock>
    <Example<typeof ButtonGroup>
      presetProps={{
        children: [
          <Button onClick={() => {}} icon="home">
            One
          </Button>,
          <Button onClick={() => {}} icon="face" disabled={true}>
            Two
          </Button>,
          <Button onClick={() => {}} icon="face">
            Three
          </Button>,
          <Button
            onClick={() => {}}
            icon="fingerprint"
            iconPosition="right"
            active={true}
          >
            Four
          </Button>,
        ],
      }}
      Component={ButtonGroup}
    ></Example>
  </>
);
