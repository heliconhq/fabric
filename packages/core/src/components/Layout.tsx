import { ReactNode } from 'react';

import HorizontalLayout from './HorizontalLayout';
import VerticalLayout from './VerticalLayout';

type Props = {
  children?: ReactNode;
  direction?: 'horizontal' | 'vertical';
};

export default function Layout({ direction = 'horizontal', ...props }: Props) {
  return direction === 'horizontal' ? (
    <HorizontalLayout {...props} />
  ) : (
    <VerticalLayout {...props} />
  );
}
