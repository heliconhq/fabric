import React, { ElementType, ReactNode } from 'react';
import style from '../utils/style';
import { Icon } from './Icon';
import { IconName } from '../icons';

type Props = {
  children?: ReactNode;
  title: string;
  icon?: IconName;
  component?: ElementType;
  titleComponent?: ElementType;
  to?: string;
};

const StyledIconWrapper = style('div')({
  base: {
    padding: '0.2rem',
  },
});

const LinkComponent = style('a')({
  base: ({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    color: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
    marginBottom: '0.2rem',
    lineHeight: '1',
    borderRadius: '0.2rem',
    padding: '0.2rem',
    fontSize: '0.95rem',
    whiteSpace: 'nowrap',

    '&:hover::active ': {
      background: theme.layer.palette.contextual.selected,
    },

    '&::-moz-focus-inner': {
      border: 'none',
    },
    '&:active::&:focus': {
      outline: 'none !important',
    },
  }),
});
const TitleComponent = style('div')({});

export default function NavLink({
  title,
  icon,
  component,
  titleComponent,
  to,
  ...props
}: Props) {
  return (
    <LinkComponent
      className="fabric--navlink"
      href={to}
      as={component}
      {...props}
    >
      <StyledIconWrapper>
        {React.isValidElement(icon) ? icon : <Icon icon={icon} size="1.6rem" />}
      </StyledIconWrapper>
      <TitleComponent as={titleComponent} className="title">
        {title}
      </TitleComponent>
    </LinkComponent>
  );
}
