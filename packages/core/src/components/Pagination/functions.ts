const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

export default function getPagesToShow(
  currentPage: number,
  edgePages: number,
  totalPages: number
) {
  let startIndex = 0;
  if (currentPage - edgePages - 1 >= 0) {
    startIndex = currentPage - edgePages - 1;
  }
  if (currentPage > totalPages - edgePages - 1) {
    startIndex = totalPages - edgePages * 2 - 1;
  }
  const endIndex =
    startIndex + edgePages * 2 + 1 >= totalPages
      ? totalPages
      : startIndex + edgePages * 2 + 1;
  return range(1, totalPages).slice(startIndex > 0 ? startIndex : 0, endIndex);
}
