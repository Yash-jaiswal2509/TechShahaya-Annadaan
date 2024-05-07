import React from "react";
import contact from '../Images/contact.jpg'
import Arrow2 from "../Images/right-arrow-2.png"

function ContactUs() {
  return (
    <div className="contact-us">
      <div className="contact">
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>Drop us a line! Your feedback matters.</p>
          <div className="contact-form">
            <div className="contact-name">
              <input type="text" placeholder="First Name*" />
              <input type="text" placeholder="Last Name*" />
            </div>
            <div className="contact-em-no">
              <input type="text" placeholder="Email*" />
              <input type="text" placeholder="Phone Number" />
            </div>
            <textarea className="contact-message" placeholder="Message"></textarea>
            <button>Submit Now<img src={Arrow2} /></button>
          </div>
        </div>

        <img src={contact} />
      </div>
    </div>

  );
}

export default ContactUs