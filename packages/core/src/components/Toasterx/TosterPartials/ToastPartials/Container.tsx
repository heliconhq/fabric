import { keyframes } from '@emotion/react';
import {
  AppearanceValue,
  NotificationPositionValue,
  ProcessedTheme,
} from '../../../../types/theme';
import style from '../../../../utils/style';
import Backdrop from '../../../Backdrop';

type StyledProps = {
  theme: ProcessedTheme;
  appearance: AppearanceValue;
  position?: NotificationPositionValue;
  textContent: boolean;
  reverseAnimation?: boolean;
  disableAnimation?: boolean;
};

const selectAnimation = (
  position?: NotificationPositionValue,
  reverse?: boolean
) => {
  let isTop =
    typeof position === 'undefined' ||
    ['top', 'top-left', 'top-right'].includes(position);
  if (reverse) {
    isTop = !isTop;
  }

  return keyframes({
    from: { transform: `translateY(${isTop ? '-100%' : '100%'})` },
    to: { transform: 'transform: translateY(0%)' },
  });
};
export default style(Backdrop)<StyledProps>({
  base: ({ theme, position, reverseAnimation, disableAnimation }) => ({
    padding: '0.5rem',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: theme.bevels.reduced,
    marginBottom: '0.5rem',
    boxShadow: theme.elevation.standard,
    animation: ` ${
      !disableAnimation && selectAnimation(position, reverseAnimation)
    } 150ms ease-in-out`,
  }),
  variants: {
    textContent: {
      true: {
        maxWidth: '30ch',
        lineHeight: '150%',
        fontSize: '0.9rem',
      },
    },
  },
});
