import { AppearanceValue, ExtendedSizeValue } from '../../types/theme';
import { useTheme } from '../../hooks';
import Marker from './ValueMarkerPartials/Marker';
import Value from './ValueMarkerPartials/Value';

type Props = {
  appearance: AppearanceValue;
  size: ExtendedSizeValue;
  value: string | number;
  rim: boolean;
};

export default function ValueMarker({
  appearance = 'neutral',
  size = 'medium',
  value = 75,
  rim = true,
  ...props
}: Props) {
  const { theme, layer } = useTheme();

  return (
    <Marker
      className="fabric--value-marker"
      theme={theme}
      layer={layer}
      appearance={appearance}
      size={size}
      rim={rim}
      {...props}
    >
      <Value theme={theme} size={size}>
        {value}
      </Value>
    </Marker>
  );
}
