"use client";

import { useEffect, useState } from "react";
import Loader from "@/Components/Loader/Loader";
import axios from "axios";
import "./page.css";

async function fetchPosts(id) {
  const response = await axios.get(`https://dummyjson.com/posts/${id}`);
  return response.data;
}

export default function Page({ params }) {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    async function loadPost() {
      const data = await fetchPosts(params.id);
      setPosts(data);
    }
    loadPost();
  }, [params.id]);

  if (!posts) {
    return <Loader />;
  }

  return (
    <div className="post-container">
      <h1 className="post-title">{posts.title}</h1>
      <p className="post-body">{posts.body}</p>

      <div className="post-meta">
        <strong>Tags:</strong> {posts.tags.join(", ")}
      </div>

      <div className="post-reactions">
        <strong>👍</strong> {posts.reactions.likes} <strong>👎</strong>
        {posts.reactions.dislikes}
      </div>

      <div className="post-views">Views: {posts.views}</div>
    </div>
  );
}
