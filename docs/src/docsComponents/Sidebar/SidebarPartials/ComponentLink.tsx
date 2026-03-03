import { style } from '@heliconhq/core';
import React from 'react';
import { NavLink as Link } from 'react-router-dom';

type Props = {
  link: string;
  needle: string;
  haystack: string;
};

const Highlight = ({
  needle,
  haystack,
}: {
  needle: string;
  haystack: string;
}) => {
  if (!needle) {
    return haystack;
  }
  const re = new RegExp(needle, 'gim');
  const output = haystack.replace(re, (match) => `<mark>${match}</mark>`);
  return <div dangerouslySetInnerHTML={{ __html: output }} />;
};

const StyledLink = style(Link)({
  base: ({ theme }) => ({
    display: 'block',
    padding: '0.5rem',
    color: 'inherit',
    textDecoration: 'none',
    borderRadius: '0.2rem',
    '&.active': {
      fontWeight: theme.typography.normal.medium,
      textDecoration: 'underline',
    },

    '&:hover': {
      textDecoration: 'underline',
    },
  }),
});

export default function ComponentLink({ link, needle, haystack }: Props) {
  return (
    <StyledLink to={link}>
      <Highlight needle={needle} haystack={haystack} />
    </StyledLink>
  );
}
