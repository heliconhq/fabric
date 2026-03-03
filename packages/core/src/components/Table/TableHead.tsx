import React, { ComponentProps, ReactNode } from 'react';

interface Props extends ComponentProps<'thead'> {
  children?: ReactNode;
}

export default function TableHead({ children, ...props }: Props) {
  return (
    <thead className="fabric--table-head" {...props}>
      {children}
    </thead>
  );
}
