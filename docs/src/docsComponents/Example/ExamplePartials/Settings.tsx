import { Button, Menu, MenuGroup, MenuItem, style, Switch } from '@heliconhq/core';
import React from 'react';

type Props = {
  outline: boolean;
  setOutline: React.Dispatch<React.SetStateAction<boolean>>;
};

const Container = style('div')({
  base: { alignSelf: 'flex-end' },
});

const StyledButton = style(Button)({
  base: {
    opacity: '50%',
  },
});

export default function Settings({ outline, setOutline }: Props) {
  return (
    <Container>
      <Menu
        anchor="end"
        actuator={({ onToggle, open }) => (
          <StyledButton
            icon="settings"
            design="outline"
            onClick={onToggle}
            active={open}
          />
        )}
      >
        <MenuGroup title="Tools">
          <MenuItem persistOnClick={true}>
            <Switch
              label={'Outline component'}
              onChange={() => setOutline(!outline)}
              checked={outline}
              alignLabel="left"
              margin="none"
            />
          </MenuItem>
        </MenuGroup>
      </Menu>
    </Container>
  );
}
