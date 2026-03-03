import style from '../../../utils/style';

export default style('span')({
  base: ({ theme }) => ({
    color: theme.layer.palette.contextual.textMuted,
    marginLeft: '0.4rem',
    fontWeight: theme.typography.normal.normal,
  }),
});
