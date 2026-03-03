import {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';

type BackdropContextType = {
  backdrop: string;
  setBackdrop: (backdrop: string) => void;
}

type BackdropProviderProps = {
  children: React.ReactNode;
  backdrop?: string;
}

const BackdropContext = createContext<BackdropContextType | undefined>(undefined);

const useBackdrop = () => useContext(BackdropContext);

const BackdropProvider = ({
  children,
  backdrop: defaultBackdrop = 'root',
}: BackdropProviderProps) => {
  const [backdrop, setBackdrop] = useState(defaultBackdrop);

  useEffect(() => {
    if (backdrop !== defaultBackdrop) {
      setBackdrop(defaultBackdrop);
    }
  }, [defaultBackdrop]);

  return <BackdropContext.Provider
    value={{
      backdrop,
      setBackdrop,
    }}
  >
    {children}
  </BackdropContext.Provider>;
};

export {
  BackdropContext,
  BackdropProvider,
  useBackdrop,
};
