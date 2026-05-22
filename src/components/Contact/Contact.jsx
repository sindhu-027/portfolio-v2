import "./Contact.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <p className="section-tag">
        Contact
      </p>

      <h2>
        Let’s Build Something Great Together
      </h2>

      <p className="contact-description">
        Open to software development opportunities,
        collaborations, internships, and full stack projects.
        Feel free to connect with me through the platforms below.
      </p>

      <div className="contact-cards">

        <a
          href="mailto:ssindhu02042003@gmail.com"
          className="contact-card"
        >

          <div className="contact-icon">
            <FaEnvelope />
          </div>

          <h3>Email</h3>

          <p>
            ssindhu02042003@gmail.com
          </p>

        </a>

        <a
          href="https://github.com/sindhu-027"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >

          <div className="contact-icon">
            <FaGithub />
          </div>

          <h3>GitHub</h3>

          <p>
            github.com/sindhu-027
          </p>

        </a>

        <a
          href="https://www.linkedin.com/in/sindhu-sekar/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >

          <div className="contact-icon">
            <FaLinkedin />
          </div>

          <h3>LinkedIn</h3>

          <p>
            linkedin.com/in/sindhu-sekar
          </p>

        </a>

      </div>

      <div className="footer-text">
        © 2026 Sindhu Sekar • Software Developer
      </div>

    </section>
  );
}

export default Contact;



