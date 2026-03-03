import { SizeValue } from '../../../types/theme';
import style from '../../../utils/style';
import Spinner from '../../Spinner';

type Props = {
  size: SizeValue;
};

const StyledSpinner = style(Spinner)({
  base: {
    position: 'absolute',
    color: 'inherit',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
});

const SpinnerSizes = {
  small: '0.8rem',
  medium: '1.4rem',
  large: '1.6rem',
};

export default function ButtonSpinner(props: Props) {
  return <StyledSpinner size={SpinnerSizes[props.size]}></StyledSpinner>;
}
