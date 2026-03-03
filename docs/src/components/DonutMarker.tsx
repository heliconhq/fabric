import React from 'react';
import { TextBlock, DonutMarker } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      A <code>DonutMarker</code> component that can be used to highlight
      specific points of interest in a plane such as a map or{' '}
      <code>Viewer2d</code> while adding some information in a{' '}
      <code>Donut</code> chart. The color of the marker can be controlled by the{' '}
      <code>appearance</code> prop and there are three different{' '}
      <code>size</code> options to choose from.
    </TextBlock>
    <Example Component={DonutMarker} />
  </>
);
