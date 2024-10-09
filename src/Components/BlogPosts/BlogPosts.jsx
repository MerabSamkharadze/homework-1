"use client";
import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import "./BlogPosts.css";
import axios from "axios";
import Link from "next/link";

export default function BlogPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getPosts() {
    try {
      const res = await axios.get("https://dummyjson.com/posts");
      setPosts(res.data.posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container">
      <h1 className="page-title">Posts</h1>
      {loading ? (
        <Loader />
      ) : (
        <div className="posts-container">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="Link">
              <div className="post">
                <h2 className="post-title">{post.title}</h2>
                <p className="post-content">{post.body}</p>
                <div className="reactions-container">
                  <div className="like-dislike">
                    <div className="like">{post.reactions.likes}</div>
                    <div className="dislike">{post.reactions.dislikes}</div>
                  </div>
                  <div className="views">{post.views}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
