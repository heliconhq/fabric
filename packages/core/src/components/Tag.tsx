import { ReactNode } from 'react';

import style from '../utils/style';
import { DefinitiveColorValue } from '../types/theme';

type Props = {
  value?: ReactNode;
  color?: DefinitiveColorValue;
  bright: boolean;
  uppercase: boolean;
  monospace: boolean;
  children?: ReactNode;
};

type StyledTagProps = {
  color?: DefinitiveColorValue;
  uppercase: boolean;
  monospace: boolean;
  variant: string;
};

const StyledTag = style('div')<StyledTagProps>({
  base: ({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-block',
    padding: '0.25rem 0.5rem',
    borderRadius: theme.bevels.reduced,
    fontWeight: theme.typography.normal.medium,
    lineHeight: 'normal',
    whiteSpace: 'nowrap',
    fontSize: '0.9rem',
    zIndex: 0,
  }),
  variants: {
    variant: {
      'neutral-bright': ({ theme }) => ({
        background: theme.layer.palette.neutrals[700],
        color: theme.layer.palette.neutrals.contrast,
      }),
      'neutral-dim': ({ theme }) => ({
        background: theme.layer.palette.neutrals[200],
        color: theme.layer.palette.neutrals[1100],
      }),
      'color-bright': ({ theme, color }) => ({
        background: theme.layer.palette.definitive[color!][700],
        color: theme.layer.palette.definitive[color!].contrast,
      }),
      'color-dim': ({ theme, color }) => ({
        background: theme.layer.palette.definitive[color!][200],
        color: theme.layer.palette.definitive[color!][1100],
      }),
    },
    monospace: {
      true: ({ theme }) => ({
        fontFamily: theme.typography.monospace.family,
        fontWeight: theme.typography.monospace.medium,
        fontSize: '1.0rem',
      }),
    },
    uppercase: {
      true: {
        textTransform: 'uppercase',
        fontSize: '0.8rem',
      },
    },
  },
});

const Tag = ({
  value,
  bright = false,
  uppercase = false,
  children,
  color,
  monospace = false,
  ...props
}: Props) => {
  const prefix = typeof color === 'undefined' ? 'neutral' : 'color';
  const suffix = bright ? 'bright' : 'dim';
  const variant = `${prefix}-${suffix}`;

  return (
    <StyledTag
      className="fabric--tag"
      color={color}
      uppercase={uppercase}
      variant={variant}
      monospace={monospace}
      {...props}
    >
      {typeof value === 'undefined' ? children : value}
    </StyledTag>
  );
};

export default Tag;
