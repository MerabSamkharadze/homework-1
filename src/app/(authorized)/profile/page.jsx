"use client";
import { useEffect, useState } from "react";
import "./Profile.css";

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/auth/me", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getCookie("accessToken")}`,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await res.json();
        setUserData(data);
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("Failed to load profile. Please log in again.");
      }
    };

    fetchUserData();
  }, []);

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop().split(";").shift();
    }
    return undefined;
  };

  return (
    <div className="profile-container">
      {error && <p className="error">{error}</p>}
      {userData ? (
        <div className="profile-card">
          <div className="profile-header">
            <img
              src={userData.image}
              alt={`${userData.firstName} ${userData.lastName}`}
              className="profile-image"
            />
            <h1 className="profile-name">{userData.username}</h1>
          </div>
          <div className="profile-info">
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>Phone:</strong> {userData.phone}
            </p>
            <p>
              <strong>Age:</strong> {userData.age}
            </p>
            <p>
              <strong>Height:</strong> {userData.height} cm
            </p>
            <p>
              <strong>Weight:</strong> {userData.weight} kg
            </p>
            <p>
              <strong>Blood Group:</strong> {userData.bloodGroup}
            </p>
            <p>
              <strong>Eye Color:</strong> {userData.eyeColor}
            </p>
            <p>
              <strong>Hair:</strong> {userData.hair.color} ({userData.hair.type}
              )
            </p>
            <p>
              <strong>Address:</strong> {userData.address.address},{" "}
              {userData.address.city}, {userData.address.state},{" "}
              {userData.address.postalCode}, {userData.address.country}
            </p>
          </div>
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
}
