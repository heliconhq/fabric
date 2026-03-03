import { ComponentProps } from 'react';
import style from '../../utils/style';
import { useTheme } from '../../hooks';

type Props = ComponentProps<'div'> & {
  isPadded?: boolean
}

const Container = style('div')<Props>({
  base: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  variants: {
    isPadded: {
      true: ({ theme }) => ({
        gap: `calc(${theme.spacing.standard} * 2)`,
      }),
    },
  },
});

const MetricHeader = ({ children, ...props }: Props) => {
  const { theme } = useTheme();

  return (
    <Container theme={theme} {...props}>
      {children}
    </Container>
  );
};

export default MetricHeader;
