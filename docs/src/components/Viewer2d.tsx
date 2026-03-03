import React from 'react';
import { TextBlock, Viewer2d, PulseMarker } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      The <code>Viewer2d</code> is used to visualise images, drawings, static
      maps and more. It is possible to mark locations in the viewer using the{' '}
      <code>PulseMarker</code>, <code>ValueMarker</code> and more.
    </TextBlock>
    <Example<typeof Viewer2d>
      presetProps={{
        children: [
          <Viewer2d.Marker x={150} y={500}>
            <PulseMarker />
          </Viewer2d.Marker>,
        ],
        url: 'https://infallible-stonebraker-ed47c5.netlify.app/drawing.svg',
      }}
      Component={Viewer2d}
    ></Example>
  </>
);
