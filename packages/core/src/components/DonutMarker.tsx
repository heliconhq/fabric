import style from '../utils/style';

import { AppearanceValue, SizeValue, LayerValue } from '../types/theme';
import { useTheme } from '../hooks';

import BinaryDonut from './BinaryDonut';

type Props = {
  appearance: AppearanceValue;
  size: SizeValue;
  value: number;
};

type StyledDonutProps = {
  size: SizeValue;
};

type StyledMarkerProps = {
  appearance: AppearanceValue;
  layer: LayerValue;
  size: SizeValue;
};

const sizes = {
  small: '18px',
  medium: '28px',
  large: '40px',
};

const markerSizes = {
  small: '10px',
  medium: '14px',
  large: '20px',
};

const StyledDonut = style(BinaryDonut)<StyledDonutProps>({
  base: ({ size }) => ({
    width: sizes[size],
    height: sizes[size],
  }),
});

const StyledMarker = style('div')<StyledMarkerProps>({
  base: ({ layer, size, appearance }) => ({
    width: markerSizes[size],
    height: markerSizes[size],
    borderRadius: '50%',
    background:
      appearance === 'neutral'
        ? layer.palette.contextual.action
        : layer.palette.semantic[appearance][700],
    display: 'block',
  }),
});

export default function DonutMarker({
  appearance = 'primary',
  size = 'large',
  value = 75,
  ...props
}: Props) {
  const { theme, layer } = useTheme();

  return (
    <StyledDonut
      className="fabric--donut-marker"
      theme={theme}
      size={size}
      value={value}
      strokeWidth={10}
      rounded={true}
      appearance={appearance}
      {...props}
    >
      <StyledMarker
        theme={theme}
        layer={layer}
        appearance={appearance}
        size={size}
      />
    </StyledDonut>
  );
}
