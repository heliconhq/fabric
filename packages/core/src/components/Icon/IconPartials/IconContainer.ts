import style from '../../../utils/style';

type StyleProps = {
  size: string;
  clickable: boolean;
  block: boolean;
};

export default style('div')<StyleProps>({
  base: ({ size }) => ({
    width: size,
    height: size,
    display: 'inline-block',
    cursor: 'inherit',
    svg: {
      width: '100%',
      height: '100%',
    },
  }),
  variants: {
    block: {
      true: {
        display: 'block',
      },
    },
    clickable: {
      true: {
        cursor: 'pointer',
      },
    },
  },
});
