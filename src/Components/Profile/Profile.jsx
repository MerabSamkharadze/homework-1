import React from "react";
import "./Profile.css";

function Profilee({ name, surname, email, imgSrc }) {
  return (
    <div className="profile-card">
      <img src={imgSrc} alt="Profile-img" className="profile-photo" />
      <h2 className="profile-name">სახელი: {name}</h2>
      <h3 className="profile-surname">გვარი: {surname}</h3>
      <p className="profile-email">Email: {email}</p>
    </div>
  );
}

const Profile = () => {
  let imgSrc =
    "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp";
  return (
    <div className="profile-container">
      <Profilee
        imgSrc={imgSrc}
        name={"გიორგი"}
        surname={"ქართველიშვილი"}
        email={"giorgi.kartvelishvili@example.com"}
      />
    </div>
  );
};

export default Profile;
