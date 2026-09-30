import Link from "next/link";
<Link href="/contact">Contact</Link>

export default function Home() {
  return (
    <main>
      <h1>My Website</h1>

      <nav>
        <Link href="/">Home</Link>
        {" | "}
        <Link href="/about">About</Link>
      </nav>

      
    </main>
  );
}