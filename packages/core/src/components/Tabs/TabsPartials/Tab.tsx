import { AppearanceValue } from '../../../types/theme';
import style from '../../../utils/style';

type StyledTabProps = {
  active: boolean;
  appearance: AppearanceValue;
};

export default style('div')<StyledTabProps>({
  base: ({ theme }) => ({
    marginRight: '1rem',
    fontWeight: theme.typography.normal.medium,
    padding: '0.15rem 0',
    borderBottom: '3px solid transparent',
    cursor: 'pointer',
    lineHeight: '1.5',
  }),
  variants: {
    active: {
      true: ({ appearance, theme }) => ({
        color:
          appearance === 'neutral'
            ? theme.layer.palette.neutrals[700]
            : theme.layer.palette.semantic[appearance][700],
        borderBottomColor:
          appearance === 'neutral'
            ? theme.layer.palette.neutrals[700]
            : theme.layer.palette.semantic[appearance][700],
      }),
    },
  },
});
