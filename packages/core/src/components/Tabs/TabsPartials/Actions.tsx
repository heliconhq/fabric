import style from '../../../utils/style';

export default style('div')({
  base: {
    marginLeft: 'auto',
    display: 'flex',

    '> *:not(:first-of-type)': {
      marginLeft: '0.5rem',
    },
  },
});
