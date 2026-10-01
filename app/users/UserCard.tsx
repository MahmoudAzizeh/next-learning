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
  const initials = user.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="user-card">

      {/* User */}
      <div className="user-main">

        <div className="user-avatar">
          {initials}
        </div>

        <div className="user-info">

          <h2>{user.name}</h2>

          <p className="user-username">
            @{user.username}
          </p>

          <p className="user-email">
            {user.email}
          </p>

        </div>

      </div>


      {/* Actions */}
      <div className="user-actions">

        <Link
          href={`/users/${user.id}`}
          className="user-view-button"
        >
          View User
        </Link>

        <Link
          href={`/users/${user.id}/edit`}
          className="user-edit-button"
        >
          Edit
        </Link>

      </div>

    </article>
  );
}