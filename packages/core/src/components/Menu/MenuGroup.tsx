import { ReactNode } from 'react';

import style from '../../utils/style';

type Props = {
  children?: ReactNode;
  title?: string;
};

const StyledMenuGroup = style('div')({
  base: ({ theme }) => ({
    '&:not(:first-of-type)': {
      paddingTop: '0.4rem',
    },
    '&:not(:last-child)': {
      paddingBottom: '0.4rem',
      borderBottom: `1px solid ${theme.layer.palette.contextual.divider}`,
    },

    '.title': {
      fontWeight: theme.typography.normal.medium,
      fontSize: '0.85rem',
      padding: '0.5rem',
      marginBottom: '0.2rem',
    },
  }),
});

const MenuGroup = ({ children, title, ...props }: Props) => (
  <StyledMenuGroup {...props}>
    {Boolean(title) && <div className="title">{title}</div>}
    {children}
  </StyledMenuGroup>
);

MenuGroup.displayName = 'MenuGroup';

export default MenuGroup;
