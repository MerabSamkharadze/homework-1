import React from "react";
import "./Profile.css";

import Button from "../Button/Button";

function ProfileContent({ name, surname, email, imgSrc }) {
  return (
    <div className="profile-card">
      <img src={imgSrc} alt="Profile-img" className="profile-photo" />
      <h2 className="profile-name">სახელი: {name}</h2>
      <h3 className="profile-surname">გვარი: {surname}</h3>
      <p className="profile-email">Email: {email}</p>
      <Button content={"განაახლე შენი პროფილი"} />
    </div>
  );
}

export default function Profile() {
  let imgSrc =
    "https://iverieli.nplg.gov.ge/bitstream/1234/360370/1/Davit-Medzmariashvi_2-131.jpg";
  return (
    <div className="profile-container">
      <ProfileContent
        imgSrc={imgSrc}
        name={"ალიოშა"}
        surname={"ბრეგვაძე"}
        email={"giorgi.kartvelishvili@example.com"}
      />
    </div>
  );
}
