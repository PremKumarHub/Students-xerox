import React from "react";
import "./Contactus.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container"id="contactus">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">
        Send us a message, and we’ll get back to you as soon as possible!
      </p>
      <div className="form-container">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeCT5XU7LizSVWNN0q5WiwkPtcYlHJBt9A66i5YeEHgjIrb_g/viewform?embedded=true"
          width="100%"
          height="400"
          frameBorder="0"
          title="Google Form"
          style={{ border: "none" }}
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default ContactUs;
