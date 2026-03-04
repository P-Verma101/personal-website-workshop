import React from "react";
import "./Contact.css";

    
function Contact() {
  const contactInfo = [
    {
      type: "Email Address",
      value: "vermapurnima200513@gmail.com"
    },
    {
      type: "LinkedIn",
      value: "https://www.linkedin.com/in/purnimaverma-200513pv/"
    },
    {
      type: "GitHub",
      value: "https://github.com/purnimaverma200513"
    }
  ];
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact Me</h1>
        <ul className="contact-list">
          {contactInfo.map((info, index) => (
            <li key={index} className="contact-item">
              <strong>{info.type}:</strong> {info.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;