import { MarginValue } from '../../../types/theme';
import style from '../../../utils/style';

type StyledTabsProps = {
  margin: MarginValue;
};
export default style('div')<StyledTabsProps>({
  base: ({ theme, margin }) => ({
    marginBottom: theme.spacing[margin] || 0,
    display: 'flex',
    alignItems: 'center',
  }),
});
