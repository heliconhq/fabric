import { BreakpointValue, MarginValue } from '../../../types/theme';
import style from '../../../utils/style';

type StyledPanelContentProps = {
  padding: MarginValue;
  breakAt?: BreakpointValue
  breakBehaviour?: "horizontal" | "vertical" | "both" | "none"

};



export default style('div')<StyledPanelContentProps>({
  base: ({ theme, padding }) => ({
    flex: '1',
    minHeight: '0',
    padding: theme.spacing[padding],
    '> *:last-child': {
      marginBottom: '0',
    },

  }),
  variants: {
    breakBehaviour: {
      vertical: ({ theme, breakAt, padding }) => (breakAt ? {
        [`@media (max-width: ${theme.breakpoints[breakAt]})`]: {
          padding: `0 ${theme.spacing[padding]}`
        }
      } : {}),
      horizontal: ({ theme, breakAt, padding }) => (breakAt ? {
        [`@media (max-width: ${theme.breakpoints[breakAt]})`]: {
          padding: ` ${theme.spacing[padding]} 0`
        }
      } : {}),
      both: ({ theme, breakAt }) => (breakAt ? {
        [`@media (max-width: ${theme.breakpoints[breakAt]})`]: {
          padding: `0 0`
        }
      } : {}),
    }
  }
});
