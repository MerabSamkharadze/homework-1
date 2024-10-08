"use client";
import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import "./BlogPosts.css";
import axios from "axios";
import Link from "next/link";

const BlogPost = ({ title, content }) => {
  return (
    <div className="post">
      <h2 className="post-title">{title}</h2>
      <p className="post-content">{content}</p>
    </div>
  );
};

export default function BlogPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading

  async function getPosts() {
    try {
      const res = await axios.get("https://dummyjson.com/posts");
      setPosts(res.data.posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container">
      <h1 className="page-title">Posts</h1>
      {loading ? ( // Show loader while loading
        <Loader />
      ) : (
        <div className="posts-container">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="Link">
              <BlogPost title={post.title} content={post.body} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
