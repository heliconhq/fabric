import { useTheme } from '../../hooks';
import AvatarBase from './AvatarPartials/AvatarBase';
import { getColor, getInitials } from './AvatarPartials/functions';
import { Props } from './types';

export default function Avatar({
  design = 'square',
  size = 'medium',
  name,
  imageURL,
  color: defaultColor = 'red',
  hasBorder = false,
}: Props) {
  const { theme } = useTheme();
  const initials = getInitials(name);
  const color = getColor(theme, defaultColor, initials);
  return (
    <AvatarBase
      className="fabric--avatar"
      colorRange={color}
      size={size}
      design={design}
      imageURL={imageURL}
      title={name}
      hasBorder={hasBorder}
    >
      {!imageURL && initials}
    </AvatarBase>
  );
}
