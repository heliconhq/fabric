import { BevelValue } from '../../../types/theme';
import style from '../../../utils/style';
import Backdrop from '../../Backdrop';

type StyleProps = {
  bevel: BevelValue;
  elevated?: boolean;
  active?: boolean;
  reduced?: boolean;
  borders?: boolean;
};

export default style(Backdrop)<StyleProps>({
  base: ({ theme, bevel }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1rem',
    borderRadius: theme.bevels[bevel],
    boxShadow: 'none',
    background: theme.layer.palette.contextual.background,
    color: theme.layer.palette.contextual.text,
  }),
  variants: {
    borders: {
      true: ({ theme }) => ({
        border: `1px solid ${theme.layer.palette.contextual.divider}`,
      }),
    },
    elevated: {
      true: ({ theme }) => ({
        boxShadow: theme.elevation.standard,
      }),
    },
    reduced: {
      true: {
        fontSize: '0.9rem',
      },
    },
  },
});
