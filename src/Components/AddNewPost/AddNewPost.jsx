"use client";
import "./AddNewPost.css";
import AddSvg from "@/public/svg/AddSvg";
import Return from "@/public/svg/Return";
import { useState } from "react";

export default function AddNewPost({ addBlogPost }) {
  const [blanc, setBlanc] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  // ფორმის სუბმიტი
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          body: content,
          userId: 123456,
        }),
      });

      const newPost = await response.json();
      addBlogPost(newPost); // ბლოგპოსტის დამატება state-ში
      setTitle(""); // ფორმის ველების გასუფთავება
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
          <form onSubmit={handleSubmit}>
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
