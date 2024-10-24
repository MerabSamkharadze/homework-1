import "./Page.css";

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
        <div className="container33">
          <div className="center-content">
            <div className="limit">
              <div className="title">Arts Center, San Francisco</div>
              <p className="medium-text">
                Join us at Digital Makers, where digital creators unite to
                innovate, collaborate, and inspire new possibilities.
              </p>
              <a href="#Sign-up" className="blue-button">
                Book your spot now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
