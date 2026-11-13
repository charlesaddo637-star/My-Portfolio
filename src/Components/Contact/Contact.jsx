import "./Contact.css";
function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <span>CONTACT</span>
        <h2>Let's Connect</h2>
        <p>
          I'm always open to discussing new projects, internship opportunities,
          or simply connecting with fellow developers.
        </p>
      </div>

      <div className="contact-cards">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=charlesaddo637@gmail.com" className="contact-card"
           target="_blank">
          <span className="contact-icon">📧</span>
          <h3>Email</h3>
          <p>@gmail.com</p>
        </a>

        <a
          href="https://github.com/charlesaddo637-star"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <span className="contact-icon">💻</span>
          <h3>GitHub</h3>
          <p>View My Projects</p>
        </a>

        <a
          href="https://linkedin.com/in/charles-a-37b310412"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <span className="contact-icon">💼</span>
          <h3>LinkedIn</h3>
          <p>Let's Connect</p>
        </a>
      </div>
    </section>
  );
}

export default Contact;