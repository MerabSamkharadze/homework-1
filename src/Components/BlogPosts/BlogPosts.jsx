"use client";

import Link from "next/link";
import "./BlogPosts.css";
import AddNewPost from "../AddNewPost/AddNewPost";
import { useState, useEffect } from "react";
import Return from "@/public/svg/Return";

export default function BlogPosts({ posts }) {
  const [localPosts, setLocalPosts] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts") ?? "[]");
    setLocalPosts(savedPosts);
  }, []);

  return (
    <>
      <AddNewPost setLocalPosts={setLocalPosts} />
      <div className="container">
        <h1 className="page-title">Posts</h1>
        <div className="posts-container">
          {/* Fetched Posts */}
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="Link">
              <div className="post">
                <div
                  onClick={(event) => {
                    event.preventDefault();
                    posts.splice(post.id - 1, 1);
                    console.log(post.id);
                  }}
                  className="deletePost"
                >
                  <Return />
                </div>
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

          {/* Local Posts */}
          {localPosts.map((post) => (
            <Link key={post.id} href={`/blog/#`} className="Link">
              <div className="post">
                <div
                  onClick={(event) => {
                    event.preventDefault();
                    const updatedPosts = localPosts.filter(
                      (updatedPost) => updatedPost.id !== post.id
                    );
                    localStorage.setItem("posts", JSON.stringify(updatedPosts));
                    setLocalPosts(updatedPosts);
                  }}
                  className="deletePost"
                >
                  <Return />
                </div>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-content">{post.body}</p>
                <div className="reactions-container">
                  <div className="like-dislike">
                    <div className="like">👍 {post.reactions?.likes ?? 0}</div>
                    <div className="dislike">
                      👎 {post.reactions?.dislikes ?? 0}
                    </div>
                  </div>
                  <div className="views">views: {post.views ?? 0}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
