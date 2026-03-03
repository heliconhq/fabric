import { ReactNode, useState, useEffect } from 'react';

import { useAppState } from '../../hooks/useAppState';

import { LeftRightAlignmentValue } from '../../types/theme';

import Overlay from '../Overlay';
import Layer from '../Layer';
import DrawerContainer from './DrawerPartials/DrawerContainer';
import DrawerContent from './DrawerPartials/DrawerContent';
import Portal from '../Portal';

type Props = {
  children?: ReactNode;
  onClose?: () => void;
  render: boolean;
  position?: LeftRightAlignmentValue;
  layer?: string;
  width?: string;
};

export default function Drawer({
  children,
  onClose,
  position = 'right',
  layer: layerName = 'sidebar',
  width = '18rem',
  render = false,
  ...props
}: Props) {
  let timer: ReturnType<typeof setTimeout>;
  const [closing, setClosing] = useState(false);
  const { disableScrolling, enableScrolling } = useAppState();
  useEffect(() => {
    if (render) {
      disableScrolling();
    } else {
      enableScrolling();
      clearTimeout(timer);
    }
  }, [render]);

  const wrappedOnClose = () => {
    setClosing(true);
    if (onClose) {
      timer = setTimeout(() => {
        onClose();
        setClosing(false);
      }, 300);
    }
  };

  if (!render) {
    return null;
  }

  return (
    <Portal>
      <Overlay onClick={wrappedOnClose}>
        <Layer layer={layerName}>
          <DrawerContainer
            closing={closing}
            position={position}
            width={width}
            {...props}
          >
            <DrawerContent>{children}</DrawerContent>
          </DrawerContainer>
        </Layer>
      </Overlay>
    </Portal>
  );
}
