import { ComponentProps, ReactNode } from 'react';

import { HorizontalAlignmentValue } from '../../types/theme';

interface Props extends ComponentProps<'th'> {
  children?: ReactNode;
  align?: HorizontalAlignmentValue;
}

export default function TableHeader({
  children,
  align = 'left',
  ...props
}: Props) {
  return (
    <th className="fabric--table-header" align={align} {...props}>
      {children}
    </th>
  );
}
