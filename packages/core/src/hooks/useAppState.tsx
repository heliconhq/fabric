import { ReactNode, createContext, useContext, useReducer } from 'react';

interface OffsetEntry {
  key: string;
  offset: string;
  direction?: string;
}

type Offset = {
  [key in 'top' | 'left' | 'right' | 'bottom']: OffsetEntry[];
};

type Direction = 'top' | 'left' | 'right' | 'bottom';

type State = {
  offsets: Offset;
  icons: Record<string, ReactNode | (() => ReactNode)>;
  allowScrolling: boolean;
};

type AddOffsetAction = {
  type: 'ADD_OFFSET';
  key: string;
  offset: string;
  direction: Direction;
};

type RemoveOffsetAction = {
  type: 'REMOVE_OFFSET';
  key: string;
  direction: Direction;
};

type DisableScrolling = {
  type: 'DISABLE_SCROLLING';
};

type EnableScrolling = {
  type: 'ENABLE_SCROLLING';
};

type Action =
  | AddOffsetAction
  | RemoveOffsetAction
  | DisableScrolling
  | EnableScrolling;

interface AppStateProviderProps {
  children: React.ReactNode;
  initialOffset: Offset;
  icons: Record<string, ReactNode | (() => ReactNode)>;
}

const initialState: State = {
  offsets: {
    top: [],
    left: [],
    right: [],
    bottom: [],
  },
  icons: {},
  allowScrolling: true,
};

type AppStateContextType = State & {
  addOffset: (key: string, offset: string, direction: Direction) => void;
  remOffset: (key: string, direction: Direction) => void;
  disableScrolling: () => void;
  enableScrolling: () => void;
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_OFFSET': {
      const { key, offset, direction } = action;
      const { offsets } = state;
      return {
        ...state,
        offsets: {
          ...offsets,
          [direction]: [
            ...offsets[direction].filter((entry) => key !== entry.key),
            { offset, key },
          ],
        },
      };
    }
    case 'REMOVE_OFFSET': {
      const { key, direction } = action;
      const { offsets } = state;
      return {
        ...state,
        offsets: {
          ...offsets,
          [direction]: offsets[direction].filter((entry) => key !== entry.key),
        },
      };
    }
    case 'DISABLE_SCROLLING': {
      return {
        ...state,
        allowScrolling: false,
      };
    }
    case 'ENABLE_SCROLLING': {
      return {
        ...state,
        allowScrolling: true,
      };
    }
    default: {
      return state;
    }
  }
};

const AppStateContext = createContext<AppStateContextType | null>(null);

const useAppState = (): AppStateContextType => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};

const getInitialState = (initialOffset: Offset) => ({
  ...initialState,
  offsets: {
    ...initialState.offsets,
    ...initialOffset,
  },
});

const AppStateProvider = ({
  children,
  initialOffset,
  icons,
}: AppStateProviderProps) => {
  const [state, dispatch] = useReducer(reducer, getInitialState(initialOffset));

  const addOffset = (key: string, offset: string, direction: Direction) =>
    dispatch({
      type: 'ADD_OFFSET',
      key,
      offset,
      direction,
    });
  const remOffset = (key: string, direction: Direction) =>
    dispatch({
      type: 'REMOVE_OFFSET',
      key,
      direction,
    });
  const disableScrolling = () =>
    dispatch({
      type: 'DISABLE_SCROLLING',
    });
  const enableScrolling = () =>
    dispatch({
      type: 'ENABLE_SCROLLING',
    });

  return (
    <AppStateContext.Provider
      value={{
        ...state,
        addOffset,
        remOffset,
        disableScrolling,
        enableScrolling,
        icons,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
export default useAppState;
export {
  AppStateProvider,
  useAppState,
  AppStateContext,
  Offset,
  Direction,
  getInitialState,
  initialState,
};
