import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import getPagesToShow from './functions';
import ArrowButton from './PaginationPartials/ArrowButton';

interface PagesState {
  pageNumber: number;
  firstItem: number;
  lastItem: number;
}

interface Props {
  currentPage: number;
  perPage: number;
  totalItems: number;
  edgePages?: number;
  firstPageLabel?: string;
  lastPageLabel?: string;
  onPageChange: (pagesState: PagesState) => void;
  hideLabels?: boolean;
}

const Pagination = ({
  currentPage,
  perPage,
  totalItems,
  edgePages = 1,
  firstPageLabel = 'First',
  lastPageLabel = 'Last',
  onPageChange,
  hideLabels,
  ...props
}: Props) => {
  const totalPages = Math.ceil(totalItems / perPage);
  const shouldShowLeading = !hideLabels && currentPage > edgePages + 1;
  const shouldShowTrailing =
    !hideLabels && currentPage < totalPages - edgePages;
  const pagesToShow = getPagesToShow(currentPage, edgePages, totalPages);
  const handleClick = (pageNumber: number) => {
    onPageChange({ pageNumber, firstItem: 1, lastItem: totalPages });
  };

  return (
    <nav {...props}>
      <ButtonGroup appearance="neutral" design="regular">
        {(buttonProps) => (
          <>
            <ArrowButton
              currentPage={currentPage}
              disabled={currentPage === 1}
              handleClick={handleClick}
              direction="left"
              {...buttonProps}
            />
            {shouldShowLeading && (
              <Button
                className="page-link"
                onClick={() => handleClick(1)}
                {...buttonProps}
              >
                {firstPageLabel}
              </Button>
            )}

            {pagesToShow.map((pageNumber) => (
              <Button
                key={pageNumber}
                className="page-link"
                onClick={() => handleClick(pageNumber)}
                active={pageNumber === currentPage}
                {...buttonProps}
              >
                {pageNumber}
              </Button>
            ))}

            {shouldShowTrailing && (
              <Button
                className="page-link"
                onClick={() => handleClick(totalPages)}
                {...buttonProps}
              >
                {lastPageLabel}
              </Button>
            )}
            <ArrowButton
              currentPage={currentPage}
              disabled={currentPage === totalPages}
              handleClick={handleClick}
              direction="right"
              {...buttonProps}
            />
          </>
        )}
      </ButtonGroup>
    </nav>
  );
};

export default Pagination;
