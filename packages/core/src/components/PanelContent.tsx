import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
}

const PanelContent = ({ children, ...props }: Props) => (
  <div className="fabric--panel-content" {...props}>
    {children}
  </div>
);

export default PanelContent;
