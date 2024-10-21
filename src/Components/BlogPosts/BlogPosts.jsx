"use client";

import Link from "next/link";
import "./BlogPosts.css";
import AddNewPost from "../AddNewPost/AddNewPost";
import { useState, useEffect } from "react";
import ReturnSvg from "@/public/svg/ReturnSvg";
import UpdateSvg from "@/public/svg/UpdateSvg";
import UpdatePost from "../UpdatePost/UpdatePost";

export default function BlogPosts({ posts }) {
  const [localPosts, setLocalPosts] = useState([]);
  const [postss, setPostss] = useState([...posts]);
  const [removedPostIdArr, setRemovedPostIdArr] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts") || "[]");
    setLocalPosts(savedPosts);

    let removedIds = JSON.parse(localStorage.getItem("removedPostId") || "[]");
    if (!Array.isArray(removedIds)) {
      removedIds = [];
    }
    setRemovedPostIdArr(removedIds);
  }, []);

  return (
    <>
      <AddNewPost setLocalPosts={setLocalPosts} />
      <div className="container">
        <h1 className="page-title">Posts</h1>
        <div className="posts-container">
          {/* Fetched Posts */}
          {postss
            .filter((pts) => !removedPostIdArr.includes(pts.id))
            .map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="Link">
                <div className="post">
                  <UpdatePost post={post} setLocalPosts={setLocalPosts} />

                  <div
                    onClick={(event) => {
                      event.preventDefault();
                      const updatedRemovedIds = [...removedPostIdArr, post.id];
                      setRemovedPostIdArr(updatedRemovedIds);
                      localStorage.setItem(
                        "removedPostId",
                        JSON.stringify(updatedRemovedIds)
                      );
                      setPostss(postss.filter((pos) => pos.id !== post.id));
                    }}
                    className="deletePost"
                  >
                    <ReturnSvg />
                  </div>
                  <h2 className="post-title">{post.title}</h2>
                  <p className="post-content">{post.body}</p>
                  <div className="reactions-container">
                    <div className="like-dislike">
                      <div className="like">👍 {post.reactions.likes}</div>
                      <div className="dislike">
                        👎 {post.reactions.dislikes}
                      </div>
                    </div>
                    <div className="views">views: {post.views}</div>
                  </div>
                </div>
              </Link>
            ))}

          {/* Local Posts */}
          {localPosts.map((post) => (
            <div key={post.id} href={`/blog/#`} className="Link">
              <div className="post">
                <UpdatePost post={post} setLocalPosts={setLocalPosts} />
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
                  <ReturnSvg />
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
