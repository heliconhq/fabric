import { useState, ReactNode, ComponentProps } from 'react';

import style from '../../utils/style';

import { anchorPositions, positionDirections } from './types';
import ContentContainer from './PopoverPartials/ContentContainer';
import Portal from '../Portal';

type Props = {
  children?: ReactNode;
  actuator?: ReactNode;
  onClose?: () => void;
  position?: positionDirections;
  anchor?: anchorPositions;
  visible?: boolean;
  enabled?: boolean;
  contentProps?: ComponentProps<'div'>;
  withPortal?: boolean;
} & ComponentProps<'div'>;

const StyledPopoverActuator = style('div')({
  base: {
    display: 'inline-block',
  },
});

export default function PopoverBase({
  children,
  actuator,
  position: preferredPosition = 'bottom',
  visible = false,
  onClose,
  anchor = 'center',
  enabled = true,
  contentProps,
  withPortal = false,
  ...props
}: Props) {
  const [actuatorNode, setActuatorNode] = useState<HTMLElement | null>(null);

  if (!enabled) {
    return children;
  }
  const ContentNode = () => (
    <ContentContainer
      actuatorNode={actuatorNode}
      onClose={onClose}
      anchor={anchor}
      withPortal={withPortal}
      preferredPosition={preferredPosition || 'bottom'}
      {...contentProps}
    >
      {children}
    </ContentContainer>
  );

  return (
    <StyledPopoverActuator {...props}>
      <div ref={setActuatorNode}>{actuator}</div>
      {visible &&
        (withPortal ? (
          <Portal withPortal={withPortal}>
            <ContentNode />
          </Portal>
        ) : (
          <ContentNode />
        ))}
    </StyledPopoverActuator>
  );
}
