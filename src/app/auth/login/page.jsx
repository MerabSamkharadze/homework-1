"use client";
import "./login.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: name,
          password: password,
          expiresInMins: 30,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        document.cookie = `accessToken=${data.accessToken}; path=/`;
        document.cookie = `refreshToken=${data.refreshToken}; path=/`;

        router.push("/");
      } else {
        setMessage(data.message || "Invalid login credentials");
      }
    } catch (err) {
      console.error("Login failed", err);
      setMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <form className="login-from" onSubmit={handleSubmit}>
      <div>
        <label className="label">Name</label>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label className="label">Password</label>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Log In</button>
      <p>{message}</p>
    </form>
  );
}
