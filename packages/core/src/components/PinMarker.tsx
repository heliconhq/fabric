import style from '../utils/style';

import { DefinitiveColorValue, SizeValue, LayerValue } from '../types/theme';
import { useTheme } from '../hooks';

type Props = {
  color: DefinitiveColorValue;
  size: SizeValue;
};

type StyledProps = {
  color: DefinitiveColorValue;
  layer: LayerValue;
  size: SizeValue;
};

const StyledMarker = style('div')<StyledProps>({
  base: ({ layer, color }) => ({
    color: layer.palette.definitive[color][700],
    display: 'block',
  }),
  variants: {
    size: {
      small: {
        width: '16px',
        height: '16px',
      },
      medium: {
        width: '32px',
        height: '32px',
      },
      large: {
        width: '48px',
        height: '48px',
      },
    },
  },
});

export default function PinMarker({
  color = 'red',
  size = 'medium',
  ...props
}: Props) {
  const { theme, layer } = useTheme();

  return (
    <StyledMarker
      className="fabric--pin-marker"
      theme={theme}
      layer={layer}
      color={color}
      size={size}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        version="1.1"
        viewBox="0 -256 1792 1792"
      >
        <g transform="matrix(1 0 0 -1 364.475 1270.237)">
          <path
            fill="currentColor"
            d="M768 896q0 106-75 181t-181 75q-106 0-181-75t-75-181q0-106 75-181t181-75q106 0 181 75t75 181zm256 0q0-109-33-179L627-57q-16-33-47.5-52T512-128q-36 0-67.5 19T398-57L33 717Q0 787 0 896q0 212 150 362t362 150q212 0 362-150t150-362z"
          ></path>
        </g>
      </svg>
    </StyledMarker>
  );
}
