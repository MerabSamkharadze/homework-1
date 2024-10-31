import "./Profile.css";
import { getSession } from "@auth0/nextjs-auth0";

export default async function Profile() {
  const { user } = await getSession();

  return (
    <section className="profile-section">
      <div className="profile-container">
        <h1 className="profile-title">Profile</h1>
        <p className="profile-intro">I'm a creative PHP web developer</p>
        <div className="profile-layout">
          <div className="profile-about">
            <h4>About me</h4>
            <p>
              I am an all-round web developer. I am a senior programmer with
              good knowledge of front-end techniques. Vitae sapien pellentesque
              habitant morbi tristique senectus et. Aenean sed adipiscing diam
              donec adipiscing tristique risus.
            </p>
          </div>
          <div className="profile-image">
            <img src={user.picture} alt={user.name} className="profile-pic" />
          </div>
          <div className="profile-details">
            <h4>Details</h4>
            <div>
              <span className="bold-text">
                Name:
                <p>{user.name}</p>
              </span>
              {/* <span className="bold-text">
                Age:
                <p> {data.age} years</p>{" "}
              </span> */}
              <span className="bold-text">
                Email:
                <p>{user.email} </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
