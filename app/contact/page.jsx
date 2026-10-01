import Link from "next/link";

export default function Contact() {
  return (
    <main className="contact-page">

      {/* Hero */}
      <section className="contact-hero">
        <div>
          <span className="contact-label">GET IN TOUCH</span>

          <h1>
            Let's talk about
            <span> your project.</span>
          </h1>

          <p>
            Have a question, an idea, or just want to say hello?
            We'd love to hear from you.
          </p>
        </div>
      </section>


      {/* Contact Content */}
      <section className="contact-section">

        {/* Information */}
        <div className="contact-info">

          <span className="section-label">CONTACT US</span>

          <h2>
            We'd love to hear from you.
          </h2>

          <p>
            Whether you have a question about the project,
            need help, or want to discuss an idea, feel free
            to reach out.
          </p>


          <div className="contact-details">

            <div className="contact-detail">
              <div className="contact-icon">✉</div>

              <div>
                <span>Email</span>
                <strong>hello@example.com</strong>
              </div>
            </div>


            <div className="contact-detail">
              <div className="contact-icon">☎</div>

              <div>
                <span>Phone</span>
                <strong>+961 70 000 000</strong>
              </div>
            </div>


            <div className="contact-detail">
              <div className="contact-icon">⌖</div>

              <div>
                <span>Location</span>
                <strong>Lebanon</strong>
              </div>
            </div>

          </div>

        </div>


        {/* Form */}
        <div className="contact-form-card">

          <h3>Send us a message</h3>

          <p>
            Fill out the form and we'll get back to you.
          </p>

          <form>

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="name">
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                />
              </div>


              <div className="form-group">
                <label htmlFor="email">
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>

            </div>


            <div className="form-group">
              <label htmlFor="subject">
                Subject
              </label>

              <input
                id="subject"
                type="text"
                placeholder="How can we help?"
              />
            </div>


            <div className="form-group">
              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                rows="6"
                placeholder="Tell us more about your message..."
              />
            </div>


            <button type="submit" className="form-button">
              Send Message →
            </button>

          </form>

        </div>

      </section>


      {/* Bottom CTA */}
      <section className="contact-cta">

        <div>
          <span>QUICK NAVIGATION</span>

          <h2>
            Want to explore the app?
          </h2>
        </div>

        <div className="contact-cta-buttons">

          <Link href="/" className="btn btn-white">
            Home
          </Link>

          <Link href="/users" className="btn btn-outline-white">
            View Users →
          </Link>

        </div>

      </section>

    </main>
  );
}