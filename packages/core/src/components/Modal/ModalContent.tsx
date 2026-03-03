import React from 'react';

import { BevelValue } from '../../types/theme';
import style from '../../utils/style';

type SizeValue =
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'full'
  | 'span';

type Props = {
  children: React.ReactNode;
  centered?: boolean;
  size?: SizeValue;
  scrollInside?: boolean;
  bevel?: BevelValue;
  zIndex?: number;
};

type StyledProps = {
  bevel: BevelValue;
  size: SizeValue;
  scrollInside: boolean;
  centered: boolean;
};

const widths = {
  xsmall: 400,
  small: 500,
  medium: 600,
  large: 900,
  xlarge: 1200,
  full: 'none',
  span: 'none',
};

const heights = {
  xsmall: 'min(400px, 50vh)',
  small: 'min(400px, 50vh)',
  medium: 'min(500px, 50vh)',
  large: '80vh',
  xlarge: '80vh',
  full: 'calc(100vh - 3.4rem)',
  span: '100vh',
};

const StyledModalContent = style('div')<StyledProps>({
  base: ({ theme, size, bevel }) => ({
    display: 'flex',
    flexDirection: 'column',
    borderRadius: theme.bevels[bevel],
    background: theme.layer.palette.contextual.background,
    color: theme.layer.palette.contextual.text,
    margin: 'max(3.4rem, 10vh) auto 4rem',
    width: '100%',
    maxWidth: widths[size] || size,
  }),
  variants: {
    size: {
      full: {
        marginTop: '3.4rem',
        marginBottom: 0,
      },
      span: {
        marginTop: 0,
        marginBottom: 0,
      },
    },
    scrollInside: {
      true: ({ size }) => ({
        maxHeight: heights[size] || size,
      }),
    },
    centered: {
      true: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        marginTop: 0,
        marginBottom: 0,
      },
    },
  },
});

const ModalContent = ({
  size = 'small',
  bevel = 'standard',
  scrollInside = false,
  centered = false,
  children,
}: Props) => (
  <StyledModalContent
    className="fabric--modal-content"
    bevel={bevel}
    size={size}
    scrollInside={scrollInside}
    centered={centered}
  >
    {children}
  </StyledModalContent>
);
export default ModalContent;
export type { SizeValue };
