import { DefinitiveColorValue, ExtendedSizeValue } from '../../../types/theme';
import style from '../../../utils/style';
import { DesignValue } from '../IconBadge';

type StyleProps = {
  color: DefinitiveColorValue;
  bright: boolean;
  design: DesignValue;
  size: ExtendedSizeValue;
};

const sizes = {
  xsmall: '1.2rem',
  small: '2rem',
  medium: '3rem',
  large: '4rem',
  xlarge: '6rem',
};

export default style('div')<StyleProps>({
  base: ({ theme, size, color }) => ({
    width: sizes[size],
    height: sizes[size],
    flexDirection: 'column',
    background: theme.layer.palette.definitive[color][200],
    color: theme.layer.palette.definitive[color][1100],
    position: 'relative',
    '.fabric--icon': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  }),
  variants: {
    design: {
      square: ({ theme }) => ({
        borderRadius: theme.bevels.reduced,
      }),
      round: {
        borderRadius: '50%',
      },
    },
    bright: {
      true: ({ theme, color }) => ({
        background: theme.layer.palette.definitive[color][700],
        color: theme.layer.palette.definitive[color].contrast,
      }),
    },
  },
});
