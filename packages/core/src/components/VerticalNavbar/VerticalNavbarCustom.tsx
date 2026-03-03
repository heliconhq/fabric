import { ReactNode } from 'react';
import { useVerticalNavbar } from './VerticalNavbar';

type Props = {
  children?: ReactNode;
  mode?: 'expanded' | 'collapsed' | 'both';
};

export default function VerticalNavbarCustom({
  children,
  mode = 'both',
  ...props
}: Props) {
  const { expanded } = useVerticalNavbar();

  if (mode === 'expanded' && !expanded) {
    return null;
  }

  if (mode === 'collapsed' && expanded) {
    return null;
  }

  return (
    <div className="fabric--vertical-navbar-custom" {...props}>
      {children}
    </div>
  );
}
