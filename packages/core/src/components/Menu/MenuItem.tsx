import { ReactNode } from 'react';
import style from '../../utils/style';

import { useMenu } from './Menu';

type Props = {
  onClick?: () => unknown;
  persistOnClick?: boolean;
  children?: ReactNode;
  label?: string;
};

const StyledMenuItem = style('div')({
  base: ({ theme }) => ({
    display: 'block',
    padding: '0.5rem',
    color: theme.layer.palette.contextual.text,
    cursor: 'pointer',
    '&:not(:disabled):hover': {
      background: theme.layer.palette.neutrals[100],
    },
    '&:not(:disabled):active': {
      background: theme.layer.palette.neutrals[200],
    },
  }),
});

export default function MenuItem({
  onClick: itemOnClick,
  persistOnClick,
  ...props
}: Props) {
  const { onClose } = useMenu();
  const onClick = () => {
    if (typeof itemOnClick === 'function') {
      itemOnClick();
    }
    if (!persistOnClick) {
      onClose();
    }
  };

  return <StyledMenuItem onClick={onClick} {...props} />;
}
