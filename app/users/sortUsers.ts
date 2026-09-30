type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export function sortUsers(
  users: User[],
  sortOption: string
) {
  return [...users].sort((a, b) => {
    if (sortOption === "name-asc") {
      return a.name.localeCompare(b.name);
    }

    if (sortOption === "name-desc") {
      return b.name.localeCompare(a.name);
    }

    if (sortOption === "newest") {
      return b.id - a.id;
    }

    if (sortOption === "oldest") {
      return a.id - b.id;
    }

    return 0;
  });
}