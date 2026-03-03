import { ReactNode, useRef, useState, useEffect } from 'react';
import { useTheme } from '../../../hooks';
import style from '../../../utils/style';

type MarkerProps = {
  x: number;
  y: number;
  children?: ReactNode;
  svgEl?: React.RefObject<SVGSVGElement>;
  width?: number;
  height?: number;
};

type MarkerPositionState = {
  top: number;
  left: number;
};

type StyledMarkerProps = {
  position: MarkerPositionState;
};

const StyledMarker = style('div')<StyledMarkerProps>({
  base: ({ position }) => ({
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    top: `${position.top}px`,
    left: `${position.left}px`,
  }),
});
export default function Marker({
  x,
  y,
  children,
  svgEl,
  width,
  height,
  ...props
}: MarkerProps) {
  const { theme } = useTheme();
  const el = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<MarkerPositionState | null>(null);
  const updatePosition = () => {
    if (svgEl && svgEl.current) {
      const point = new DOMPoint();
      point.x = x;
      point.y = y;
      const matrix = svgEl.current.getScreenCTM();
      const { left: offsetLeft, top: offsetTop } =
        svgEl.current.getBoundingClientRect();
      if (matrix !== null) {
        const { x: left, y: top } = point.matrixTransform(matrix);
        setPosition({ left: left - offsetLeft, top: top - offsetTop });
      }
    }

    return null;
  };

  useEffect(() => {
    updatePosition();
  }, [svgEl, el, x, y, width, height]);

  if (position === null) {
    return null;
  }
  return (
    <StyledMarker theme={theme} position={position} {...props} ref={el}>
      {children}
    </StyledMarker>
  );
}
