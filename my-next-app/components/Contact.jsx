import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Icon from "./Icon";
import "../styles/fish.scss";

const Contact = () => {
  const form = useRef(null);
  const [status, setStatus] = useState(
    "idle"
  );
  const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = "template_yxprl1c";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      if (!form.current) return;
      await emailjs.sendForm(serviceId, templateId, form.current, userId);
      setStatus("success");
      form.current.reset(); // Clear the form after successful submission
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="fish-cont">
      {status === "success" && (
        <div
          className="popover"
          aria-live="assertive"
          role="alert"
        >
          Email sent successfully!
          <Icon name="thumbsup" />
        </div>
      )}
      {status === "error" && (
        <div
          className="popover-error"
          aria-live="assertive"
          role="alert"
        >
          Failed to send email. Please try again later.
        </div>
      )}

      <div className="center">
        <div className="container">
          <div className="card">
            <h1 className="card_title">Contact Me</h1>

            <form
              ref={form}
              className="card_form"
              onSubmit={handleSubmit}
              aria-disabled={status === "sending"}
            >
              <div className="input">
                <input
                  type="text"
                  id="fullName"
                  name="from_name"
                  className="input_field"
                  autoComplete="name"
                  required
                />
                <label htmlFor="fullName" className="input_label">
                  Full Name
                </label>
              </div>

              <div className="input">
                <input
                  type="name"
                  id="email"
                  className="input_field"
                  name="from_email"
                  autoComplete="email"
                  required
                />
                <label htmlFor="email" className="input_label">
                  Email
                </label>
              </div>

              <div className="input">
                <textarea
                  rows={5}
                  maxLength={500}
       
                  id="message"
                  className="input_field"
                  autoComplete="off"
                  name="message"
                  required
                />
                <label htmlFor="message" className="input_label">
                  Message
                </label>
              </div>

              <button
                className="card_button"
                type="submit"
                disabled={status === "sending"}
                aria-busy={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
          <div>
            <Icon name="fish" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;