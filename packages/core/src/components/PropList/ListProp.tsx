import { ReactNode } from 'react';
import { useTheme } from '../../hooks';
import PropContainer from './ListPropPartials/PropContainer';
import PropLabel from './ListPropPartials/PropLabel';
import PropValue from './ListPropPartials/PropValue';

type ListProps = {
  label?: string;
  children?: ReactNode;
};

export default function ListProp({ label, children, ...props }: ListProps) {
  const { theme } = useTheme();

  return (
    <PropContainer {...props} theme={theme} className="fabric--list-prop">
      <PropLabel theme={theme} className="fabric--list-prop--label">
        {label}
      </PropLabel>
      <PropValue theme={theme} className="fabric--list-prop--value">
        {children}
      </PropValue>
    </PropContainer>
  );
}
