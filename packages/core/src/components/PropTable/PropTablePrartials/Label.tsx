import { PropsWithChildren } from 'react';
import style from '../../../utils/style';
import { MarginValue } from '../../../types/theme';

type Props = {
  gap: MarginValue;
};

const StyledLabel = style('div')<Props>({
  base: ({ gap, theme }) => ({
    display: 'table-cell',
    paddingRight: theme.spacing[gap] || '0.5rem',
    whiteSpace: 'nowrap',
    width: '0',
    fontWeight: theme.typography.normal.medium,
  }),
});

export default function Label({ gap, children }: PropsWithChildren<Props>) {
  return (
    <StyledLabel gap={gap} className="value">
      {children}
    </StyledLabel>
  );
}
