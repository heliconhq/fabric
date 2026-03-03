import { ReactNode } from 'react';

import style from '../../utils/style';

import Button from '../Button';

import { useMenu } from './Menu';
import Title from '../Typography/Title';

type Props = {
  children: ReactNode;
};

const StyledMenuTitle = style('div')({
  base: {
    display: 'block',
    padding: '0.5rem 0.5rem 0.25rem',
  },
});

const MenuTitle = ({ children, ...props }: Props) => {
  const { onClose } = useMenu();

  return (
    <StyledMenuTitle {...props}>
      <Title
        margin="none"
        level="h5"
        extra={<Button onClick={onClose} icon="close" size="small" />}
      >
        {children}
      </Title>
    </StyledMenuTitle>
  );
};

MenuTitle.displayName = 'MenuTitle';

export default MenuTitle;
