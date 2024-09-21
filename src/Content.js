import React from "react";
import "./Content.css";

export default function Content() {
  return (
    <div className="Content">
      <section>
        <h2>Welcome to My Website</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
          malesuada. Curabitur pharetra augue sed metus egestas, id egestas
          velit congue.
        </p>
      </section>

      <section>
        <h2>Our Services</h2>
        <img href="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" />
      </section>
    </div>
  );
}
