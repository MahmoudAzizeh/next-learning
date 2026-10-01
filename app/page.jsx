import Link from "next/link";

export default function Home() {
  return (
    <main className="home-page">

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">

          <div className="badge">
            ✨ Modern Next.js Application
          </div>

          <h1>
            Build something
            <span> amazing.</span>
          </h1>

          <p>
            A modern web application built with Next.js,
            designed to be fast, beautiful, and easy to use.
          </p>

          <div className="hero-buttons">
            <Link href="/users" className="btn btn-primary">
              Explore Users →
            </Link>

            <Link href="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>

          <div className="hero-note">
            ⚡ Fast &nbsp; • &nbsp; 🔒 Secure &nbsp; • &nbsp; 📱 Responsive
          </div>

        </div>

        <div className="hero-glow glow-one"></div>
        <div className="hero-glow glow-two"></div>
      </section>


      {/* Stats */}
      <section className="stats">
        <div className="stat-card">
          <strong>100%</strong>
          <span>Responsive</span>
        </div>

        <div className="stat-card">
          <strong>24/7</strong>
          <span>Available</span>
        </div>

        <div className="stat-card">
          <strong>Fast</strong>
          <span>Performance</span>
        </div>

        <div className="stat-card">
          <strong>Next.js</strong>
          <span>Powered</span>
        </div>
      </section>


      {/* Features */}
      <section className="features">

        <div className="section-heading">
          <span>FEATURES</span>
          <h2>Everything you need to get started</h2>
          <p>
            A clean foundation with modern technologies and
            a beautiful user experience.
          </p>
        </div>


        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast Performance</h3>
            <p>
              Optimized with Next.js to deliver fast loading
              times and smooth navigation.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Modern Design</h3>
            <p>
              A clean and modern interface designed to look
              great on every screen.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Fully Responsive</h3>
            <p>
              The application automatically adapts to phones,
              tablets, and desktop screens.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔐</div>
            <h3>Secure & Reliable</h3>
            <p>
              Built with a solid architecture that can grow
              with your application.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Easy to Scale</h3>
            <p>
              Start small and easily add new features as your
              project grows.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Developer Friendly</h3>
            <p>
              Simple structure and clean components make
              development easier.
            </p>
          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="cta">

        <div>
          <span className="cta-label">READY TO EXPLORE?</span>

          <h2>
            Let's build something great.
          </h2>

          <p>
            Explore the application and discover what it can do.
          </p>
        </div>

        <Link href="/contact" className="btn btn-white">
          Contact Us →
        </Link>

      </section>

    </main>
  );
}