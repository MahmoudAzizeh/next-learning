import Link from "next/link";
import BackToTop from "../BackToTop";
import DeleteSuccessMessage from "./DeleteSuccessMessage";
import { or } from "@prisma/orm-postgres/orm-client";
import { db } from "@/lib/db";
import UserCard from "./UserCard";
import { sortUsers } from "./sortUsers";
import { getPagination } from "./pagination";
import { getUsersPageUrl } from "./links";



type Props = {
  searchParams: Promise<{
    search?: string;
    page?: string;
    deleted?: string;
    sort?: string;
  }>;
};

const USERS_PER_PAGE = 5;

export default async function UsersPage({
  searchParams,
}: Props) {
  const {
    search,
    page,
    deleted,
    sort,
  } = await searchParams;

  const normalizedSearch = search?.trim();

  const sortOption =
    sort === "name-asc" ||
    sort === "name-desc" ||
    sort === "newest" ||
    sort === "oldest"
      ? sort
      : "name-asc";

  const users = normalizedSearch
    ? await db.orm.public.User
        .where((user) =>
          or(
            user.name.ilike(
              `%${normalizedSearch}%`
            ),
            user.username.ilike(
              `%${normalizedSearch}%`
            ),
            user.email.ilike(
              `%${normalizedSearch}%`
            )
          )
        )
        .all()
    : await db.orm.public.User.all();

  const sortedUsers = sortUsers(
    users,
    sortOption
  );

  const currentPage = Math.max(
    Number(page) || 1,
    1
  );

  const {
    totalPages,
    safePage,
    startIndex,
    endIndex,
  } = getPagination(
    sortedUsers.length,
    currentPage,
    USERS_PER_PAGE
  );

  const paginatedUsers =
    sortedUsers.slice(
      startIndex,
      endIndex
    );

  return (
    <main>
      <div className="users-header">
        <h1 className="users-title">
          Users
        </h1>

        <Link
          href="/users/new"
          className="add-button"
        >
          + Add New User
        </Link>
      </div>

      {deleted === "true" && (
        <DeleteSuccessMessage />
      )}

      <form className="users-search">
        <input
          type="text"
          name="search"
          placeholder="Search users..."
          defaultValue={search || ""}
        />

        <select
          name="sort"
          defaultValue={sortOption}
        >
          <option value="name-asc">
            Name A → Z
          </option>

          <option value="name-desc">
            Name Z → A
          </option>

          <option value="newest">
            Newest
          </option>

          <option value="oldest">
            Oldest
          </option>
        </select>

        <button type="submit">
          Search
        </button>

        {(search || sort) && (
          <Link href="/users">
            Clear
          </Link>
        )}
      </form>

      {paginatedUsers.length === 0 ? (
        <div className="no-users">
          <h2>No users found</h2>

          <p>
            Try a different search.
          </p>
        </div>
      ) : (
        paginatedUsers.map((user) => (
          <UserCard
            key={user.id}
            user={user}
          />
        ))
      )}

      {sortedUsers.length >
        USERS_PER_PAGE && (
        <div className="pagination">
          {safePage > 1 && (
            <Link
              href={getUsersPageUrl({
                page: safePage - 1,
                search,
                sort,
              })}
              className="pagination-button"
            >
              ← Previous
            </Link>
          )}

          <span className="pagination-info">
            Page {safePage} of {totalPages}
          </span>

          {safePage < totalPages && (
            <Link
              href={getUsersPageUrl({
                page: safePage + 1,
                search,
                sort,
              })}
              className="pagination-button"
            >
              Next →
            </Link>
          )}
        </div>
      )}

      <BackToTop />
    </main>
  );
}