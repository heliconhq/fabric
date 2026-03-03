import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  value?: string | number;
};

const Option = (props: Props) => <option {...props}>{props.children}</option>;

export default Option;
