import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>My Users App</h1>

      <Link href="/users">
        Go to Users
      </Link>
    </main>
  );
}
