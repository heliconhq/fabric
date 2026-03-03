import style from '../../../utils/style';

export default style('div')<{ variant?: 'maxValue' | 'afterValue' }>({
  base: {
    marginBottom: '0.5rem',
    gridArea: 'labels',
    fontSize: '0.9rem',
    whiteSpace: 'nowrap',
    display: 'flex',
    width: '100%',
  },
  variants: {
    variant: {
      maxValue: { justifyContent: 'end' },
      afterValue: {
        gridArea: 'after',
        alignSelf: 'center',
        marginLeft: '0.75rem',
        marginBottom: 0,
      },
    },
  },
});
