import React, { MouseEvent } from 'react';
import { keyframes } from '@emotion/react';
import style from '../utils/style';

import SwitchLayer from './SwitchLayer';

type Props = {
  children?: React.ReactNode;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  zIndex?: number;
  centered?: boolean;
};

type StyledProps = {
  zIndex: number;
  centered: boolean;
};

const FadeIn = keyframes`
 from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const StyledOverlay = style('div')<StyledProps>({
  base: ({ theme, zIndex }) => ({
    overflow: 'auto',
    position: 'fixed',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    background: theme.layer.palette.contextual.background,
    color: theme.layer.palette.contextual.text,
    cursor: 'pointer',
    zIndex,
    animation: `${FadeIn} 200ms linear`,
  }),
  variants: {
    centered: {
      true: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  },
});

export default function Overlay({
  children,
  onClick: defaultOnClick,
  zIndex = 1,
  centered = true,
  ...props
}: Props) {
  const onClick =
    typeof defaultOnClick !== 'function'
      ? defaultOnClick
      : (event: MouseEvent<HTMLElement>) => {
          if (event.target === event.currentTarget) {
            defaultOnClick(event);
          }
        };

  return (
    <SwitchLayer layer="overlay">
      {({ theme }) => (
        <StyledOverlay
          centered={!!centered}
          className="fabric-overlay"
          theme={theme}
          onClick={onClick}
          zIndex={zIndex}
          {...props}
        >
          {children}
        </StyledOverlay>
      )}
    </SwitchLayer>
  );
}
