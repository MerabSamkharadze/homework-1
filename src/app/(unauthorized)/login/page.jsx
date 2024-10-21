"use client";
import "./login.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !password) {
      setMessage("Please enter both username and password.");
      return;
    }

    setLoading(true); // Start loading
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
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="login-container">
      <div className="input-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1>Sign in to GeoMarket</h1>
          <button
            name="button"
            type="submit"
            className="auth-google-new"
            data-auth-action="Sign In"
            disabled={loading} // Disable when loading
          >
            {/* Google Sign-In SVG here */}
            Sign in with Google
          </button>
          <div className="stick">
            <div></div>
            <h1>or sign in with username</h1>
            <div></div>
          </div>
          <div className="input-wrapper">
            <label className="label">Name</label>
            <input
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-wrapper">
            <label className="label">Password</label>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="login" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Log In"}
          </button>

          <p className="validation-msg">{message}</p>
        </form>
      </div>

      <div className="video-container">
        <video
          src="/assets/b8bd4e4273cceae2889d9d259b04f732.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="video"
        />
      </div>
    </div>
  );
}
