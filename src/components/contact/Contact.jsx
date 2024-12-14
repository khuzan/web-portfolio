import React from "react";
import "./contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { contact__options } from "../../constants";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_gfsj9bh", "template_9ysl0h9", form.current, {
        publicKey: "YjAxK3Qk0KgvZBkXW",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {contact__options.map(({ platform, profile, link, icon }, index) => {
            return (
              <article key={index} className="contact__option">
                {icon}
                <h4>{platform}</h4>
                <h5>{profile}</h5>
                <a href={link} target="_blank">
                  Send a message
                </a>
              </article>
            );
          })}
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
