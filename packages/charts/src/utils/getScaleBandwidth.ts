import { AxisScale } from '@visx/axis';

export default function getScaleBandwidth(scale: AxisScale) {
  return 'bandwidth' in scale ? scale.bandwidth() : 0;
}
