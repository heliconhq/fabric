import { ReactNode } from 'react';
import useResizeObserver from '../hooks/useResizeObserver';

type BodyRenderParams = {
  width: number;
  height: number;
};

type ResizableProps = {
  children: ({ width, height }: BodyRenderParams) => ReactNode;
};

const Resizable = ({ children, ...props }: ResizableProps) => {
  const { ref, width, height } = useResizeObserver<HTMLDivElement>();

  return (
    <div style={{ width: '100%', height: '100%' }} ref={ref} {...props}>
      {children({ width, height })}
    </div>
  );
};

export default Resizable;
