import Link from "next/link";

export default function About() {
  return (
    <main className="about-page">

      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-label">ABOUT US</span>

          <h1>
            Building simple things
            <span> beautifully.</span>
          </h1>

          <p>
            We believe great software should be fast, simple,
            reliable, and enjoyable to use.
          </p>
        </div>
      </section>


      {/* Story */}
      <section className="about-story">

        <div className="story-content">
          <span className="section-label">OUR STORY</span>

          <h2>
            A simple idea with a bigger vision.
          </h2>

          <p>
            This project was created as a modern web application
            using Next.js. The goal is to build a clean foundation
            that can grow into something much bigger.
          </p>

          <p>
            From user management to responsive pages and database
            integration, every part is designed with simplicity
            and maintainability in mind.
          </p>

          <Link href="/users" className="btn btn-primary">
            Explore Users →
          </Link>
        </div>

        <div className="story-card">
          <div className="story-card-icon">✦</div>

          <h3>Built with modern technology</h3>

          <p>
            Next.js, React, PostgreSQL and Prisma work together
            to create a powerful and scalable application.
          </p>

          <div className="technology-list">
            <span>Next.js</span>
            <span>React</span>
            <span>PostgreSQL</span>
            <span>Prisma</span>
          </div>
        </div>

      </section>


      {/* Values */}
      <section className="values">

        <div className="section-heading">
          <span>OUR VALUES</span>

          <h2>
            What we care about
          </h2>

          <p>
            These principles guide the way we build and improve
            the application.
          </p>
        </div>


        <div className="values-grid">

          <div className="value-card">
            <div className="value-number">01</div>
            <h3>Simplicity</h3>
            <p>
              We keep interfaces clean and easy to understand,
              without unnecessary complexity.
            </p>
          </div>

          <div className="value-card">
            <div className="value-number">02</div>
            <h3>Performance</h3>
            <p>
              Fast experiences matter. We build with performance
              in mind from the beginning.
            </p>
          </div>

          <div className="value-card">
            <div className="value-number">03</div>
            <h3>Quality</h3>
            <p>
              Clean code, thoughtful design, and reliable
              functionality are always important.
            </p>
          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="about-cta">

        <div>
          <span>LET'S BUILD</span>

          <h2>
            Have something in mind?
          </h2>

          <p>
            We'd love to hear from you.
          </p>
        </div>

        <Link href="/contact" className="btn btn-white">
          Contact Us →
        </Link>

      </section>

    </main>
  );
}