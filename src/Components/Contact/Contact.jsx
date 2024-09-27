import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <h1>კონტაქტი</h1>
      <p>მოგესალმებით! ეს არის სტატიკური საკონტაქტო ინფორმაცია.</p>
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
        <button type="submit">გაგზავნა</button>
      </form>
    </div>
  );
};

export default Contact;
