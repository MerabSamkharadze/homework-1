"use client";
import "./AddNewPost.css";
import AddSvg from "@/public/svg/AddSvg";
import Return from "@/public/svg/ReturnSvg";
import { useState } from "react";

export default function AddNewPost({ setLocalPosts }) {
  const [blanc, setBlanc] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    try {
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
      setBlanc(false);
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error creating post:", error);
    } finally {
      setLoading(false);
    }
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
              />
            </div>
            <div>
              <label>Content:</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>
            <button type="submit" disabled={loading}>
              {loading ? "Adding..." : "Add Blog Post"}
            </button>
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
