import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>

      <p>
        If you'd like to get in touch, feel free to reach out through any of the
        following platforms:
      </p>

      <p>
        Email:{" "}
        <a href="mailto:vermapurnima200513@gmail.com">
          vermapurnima200513@gmail.com
        </a>
      </p>

      <p>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/purnimaverma-200513pv/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn Profile
        </a>
      </p>
    </div>
  );
}

export default Contact;