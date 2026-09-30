export function getUsersPageUrl({
  page,
  search,
  sort,
}: {
  page: number;
  search?: string;
  sort?: string;
}) {
  const params = new URLSearchParams();

  params.set("page", String(page));

  if (search) {
    params.set("search", search);
  }

  if (sort) {
    params.set("sort", sort);
  }

  return `/users?${params.toString()}`;
}