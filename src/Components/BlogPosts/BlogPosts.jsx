"use client";

import Link from "next/link";
import "./BlogPosts.css";
import AddNewPost from "../AddNewPost/AddNewPost";
import { useState } from "react";
const items = JSON.parse(localStorage.getItem("posts") ?? "[]");

export default function BlogPosts({ posts }) {
  const [localPosts, setLocalPosts] = useState(items);

  return (
    <>
      <AddNewPost setLocalPosts={setLocalPosts} />
      <div className="container">
        <h1 className="page-title">Posts</h1>
        <div className="posts-container">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="Link">
              <div className="post">
                <h2 className="post-title">{post.title}</h2>
                <p className="post-content">{post.body}</p>
                <div className="reactions-container">
                  <div className="like-dislike">
                    <div className="like">👍 {post.reactions.likes}</div>
                    <div className="dislike">👎 {post.reactions.dislikes}</div>
                  </div>
                  <div className="views">views: {post.views}</div>
                </div>
              </div>
            </Link>
          ))}
          {localPosts.map((post) => (
            <Link key={post.id} href={`/blog/#`} className="Link">
              <div className="post">
                <h2 className="post-title">{post.title}</h2>
                <p className="post-content">{post.body}</p>
                <div className="reactions-container">
                  <div className="like-dislike">
                    <div className="like">👍 {post.reactions.likes}</div>
                    <div className="dislike">👎 {post.reactions.dislikes}</div>
                  </div>
                  <div className="views">views: {post.views}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
