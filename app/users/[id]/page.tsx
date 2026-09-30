import Link from "next/link";
import { notFound } from "next/navigation";
import DeleteUser from "../DeleteUser";
import { db } from "@/lib/db";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function UserPage({ params }: Props) {
  const { id } = await params;

  const user = await db.orm.public.User.first({
    id: Number(id),
  });

  if (!user) {
    notFound();
  }

  return (
    <main className="user-details">
      <Link
        href="/users"
        className="back-link"
      >
        ← Back to Users
      </Link>

      <div className="user-details-card">
        <h1>{user.name}</h1>

        <div className="user-info">
          <p>
            <strong>Username:</strong>
            <span>{user.username}</span>
          </p>

          <p>
            <strong>Email:</strong>
            <span>{user.email}</span>
          </p>
        </div>

        <div className="user-details-actions">
          <Link
            href={`/users/${user.id}/edit`}
            className="edit-button"
          >
            Edit
          </Link>

          <DeleteUser id={user.id} />
        </div>
      </div>
    </main>
  );
}