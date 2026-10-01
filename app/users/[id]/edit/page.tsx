import Link from "next/link";
import { notFound } from "next/navigation";

import { db } from "@/lib/db";
import EditUser from "../../EditUser";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditUserPage({
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
    <main className="user-form-page">
      <div className="user-form-container">
        <Link
          href={`/users/${id}`}
          className="back-link"
        >
          ← Back to User
        </Link>

        <div className="user-form-header">
          <div className="user-form-icon">✦</div>

          <div>
            <p className="user-form-eyebrow">
              USER MANAGEMENT
            </p>

            <h1 className="user-form-title">
              Edit User
            </h1>

            <p className="user-form-description">
              Update this user's information below.
            </p>
          </div>
        </div>

        <div className="user-form-card">
          <div className="user-form-card-header">
            <h2>Personal Information</h2>

            <p>
              Keep the user's details up to date.
            </p>
          </div>

          <EditUser
            id={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
          />
        </div>
      </div>
    </main>
  );
}