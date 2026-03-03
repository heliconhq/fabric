import { NotificationPositionValue } from '../../../types/theme';
import style from '../../../utils/style';

type StyleProps = {
  position: NotificationPositionValue;
  portal: boolean;
};

export default style('div')<StyleProps>({
  base: {
    zIndex: 1,
    position: 'absolute',
    display: 'flex',
  },
  variants: {
    portal: {
      true: { position: 'fixed' },
    },
    position: {
      top: {
        flexDirection: 'column',
        alignItems: 'center',
        top: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      'top-right': {
        flexDirection: 'column',
        alignItems: 'flex-start',
        top: '1rem',
        left: '1rem',
      },
      'top-left': {
        flexDirection: 'column',
        alignItems: 'flex-start',
        top: '1rem',
        left: '1rem',
      },
      bottom: {
        flexDirection: 'column-reverse',
        alignItems: 'center',
        bottom: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
      },
      'bottom-left': {
        flexDirection: 'column-reverse',
        alignItems: 'flex-start',
        bottom: '1rem',
        left: '1rem',
      },
      'bottom-right': {
        flexDirection: 'column-reverse',
        alignItems: 'flex-end',
        bottom: '1rem',
        right: '1rem',
      },
    },
  },
});
