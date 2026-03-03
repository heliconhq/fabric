import React, { useEffect } from 'react';
import { useAppState } from '../../hooks/useAppState';

import Overlay from '../Overlay';
import SwitchLayer from '../SwitchLayer';

import StyledModal from './BaseModalPartials/ModalWrapper';
import CloseButton from './BaseModalPartials/CloseButton';
import useEventListener from '../../hooks/useEventListener';
import Portal from '../Portal';

type Props = {
  children?: React.ReactNode;
  onClose?: () => void;
  zIndex?: number;
  layerName?: string;
  overlayCloseButton?: boolean;
  padded?: boolean;
  open: boolean;
};

export default function BaseModal({
  children,
  onClose,
  zIndex,
  layerName,
  overlayCloseButton = false,
  padded = true,
  open = true,
  ...props
}: Props) {
  const keyDownHandler = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && onClose) {
      event.preventDefault();
      onClose();
    }
  };

  const { disableScrolling, enableScrolling } = useAppState();
  useEventListener({ event: 'keydown', cb: keyDownHandler });

  useEffect(() => {
    if (open) {
      disableScrolling();
    } else {
      enableScrolling();
    }

    return () => enableScrolling();
  }, [open]);

  return (
    <Portal open={open}>
      <Overlay
        onClick={() => onClose && onClose()}
        zIndex={zIndex}
        centered={false}
      >
        <StyledModal className="fabric--base-modal" padded={padded} {...props}>
          {overlayCloseButton && onClose && <CloseButton onClose={onClose} />}
          <SwitchLayer layer={layerName}>{children}</SwitchLayer>
        </StyledModal>
      </Overlay>
    </Portal>
  );
}
