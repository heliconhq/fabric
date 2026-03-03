import { ComponentProps } from 'react';

import { useTheme } from '../../hooks';
import style from '../../utils/style';

import Panel from '../Panel';
import MetricHeader from './MetricHeader';
import MetricValue from './MetricValue';

type Props = ComponentProps<typeof Panel>;

const Container = style(Panel)<Props>({
  base: ({ theme }) => ({
    '.fabric--panel-content': {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing.reduced,
    },
  }),
});

const Metric = ({ children, ...props }) => {
  const { theme } = useTheme();

  return (
    <Container theme={theme} {...props}>
      {children}
    </Container>
  );
};

Metric.Header = MetricHeader;
Metric.Value = MetricValue;

export default Metric;
