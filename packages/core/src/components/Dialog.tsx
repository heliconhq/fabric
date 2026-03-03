import React, { useEffect } from 'react';

import BaseModal from './Modal/BaseModal';
import ModalContent, { SizeValue } from './Modal/ModalContent';
import ModalBody from './Modal/ModalBody';
import ModalHeader from './Modal/ModalHeader';
import ModalFooter from './Modal/ModalFooter';
import Button from './Button';
import Spaced from './Spaced';

type Props = {
  children?: React.ReactNode;
  onClose?: () => void;
  // Defaults to using the onClose callback.
  onOk?: () => void;
  onOkText?: string;
  // Defaults to using the onClose callback.
  onCancel?: () => void;
  onCancelText?: string;
  zIndex?: number;
  title?: string;
  size?: SizeValue;
  open?: boolean;
  scrollInside?: boolean;
  // Element to focus when displaying the dialog.
  autofocus?: React.RefObject<HTMLElement>;
};

export default function Dialog({
  children,
  onClose,
  onCancel,
  onCancelText = 'Cancel',
  onOk,
  onOkText = 'Ok',
  open = true,
  title,
  size = 'small',
  zIndex,
  autofocus,
  scrollInside = false,
  ...props
}: Props) {
  useEffect(() => {
    const focused = document.activeElement;
    if (autofocus && autofocus.current) {
      autofocus.current.focus();
    }
    return () => {
      if (focused) {
        (focused as HTMLElement).focus();
      }
    };
  }, [open, autofocus]);

  const handleCancel = () => {
    if (typeof onCancel === 'function') {
      onCancel();
      return;
    }
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  const handleCTA = () => {
    if (typeof onOk === 'function') {
      onOk();
      return;
    }
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  return (
    <BaseModal
      onClose={onClose}
      open={open}
      overlayCloseButton={!title}
      zIndex={zIndex}
      {...props}
    >
      <ModalContent size={size} scrollInside={scrollInside}>
        {Boolean(title) && <ModalHeader>{title}</ModalHeader>}
        <ModalBody scrollInside={scrollInside}>{children}</ModalBody>
        <ModalFooter>
          <Spaced>
            <Button design="text" onClick={handleCancel}>
              {onCancelText}
            </Button>
            <Button appearance="cta" onClick={handleCTA}>
              {onOkText}
            </Button>
          </Spaced>
        </ModalFooter>
      </ModalContent>
    </BaseModal>
  );
}
