import { PropsWithChildren } from 'react';
import style from '../../../utils/style';

type Props = {
  stretch: boolean;
};

const StyledValue = style('div')<Props>({
  base: {
    display: 'table-cell',
  },
  variants: {
    stretch: {
      true: {
        textAlign: 'right',
      },
    },
  },
});

export default function Value({ stretch, children }: PropsWithChildren<Props>) {
  return (
    <StyledValue stretch={stretch} className="value">
      {children}
    </StyledValue>
  );
}
