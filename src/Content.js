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
          velit congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vivamus lacinia odio vitae vestibulum vestibulum.
        </p>
        <img
          src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
          alt="content-img"
        />
      </section>
    </div>
  );
}
