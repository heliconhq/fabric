import { useLayoutEffect, useState, useRef } from 'react';

type DimensionState = {
  width: number;
  height: number;
};

const useResizeObserver = <T extends Element>() => {
  const ref = useRef<T>(null);
  const animationFrame = useRef<number>(0);
  const [dimensions, setDimensions] = useState<DimensionState>({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    if (!ref.current) {
      return undefined;
    }

    const observer = new ResizeObserver((entries) => {
      if (entries.length) {
        const [entry] = entries;

        cancelAnimationFrame(animationFrame.current);
        animationFrame.current = requestAnimationFrame(() => {
          setDimensions({
            width: Math.round(entry.contentRect.width),
            height: Math.round(entry.contentRect.height),
          });
        });
      }
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame.current);
    };
  }, [ref]);

  return {
    ref,
    width: dimensions.width,
    height: dimensions.height,
  };
};

export default useResizeObserver;
