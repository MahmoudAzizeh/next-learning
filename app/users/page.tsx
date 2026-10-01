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
  const { search, page, deleted, sort } = await searchParams;

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
            user.name.ilike(`%${normalizedSearch}%`),
            user.username.ilike(`%${normalizedSearch}%`),
            user.email.ilike(`%${normalizedSearch}%`)
          )
        )
        .all()
    : await db.orm.public.User.all();

  const sortedUsers = sortUsers(users, sortOption);

  const currentPage = Math.max(Number(page) || 1, 1);

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

  const paginatedUsers = sortedUsers.slice(
    startIndex,
    endIndex
  );

  return (
    <main className="users-page">

      {/* Header */}
      <section className="users-hero">
        <div>
          <span className="users-label">
            USER MANAGEMENT
          </span>

          <h1>
            Manage your{" "}
            <span>users.</span>
          </h1>

          <p>
            Search, organize, and manage all users
            from one simple dashboard.
          </p>
        </div>

        <Link
          href="/users/new"
          className="users-add-button"
        >
          <span>+</span>
          Add New User
        </Link>
      </section>


      {/* Stats */}
      <section className="users-stats">

        <div className="users-stat">
          <div className="users-stat-icon">👥</div>

          <div>
            <strong>{sortedUsers.length}</strong>
            <span>Total Users</span>
          </div>
        </div>

        <div className="users-stat">
          <div className="users-stat-icon">📄</div>

          <div>
            <strong>{safePage}</strong>
            <span>Current Page</span>
          </div>
        </div>

        <div className="users-stat">
          <div className="users-stat-icon">🔎</div>

          <div>
            <strong>
              {normalizedSearch ? "Active" : "All"}
            </strong>
            <span>Search Filter</span>
          </div>
        </div>

      </section>


      {/* Content */}
      <section className="users-content">

        {deleted === "true" && (
          <DeleteSuccessMessage />
        )}


        {/* Search */}
        <div className="users-toolbar">

          <form className="users-search">

            <div className="search-input-wrapper">
              <span>⌕</span>

              <input
                type="text"
                name="search"
                placeholder="Search by name, username or email..."
                defaultValue={search || ""}
              />
            </div>


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
              <Link href="/users" className="clear-search">
                Clear
              </Link>
            )}

          </form>

        </div>


        {/* Users */}
        {paginatedUsers.length === 0 ? (

          <div className="no-users">

            <div className="no-users-icon">
              🔍
            </div>

            <h2>No users found</h2>

            <p>
              We couldn't find any users matching your search.
              Try another keyword.
            </p>

            <Link href="/users">
              Show all users
            </Link>

          </div>

        ) : (

          <div className="users-list">

            {paginatedUsers.map((user) => (
              <UserCard
                key={user.id}
                user={user}
              />
            ))}

          </div>

        )}


        {/* Pagination */}
        {sortedUsers.length > USERS_PER_PAGE && (

          <div className="pagination">

            {safePage > 1 ? (
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
            ) : (
              <span className="pagination-disabled">
                ← Previous
              </span>
            )}


            <div className="pagination-center">
              <span>Page</span>
              <strong>{safePage}</strong>
              <span>of</span>
              <strong>{totalPages}</strong>
            </div>


            {safePage < totalPages ? (
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
            ) : (
              <span className="pagination-disabled">
                Next →
              </span>
            )}

          </div>

        )}

      </section>

      <BackToTop />

    </main>
  );
}