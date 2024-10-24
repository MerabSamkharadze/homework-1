import Image from "next/image";
import "./Page.css";
import Button from "@/Components/Button/Button";

export default function Content() {
  return (
    <div className="main-container">
      <section>
        <img
          src="/assets/67061df890aa3a22852e80db_hero ribbon.png"
          className="ribbon-image"
        />
        <div className="center-text">
          <div className="tag-flex">
            <div className="title">November 8-9</div>
            <div className="title">Live and Virtual</div>
          </div>
          <h1 className="large-heading">Digital Makers</h1>
        </div>
      </section>
      <section>
        <div class="container33">
          <div class="center-content">
            <div class="limit">
              <div class="title">Arts Center, San Francisco</div>
              <p class="medium-text">
                Join us at Digital Makers, where digital creators unite to
                innovate, collaborate, and inspire new possibilities.
              </p>
              <a href="#Sign-up" class="blue-button">
                Book your spot now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
