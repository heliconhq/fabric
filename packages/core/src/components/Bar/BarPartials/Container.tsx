import style from '../../../utils/style';

export default style('div')({
  base: {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gridTemplateAreas: '"labels empty" "bar after"',
  },
});
