import style from '../../../utils/style';

export default style('div')({
  base: ({ theme }) => ({
    fontSize: '0.9rem',
    whiteSpace: 'nowrap',
    position: 'absolute',
    left: '50%',
    bottom: '0',
    paddingTop: '0.2rem',
    transform: 'translate(-50%, 100%)',
    color: theme.layer.palette.contextual.textMuted,
  }),
});
