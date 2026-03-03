import style from '../../../utils/style';

type StyleProps = {
  padded: boolean;
};
export default style('div')<StyleProps>({
  base: {
    cursor: 'auto',
    pointerEvents: 'none',
    display: 'flex',
    flexDirection: 'column',
    '> *': {
      pointerEvents: 'auto',
    },
  },
  variants: {
    padded: {
      true: {
        padding: '0 1rem',
      },
    },
  },
});
