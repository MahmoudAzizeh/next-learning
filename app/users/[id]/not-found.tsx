import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>User Not Found</h1>

      <p>
        The user you are looking for does not exist.
      </p>

      <Link href="/users">
        ← Back to Users
      </Link>
    </main>
  );
}