import { createContext, useContext } from 'react';

import { ReducerState } from './types';

const ToastContext = createContext<ReducerState>({
  removeToast: (_) => undefined,
  addToast: (_) => undefined,
  toasts: [],
  maxToasts: 0,
});

const useToast = () => useContext(ToastContext);

export { useToast, ToastContext };
