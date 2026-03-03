import { keyframes } from '@emotion/react';

import { AppearanceValue, LayerValue } from '../types/theme';
import { useTheme } from '../hooks';

import style from '../utils/style';

type Props = {
  size?: 'small' | 'medium' | 'large' | string;
  appearance?: AppearanceValue;
};

type StyleProps = {
  size: 'small' | 'medium' | 'large' | string;
  appearance: AppearanceValue;
  layer: LayerValue;
};

const spin = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const sizes = {
  small: '1.0rem',
  medium: '1.6rem',
  large: '2.4rem',
  fluid: '100%',
};

const StyledSpinner = style('div')<StyleProps>({
  base: ({ size, layer, appearance }) => ({
    display: 'inline-block',
    position: 'relative',

    width: (sizes[size] as string) || size,
    height: (sizes[size] as string) || size,

    color:
      appearance === 'neutral'
        ? layer.palette.neutrals[600]
        : layer.palette.semantic[appearance][700],

    '& svg': {
      width: '100%',
      height: '100%',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      animation: `${spin} 1000ms infinite linear`,
    },
  }),
});

export default function Spinner({
  appearance = 'neutral',
  size = 'medium',
  ...props
}: Props) {
  const { theme, layer } = useTheme();

  return (
    <StyledSpinner
      theme={theme}
      layer={layer}
      appearance={appearance}
      size={size}
      {...props}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <circle
          cx="12"
          cy="12"
          r="10"
          fill="none"
          stroke="currentColor"
          strokeOpacity={0.3}
          strokeDasharray={62.83185307179586}
          strokeDashoffset={31.41592653589793}
          strokeWidth="4"
          strokeLinecap="round"
          transform="rotate(-90 12 12)"
        />
        <circle
          cx="12"
          cy="12"
          r="10"
          fill="none"
          stroke="currentColor"
          strokeDasharray={62.83185307179586}
          strokeDashoffset={31.41592653589793}
          strokeWidth="4"
          strokeLinecap="round"
          transform="rotate(90 12 12)"
        />
      </svg>
    </StyledSpinner>
  );
}
