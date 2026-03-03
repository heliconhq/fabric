import { ReactNode } from 'react';

import style from '../../utils/style';

type Props = {
  children?: ReactNode;
};

const StyledNavbarBody = style('div')({
  base: {
    padding: '1rem 0.7rem',
  },
});

const VerticalNavbarBody = ({
  children,
  ...props
}: Props) => (
  <StyledNavbarBody className="fabric--vertical-navbar-body" {...props}>
    {children}
  </StyledNavbarBody>
);

VerticalNavbarBody.displayName = 'VerticalNavbarBody';

export default VerticalNavbarBody;
