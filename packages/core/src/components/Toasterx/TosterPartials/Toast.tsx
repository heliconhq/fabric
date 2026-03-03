import { ReactNode, useEffect } from 'react';

import Button from '../../Button';
import { useTheme } from '../../../hooks';
import { useToast } from '../useToast';
import {
  NotificationPositionValue,
  AppearanceValue,
} from '../../../types/theme';
import Container from './ToastPartials/Container';
import Content from './ToastPartials/Content';

type Props = {
  id?: number;
  timeout?: number;
  content: ReactNode;
  appearance: AppearanceValue;
  position?: NotificationPositionValue;
  reverseAnimation?: boolean;
  disableAnimation?: boolean;
  handleClose?: (id: number | undefined) => void;
};

const Toast = ({
  id,
  content,
  timeout,
  position,
  appearance = 'primary',
  handleClose: defaultHandleClose,
  reverseAnimation,
  disableAnimation,
}: Props) => {
  const { removeToast } = useToast();
  const { theme } = useTheme();

  const handleClose =
    typeof defaultHandleClose === 'undefined'
      ? () => typeof id !== 'undefined' && removeToast(id)
      : () => defaultHandleClose(id);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (typeof timeout !== 'undefined') {
      timer = setTimeout(handleClose, timeout);
    }

    return () => clearTimeout(timer);
  }, [timeout]);

  return (
    <Container
      disableAnimation={disableAnimation}
      reverseAnimation={reverseAnimation}
      theme={theme}
      position={position}
      appearance={appearance}
      className="fabric--toaster"
      textContent={typeof content === 'string'}
    >
      <Content className="content">{content}</Content>
      <div className="actions">
        <Button onClick={handleClose} icon="close" slim design="text" />
      </div>
    </Container>
  );
};

export default Toast;
