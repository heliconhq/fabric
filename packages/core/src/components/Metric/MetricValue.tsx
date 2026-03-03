import { PropsWithChildren, ReactNode } from 'react';

import { useTheme } from '../../hooks';

import style from '../../utils/style';

type Props = {
  unit?: ReactNode;
  oversized?: boolean;
  decimals?: number;
  value?: number;
};

const Container = style('div')<Props>({
  base: ({ theme }) => ({
    display: 'flex',
    alignItems: 'end',
    fontSize: '1rem',
    fontWeight: theme.typography.normal.thin,
  }),
  variants: {
    oversized: {
      true: ({ theme }) => ({
        fontSize: '2rem',
        fontWeight: theme.typography.normal.medium,
      }),
    },
  },
});

const Unit = style('p')<Props>({
  base: ({ theme }) => ({
    whiteSpace: 'nowrap',
    fontSize: '1.0rem',
    margin: '0',
    marginLeft: theme.spacing.minimal,
    fontWeight: theme.typography.normal.normal,
  }),
  variants: {
    oversized: {
      true: ({ theme }) => ({
        fontWeight: theme.typography.normal.normal,
      }),
    },
  },
});

const MetricValue = ({
  unit,
  oversized,
  children,
  value,
  decimals = 3,
  ...props
}: PropsWithChildren<Props>) => {
  const { theme } = useTheme();
  let displayValue = '';
  if ((value || value === 0) && decimals >= 0) {
    displayValue = value.toFixed(decimals);
  }
  return (
    <Container theme={theme} oversized={oversized} {...props}>
      {children || displayValue || '-'}
      <Unit theme={theme} oversized={oversized}>
        {unit}
      </Unit>
    </Container>
  );
};

export default MetricValue;
