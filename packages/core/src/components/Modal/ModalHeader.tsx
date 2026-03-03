import React from 'react';

import Button from '../Button';
import style from '../../utils/style';
import Title from '../Typography/Title';

type Props = {
  children?: React.ReactNode;
  onClose?: () => void;
};

type StyledProps = object;

const StyledModalHeader = style('div')<StyledProps>({
  base: ({ theme }) => ({
    padding: theme.spacing.standard,
    flex: 0,
  }),
});

export default function ModalHeader({ children, onClose, ...props }: Props) {
  return (
    <StyledModalHeader {...props}>
      <Title
        margin="none"
        level="h3"
        extra={
          typeof onClose === 'function' && (
            <Button icon="close" onClick={onClose} design="text" />
          )
        }
      >
        {children}
      </Title>
    </StyledModalHeader>
  );
}
