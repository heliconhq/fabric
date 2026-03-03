import { ComponentProps, ReactNode } from 'react';

interface Props extends ComponentProps<'td'> {
  children?: ReactNode;
  slim?: boolean;
}

export default function TableCell({ children, slim = false, ...props }: Props) {
  return (
    <td
      className="fabric--table-cell"
      style={{ width: slim ? '1px' : 'auto' }}
      {...props}
    >
      {children}
    </td>
  );
}
