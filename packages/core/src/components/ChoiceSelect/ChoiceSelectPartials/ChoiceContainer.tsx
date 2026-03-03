import { LayerValue, ProcessedTheme } from '../../../types/theme';
import style from '../../../utils/style';

type StyledChoiceSelectProps = {
  theme: ProcessedTheme;
  layer: LayerValue;
  block: boolean;
  minChildWidth: string;
};

export default style('div')<StyledChoiceSelectProps>({
  base: ({ theme, layer }) => ({
    border: `1px solid ${layer.palette.contextual.divider}`,
    borderRadius: theme.bevels.reduced,
    padding: '2px',
    display: 'inline-flex',

    '&[aria-disabled="true"]': {
      opacity: 0.75,
      pointerEvents: 'none',
    },
  }),
  variants: {
    block: {
      true: ({ minChildWidth }) => ({
        display: 'grid',
        gridGap: '1px',
        gridTemplateColumns: `repeat(auto-fit, minmax(${minChildWidth}, 1fr))`,
      }),
    },
  },
});
