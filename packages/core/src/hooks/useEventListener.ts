import { useEffect } from 'react';

type Props<T extends keyof DocumentEventMap> = {
  event: keyof DocumentEventMap;
  // eslint-disable-next-line no-unused-vars
  cb: (event: DocumentEventMap[T]) => void;
};

export default function useEvenListener({ cb, event }: Props<typeof event>) {
  useEffect(() => {
    document.addEventListener(event, cb);
    return () => document.removeEventListener(event, cb);
  }, []);
}
