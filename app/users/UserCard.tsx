import Link from "next/link";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

type UserCardProps = {
  user: User;
};

export default function UserCard({
  user,
}: UserCardProps) {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>

      <p>
        Username: {user.username}
      </p>

      <p>
        Email: {user.email}
      </p>

      <div className="user-actions">
        <Link href={`/users/${user.id}`}>
          View User
        </Link>

        <Link
          href={`/users/${user.id}/edit`}
          className="edit-button"
        >
          Edit
        </Link>
      </div>
    </div>
  );
}