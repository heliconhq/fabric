import React from 'react';
import {
  App,
  Sidebar,
  TextBlock,
  LayoutContent,
  Title,
  VerticalLayout,
  useTheme,
} from '@heliconhq/core';
import Example from '../docsComponents/Example/Example';

export default () => {
  const { theme } = useTheme();

  return (
    <>
      <TextBlock>
        A <code>Sidebar</code> is used to inject extra structural content
        outside of a page. It can be used for sub-navigation or similar
        concepts. The <code>Sidebar</code> is often combined with a{' '}
        <code>VerticalNavbar</code>. It hooks into the <code>offsets</code>
        -system and content is automatically offset even when the{' '}
        <code>VerticalNavbar</code> is not contracted. The <code>SideBar</code>{' '}
        can also be used together with the <code>HorizontalNavbar</code>. See
        **More examples** below.
      </TextBlock>
      <TextBlock>
        We're wrapping the example below in a div with position relative as
        we're displaying an App inside an App (this documentation system also
        uses Fabric). In a normal situation you can omit this div.
      </TextBlock>
      <Example
        overrideControls={{ width: 'overrideStringExtended' }}
        wide
        Component={Sidebar}
      >
        {(_, props) => (
          <App themeName={theme.name}>
            <VerticalLayout>
              <Sidebar {...props}>Fest</Sidebar>
              <LayoutContent>
                <Title>Header</Title>
                This is the content.
              </LayoutContent>
            </VerticalLayout>
          </App>
        )}
      </Example>
    </>
  );
};
