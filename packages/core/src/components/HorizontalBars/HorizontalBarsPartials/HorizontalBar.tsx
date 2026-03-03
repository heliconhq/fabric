import { AppearanceValue } from '../../../types/theme';
import style from '../../../utils/style';

type StyledBarProps = {
  appearance: AppearanceValue;
  percentage?: number;
  shadows?: boolean;
};
export default style('div')<StyledBarProps>({
  base: ({ theme, appearance, percentage }) => ({
    height: '100%',
    position: 'relative',
    maxWidth: '.75rem',
    borderRadius: '0.1rem',

    '&:after': {
      borderRadius: '0.2rem',
      display: 'block',
      content: '""',
      position: 'absolute',
      bottom: '0',
      left: '0',
      background:
        appearance === 'neutral'
          ? theme.layer.palette.neutrals[600]
          : theme.layer.palette.semantic[appearance][700],
      width: '100%',
      height: `${percentage}%`,
    },
  }),
  variants: {
    shadows: {
      true: ({ theme }) => ({ background: theme.layer.palette.neutrals[200] }),
    },
  },
});
