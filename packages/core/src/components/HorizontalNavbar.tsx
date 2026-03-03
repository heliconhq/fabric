import { useEffect, ReactNode } from 'react';
import style from '../utils/style';

import { useAppState } from '../hooks/useAppState';

import Layer from './Layer';

type Props = {
  children?: ReactNode;
  layer?: string;
  offsetAmount?: string;
  offset?: boolean;
  fixed?: boolean;
};

type StyledProps = {
  fixed: boolean;
};

const StyledNavbar = style('div')<StyledProps>({
  base: ({ theme }) => ({
    background: theme.layer.palette.contextual.background,
    color: theme.layer.palette.contextual.text,
    display: 'flex',
    padding: '0.4rem',
    alignItems: 'center',

    '.fabric--navlink': {
      '> *': {
        padding: '0.2rem 0.5rem',
        marginBottom: '0',
      },
    },
  }),
  variants: {
    fixed: {
      true: {
        position: 'fixed',
        left: '0',
        right: '0',
        zIndex: '1',
      },
    },
  },
});

export default function HorizontalNavbar({
  children,
  layer: layerName = 'navigation',
  offsetAmount = '3.6rem',
  offset = false,
  fixed = true,
  ...props
}: Props) {
  const { addOffset, remOffset } = useAppState();

  useEffect(() => {
    if (offset) {
      addOffset('horizontal-navbar', offsetAmount, 'top');
    }

    return () => {
      if (offset) {
        remOffset('horizontal-navbar', 'top');
      }
    };
  }, []);

  return (
    <Layer layer={layerName}>
      <StyledNavbar
        fixed={fixed}
        className="fabric--horizontal-navbar"
        {...props}
      >
        {children}
      </StyledNavbar>
    </Layer>
  );
}
