import style from '../../../utils/style';
import { StyleProps } from '../types';

export default style('div')<StyleProps>({
  base: ({ theme, colorRange, imageURL, hasBorder }) => ({
    fontWeight: theme.typography.normal.medium,
    textTransform: 'uppercase',
    display: 'flex',
    flexDirection: 'column',
    background: colorRange[200],
    alignItems: 'center',
    justifyContent: 'center',
    color: colorRange[1100],
    border: `${hasBorder ? colorRange[1100] : colorRange[200]} solid 1px`,
    ...(!!imageURL && {
      backgroundImage: `url(${imageURL})`,
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
    }),
  }),
  variants: {
    size: {
      xlarge: {
        width: '10rem',
        height: '10rem',
        fontSize: '1.5rem',
      },
      large: {
        width: '6rem',
        height: '6rem',
        fontSize: '1.2rem',
      },
      medium: {
        width: '4rem',
        height: '4rem',
        fontSize: '1rem',
      },
      small: {
        width: '3rem',
        height: '3rem',
        fontSize: '0.9rem',
      },
      xsmall: {
        width: '2rem',
        height: '2rem',
        fontSize: '0.8rem',
      },
    },
    design: {
      square: ({ theme }) => ({
        borderRadius: theme.bevels.reduced,
      }),
      round: {
        borderRadius: '50%',
      },
    },
  },
});
