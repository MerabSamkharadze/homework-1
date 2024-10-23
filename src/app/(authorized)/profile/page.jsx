"use client";

import { cookies } from "next/headers";
import { refreshAccessToken } from "../../../lib/action";
import "./profile.css";

export default async function Profile() {
  useAuth("/profile");
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
    <div className="profile-container">
      {data ? (
        <div className="profile-card">
          <div className="profile-header">
            <img
              src={data.image}
              alt={`${data.username} ${data.lastName}`}
              className="profile-image"
            />
            <h1 className="profile-name">{data.username}</h1>
          </div>
          <div className="profile-info">
            <p>
              <strong>Email:</strong> {data.email}
            </p>
            <p>
              <strong>Phone:</strong> {data.phone}
            </p>
            <p>
              <strong>Age:</strong> {data.age}
            </p>
            <p>
              <strong>Height:</strong> {data.height} cm
            </p>
            <p>
              <strong>Weight:</strong> {data.weight} kg
            </p>
            <p>
              <strong>Blood Group:</strong> {data.bloodGroup}
            </p>
            <p>
              <strong>Eye Color:</strong> {data.eyeColor}
            </p>
            <p>
              <strong>Hair:</strong> {data.hair.color} ({data.hair.type})
            </p>
            <p>
              <strong>Address:</strong> {data.address.address},{" "}
              {data.address.city}, {data.address.state},{" "}
              {data.address.postalCode}, {data.address.country}
            </p>
          </div>
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
}
