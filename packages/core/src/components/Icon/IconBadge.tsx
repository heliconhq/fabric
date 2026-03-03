import { DefinitiveColorValue, ExtendedSizeValue } from '../../types/theme';
import { useTheme } from '../../hooks';
import { IconName } from '../../icons';

import IconContainer from './IconBadgePartials/IconContainer';
import StyledIcon from './IconBadgePartials/StyledIcon';

export type DesignValue = 'round' | 'square';

type Props = {
  size: ExtendedSizeValue;
  design: DesignValue;
  bright: boolean;
  icon: IconName;
  color: DefinitiveColorValue;
};

const iconSizes = {
  square: {
    xsmall: '0.9rem',
    small: '1.4rem',
    medium: '1.8rem',
    large: '2.6rem',
    xlarge: '3.4rem',
  },
  round: {
    xsmall: '0.9rem',
    small: '1.3rem',
    medium: '1.6rem',
    large: '2.4rem',
    xlarge: '3.2rem',
  },
};

export default function IconBadge({
  design = 'square',
  size = 'medium',
  icon = 'timelapse',
  bright = false,
  color = 'red',
}: Props) {
  const { theme } = useTheme();

  return (
    <IconContainer
      className="fabric--icon-badge"
      theme={theme}
      color={color}
      bright={bright}
      size={size}
      design={design}
    >
      <StyledIcon icon={icon} size={iconSizes[design][size]} />
    </IconContainer>
  );
}
