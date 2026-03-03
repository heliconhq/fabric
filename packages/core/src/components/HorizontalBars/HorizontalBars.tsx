import { useTheme } from '../../hooks';
import { AppearanceValue } from '../../types/theme';
import HorizontalBarsContainer from './HorizontalBarsPartials/HorizontalBarsContainer';
import HorizontalBar from './HorizontalBarsPartials/HorizontalBar';
import { percentage } from './funtions';
import { Point } from './types';
import Label from './HorizontalBarsPartials/Label';

type Props = {
  shadows?: boolean;
  values: Point[];
  max?: number;
  appearance?: AppearanceValue;
};

export default function HorizontalBars({
  values = [],
  shadows = true,
  max: defaultMax,
  appearance = 'primary',
  ...props
}: Props) {
  const { theme } = useTheme();

  return (
    <HorizontalBarsContainer
      size={values.length}
      className="fabric-horizontal-bars"
      {...props}
    >
      {values.map((bar, i) => (
        <HorizontalBar
          theme={theme}
          appearance={appearance}
          key={i}
          shadows={shadows}
          percentage={percentage(bar.value, values, defaultMax)}
          className="fabric-horizontal-bar"
        >
          <Label theme={theme}>{bar.label}</Label>
        </HorizontalBar>
      ))}
    </HorizontalBarsContainer>
  );
}
