import { LayerValue, ProcessedTheme } from '../../../types/theme';
import style from '../../../utils/style';

type StyledChoiceProps = {
  theme: ProcessedTheme;
  layer: LayerValue;
  selected: boolean;
  block: boolean;
  minChildWidth: string;
};
export default style('div')<StyledChoiceProps>({
  base: ({ theme, layer, minChildWidth }) => ({
    background: layer.palette.contextual.background,
    color: layer.palette.contextual.textMuted,
    borderRadius: theme.bevels.compact,
    padding: '0.4rem 0.6rem',
    cursor: 'pointer',
    textAlign: 'center',
    maxWidth: minChildWidth,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }),
  variants: {
    block: {
      true: () => ({
        maxWidth: 'none',
      }),
    },
    selected: {
      true: ({ layer, theme }) => ({
        fontWeight: theme.typography.normal.medium,
        background: layer.palette.contextual.selected,
        color: layer.palette.contextual.text,
        borderRadius: theme.bevels.reduced,
      }),
    },
  },
});
