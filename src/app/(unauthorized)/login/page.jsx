"use client";
import "./login.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import GoogleSvg from "../../../../public/svg/GoogleSvg";
import { authenticate } from "@/lib/action";

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
    const formData = { username: name, password: password };

    setLoading(true);

    try {
      const result = await authenticate(formData);

      if (result.success) {
        router.push("/");
      } else {
        setMessage("Login failed. Please try again.");
      }
    } catch (err) {
      console.error("Login failed", err);
      setMessage("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
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
            disabled={loading}
          >
            <div className="google-svg">
              <GoogleSvg />
            </div>
            Sign in with Google
          </button>
          <div className="stick">
            <div></div>
            <h2>or sign in with username</h2>
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
        <video autoPlay muted loop playsInline className="video">
          <source src="/assets/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
