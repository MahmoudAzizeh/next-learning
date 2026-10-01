import Link from "next/link";
import { notFound } from "next/navigation";

import { db } from "@/lib/db";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function UserPage({
  params,
}: Props) {
  const { id } = await params;

  const user = await db.orm.public.User.first({
    id: Number(id),
  });

  if (!user) {
    notFound();
  }

  return (
    <main className="user-details-page">
      <Link
        href="/users"
        className="back-link"
      >
        ← Back to Users
      </Link>

      <section className="user-details-card">
        <div className="user-details-avatar">
          {user.name.charAt(0).toUpperCase()}
        </div>

        <div className="user-details-content">
          <span className="user-details-label">
            USER PROFILE
          </span>

          <h1>{user.name}</h1>

          <div className="user-details-info">
            <div>
              <span>Username</span>
              <strong>@{user.username}</strong>
            </div>

            <div>
              <span>Email</span>
              <strong>{user.email}</strong>
            </div>
          </div>

          <div className="user-details-actions">
            <Link
              href={`/users/${user.id}/edit`}
              className="primary-button"
            >
              Edit User
            </Link>

            <form
              action={`/api/users/${user.id}`}
              method="POST"
            >
              <button
                type="submit"
                className="danger-button"
              >
                Delete User
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}