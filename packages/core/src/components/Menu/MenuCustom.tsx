import { ReactNode } from 'react';

import { useMenu, CallbackArgs } from './Menu';

type Props = {
  children: ReactNode | ((callbackArgs: CallbackArgs) => ReactNode);
};

const MenuCustom = ({ children, ...props }: Props) => {
  const callbackArgs = useMenu();

  if (typeof children === 'function') {
    return <div className="menu--menu-custom" {...props}>{children(callbackArgs)}</div>;
  }

  return children;
};

MenuCustom.displayName = 'MenuCustom';

export default MenuCustom;
