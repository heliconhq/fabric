import React, { useEffect, useState, useRef, ReactElement } from 'react';
import style from '../../utils/style';

import { useTheme } from '../../hooks';
import useResizeObserver from '../../hooks/useResizeObserver';
import Marker from './Viewer2dPartials/Marker';

type Props = {
  children: ReactElement | ReactElement[];
  url: string;
  onLoad?: (loaded: boolean) => void;
};

type SrcProps = {
  viewBox: string;
  width: number;
  height: number;
  innerSrc: string;
};

type LineProps = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color?: string;
  width?: number;
  dot: boolean;
  el?: React.RefObject<SVGElement>;
};

type Viewer2dProps = {
  x: number;
  y: number;
  children: ReactElement;
  svgEl: React.RefObject<SVGSVGElement>;
  width?: number;
  height?: number;
  addLine: (line: LineProps) => void;
  color?: string;
  dot?: boolean;
};

type DotProps = {
  cx: number;
  cy: number;
  r: number;
  color?: string;
};

type StyledLineProps = {
  color?: string;
};

type StyledViewerProps = {
  isLoading?: boolean;
};

const StyledViewer = style('div')<StyledViewerProps>({
  base: ({ isLoading }) => ({
    position: 'relative',

    opacity: isLoading ? 0 : 1,
    transition: 'opacity 500ms',
  }),
});

const StyledLine = style('line')<StyledLineProps>({
  base: ({ color }) => ({
    stroke: color,
    strokeWidth: 2,
  }),
});

const Dot = ({ cx = 0, cy = 0, r = 0, color }: DotProps) => (
  <line
    x1={cx}
    y1={cy}
    x2={cx}
    y2={cy}
    vectorEffect="non-scaling-stroke"
    stroke={color}
    strokeWidth={r}
    strokeLinecap="round"
  />
);

const StyledDot = style(Dot)<DotProps>({
  base: ({ color }) => ({
    fill: color,
  }),
});

const Line = ({ x1, y1, x2, y2, color, width = 4, dot = false }: LineProps) => (
  <>
    <StyledLine
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      width={width}
      color={color}
      vectorEffect="non-scaling-stroke"
    />
    {dot && <StyledDot color={color} cx={x1} cy={y1} r={12} />}
  </>
);

export default function Viewer2d({
  url,
  children,
  onLoad: originalOnLoad,
  ...props
}: Props) {
  const { theme } = useTheme();
  const { ref, width, height } = useResizeObserver<HTMLDivElement>();

  const [lines, setLines] = useState<LineProps[] | null>([]);
  const [src, setSrc] = useState<SrcProps | null>(null);
  const svgEl = useRef<SVGSVGElement>(null);

  const onLoad = (loaded: boolean) =>
    typeof originalOnLoad === 'function' && originalOnLoad(loaded);

  const addLine = (line: LineProps) =>
    setLines((updatedLines) => {
      if (updatedLines) {
        const index = updatedLines.findIndex(({ el }) => el === line.el);

        if (index === -1) {
          return [...updatedLines, line];
        }

        return updatedLines.map((l, i) => (i === index ? line : l));
      }
      return null;
    });

  const clean = (input: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(input, 'image/svg+xml');

    const root = doc.documentElement;

    const originalWidth = root.getAttribute('width') || 'auto';
    const originalHeight = root.getAttribute('height') || 'auto';
    const viewBox =
      root.getAttribute('viewBox') || `0 0 ${originalWidth} ${originalHeight}`;

    let innerSrc = '';
    for (let i = 0; i < root.children.length; i += 1) {
      innerSrc += root.children[i].outerHTML;
    }

    return {
      viewBox,
      width,
      height,
      innerSrc,
    };
  };

  useEffect(() => {
    setSrc(null);
    fetch(url)
      .then((response) => response.text())
      .then((content) => setSrc(clean(content)))
      .catch(() => {});
  }, [url]);

  useEffect(() => {
    onLoad(src !== null);
  }, [src]);

  return (
    <StyledViewer theme={theme} isLoading={src === null} {...props} ref={ref}>
      {src !== null ? (
        <>
          <svg width="100%" height="100%" viewBox={src.viewBox} ref={svgEl}>
            <g dangerouslySetInnerHTML={{ __html: src.innerSrc }} />
            {lines ? lines.map((line, i) => <Line key={i} {...line} />) : null}
          </svg>
          {React.Children.map(
            children,
            (child) =>
              React.cloneElement(child, {
                theme,
                svgEl,
                width,
                height,
                addLine,
              }) as unknown as HTMLDivElement
          )}
        </>
      ) : null}
    </StyledViewer>
  );
}

Viewer2d.ConnectedComponent = ({
  x,
  y,
  children,
  svgEl,
  width,
  height,
  addLine,
  color,
  dot = false,
  ...props
}: Viewer2dProps) => {
  const { theme } = useTheme();
  const el = useRef<SVGElement>(null);
  const lineColor =
    typeof color === 'undefined'
      ? theme.layer.palette.semantic.primary[700]
      : color;

  const drawLine = (): LineProps | null => {
    if (svgEl.current && el.current) {
      const point = svgEl.current.createSVGPoint();

      const {
        left,
        top,
        width: w,
        height: h,
      } = el.current.getBoundingClientRect();

      point.x = left + w / 2;
      point.y = top + h / 2;

      const ctm = svgEl.current.getScreenCTM();

      if (ctm !== null) {
        const matrix = ctm.inverse();
        const { x: x2, y: y2 } = point.matrixTransform(matrix);

        return {
          el,
          x1: x,
          y1: y,
          x2,
          y2,
          dot,
          color: lineColor,
        };
      }
    }

    return null;
  };

  useEffect(() => {
    const line = drawLine();

    if (line !== null) {
      addLine(line);
    }
  }, [svgEl, x, y, width, height]);

  return (
    <div {...props}>
      {React.cloneElement(React.Children.only(children), { ref: el })}
    </div>
  );
};

Viewer2d.Marker = Marker;
