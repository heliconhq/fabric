import { createContext, useContext, useState, useEffect } from 'react';

import { defaultThemes } from '../theme/themes';
import { useLayer } from './useLayer';
import { ActiveTheme, ProcessedTheme } from '../types/theme';

type ContextValue = {
  theme: ProcessedTheme;
  setTheme: (themeName: string) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ContextValue | null>(null);

const useTheme = () => {
  const { layer: layerName } = useLayer();
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be be used inside a <ThemeProvider>');
  }

  const { theme, ...rest } = context;

  const layer = theme.layers[layerName];

  return {
    layer,
    theme: {
      ...theme,
      layer,
    } as ActiveTheme,
    ...rest,
  };
};

const getPersistedTheme = (fallback: string) =>
  window.localStorage.getItem('theme') || fallback;

const ThemeProvider = ({
  children,
  themeName = '',
  themes = defaultThemes,
}) => {
  const theme =
    typeof themeName !== 'undefined'
      ? themes.find(({ name }) => name === themeName) || themes[0]
      : themes[0];

  const [currentTheme, setCurrentTheme] = useState(theme);

  const toggleTheme = () => {
    const index = themes.findIndex(({ name }) => name === currentTheme.name);
    const newTheme = themes[(index + 1) % themes.length];
    window.localStorage.setItem('theme', newTheme.name);
    setCurrentTheme(newTheme);
  };

  const setTheme = (targetThemeName: string) => {
    const newTheme = themes.find(({ name }) => name === targetThemeName);

    if (newTheme) {
      window.localStorage.setItem('theme', newTheme.name);
      setCurrentTheme(newTheme);
    }
  };

  useEffect(() => {
    if (typeof themeName !== 'undefined') {
      setTheme(themeName);
    }
  }, [themeName]);

  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        toggleTheme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider, useTheme, getPersistedTheme };
