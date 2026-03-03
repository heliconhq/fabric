import { keyframes } from '@emotion/react';
import { LeftRightAlignmentValue } from '../../../types/theme';
import style from '../../../utils/style';

type StyleProps = {
  closing: boolean;
  width: string;
  position: LeftRightAlignmentValue;
};

const animationDuration = '300ms';
const animationEasing = 'cubic-bezier(0.4, 0, 0.2, 1)';

const SlideRight = (closing: boolean) =>
  keyframes({
    from: { transform: closing ? 'translateX(0)' : 'translateX(100%)' },
    to: { transform: closing ? 'translateX(100%)' : 'translateX(0)' },
  });
const SlideLeft = (closing: boolean) =>
  keyframes({
    from: { transform: closing ? 'translateX(0)' : 'translateX(-100%)' },
    to: { transform: closing ? 'translateX(-100%)' : 'translateX(0)' },
  });

export default style('div')<StyleProps>({
  base: ({ theme, width }) => ({
    background: theme.layer.palette.contextual.background,
    color: theme.layer.palette.contextual.text,
    width,
    position: 'fixed',
    top: '0',
    bottom: '0',
    cursor: 'default',
  }),
  variants: {
    position: {
      left: ({ closing }) => ({
        animation: `${SlideLeft(
          closing
        )} ${animationDuration} ${animationEasing}`,
        left: 0,
      }),
      right: ({ closing }) => ({
        animation: `${SlideRight(
          closing
        )} ${animationDuration} ${animationEasing}`,
        right: 0,
      }),
    },
  },
});
