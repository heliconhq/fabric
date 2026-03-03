import { ReactNode } from 'react';
import { useTheme } from '../../hooks';
import { AppearanceValue } from '../../types/theme';
import Label from './BarPartials/Label';
import BaseBar from './BarPartials/BaseBar';
import Container from './BarPartials/Container';

type Props = {
  /**
   * The current value to represent. 0 - 100.
   */
  value: number;
  /**
   * The maximum value.
   */
  max: number;
  /**
   * A label displayed on the far-left of the bar.
   */
  minLabel?: ReactNode;
  /**
   * A label displayed after the bar
   */
  afterLabel?: ReactNode;
  /**
   * A label displayed on the far-right of the bar.
   */
  maxLabel?: ReactNode;
  appearance: AppearanceValue;
};

export default function Bar({
  value = 0,
  max = 100,
  appearance = 'primary',
  afterLabel,
  minLabel,
  maxLabel,
  ...props
}: Props) {
  const { theme } = useTheme();

  const percentage = Math.min(100, (value / max) * 100);
  return (
    <Container theme={theme} className="fabric--bar" {...props}>
      {minLabel !== undefined && <Label theme={theme}>{minLabel}</Label>}
      {Boolean(maxLabel) && (
        <Label variant="maxValue" theme={theme}>
          {maxLabel}
        </Label>
      )}
      <BaseBar percentage={percentage} theme={theme} appearance={appearance} />
      {Boolean(afterLabel) && (
        <Label variant="afterValue" theme={theme}>
          {afterLabel}
        </Label>
      )}
    </Container>
  );
}
