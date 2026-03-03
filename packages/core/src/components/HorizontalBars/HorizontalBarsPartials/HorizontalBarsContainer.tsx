import style from '../../../utils/style';

type StyledHorizontalBarsProps = {
  size: number;
};

export default style('div')<StyledHorizontalBarsProps>({
  base: ({ size }) => ({
    maxWidth: `calc(${size}rem + ${size < 5 ? 2 : 4}rem)`,
    height: '100%',
    display: 'grid',
    gridAutoColumns: '1fr',
    gridAutoFlow: 'column',
    gridGap: '0.25rem',
    paddingBottom: '1rem',
  }),
});
