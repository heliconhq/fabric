import { Container, Switch, useTheme } from '@heliconhq/core';
import React from 'react';

type Props = {
  toggleTheme: () => void;
};

export default function ThemeToggle({ toggleTheme }: Props) {
  const { theme } = useTheme();
  return (
    <Container margin="reduced">
      <Switch
        alignLabel="left"
        checked={theme.name === 'default-dark-theme'}
        onChange={toggleTheme}
        label="Toggle dark mode"
      />
    </Container>
  );
}
