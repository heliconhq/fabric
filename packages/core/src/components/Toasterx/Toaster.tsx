import { useEffect, useRef } from 'react';
import { NotificationPositionValue, AppearanceValue } from '../../types/theme';
import { useToast } from './useToast';
import Toast from './TosterPartials/Toast';
import Portal from '../Portal';
import Container from './TosterPartials/Container';

type Props = {
  position: NotificationPositionValue;
  portal?: boolean;
  appearance?: AppearanceValue;
};

export default function Toaster({
  position = 'bottom',
  portal = true,
  appearance = 'primary',
}: Props) {
  const { toasts, maxToasts } = useToast();
  const prevCountRef = useRef<number>(toasts.length);
  useEffect(() => {
    prevCountRef.current = toasts.length;
  }, [toasts.length]);
  const isRemoving = prevCountRef.current > toasts.length;
  const children = (
    <Container portal={portal} position={position}>
      {toasts.map(({ id, ...props }, i) => {
        if (i >= maxToasts) {
          return null;
        }
        return (
          <Toast
            disableAnimation={isRemoving && i + 1 < maxToasts}
            reverseAnimation={isRemoving}
            appearance={appearance}
            id={id}
            key={id}
            position={position}
            {...props}
          />
        );
      })}
    </Container>
  );

  if (portal) {
    return <Portal>{children}</Portal>;
  }

  return children;
}
