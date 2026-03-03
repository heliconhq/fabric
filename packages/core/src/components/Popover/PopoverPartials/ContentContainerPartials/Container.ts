import style from '../../../../utils/style';
import { positionDirections } from '../../types';

type StyledProps = {
  positionValues: {
    top: number;
    left: number;
  };
  position: positionDirections;
  withPortal?: boolean;
};

export default style('div')<StyledProps>({
  base: ({ positionValues }) => ({
    zIndex: '1',
    position: 'absolute',
    transform: `translateX(${positionValues.left}px) translateY(${positionValues.top}px) `,
  }),
  variants: {
    withPortal: {
      true: ({ positionValues }) => ({
        position: 'fixed',
        transform: `translateX(0px) translateY(0px) `,
        top: positionValues.top,
        left: positionValues.left,
      }),
    },
  },
});
