import { ReactNode } from 'react';

import { useTheme } from '../../hooks';
import { MarginValue } from '../../types/theme';
import Value from './PropTablePrartials/Value';
import Label from './PropTablePrartials/Label';
import PropContainer from './PropTablePrartials/PropContainer';
import PropTableContainer from './PropTablePrartials/PropTableContainer';

type Property = {
  label: ReactNode;
  value: ReactNode;
};

type PropTableProps = {
  margin: MarginValue;
  gap: MarginValue;
  stretch: boolean;
  properties: Property[];
};

export default function PropTable({
  margin = 'standard',
  gap = 'standard',
  properties = [],
  stretch = false,
  ...props
}: PropTableProps) {
  const { theme } = useTheme();

  return (
    <PropTableContainer
      className="fabric--prop-table"
      theme={theme}
      margin={margin}
      stretch={stretch}
      {...props}
    >
      {properties.map(({ label, value }, i) => (
        <PropContainer key={i}>
          <Label gap={gap}>{label}</Label>
          <Value stretch={stretch}>{value}</Value>
        </PropContainer>
      ))}
    </PropTableContainer>
  );
}
