import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import { createContext, ReactNode, useContext } from 'react';
import { useTheme } from './useTheme';
import { ActiveTheme, LayerValue } from '../types/theme';

type childrenOrChildFunction =
  | ReactNode
  | ((args: { theme: ActiveTheme; layer: LayerValue }) => ReactNode);

type Props = {
  children: childrenOrChildFunction;
  layer?: string;
};

const LayerContext = createContext<{ layer: string }>({ layer: 'default ' });

const useLayer = () => useContext(LayerContext);

const Render = ({ children }: { children: childrenOrChildFunction }) => {
  const { layer, theme } = useTheme();

  if (typeof children === 'function') {
    return children({ theme, layer });
  }

  return children;
};

const WrappedProvider = (props) => {
  const { theme } = useTheme();
  return <EmotionThemeProvider theme={theme} {...props} />;
};

const LayerProvider = ({ children, layer = 'default' }: Props) => (
  <LayerContext.Provider value={{ layer }}>
    <WrappedProvider>
      <Render children={children} />
    </WrappedProvider>
  </LayerContext.Provider>
);

export { useLayer, LayerContext, LayerProvider };
