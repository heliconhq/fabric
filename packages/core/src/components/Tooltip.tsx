import { useState, ReactNode, ComponentProps } from 'react';
import style from '../utils/style';
import { useTheme } from '../hooks';
import Panel from './Panel';
import PopoverBase from './Popover';

type Props = {
  children?: ReactNode;
  content?: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  elevated?: boolean;
  withPortal?: boolean;
  layer?: string;
} & ComponentProps<'div'>;

type StyledProps = {
  visible: boolean;
};

const StyledTooltip = style(Panel)<StyledProps>({
  base: {
    pointerEvents: 'none',
    wordWrap: 'break-word',
    fontSize: '0.9rem',
    visibility: 'hidden',
  },
  variants: {
    visible: {
      true: {
        visibility: 'visible',
      },
    },
  },
});

export default function Tooltip({
  children,
  content,
  elevated = true,
  className,
  position = 'top',
  withPortal = true,
  ...props
}: Props) {
  const { theme } = useTheme();
  const [visible, setVisible] = useState(false);

  const onMouseEnter = () => {
    setVisible(true);
  };

  const onMouseLeave = () => {
    setVisible(false);
  };

  return (
    <PopoverBase
      actuator={
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          {children}
        </div>
      }
      visible={visible}
      className={className}
      position={position}
      anchor="center"
      onClose={() => setVisible(false)}
      withPortal={withPortal}
    >
      <StyledTooltip
        visible={visible}
        theme={theme}
        padding="reduced"
        elevated={elevated}
        {...props}
      >
        {content}
      </StyledTooltip>
    </PopoverBase>
  );
}
