import { ReactNode } from 'react';

import style from '../utils/style';
import { useTheme } from '../hooks/useTheme';

import Layer from './Layer';

type Props = {
  children?: ReactNode;
  fixed?: boolean;
  layer?: string;
};

const StyledHorizontalLayout = style(Layer)({
  base: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflow: 'auto',
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

export default function HorizontalLayout({
  children,
  fixed = true,
  layer: layerName = 'default',
  ...props
}: Props) {
  const { theme } = useTheme();

  return (
    <StyledHorizontalLayout
      className="fabric--horizontal-layout"
      theme={theme}
      fixed={fixed}
      layer={layerName}
      {...props}
    >
      {children}
    </StyledHorizontalLayout>
  );
}
