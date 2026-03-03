import React, { ReactNode } from 'react';

import style from '../../utils/style';
import { IconName } from '../../icons';

import { Icon } from '../Icon';
import Tooltip from '../Tooltip';

import { useVerticalNavbar } from './VerticalNavbar';

type Props = {
  children?: ReactNode;
  as?: React.ElementType;
  icon: IconName;
  active: boolean;
  mode: 'expanded' | 'collapsed' | 'both';
};

type StyledProps = {
  mode?: 'expanded' | 'collapsed';
  active?: boolean;
};

const StyledNavbarItem = style('div')<StyledProps>({
  base: ({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '0.15rem 0.3rem',
    borderRadius: theme.bevels.standard,
    color: theme.layer.palette.contextual.text,
    textDecoration: 'none',
    cursor: 'pointer',
    '&:not(:last-child)': {
      marginBottom: '0.4rem',
    },
    '&.active': {
      background: theme.layer.palette.contextual.active,
      '&:hover': {
        background: theme.layer.palette.contextual.active,
      },
    },
    '&:hover': {
      background: theme.layer.palette.contextual.hover,
    },
    '> .icon': {
      width: '2.4rem',
      height: '2.4rem',
      marginRight: '0.3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '.fabric--icon': {
        width: 28,
        height: 28,
      },
    },
    '> .label': {
      fontWeight: theme.typography.normal.medium,
    },
  }),
  variants: {
    mode: {
      expanded: {},
      collapsed: {
        '.icon': {
          marginRight: 0,
        },
        '.label': {
          display: 'none',
        },
      },
    },
    active: {
      true: ({ theme }) => ({
        background: theme.layer.palette.contextual.active,
        ':hover': {
          background: theme.layer.palette.contextual.active,
        },
      }),
    },
  },
});

export default function VerticalNavbarItem({
  children,
  icon = 'blank',
  mode = 'both',
  as,
  ...props
}: Props) {
  const { expanded } = useVerticalNavbar();

  if (mode === 'expanded' && !expanded) {
    return null;
  }

  if (mode === 'collapsed' && expanded) {
    return null;
  }

  return (
    <StyledNavbarItem
      className="fabric--vertical-navbar-item"
      mode={expanded ? 'expanded' : 'collapsed'}
      as={as}
      {...props}
    >
      <div className="icon">
        {expanded || !children ? (
          <Icon icon={icon} />
        ) : (
          <Tooltip content={children as string} position="right">
            <Icon icon={icon} />
          </Tooltip>
        )}
      </div>
      <div className="label">{children}</div>
    </StyledNavbarItem>
  );
}
