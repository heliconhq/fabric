import { ReactNode } from 'react';
import { BackdropValue } from '../../types/theme';

export type ToastConfig = {
  id?: number;
  timeout?: number;
  content: ReactNode;
  backdrop: BackdropValue;
};

export type ReducerState = {
  removeToast: (id: number) => void;
  addToast: (toast: ToastConfig) => void;
  toasts: ToastConfig[];
  maxToasts: number;
};
