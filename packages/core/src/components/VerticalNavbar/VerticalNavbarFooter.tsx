import { ReactNode } from 'react';

import style from '../../utils/style';

type Props = {
  children?: ReactNode;
  border?: boolean;
};

const StyledNavbarFooter = style('div')({
  base: {
    padding: '0.7rem',
  },
  variants: {
    border: {
      true: ({ theme }) => ({
        borderTop: `1px solid ${theme.layer.palette.contextual.border}`,
      }),
    },
  },
});

export default function VerticalNavbarFooter({ children, ...props }: Props) {
  return (
    <StyledNavbarFooter className="fabric--vertical-navbar-footer" {...props}>
      {children}
    </StyledNavbarFooter>
  );
}
