import {
  forwardRef,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useReducer,
} from 'react';
import { AppearanceValue, NotificationPositionValue } from '../../types/theme';
import { ReducerState } from './types';
import { ToastContext } from './useToast';
import Toaster from './Toaster';

type Props = {
  children?: ReactNode;
  maxToasts: number;
  position: NotificationPositionValue;
  portal: boolean;
  appearance?: AppearanceValue;
};

const reducer = (state: ReducerState, { type, payload }) => {
  switch (type) {
    case 'ADD_TOAST': {
      const toasts = [payload, ...state.toasts];
      return {
        ...state,
        toasts,
      };
    }
    case 'REMOVE_TOAST': {
      return {
        ...state,
        toasts: state.toasts.filter(({ id }) => payload !== id),
      };
    }
    case 'SET_MAX_TOASTS': {
      return {
        ...state,
        maxToasts: payload as number,
      };
    }
    default: {
      return state;
    }
  }
};

const ToastProvider = forwardRef(
  (
    {
      children,
      maxToasts = 0,
      portal = true,
      position = 'bottom',
      appearance,
      ...props
    }: Props,
    ref
  ) => {
    const [state, dispatch] = useReducer(reducer, {
      addToast: (toastConfig) => {
        const id = Math.round(Math.random() * Date.now());
        dispatch({
          type: 'ADD_TOAST',
          payload: {
            ...toastConfig,
            id,
          },
        });
        return id;
      },
      removeToast: (id) => {
        dispatch({ type: 'REMOVE_TOAST', payload: id });
      },
      maxToasts,
      toasts: [],
    });

    useImperativeHandle(ref, () => ({
      addToast: state.addToast,
    }));

    useEffect(() => {
      dispatch({ type: 'SET_MAX_TOASTS', payload: maxToasts });
    }, [maxToasts]);

    return (
      <ToastContext.Provider value={state}>
        {children}
        <Toaster
          appearance={appearance}
          portal={portal}
          position={position}
          {...props}
        />
      </ToastContext.Provider>
    );
  }
);
ToastProvider.displayName = 'ToastProvider';
export default ToastProvider;
