import React from 'react';
import { TextBlock, Breadcrumbs, IconName } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

const routes: { to: string; label: string; icon?: IconName }[] = [
  { to: '/', label: 'Home', icon: 'home' },
  { to: '/dashboards', label: 'Dashboards', icon: 'assessment' },
  { to: '/sensors/1', label: 'Sensor 1' },
  { to: '/sensors/1/meter/2', label: 'Meter 2' },
  { to: '/sensors/1/meter/2/values/3', label: 'Value 3' },
];

export default () => (
  <>
    <TextBlock>
      <p>
        Displays a list of links as <code>BreadCrumbs</code>, typically used for
        navigation. If the width of the breadcrumbs exceeds the width of the
        container, the Breadcrumbs component will hide some of the breadcrumbs
        and display them in a popover when a button is clicked.
      </p>
    </TextBlock>
    <Example<typeof Breadcrumbs>
      wide
      presetProps={{ crumbs: routes }}
      Component={Breadcrumbs}
    ></Example>
  </>
);
