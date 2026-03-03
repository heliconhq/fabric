import { ReactNode } from 'react';
import style from '../utils/style';

import { PaddingValue } from '../types/theme';

import SwitchLayer from './SwitchLayer';

type SidebarProps = {
  // Backdrop setting.
  layer?: string;
  // Width of the scrollbar. Adds to global offset if `floating` is `false`.
  width?: string | number;
  // If vertical content that is taller than the sidebar should produce a
  // scrollbar or be hidden.
  scroll?: boolean;
  padding?: PaddingValue;
  // If the sidebar should float over content or add a global offset.
  floating?: boolean;
  // Whether the sidebar should be positioned fixed or absolute.
  fixed?: boolean;
  // The content of the sidebar.
  children?: ReactNode;
};

type StyleProps = {
  fixed: boolean;
  scroll: boolean;
  floating: boolean;
  width: string | number;
  padding: PaddingValue;
};

const StyledSidebar = style('div')<StyleProps>({
  base: ({ theme, padding, width, scroll }) => ({
    padding: theme.spacing[padding] || 0,
    width,
    overflowX: scroll ? 'auto' : 'hidden',
    background: theme.layer.palette.contextual.background,
    color: theme.layer.palette.contextual.text,
    ...(theme.layer.border && {
      borderRight: `1px solid ${theme.layer.palette.contextual.divider}`,
    }),
  }),
  variants: {
    floating: {
      true: ({ fixed }) => ({
        position: fixed ? 'fixed' : 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
      }),
    },
  },
});

export default function Sidebar({
  children,
  layer: layerName = 'sidebar',
  width = '18rem',
  padding = 'standard',
  floating = false,
  fixed = false,
  scroll = true,
  ...props
}: SidebarProps) {
  return (
    <SwitchLayer layer={layerName}>
      <StyledSidebar
        className="fabric--sidebar"
        padding={padding}
        width={width}
        floating={floating}
        fixed={fixed}
        scroll={scroll}
        {...props}
      >
        {children}
      </StyledSidebar>
    </SwitchLayer>
  );
}
