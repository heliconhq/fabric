import styled from '@emotion/styled';
import { Icon, style, useTheme } from '@heliconhq/core';
import { ActiveTheme } from '@heliconhq/core/dist/types/theme';
import React from 'react';
import { NavLink as Link } from 'react-router-dom';

type Props = {
  open: boolean;
  to: string;
  onClick: () => void;
  topName: string;
};

const Container = styled(Link)(
  ({ open }: { theme: ActiveTheme; open: boolean }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: open ? '0.4rem' : '1rem',
    color: 'inherit',
    textDecoration: 'none',
  })
);

const Name = style('div')<{ open: boolean; theme: ActiveTheme }>({
  base: ({ theme }) => ({
    marginLeft: '0.3rem',
    fontWeight: theme.typography.normal.normal,
  }),
  variants: {
    open: {
      true: ({ theme }) => ({
        fontWeight: theme.typography.normal.medium,
      }),
    },
  },
});

export default function TopCategoryLink({ open, to, onClick, topName }: Props) {
  const { theme } = useTheme();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    onClick();
  };
  return (
    <Container onClick={handleClick} to={to} open={open} theme={theme}>
      <Icon icon={open ? 'expand-more' : 'chevron-right'} size="1.2rem" />

      <Name open={open} theme={theme}>
        {topName}
      </Name>
    </Container>
  );
}
