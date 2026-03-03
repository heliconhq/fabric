import { ReactNode } from 'react';

import style from '../../utils/style';

type Props = {
  children?: ReactNode;
  border?: boolean;
};

const StyledNavbarHeader = style('div')({
  base: {
    padding: '1rem 0.7rem',
  },
  variants: {
    border: {
      true: ({ theme }) => ({
        borderBottom: `1px solid ${theme.layer.palette.contextual.border}`,
      }),
    },
  },
});

export default function VerticalNavbarHeader({ children, ...props }: Props) {
  return (
    <StyledNavbarHeader className="fabric--vertical-navbar-header" {...props}>
      {children}
    </StyledNavbarHeader>
  );
}
