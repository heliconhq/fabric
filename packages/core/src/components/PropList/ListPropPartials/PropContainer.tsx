import style from '../../../utils/style';

export default style('div')({
  base: {
    '&:not(:last-child)': {
      marginBottom: '1rem',
    },
  },
});
