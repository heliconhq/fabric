import style from '../../../utils/style';
import { StyledProps } from '../types';

const sizes = {
  xsmall: '1rem',
  small: '1.5rem',
  medium: '2.4rem',
  large: '4.0rem',
  xlarge: '5.0rem',
};

export default style('div')<
  Pick<StyledProps, 'size' | 'appearance' | 'layer' | 'rim'>
>({
  base: ({ layer, size, appearance }) => ({
    width: sizes[size],
    height: sizes[size],
    borderRadius: '50%',
    color:
      appearance === 'neutral'
        ? layer.palette.contextual.actionText
        : layer.palette.semantic[appearance].contrast,
    background:
      appearance === 'neutral'
        ? layer.palette.contextual.action
        : layer.palette.semantic[appearance][700],
    display: 'inline-block',
    position: 'relative',
  }),
  variants: {
    rim: {
      true: ({ size, appearance, layer }) => ({
        '&:before': {
          content: "''",
          width: `calc(1.6 * ${sizes[size]})`,
          height: `calc(1.6 * ${sizes[size]})`,
          borderRadius: '50%',
          background:
            appearance === 'neutral'
              ? layer.palette.contextual.action
              : layer.palette.semantic[appearance][700],
          display: 'inline-block',
          opacity: 0.3,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
      }),
    },
  },
});
