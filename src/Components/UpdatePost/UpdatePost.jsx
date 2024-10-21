"use client";
import "./UpdatePost.css";
import UpdateSvg from "@/public/svg/UpdateSvg";
import { useState } from "react";

export default function UpdatePost({ post, setLocalPosts }) {
  const [blankUpdate, setBlankUpdate] = useState(false);

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.body);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { id } = post;
      const updatedPost = {
        id: id,
        title: title,
        body: content,
        reactions: post.reactions,
      };
      const newPosts = JSON.parse(localStorage.getItem("posts") ?? "[]");

      const index = newPosts.findIndex((item) => item.id === id);

      if (index !== -1) {
        newPosts[index] = updatedPost;
        localStorage.setItem("posts", JSON.stringify(newPosts));
        setLocalPosts(newPosts);
        setBlankUpdate(false);
      } else {
        console.error("Post not found, unable to update.");
      }
    } catch (error) {
      console.error("Error updating post:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {blankUpdate && (
        <div className="update-blog-blank">
          <form className="update-post-form" onSubmit={handleSubmit}>
            <div
              onClick={(e) => {
                e.preventDefault();
                setBlankUpdate(false);
              }}
              className="update-post-return"
            ></div>

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
              {loading ? "Updating..." : "Update Blog Post"}
            </button>
          </form>
        </div>
      )}
      <div
        onClick={(e) => {
          e.preventDefault();
          setBlankUpdate(!blankUpdate);
        }}
        className="updatePost"
      >
        <UpdateSvg />
      </div>
    </>
  );
}
