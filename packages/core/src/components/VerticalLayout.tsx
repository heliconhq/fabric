import { ReactNode } from 'react';

import style from '../utils/style';
import { useTheme } from '../hooks/useTheme';

import Layer from './Layer';

type Props = {
  children?: ReactNode;
  fixed?: boolean;
  layer?: string;
};

const StyledVerticalLayout = style(Layer)({
  base: {
    position: 'relative',
    display: 'flex',
    height: '100%',
    overflow: 'auto',
    alignItems: 'stretch',
    '> *:nth-of-type(1)': {
      flex: '0 0 auto',
    },
    '> *:nth-of-type(2)': {
      flex: 'auto',
    },
  },
  variants: {
    fixed: {
      true: {
        '> *:nth-of-type(2)': {
          overflow: 'auto',
        },
      },
    },
  },
});

export default function VerticalLayout({
  children,
  layer: layerName = 'default',
  fixed = true,
  ...props
}: Props) {
  const { theme } = useTheme();

  return (
    <StyledVerticalLayout
      className="fabric--vertical-layout"
      theme={theme}
      layer={layerName}
      fixed={fixed}
      {...props}
    >
      {children}
    </StyledVerticalLayout>
  );
}
