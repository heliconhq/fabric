import React from 'react';

import { BevelValue } from '../../types/theme';
import BaseModal from './BaseModal';
import ModalContent from './ModalContent';
import ModalBody from './ModalBody';
import ModalHeader from './ModalHeader';

type Props = {
  children?: React.ReactNode;
  onClose?: () => void;
  zIndex?: number;
  title?: string;
  bevel?: BevelValue;
  open: boolean;
};

const Modal = ({
  children,
  onClose,
  open,
  title,
  bevel = 'standard',
  zIndex,
  ...props
}: Props) => (
  <BaseModal
    onClose={onClose}
    open={open}
    overlayCloseButton={!title}
    zIndex={zIndex}
    padded={false}
    {...props}
  >
    <ModalContent
      size={title ? 'span' : 'full'}
      scrollInside={true}
      bevel={title ? 'none' : bevel}
    >
      {title && <ModalHeader onClose={onClose}>{title}</ModalHeader>}
      <ModalBody scrollInside={true}>{children}</ModalBody>
    </ModalContent>
  </BaseModal>
);

export default Modal;
