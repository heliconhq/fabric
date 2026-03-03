import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import style from '../../utils/style';
import { debounce } from '../../utils/misc';

import Layer from '../Layer';

type Props = {
  children?: ReactNode;
  minWidth?: number;
  expanded: boolean;
  setExpanded: (value: boolean) => void;
  layer?: string;
};

type Context = {
  setExpanded: (value: boolean) => void;
  expanded: boolean;
};

type StyledProps = {
  mode: 'expanded' | 'collapsed';
};

const VerticalNavbarContext = createContext<Context>({
  setExpanded: () => null,
  expanded: true,
});

const useVerticalNavbar = () => useContext(VerticalNavbarContext);

const StyledNavbar = style('div')<StyledProps>({
  base: ({ theme }) => ({
    background: theme.layer.palette.contextual.background,
    color: theme.layer.palette.contextual.text,
    padding: '0.3rem 0',
    transition: 'width 200ms',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',

    '.fabric--vertical-navbar-header, .fabric--vertical-navbar-footer': {
      flex: 0,
    },
    '.fabric--vertical-navbar-footer': {
      marginTop: 'auto',
    },
    '.fabric--vertical-navbar-body': {
      flex: 1,
    },
  }),
  variants: {
    mode: {
      expanded: {
        width: '18rem',
      },
      collapsed: {
        width: '4.4rem',
      },
    },
  },
});

export default function VerticalNavbar({
  children,
  expanded = true,
  setExpanded = () => null,
  minWidth = 900,
  layer: layerName = 'navigation',
  ...props
}: Props) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = debounce(() => setWidth(window.innerWidth), 500);

    window.addEventListener('resize', handleResize.apply);

    return () => {
      handleResize.cancel();
      window.removeEventListener('resize', handleResize.apply);
    };
  }, []);

  useEffect(() => {
    if (typeof minWidth !== 'undefined') {
      if (width < minWidth) {
        setExpanded(false);
      } else {
        setExpanded(true);
      }
    }
  }, [width]);

  return (
    <VerticalNavbarContext.Provider value={{ setExpanded, expanded }}>
      <Layer layer={layerName}>
        <StyledNavbar
          className="fabric--vertical-navbar"
          mode={expanded ? 'expanded' : 'collapsed'}
          {...props}
        >
          {children}
        </StyledNavbar>
      </Layer>
    </VerticalNavbarContext.Provider>
  );
}

export { useVerticalNavbar };
