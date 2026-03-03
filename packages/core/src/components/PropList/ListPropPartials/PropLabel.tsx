import style from '../../../utils/style';

export default style('div')({
  base: ({ theme }) => ({
    fontSize: '0.9rem',
    fontWeight: theme.typography.normal.medium,
    color: theme.layer.palette.contextual.textMuted,
    marginBottom: '0.3rem',
  }),
});
