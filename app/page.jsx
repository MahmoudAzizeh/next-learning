export default function Home() {
  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to My App</h1>

          <p>
            A simple and modern web application built with Next.js.
            Explore our website and discover what we have to offer.
          </p>

          <div className="hero-buttons">
            <a href="/users" className="primary-button">
              View Users
            </a>

            <a href="/about" className="secondary-button">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>What We Offer</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>👥 Users</h3>
            <p>
              Browse and manage users easily through our user management page.
            </p>
            <a href="/users">View Users →</a>
          </div>

          <div className="feature-card">
            <h3>ℹ️ About Us</h3>
            <p>
              Learn more about our application and what we are building.
            </p>
            <a href="/about">About Us →</a>
          </div>

          <div className="feature-card">
            <h3>📩 Contact</h3>
            <p>
              Have a question? Get in touch with us through our contact page.
            </p>
            <a href="/contact">Contact Us →</a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to Get Started?</h2>

        <p>
          Explore the application and see what it can do.
        </p>

        <a href="/users" className="primary-button">
          Get Started
        </a>
      </section>
    </main>
  );
}