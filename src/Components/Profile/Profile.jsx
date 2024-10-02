import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="profile-photo"
        />
        <h2 className="profile-name">სახელი: გიორგი</h2>
        <h3 className="profile-surname">გვარი: ქართველიშვილი</h3>
        <p className="profile-email">
          Email: giorgi.kartvelishvili@example.com
        </p>
      </div>
    </div>
  );
};

export default Profile;
