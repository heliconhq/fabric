import React from 'react';
import { Button, Menu, MenuItem, MenuGroup, RunningText } from '@heliconhq/core';
import { Highlight } from '@heliconhq/highlight';
import Example from '../docsComponents/Example/Example';

export default () => (
  <>
    <RunningText>
      <p>
        Use <code>Menu</code>, <code>MenuGroup</code>, <code>MenuCustom</code>
        and <code>MenuItem</code> to create rich dropdown menus.
      </p>
      <p>
        The component should be usable in its current state, but we are yet to
        finish a couple of features:
      </p>
      <ul>
        <li>Disabled menu items</li>
        <li>Radio buttons and checkboxes.</li>
        <li>Icons in MenuItems</li>
        <li>Ability to configure font size</li>
        <li>Sub-menus (replace content of currently open menu)</li>
      </ul>
    </RunningText>
    <Example Component={Menu}>
      {(_, props) => (
        <Menu
          actuator={({ onToggle, open }) => (
            <Button
              icon="more-vert"
              design="outline"
              onClick={onToggle}
              active={open}
            />
          )}
          size="small"
          title="Menu"
          popoverProps={{ style: { zIndex: 3000 } }}
          {...props}
        >
          <MenuGroup>
            <MenuItem label="Cool things">New item</MenuItem>
            <MenuItem>Open</MenuItem>
          </MenuGroup>
          <MenuGroup title="Important">
            <MenuItem>Save this thing as ...</MenuItem>
            <MenuItem onClick={() => console.log('quit')}>Quit</MenuItem>
          </MenuGroup>
        </Menu>
      )}
    </Example>
    <RunningText>
      <p>
        You can use the <code>MenuCustom</code> component to create custom
        content.
      </p>
    </RunningText>
    <Highlight
      language="jsx"
      code={`<MenuCustom>
  {({ onClose }) => <div><Button onClick={onClose}>Bye!</Button></div>}
</MenuCustom>`}
    />
  </>
);
