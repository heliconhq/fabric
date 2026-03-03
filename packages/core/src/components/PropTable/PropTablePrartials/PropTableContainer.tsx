import { MarginValue } from '../../../types/theme';
import style from '../../../utils/style';

type StyledPropTableProps = {
  margin: MarginValue;
  stretch: boolean;
};

export default style('div')<StyledPropTableProps>({
  base: ({ theme, margin, stretch }) => ({
    marginBottom: theme.spacing[margin] || '0',
    display: 'table',
    borderCollapse: 'separate',
    borderSpacing: '0 0.5rem',
    ...(stretch && { width: '100%' }),
    '&:last-child': {
      marginBottom: '0',
    },
  }),
});
