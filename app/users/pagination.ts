export function getPagination(
  totalItems: number,
  currentPage: number,
  itemsPerPage: number
) {
  const totalPages = Math.max(
    Math.ceil(
      totalItems / itemsPerPage
    ),
    1
  );

  const safePage = Math.min(
    Math.max(currentPage, 1),
    totalPages
  );

  const startIndex =
    (safePage - 1) * itemsPerPage;

  const endIndex =
    startIndex + itemsPerPage;

  return {
    totalPages,
    safePage,
    startIndex,
    endIndex,
  };
}