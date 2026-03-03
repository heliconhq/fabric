import { useTheme } from '../hooks';
import { MarginValue } from '../types/theme';
import style from '../utils/style';

type Props = {
  margin?: MarginValue;
};

type StyleProps = {
  margin: MarginValue;
};

const StyledHr = style('div')<StyleProps>({
  base: ({ theme, margin }) => ({
    height: '1px',
    background: theme.layer.palette.contextual.divider,
    marginTop: theme.spacing[margin] || margin,
    marginBottom: theme.spacing[margin] || margin,
  }),
});

export default function Hr({ margin = 'standard', ...props }: Props) {
  const { theme } = useTheme();

  return (
    <StyledHr className="fabric--hr" theme={theme} margin={margin} {...props} />
  );
}
