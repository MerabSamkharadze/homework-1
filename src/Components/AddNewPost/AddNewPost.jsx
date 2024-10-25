"use client";
import "./AddNewPost.css";
import AddSvg from "../../../public/svg/AddSvg";
import Return from "../../../public/svg/ReturnSvg";
import { useState, useEffect } from "react";

export default function AddNewPost({ setLocalPosts }) {
  const [blanc, setBlanc] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts") ?? "[]");
    setLocalPosts(storedPosts);
  }, [setLocalPosts]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    setTimeout(async () => {
      try {
        if (title.trim().length < 5 || content.trim().length < 10) {
          setError(
            "Title must be at least 5 characters and content 10 characters."
          );
          setLoading(false);
          return;
        }

        const post = {
          id: Date.now(),
          title: title,
          body: content,
          reactions: { likes: "0", dislikes: "0" },
        };

        const newPosts = JSON.parse(localStorage.getItem("posts") ?? "[]");
        newPosts.push(post);
        localStorage.setItem("posts", JSON.stringify(newPosts));
        setLocalPosts(newPosts);

        const response = await fetch("https://dummyjson.com/posts/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: post.title,
            body: post.body,
            id: Date.now(),
            userId: 5,
          }),
        });

        const result = await response.json();
        console.log("Post added on server:", result);

        setBlanc(false);
        setTitle("");
        setContent("");
        setSuccess("Post added successfully!");
      } catch (error) {
        console.error("Error creating post:", error);
        setError("There was a problem creating the post.");
      } finally {
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <>
      {blanc && (
        <div className="blog-blanc">
          <form className="post-form" onSubmit={handleSubmit}>
            <div
              onClick={() => {
                setBlanc(false);
              }}
              className="return"
            >
              <Return />
            </div>

            <div>
              <label>Title:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                minLength={5}
              />
            </div>
            <div>
              <label>Content:</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                minLength={10}
              />
            </div>
            <button type="submit" disabled={loading}>
              {loading ? "Adding..." : "Add Blog Post"}
            </button>

            {error && <div className="error">{error}</div>}
            {success && <div className="success">{success}</div>}
          </form>
        </div>
      )}
      <div
        onClick={() => {
          setBlanc(true);
        }}
        className="addIcon"
      >
        <AddSvg />
      </div>
    </>
  );
}
