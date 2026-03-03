import React from 'react';

import BaseModal from './BaseModal';
import ModalContent, { SizeValue } from './ModalContent';
import ModalBody from './ModalBody';
import ModalHeader from './ModalHeader';

type Props = {
  children?: React.ReactNode;
  onClose?: () => void;
  zIndex?: number;
  title?: string;
  size: SizeValue;
  open: boolean;
  scrollInside: boolean;
};

const Modal = ({
  children,
  onClose,
  open,
  title,
  size = 'small',
  zIndex,
  scrollInside = true,
  ...props
}: Props) => (
  <BaseModal
    onClose={onClose}
    open={open}
    overlayCloseButton={!title}
    zIndex={zIndex}
    {...props}
  >
    <ModalContent size={size} scrollInside={scrollInside}>
      {Boolean(title) && <ModalHeader onClose={onClose}>{title}</ModalHeader>}
      <ModalBody scrollInside={scrollInside}>{children}</ModalBody>
    </ModalContent>
  </BaseModal>
);

export default Modal;
