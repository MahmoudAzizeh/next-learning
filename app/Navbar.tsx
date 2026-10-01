import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <Link href="/" className="logo">
          <span className="logo-icon">✦</span>
          <span>My App</span>
        </Link>

        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/users">Users</Link>
        </nav>

        <Link href="/contact" className="nav-button">
          Get Started →
        </Link>
      </div>
    </header>
  );
}