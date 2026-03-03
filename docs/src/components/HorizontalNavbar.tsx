import React from 'react';
import { TextBlock, HorizontalNavbar, NavLink } from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <TextBlock>
      A <code>HorizontalNavbar</code> is used in conjunction with the `Navlink`
      component (see [Navlink]) to create primary application navigation.
    </TextBlock>
    <Example
      presetProps={{ fixed: false, offset: true }}
      Component={HorizontalNavbar}
    >
      {(_, props) => (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <HorizontalNavbar {...props}>
            <NavLink to="#" icon="home" title="Home" />
            <NavLink to="#" icon="face" title="About me" />
          </HorizontalNavbar>
        </div>
      )}
    </Example>
  </>
);
