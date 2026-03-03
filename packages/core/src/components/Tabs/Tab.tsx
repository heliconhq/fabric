import { TabProps } from './types';

export default function Tab({ id, children, ...props }: TabProps) {
  return (
    <div id={id} {...props}>
      {children}
    </div>
  );
}
