import { keyframes } from '@emotion/react';
import style from '../utils/style';

import { useTheme } from '../hooks';
import { AppearanceValue, SizeValue } from '../types/theme';

type Props = {
  appearance?: AppearanceValue;
  speed?: 'high' | 'medium' | 'low';
  size?: SizeValue;
};

type StyleProps = {
  appearance: AppearanceValue;
  speed: 'high' | 'medium' | 'low';
  size: SizeValue;
};

const speeds = {
  high: 600,
  medium: 1200,
  low: 2400,
};

const sizes = {
  small: '12px',
  medium: '16px',
  large: '24px',
};

const pulseAnimation = keyframes`
  0% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
  }

  80% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(2);
  }

  100% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(3);
  }
`;

const StyledMarker = style('div')<StyleProps>({
  base: ({ theme, size, appearance, speed }) => ({
    width: sizes[size],
    height: sizes[size],
    borderRadius: '50%',
    background:
      appearance === 'neutral'
        ? theme.layer.palette.contextual.action
        : theme.layer.palette.semantic[appearance][700],
    position: 'relative',
    display: 'inline-block',

    '&:after': {
      pointerEvents: 'none',
      content: "''",
      display: 'block',
      width: `calc(1.8 * ${sizes[size]})`,
      height: `calc(1.8 * ${sizes[size]})`,
      borderRadius: '50%',
      border: `calc(${sizes[size]} / 2.4) solid ${
        appearance === 'neutral'
          ? theme.layer.palette.contextual.action
          : theme.layer.palette.semantic[appearance][700]
      }`,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      boxSizing: 'border-box',
      animation: `${pulseAnimation} ${speeds[speed]}ms ease 0s infinite`,
    },
  }),
});

export default function PulseMarker({
  appearance = 'primary',
  speed = 'medium',
  size = 'medium',
  ...props
}: Props) {
  const { theme } = useTheme();

  return (
    <StyledMarker
      {...props}
      className="fabric--marker"
      theme={theme}
      speed={speed}
      size={size}
      appearance={appearance}
      {...props}
    />
  );
}
