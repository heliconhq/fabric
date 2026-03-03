import { AppearanceValue } from '../../../types/theme';
import style from '../../../utils/style';

type StyleBarProps = {
  percentage: number;
  appearance: AppearanceValue;
};

export default style('div')<StyleBarProps>({
  base: ({ theme, appearance, percentage }) => ({
    gridArea: 'bar',
    alignSelf: 'center',
    position: 'relative',
    top: '0',
    left: '0',
    height: '0.5rem',
    width: '100%',
    borderRadius: theme.bevels.reduced,
    background: theme.layer.palette.contextual.divider,

    '&:after': {
      display: 'block',
      content: '""',
      position: 'absolute',
      borderRadius: 'inherit',
      top: '0',
      left: '0',
      height: '100%',
      width: `${percentage}%`,
      background:
        appearance === 'neutral'
          ? theme.layer.palette.neutrals[700]
          : theme.layer.palette.semantic[appearance][700],
    },
  }),
});
