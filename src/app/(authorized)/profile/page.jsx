import { cookies } from "next/headers";
import { refreshAccessToken } from "../../../lib/action";
import "./Profile.css";
export default async function Profile() {
  const cookieStore = cookies();
  let token = cookieStore.get("accessToken");

  if (!token) {
    const refreshResponse = await refreshAccessToken();
    if (!refreshResponse.success) {
      return <h1>Please log in</h1>;
    }
    token = cookieStore.get("accessToken");
  }

  const response = await fetch("https://dummyjson.com/auth/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    return <h1>Failed to load profile</h1>;
  }

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
            <img
              src={data.image}
              alt={`${data.username} ${data.lastName}`}
              className="profile-pic"
            />
          </div>
          <div className="profile-details">
            <h4>Details</h4>
            <div>
              <span className="bold-text">
              Name:
                <p>
                   {data.username} {data.lastName}
                </p>{" "}
              </span>
              <span className="bold-text">
              Age:
                <p> {data.age} years</p>{" "}
              </span>
              <span className="bold-text">
              Location:
                <p>
                   {data.address.city}, {data.address.state},{" "}
                </p>
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
