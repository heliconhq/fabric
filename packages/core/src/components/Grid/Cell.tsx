import { PropsWithChildren } from 'react';
import style from '../../utils/style';
import { AlignValue } from '../../types/theme';

type CellProps = {
  width?: number | string;
  height?: number | string;
  align?: AlignValue;
  left?: number;
  top?: number;
};
const offset = (value: number | undefined) =>
  typeof value !== 'undefined' ? value + 1 : 'auto';

const StyledCell = style('div')<CellProps>({
  base: ({ width, height, left, top, align }) => ({
    display: 'grid',
    minWidth: '0',
    gridColumnEnd: `span ${width}`,
    gridRowEnd: `span ${height}`,
    gridColumnStart: offset(left),
    gridRowStart: offset(top),
    justifySelf: align || 'auto',
  }),
});

export default function Cell({
  children,
  width = 1,
  height = 1,
  align,
  ...props
}: PropsWithChildren<CellProps>) {
  return (
    <StyledCell
      width={width}
      height={height}
      align={align}
      {...props}
      className="fabric--cell"
    >
      {children}
    </StyledCell>
  );
}
