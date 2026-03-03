import { ComponentProps, ReactNode } from 'react';

interface Props extends ComponentProps<'tbody'> {
  height?: number;
  children?: ReactNode;
}

const TableBody = ({ height, children, ...props }: Props) => (
  <tbody
    className="fabric--table-body"
    style={height ? { height } : undefined}
    {...props}
  >
    {children}
  </tbody>
);

TableBody.displayName = 'TableBody';

export default TableBody;
