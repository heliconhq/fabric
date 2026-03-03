import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import {
  Button,
  Callout,
  TextBlock,
  VerticalNavbar,
  VerticalNavbarItem,
  VerticalNavbarBody,
  VerticalNavbarHeader,
  VerticalNavbarFooter,
  VerticalNavbarCustom,
  VerticalNavbarGroup,
  VerticalNavbarToggle,
  Layout,
  LayoutContent,
} from '@heliconhq/core';

import mark from '../images/mark2.svg';

import Example from '../Example';
import Args from '../Args';

export default () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <>
      <TextBlock>
        A <code>VerticalNavbar</code> is used in conjunction with the
        <code>Navlink</code> component (see [Navlink]) to create primary
        application navigation.
      </TextBlock>
      <Example
        wide
        hideControls={true}
      >
        {(props) => (
          <div style={{ height: '50vh' }}>
            <Layout direction="vertical">
              <VerticalNavbar expanded={expanded} setExpanded={setExpanded} {...props}>
                <VerticalNavbarHeader border={true}>
                  <VerticalNavbarCustom mode="expanded" style={{ marginBottom: '1rem' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                      <img src={mark} style={{ width: '2.4rem', marginLeft: '0.3rem' }} />
                      <VerticalNavbarToggle />
                    </div>
                  </VerticalNavbarCustom>
                  <VerticalNavbarCustom mode="collapsed" style={{ marginBottom: '1rem' }}>
                    <img src={mark} style={{ width: '2.4rem', marginLeft: '0.3rem' }} />
                  </VerticalNavbarCustom>
                  <VerticalNavbarItem as={Link} to="/lol" mode="expanded" icon="settings">Expanded</VerticalNavbarItem>
                  <VerticalNavbarItem mode="both" icon="explore">Both</VerticalNavbarItem>
                </VerticalNavbarHeader>
                <VerticalNavbarBody>
                  <VerticalNavbarItem mode="collapsed" icon="explore">Collapsed</VerticalNavbarItem>
                  <VerticalNavbarItem as={Link} to="/core/pages/verticalNavbar" mode="expanded" icon="settings">Expanded</VerticalNavbarItem>
                  <VerticalNavbarItem mode="both" icon="explore">Both</VerticalNavbarItem>
                  <VerticalNavbarGroup title="Users" border={true}>
                    <VerticalNavbarItem mode="both" icon="explore">Both</VerticalNavbarItem>
                    <VerticalNavbarItem mode="both" icon="explore">Both</VerticalNavbarItem>
                  </VerticalNavbarGroup>
                </VerticalNavbarBody>
                <VerticalNavbarFooter>
                  <VerticalNavbarCustom mode="expanded"><Callout>This is a callout!</Callout></VerticalNavbarCustom>
                </VerticalNavbarFooter>
                <VerticalNavbarFooter border={true}>
                  <VerticalNavbarItem mode="both" icon="explore">Collapsed</VerticalNavbarItem>
                </VerticalNavbarFooter>
              </VerticalNavbar>
              <LayoutContent>
                {!expanded && <Button design="text" icon="chevron-right" onClick={() => setExpanded(true)} />}
                <TextBlock>Content here.</TextBlock>
              </LayoutContent>
            </Layout>
          </div>
        )}
      </Example>
      <Args component={VerticalNavbar} />
    </>
  );
};
