import React from 'react';

import style from '../../utils/style';

type Props = {
  children?: React.ReactNode;
  scrollInside: boolean;
};

type StyledProps = {
  scrollInside: boolean;
};

const StyledModalBody = style('div')<StyledProps>({
  base: ({ theme, scrollInside }) => ({
    overflow: scrollInside ? 'auto' : 'visible',
    flex: '1 1 auto',
    padding: `1px ${theme.spacing.standard}`,
    '&:first-of-type': {
      paddingTop: theme.spacing.standard,
    },
    '&:last-child': {
      paddingBottom: theme.spacing.standard,
    },
    '>*:last-child': {
      marginBottom: 0,
    },
  }),
});

const ModalBody = ({ children, scrollInside = false }: Props) => (
  <StyledModalBody scrollInside={scrollInside} className="fabric--modal-body">
    {children}
  </StyledModalBody>
);

export default ModalBody;
