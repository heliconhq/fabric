import React from 'react';
import { PulseMarker, TextBlock } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      A <code>PulseMarker</code> component that can be used to highlight
      specific points of interest in a plane such as a map or{' '}
      <code>Viewer2d</code>. The appearance of the marker can be controlled by
      the <code>appearance</code> prop to change color and the three different{' '}
      <code>size</code> options. The speed of the animation can be controlled
      with the <code>speed</code> prop.
    </TextBlock>
    <Example Component={PulseMarker}></Example>
  </>
);
