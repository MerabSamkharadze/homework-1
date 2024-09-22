import React from "react";
import "./Content.css";

export default function Content() {
  return (
    <div className="Content">
      <section>
        <div className="text-container">
          <h2>Why React?</h2>

          <ul className="lists">
            <li>
              <span>🟢 Performance :</span> using React will lead to a fast user
              interface without doing much work to specifically optimize for
              performance
            </li>
            <li>
              <span>🟢 Simplicity :</span> Reactjs it’s based component , with
              simple plain JavaScript code{" "}
            </li>

            <li>
              <span> 🟢 It’s easy to learn :</span> Anyone who have some
              background with HTML CSS and JavaScript , can Learn Reactjs ( it’s
              dedicated for Developers and Designers and Microsoft engineers:
              it’s dedicated for Developers, Designers and Microsoft engineers
              😗
            </li>
            <li>
              <span> 🟢 increasing development speed : </span>ReactJS allows us
              to create reusable UI components that can be used in many web
              pages
            </li>
            <li>
              <span>🟢 Testability :</span> ReactJS applications are super easy
              to test
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
