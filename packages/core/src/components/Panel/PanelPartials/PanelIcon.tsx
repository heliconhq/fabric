import style from '../../../utils/style';
import { Icon } from '../../Icon';

export default style(Icon)({
  base: ({ theme }) => ({
    position: 'absolute',
    right: 0,
    top: 0,
    transform: 'translate(50%, -50%)',
    color: theme.layer.palette.semantic.primary[700],
  }),
});
