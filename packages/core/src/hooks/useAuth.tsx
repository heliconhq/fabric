/* eslint-disable no-param-reassign */
import {
  createContext,
  useContext,
  PropsWithChildren,
  useState,
  useEffect,
} from 'react';

import Keycloak, {
  KeycloakInitOptions,
  KeycloakProfile,
  KeycloakConfig,
} from 'keycloak-js';

type AuthProviderProps = {
  keycloakInstance?: Keycloak;
  keycloakConfig?: KeycloakConfig;
  keycloakInitOptions?: KeycloakInitOptions;
};

type AuthState = {
  keycloak: Keycloak | null;
  authenticated: boolean;
  authEnabled: boolean;
  token?: string | null;
  idToken?: string | null;
  subject?: string | null;
};

type AuthContextType = AuthState & {
  logOut: () => void;
  logIn: () => void;
  getToken: () => Promise<string | undefined>;
  loadProfile: () => Promise<KeycloakProfile>;
  resetPassword: () => Promise<void>;
};

let keycloakInstance: Keycloak | null = null;
let isInitialized = false;

const AuthContext = createContext<AuthContextType | Record<string, never>>({});

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({
  keycloakInitOptions,
  keycloakConfig,
  children,
}: PropsWithChildren<AuthProviderProps>) => {
  const isAuthEnabled = !!keycloakConfig;

  const [authState, setAuthState] = useState<AuthState>({
    keycloak: keycloakInstance,
    authEnabled: isAuthEnabled,
    authenticated: false,
    token: null,
    idToken: null,
    subject: null,
  });

  const setAuthenticated = () => {
    setAuthState({
      ...authState,
      keycloak: keycloakInstance,
      authenticated: !!keycloakInstance?.authenticated,
      token: keycloakInstance?.token,
      idToken: keycloakInstance?.idToken,
      subject: keycloakInstance?.subject,
    });
  };

  const logIn = () => {
    if (keycloakInstance) {
      keycloakInstance.login().catch(() => {});
    }
  };

  const logOut = () => {
    if (keycloakInstance) {
      keycloakInstance.logout().catch(() => {});
    }
  };

  const getToken = async () => {
    if (keycloakInstance) {
      await keycloakInstance.updateToken(5);
      return keycloakInstance.token;
    }

    return undefined;
  };

  const loadProfile = () => {
    if (keycloakInstance) {
      return keycloakInstance.loadUserProfile();
    }

    return Promise.reject(new Error('Keycloak not initialized'));
  };

  const resetPassword = () => {
    if (keycloakInstance) {
      return keycloakInstance.accountManagement();
    }

    return Promise.reject(new Error('Keycloak not initialized'));
  };

  useEffect(() => {
    if (isAuthEnabled && keycloakInstance === null) {
      keycloakInstance = new Keycloak(keycloakConfig);
    }

    if (keycloakInstance && !isInitialized) {
      keycloakInstance
        .init({
          onLoad: 'login-required',
          checkLoginIframe: false,
          ...keycloakInitOptions,
        })
        .catch(() => {});

      keycloakInstance.onAuthSuccess = () => {
        setAuthenticated();
      };

      keycloakInstance.onAuthError = (err) => {
        console.log('Auth error!', err);
      };

      isInitialized = true;
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        logOut,
        logIn,
        loadProfile,
        getToken,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const getKeycloakInstance = () => keycloakInstance;

export default AuthProvider;

export { AuthContext, useAuth, getKeycloakInstance };
