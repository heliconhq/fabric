import style from '../../../utils/style';
import { IconPosition } from '../types';

type ButtonLabelProps = {
  iconPosition: IconPosition;
  isLoading: boolean;
};

export default style('span')<ButtonLabelProps>({
  base: ({ iconPosition, isLoading }) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: iconPosition === 'right' ? 'row-reverse' : 'row',
    visibility: isLoading ? 'hidden' : 'visible',
  }),
});
