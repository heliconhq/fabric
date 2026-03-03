import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import style from '../utils/style';

type Props = {
  children: ReactNode;
  open?: boolean;
  withPortal?: boolean;
};

const StyledDialog = style('dialog')({
  base: {
    padding: '0px',
    borderWidth: '0px',
    top: 0,
    left: 0,
  },
});

export default function Portal({ children, open = true, withPortal }: Props) {
  if (withPortal) {
    return createPortal(
      <StyledDialog open={open}>{children}</StyledDialog>,
      document.body
    );
  }
  return <StyledDialog open={open}>{children}</StyledDialog>;
}
