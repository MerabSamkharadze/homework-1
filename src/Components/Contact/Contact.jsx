import React from "react";
import Button from "../Button/Button";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>დაგვიკავშირდით</h1>

      <form>
        <div>
          <label htmlFor="name">სახელი:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">ელ. ფოსტა:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">მესიჯი:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <Button content={"გაგზავნა"} />
      </form>
    </div>
  );
}
