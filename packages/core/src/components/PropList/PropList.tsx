import { ReactNode } from 'react';
import { MarginValue } from '../../types/theme';
import Section from '../Section';

type PropListProps = {
  children?: ReactNode;
  margin?: MarginValue;
};

export default function PropList({
  children,
  margin = 'standard',
}: PropListProps) {
  return <Section margin={margin}>{children}</Section>;
}
