import { ComponentProps, ReactNode, useEffect, useState } from 'react';

import { useTheme } from '../../hooks';
import style from '../../utils/style';
import {
  ProcessedTheme,
  HorizontalAlignmentValue,
  PaddingValue,
  LayerValue,
} from '../../types/theme';
import ChevronLeft from '../../icons/ChevronLeft';
import ChevronRight from '../../icons/ChevronRight';

import TableBody from './TableBody';
import TableHead from './TableHead';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import TableCell from './TableCell';

type ItemValue = ReactNode | string | number | boolean;

type Column = {
  key: string;
  header?: string;
  align?: HorizontalAlignmentValue;
  render?: (item: unknown, row: unknown) => ItemValue;
  slim?: boolean;
};

interface Props extends ComponentProps<'table'> {
  children?: ReactNode;
  rows?: Array<object>;
  columns?: Array<Column>;
  spacing?: PaddingValue;
  hideHeader?: boolean;
  rowHeight?: number | undefined;
  rowLimit?: number | undefined;
  stateEmpty?: React.ReactNode;
  rowsPerPage?: number;
  currentPage?: number;
}

type StyleProps = {
  theme: ProcessedTheme;
  layer: LayerValue;
  spacing: PaddingValue;
};

const StyledTable = style('div')<StyleProps>({
  base: ({ theme, layer, spacing }) => ({
    overflowX: 'auto',
    overflowY: 'hidden',
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      color: 'inherit',

      'thead tr, tbody tr:not(:last-child)': {
        borderBottom: `1px solid ${layer.palette.contextual.divider}`,
      },

      'td, th': {
        padding: theme.spacing[spacing],
      },

      th: {
        fontWeight: theme.typography.normal.medium,
      },

      tr: {
        verticalAlign: 'middle',
      },
    },
  }),
});

const StyledPagination = style('div')({
  base: {
    alignItems: 'center',
    display: 'flex',
    gap: '1rem',
    height: 26,
    justifyContent: 'center',
    marginTop: '1rem',
  },
});

const StyledPaginationArrow = style('div')({
  base: {
    border: 'currentColor solid 1px',
    borderRadius: '0.2rem',
    cursor: 'pointer',
    height: 26,
    transition: 'opacity 0.2s ease',
    width: 26,

    svg: {
      width: '100%',
    },

    '&[data-is-disabled="true"]': {
      cursor: 'default',
      opacity: 0.5,
      pointerEvents: 'none',
    },
  },
});

const StyledPaginationNumber = style('div')({
  base: {
    display: 'flex',
    gap: '0.25rem',

    span: {
      display: 'flex',
      gap: '0.25rem',
      opacity: 0.5,
    },
  },
});

const StyledTableRow = style(TableRow)({
  base: {},
});

const RenderTable = ({
  columns,
  rows,
  hideHeader,
  rowHeight,
  rowsPerPage,
  currentPage,
}: Props) => (
  <>
    {!hideHeader && (
      <TableHead>
        <TableRow>
          {columns &&
            columns.map(({ key, header, align }, j: number) => (
              <TableHeader key={j} align={align}>
                {typeof header !== 'undefined' ? header : String(key)}
              </TableHeader>
            ))}
        </TableRow>
      </TableHead>
    )}

    {rows && !!rows.length && (
      <TableBody height={rowsPerPage && rowHeight && rowsPerPage * rowHeight}>
        {(rowsPerPage && currentPage
          ? rows.slice(
              currentPage * rowsPerPage,
              currentPage * rowsPerPage + rowsPerPage
            )
          : rows
        ).map((row: object, i: number) => (
          <StyledTableRow key={i} height={rowHeight}>
            {columns &&
              columns.map(({ key, align, render, slim }, j: number) => (
                <TableCell key={j} align={align} slim={slim}>
                  {typeof render === 'function'
                    ? render(row[key], row)
                    : String(row[key])}
                </TableCell>
              ))}
          </StyledTableRow>
        ))}
        {rowsPerPage && <tr style={{ height: '100%' }} />}
      </TableBody>
    )}
  </>
);

export default function Table({
  children,
  rows = [],
  columns,
  spacing = 'reduced',
  hideHeader,
  rowHeight,
  rowLimit,
  stateEmpty,
  ...props
}: Props) {
  const [currentPage, setCurrentPage] = useState(0);
  const rowsPerPage = rowLimit;
  const maxPages = rowsPerPage ? Math.round(rows.length / rowsPerPage) : 0;

  const { theme, layer } = useTheme();

  useEffect(() => setCurrentPage(0), [rows]);

  return (
    <StyledTable
      className="fabric--table"
      theme={theme}
      layer={layer}
      spacing={spacing}
      {...props}
    >
      <table>
        {typeof columns !== 'undefined' && typeof rows !== 'undefined' ? (
          <RenderTable
            columns={columns}
            rows={rows}
            hideHeader={hideHeader}
            rowHeight={rowHeight}
            rowsPerPage={rowsPerPage}
            currentPage={currentPage}
            spacing={spacing}
          />
        ) : (
          children
        )}
      </table>

      {!rows.length && (
        <div
          style={
            rowsPerPage
              ? { height: rowsPerPage * (rowHeight || 46) }
              : undefined
          }
        >
          {stateEmpty}
        </div>
      )}

      {maxPages > 1 && (
        <StyledPagination>
          <>
            <StyledPaginationArrow
              onClick={() => setCurrentPage((prevState) => prevState - 1)}
              data-is-disabled={currentPage < 1}
              role="button"
            >
              <ChevronLeft />
            </StyledPaginationArrow>

            <StyledPaginationNumber>
              {currentPage + 1}
              <span>
                /<span>{maxPages}</span>
              </span>
            </StyledPaginationNumber>

            <StyledPaginationArrow
              onClick={() => setCurrentPage((prevState) => prevState + 1)}
              data-is-disabled={currentPage >= maxPages - 1}
              role="button"
            >
              <ChevronRight />
            </StyledPaginationArrow>
          </>
        </StyledPagination>
      )}
    </StyledTable>
  );
}
