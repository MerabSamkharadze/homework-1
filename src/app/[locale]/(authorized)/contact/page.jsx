import React from 'react';
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact-section">
    <div className="container34">
        <div className="contactInfo">
            <div>
                <h2>Contact Info</h2>
                <ul className="info">
                    <li>
                        <span style={{ display: "flex", alignItems: "center"}}><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/marker.png" alt="marker"/></span>
                        <span>
                            Melbourne, Victoria<br />
                            3000
                        </span>
                    </li>
                    <li>
                        <span style={{ display: "flex", alignItems: "center"}}><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/mail.png" alt="mail"/></span>
                        <span>desmondjeon@gmail.com</span>
                    </li>
                    <li>
                        <span style={{ display: "flex", alignItems: "center"}}><img width="20" height="20" src="https://img.icons8.com/ios-filled/50/phone.png" alt="phone"/></span>
                        <span>0481-111-111</span>
                    </li>
                </ul>
            </div>
        </div>

        <div className="contactForm">
            <h2>Send a Message</h2>
            <form className="formBox">
                <div className="inputBox w50">
                    <span>First Name</span>
                    <input type="text" name="firstName" id="firstName" required placeholder="First Name" />
                </div>
                <div className="inputBox w50">
                    <span>Last Name</span>
                    <input type="text" name="lastName" id="lastName" required placeholder="Last Name" />
                </div>
                <div className="inputBox w50">
                    <span>Email</span>
                    <input type="email" name="email" id="email" required  placeholder="Email" />
                </div>
                <div className="inputBox w50">
                    <span>Mobile Number</span>
                    <input type="text" name="mobileNumber" id="mobileNumber" required placeholder="Mobile Number" />
                </div>
                <div className="inputBox w100">
                    <span>Write Your Message Here.</span>
                    <textarea name="message" id="message" required placeholder="Write Your Message Here" ></textarea>
                </div>
                <div className="inputBox w100">
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    </div>
</section>

  );
}

