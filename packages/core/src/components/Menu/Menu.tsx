import {
  ReactNode,
  createContext,
  ComponentProps,
  useContext,
  useState,
} from 'react';

import style from '../../utils/style';

import Button from '../Button';
import Panel from '../Panel';
import SwitchLayer from '../SwitchLayer';

import MenuTitle from './MenuTitle';
import PopoverBase from '../Popover';

type CallbackArgs = {
  onClose: () => void;
  onOpen: () => void;
  onToggle: () => void;
  open: boolean;
};

type Props = {
  children?: ReactNode;
  actuator: ((args: CallbackArgs) => ReactNode) | string;
  layer?: string;
  size?: 'auto' | 'small' | 'medium' | 'large';
  title?: string;
  anchor?: 'start' | 'center' | 'end';
  popoverProps?: ComponentProps<'div'>;
} & ComponentProps<typeof Panel>;

type StyleProps = {
  size?: 'auto' | 'small' | 'medium' | 'large';
};

const MenuContext = createContext<CallbackArgs>({
  onClose: () => null,
  onOpen: () => null,
  onToggle: () => null,
  open: false,
});

const sizes = {
  auto: 'auto',
  small: 200,
  medium: 300,
  large: 400,
};

const useMenu = () => useContext(MenuContext);

const StyledMenu = style(Panel)<StyleProps>({
  base: ({ size, theme }) => ({
    display: 'flex',
    textAlign: 'left',
    border: `1px solid ${theme.layer.palette.contextual.divider}`,
    width: sizes[size || 'auto'],

    '.fabric--panel-content': {
      display: 'flex',
      flexDirection: 'column',
    },
  }),
});

export default function Menu({
  children,
  layer: layerName = 'menu',
  actuator = 'Open',
  size = 'auto',
  title,
  anchor = 'start',
  popoverProps,
  ...props
}: Props) {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  const onToggle = () => setOpen(!open);

  const callbackArgs = {
    onClose,
    onOpen,
    onToggle,
    open,
  };

  const Trigger =
    typeof actuator === 'function' ? (
      actuator(callbackArgs)
    ) : (
      <Button onClick={onToggle} active={open}>
        {actuator}
      </Button>
    );

  return (
    <MenuContext.Provider value={callbackArgs}>
      <PopoverBase
        visible={open}
        actuator={Trigger}
        onClose={onClose}
        anchor={anchor}
        contentProps={popoverProps}
      >
        <SwitchLayer layer={layerName}>
          {({ theme }) => (
            <StyledMenu
              theme={theme}
              padding="minimal"
              size={size}
              elevated
              {...props}
            >
              {typeof title === 'string' && <MenuTitle>{title}</MenuTitle>}
              {children}
            </StyledMenu>
          )}
        </SwitchLayer>
      </PopoverBase>
    </MenuContext.Provider>
  );
}

export { useMenu, CallbackArgs };
