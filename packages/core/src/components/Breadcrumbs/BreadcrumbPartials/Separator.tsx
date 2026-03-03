import style from '../../../utils/style';
import { Icon } from '../../Icon';

const StyledSeparator = style('div')({
  base: {
    padding: '0 0.2rem',
    opacity: '0.8',
  },
});

export default function Separator() {
  return (
    <StyledSeparator>
      <Icon icon="chevron-right" size="1.2rem" />
    </StyledSeparator>
  );
}
