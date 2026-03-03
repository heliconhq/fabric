import React from 'react';
import { TextBlock, PinMarker } from '@heliconhq/core';
import { MapView } from '@heliconhq/maps';
import { Highlight } from '@heliconhq/highlight';

import Example from '../Example';
import Args from '../Args';

export default () => (
  <>
    <TextBlock>
      A map view that automatically zooms in on the visible items. You can
      read more about the Marker api <a
        href="https://visgl.github.io/react-map-gl/docs/api-reference/marker">here</a>.
    </TextBlock>
    <TextBlock>
      You must include the following stylesheet if you use components from
      this package:
    </TextBlock>
    <Highlight
      lineNumbers={false}
      code={'<link href="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css" rel="stylesheet" />'}
      language="html"
    />
    <Example
      wide
      hideControls
    >
      {(props) => (
        <div style={{ height: 600 }}>
          <MapView
            {...props}
            renderItem={(Marker, markerProps, item) => (
              <Marker {...markerProps} key={item.id} anchor="bottom">
                <PinMarker color={item.color} size="medium" />
              </Marker>
            )}
            padding={50}
            items={[
              {
                label: 'hihi',
                id: '1231',
                longitude: 13.2064298,
                latitude: 53.6928166,
                color: 'red',
              },
              {
                label: 'hihi',
                id: '1231',
                longitude: 12.2064298,
                latitude: 52.6928166,
                color: 'blue',
              },
            ]}
          />
        </div>
      )}
    </Example>
    <Args component={MapView} />
  </>
);
