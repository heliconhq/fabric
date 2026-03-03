import React from 'react';

import style from '../../utils/style';

type Props = {
  children?: React.ReactNode;
  extra?: React.ReactNode;
};

type StyledProps = object;

const StyledModalFooter = style('div')<StyledProps>({
  base: ({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.standard,
    flex: 0,
  }),
});

const ModalFooter = ({ children, extra, ...props }: Props) => (
  <StyledModalFooter className="fabric--modal-footer" {...props}>
    <div className="extra">{extra}</div>
    <div className="buttons">{children}</div>
  </StyledModalFooter>
);

export default ModalFooter;
