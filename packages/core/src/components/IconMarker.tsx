import style from '../utils/style';

import { DefinitiveColorValue, SizeValue, LayerValue } from '../types/theme';
import { useTheme } from '../hooks';
import { Icon } from './Icon';
import { IconName } from '../icons';

type Props = {
  color: DefinitiveColorValue;
  size: SizeValue;
  icon?: IconName;
};

type StyledProps = {
  color: DefinitiveColorValue;
  layer: LayerValue;
  size: SizeValue;
  stroke?: boolean;
  value?: number;
};

const sizes = {
  small: '18px',
  medium: '24px',
  large: '40px',
};

const iconSizes = {
  small: '12px',
  medium: '16px',
  large: '28px',
};

const StyledWrapper = style('div')<StyledProps>({
  base: ({ layer, size, color }) => ({
    position: 'relative',
    width: sizes[size],
    height: sizes[size],
    borderRadius: '50%',
    border: `2px solid ${layer.palette.definitive[color][100]}`,
    background: layer.palette.definitive[color][700],
    color: layer.palette.definitive[color].contrast,

    '.fabric--icon': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  }),
});

export default function IconMarker({
  color = 'red',
  size = 'medium',
  icon,
  ...props
}: Props) {
  const { theme, layer } = useTheme();

  return (
    <StyledWrapper
      className="fabric--donut-marker"
      layer={layer}
      theme={theme}
      size={size}
      color={color}
      {...props}
    >
      <Icon icon={icon} size={iconSizes[size]} />
    </StyledWrapper>
  );
}
