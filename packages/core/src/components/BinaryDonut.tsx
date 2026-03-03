import { ReactNode } from 'react';

import { AppearanceValue } from '../types/theme';

import Donut from './Donut';

type Props = {
  children?: ReactNode;
  value: number;
  max?: number;
  appearance?: AppearanceValue;
  rounded?: boolean;
  color?: string;
  strokeWidth?: number;
  className?: string;
};

export default function BinaryDonut({
  value = 0,
  max = 100,
  appearance = 'primary',
  rounded = false,
  strokeWidth,
  color,
  ...props
}: Props) {
  const series = [
    {
      id: 'value',
      appearance,
      value: value / max,
      rounded,
      color,
    },
    {
      id: 'empty',
      appearance: 'neutral' as AppearanceValue,
      value: (max - value) / max,
    },
  ];

  return <Donut series={series} strokeWidth={strokeWidth} {...props} />;
}
