export default function Contact() {
  return (
    <main className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>

        <p className="intro">
          Have a question? We would love to hear from you.
          Send us a message and we will get back to you soon.
        </p>

        <div className="contact-info">
          <div>
            <h2>Email</h2>
            <p>example@email.com</p>
          </div>

          <div>
            <h2>Phone</h2>
            <p>+961 70 000 000</p>
          </div>

          <div>
            <h2>Location</h2>
            <p>Lebanon</p>
          </div>
        </div>

        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            placeholder="Your Message"
            rows="6"
            required
          />

          <button type="submit">
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}