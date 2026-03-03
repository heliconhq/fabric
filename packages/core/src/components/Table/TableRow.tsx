import { ComponentProps, ReactNode } from 'react';

interface Props extends ComponentProps<'tr'> {
  height?: number | undefined;
  children?: ReactNode;
}

const TableRow = ({ height, children, ...props }: Props) => (
  <tr
    className="fabric--table-row"
    style={height ? { height } : undefined}
    {...props}
  >
    {children}
  </tr>
);

TableRow.displayName = 'TableRow';

export default TableRow;
