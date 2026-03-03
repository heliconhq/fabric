import { PropsWithChildren, ReactNode } from 'react';

import { KeycloakInitOptions, KeycloakConfig } from 'keycloak-js';

import { BackdropProvider, ThemeProvider, LayerProvider } from '../../hooks';

import { ProcessedTheme } from '../../types/theme';

import AuthProvider from '../../hooks/useAuth';
import { AppStateProvider, Offset } from '../../hooks/useAppState';
import BaseApp from './AppPartials/BaseApp';
import {
  getDefaultLocale,
  LocaleProvider,
  locales,
} from '../../hooks/useLocale';

type AppProps = Partial<{
  themes: ProcessedTheme[];
  themeName: string;
  fixedHeight: boolean;
  initialOffset: Offset;
  icons: Record<string, ReactNode | (() => ReactNode)>;
  keycloakInitOptions?: KeycloakInitOptions;
  keycloakConfig?: KeycloakConfig;
  authLoader: ReactNode;
  initialLocale?: locales;
}>;
const App = ({
  children,
  themes,
  themeName,
  initialOffset = {
    top: [],
    left: [],
    right: [],
    bottom: [],
  },
  fixedHeight = true,
  icons = {},
  keycloakInitOptions,
  keycloakConfig,
  initialLocale,
}: PropsWithChildren<AppProps>) => (
  <AuthProvider
    keycloakConfig={keycloakConfig}
    keycloakInitOptions={keycloakInitOptions}
  >
    <BackdropProvider>
      <ThemeProvider themes={themes} themeName={themeName}>
        <LayerProvider>
          <AppStateProvider initialOffset={initialOffset} icons={icons}>
            <LocaleProvider initialLocale={initialLocale || getDefaultLocale()}>
              <BaseApp fixedHeight={fixedHeight}>{children}</BaseApp>
            </LocaleProvider>
          </AppStateProvider>
        </LayerProvider>
      </ThemeProvider>
    </BackdropProvider>
  </AuthProvider>
);

export default App;
