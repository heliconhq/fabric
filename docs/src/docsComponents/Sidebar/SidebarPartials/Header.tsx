import { style, useTheme } from '@heliconhq/core';
import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { ActiveTheme } from '@heliconhq/core/dist/types/theme';
import mark from '../../../images/mark2.svg';

const StyledHeader = style('header')({
  base: {
    marginBottom: '2rem',
  },
});
const GitHubLink = style('a')({
  base: {
    color: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

const Logo = style('img')({
  base: {
    height: '3.2rem',
    width: '3.2rem',
    marginRight: '0.75rem',
  },
});

const Container = style('div')({
  base: {
    marginBottom: '2rem',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
});

const Links = style('div')({
  base: {
    width: '100%',
  },
});

const HomeLink = style('div')<{ theme: ActiveTheme }>({
  base: ({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1.2rem',
    marginBottom: '0.3rem',
    fontWeight: `${theme.typography.normal.medium}`,
    alignItems: 'center',
    textDecoration: 'none',
  }),
});

const Version = style('div')({
  base: {
    fontSize: '1rem',
    opacity: 0.5,
  },
});

const External = style('div')({
  base: {
    fontSize: '0.9rem',
    opacity: 0.7,
  },
});
const Internal = style(Link)({
  base: {
    color: 'Inherit',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});
export default function Header() {
  const { theme } = useTheme();

  return (
    <StyledHeader theme={theme}>
      <Container>
        <Logo src={mark} className="mark" />
        <Links>
          <HomeLink theme={theme}>
            <Internal to="/">Fabric</Internal>
            <Version className="version">v{process.env.FABRIC_VERSION}</Version>
          </HomeLink>
          <External>
            <GitHubLink
              href="https://github.com/heliconhq/fabric"
              target="_blank"
            >
              View on GitHub
            </GitHubLink>
          </External>
        </Links>
      </Container>
    </StyledHeader>
  );
}
