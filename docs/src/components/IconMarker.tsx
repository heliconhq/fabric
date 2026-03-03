import React from 'react';
import { TextBlock, IconMarker } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      A <code>IconMarker</code> component that can be used to highlight specific
      points of interest in a plane such as a map or <code>Viewer2d</code>.
    </TextBlock>
    <Example presetProps={{ icon: 'sunny' }} Component={IconMarker}></Example>
  </>
);
