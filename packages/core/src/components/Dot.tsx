import { DefinitiveColorValue, SizeValue } from '../types/theme';
import style from '../utils/style';

type Props = {
  size: SizeValue | string;
  color: DefinitiveColorValue;
};

type StyleProps = {
  size: string;
  color?: DefinitiveColorValue;
};

const StyledDot = style('svg')<StyleProps>({
  base: ({ theme, color, size }) => ({
    ...(typeof color !== 'undefined' && {
      color: theme.layer.palette.definitive[color][700],
    }),
    width: size,
    height: size,
  }),
});

const sizes = {
  small: '0.2rem',
  medium: '0.4rem',
  large: '0.6rem',
};

export default function Dot({ size: sizeValue = 'medium', color }: Props) {
  const size = (sizes[sizeValue] as string) || sizeValue;

  return (
    <StyledDot
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      color={color}
      size={size}
    >
      <circle fill="currentColor" cx="50" cy="50" r="50" />
    </StyledDot>
  );
}
