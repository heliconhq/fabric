import { MouseEvent, ReactNode } from 'react';

import { useAppState } from '../../hooks/useAppState';

import { iconNameToComponentMap, IconName } from '../../icons';
import IconContainer from './IconPartials/IconContainer';

type Props = {
  size?: string;
  icon?: IconName;
  shouldReturnSVG?: boolean;
  color?: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  block?: boolean;
};

type IconComponentType = (props: { color?: string }) => ReactNode;

export default function Icon({
  size = '1.5rem',
  icon,
  shouldReturnSVG,
  color,
  onClick,
  block = true,
  ...props
}: Props) {
  const { icons = {} } = useAppState() || {};

  let IconComponent: IconComponentType;

  if (typeof icon === 'undefined') {
    IconComponent = iconNameToComponentMap.blank;
  } else if (typeof icons[icon] !== 'undefined') {
    IconComponent = icons[icon] as IconComponentType;
  } else if (typeof iconNameToComponentMap[icon] !== 'undefined') {
    IconComponent = iconNameToComponentMap[icon] as IconComponentType;
  } else {
    IconComponent = iconNameToComponentMap.blank;
  }

  if (shouldReturnSVG) {
    return <IconComponent color={color} />;
  }

  return (
    <IconContainer
      className="fabric--icon"
      size={size}
      clickable={!!onClick}
      onClick={onClick}
      block={block}
      {...props}
    >
      <IconComponent color={color} />
    </IconContainer>
  );
}
