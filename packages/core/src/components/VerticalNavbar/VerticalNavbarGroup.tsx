import { ReactNode } from 'react';

import style from '../../utils/style';

import { useVerticalNavbar } from './VerticalNavbar';

type Props = {
  children?: ReactNode;
  title?: string;
  border?: boolean;
  mode?: 'expanded' | 'collapsed' | 'both';
};

type StyledProps = {
  mode: 'expanded' | 'collapsed';
  border?: boolean;
};

const StyledNavbarGroup = style('div')<StyledProps>({
  base: ({ theme }) => ({
    '.title': {
      fontWeight: theme.typography.normal.medium,
      fontSize: '0.85rem',
      color: theme.layer.palette.contextual.textMuted,
      textTransform: 'uppercase',
      padding: '0.5rem',
      marginBottom: '0.2rem',
    },
  }),
  variants: {
    border: {
      true: ({ theme }) => ({
        borderTop: `1px solid ${theme.layer.palette.contextual.divider}`,
        paddingTop: '0.5rem',
      }),
    },
  },
});

export default function VerticalNavbarGroup({
  children,
  title,
  mode = 'both',
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
    <StyledNavbarGroup
      className="fabric--vertical-navbar-group"
      mode={expanded ? 'expanded' : 'collapsed'}
      {...props}
    >
      {Boolean(title) && expanded && <div className="title">{title}</div>}
      {children}
    </StyledNavbarGroup>
  );
}
