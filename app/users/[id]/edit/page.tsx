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
    <main>
      <Link href={`/users/${id}`}>
        ← Back to User
      </Link>

      <h1 className="users-title">
  Edit User
</h1>

      <EditUser
        id={user.id}
        name={user.name}
        username={user.username}
        email={user.email}
      />
    </main>
  );
}