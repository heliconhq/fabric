import Button from '../Button';
import { useVerticalNavbar } from './VerticalNavbar';

type Props = {
  mode?: 'expanded' | 'collapsed' | 'both';
};

export default function VerticalNavbarToggle({
  mode = 'both',
  ...props
}: Props) {
  const { expanded, setExpanded } = useVerticalNavbar();

  if (mode === 'expanded' && !expanded) {
    return null;
  }

  if (mode === 'collapsed' && expanded) {
    return null;
  }

  return (
    <Button
      className="fabric--vertical-navbar"
      onClick={() => setExpanded(!expanded)}
      icon={expanded ? 'double-arrow-left' : 'double-arrow-right'}
      design="text"
      {...props}
    ></Button>
  );
}
