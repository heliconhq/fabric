import style from '../../../../utils/style';

export default style('div')({
  base: ({ theme }) => ({
    position: 'absolute',
    top: '12px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontWeight: theme.typography.normal.bold,
    userSelect: 'none',
    pointerEvents: 'none',
    background: theme.layer.palette.contextual.background,
    borderRadius: '0.2rem',
    padding: '0.2rem 0.3rem',
    zIndex: '1',
    fontSize: '1.1rem',
  }),
});
