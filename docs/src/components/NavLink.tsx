import React from 'react';
import { TextBlock, NavLink } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      <code>Navlinks</code> are used to help with Navigation on a page and can
      be hooked in with react-router.
      <code>Navlinks</code> are often used together with navbars or sidebars.
      <code>Navlinks</code> come with the parameters of title and icon, however,
      for more flexibility the
      <code>titleComponent</code>can be directly to allow for more user cases.
      See **More examples**.
    </TextBlock>
    <Example
      presetProps={{ icon: 'home', title: 'An ordinary link' }}
      Component={NavLink}
    ></Example>
  </>
);
