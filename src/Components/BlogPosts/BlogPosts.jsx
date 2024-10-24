"use client";

import Link from "next/link";
import "./BlogPosts.css";
import AddNewPost from "../AddNewPost/AddNewPost";
import { useState, useEffect } from "react";
import ReturnSvg from "../../../public/svg/ReturnSvg";
import UpdatePost from "../UpdatePost/UpdatePost";

export default function BlogPosts({ posts }) {
  const [localPosts, setLocalPosts] = useState([]);
  const [postss, setPostss] = useState([...posts]);
  const [removedPostIdArr, setRemovedPostIdArr] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts") || "[]");
    setLocalPosts(savedPosts);

    const removedIds = JSON.parse(
      localStorage.getItem("removedPostId") || "[]"
    );
    setRemovedPostIdArr(Array.isArray(removedIds) ? removedIds : []);
  }, []);

  const handleDeletePost = async (postId, isLocal) => {
    if (isLocal) {
      const updatedLocalPosts = localPosts.filter((post) => post.id !== postId);
      localStorage.setItem("posts", JSON.stringify(updatedLocalPosts));
      setLocalPosts(updatedLocalPosts);
    } else {
      const updatedRemovedIds = [...removedPostIdArr, postId];
      setRemovedPostIdArr(updatedRemovedIds);
      localStorage.setItem("removedPostId", JSON.stringify(updatedRemovedIds));
      setPostss(postss.filter((post) => post.id !== postId));

      try {
        const response = await fetch(
          `https://dummyjson.com/products/${postId}`,
          {
            method: "DELETE",
          }
        );
        const result = await response.json();
      } catch (error) {
        console.error("Error deleting post from server:", error);
      }
    }
  };

  return (
    <>
      <AddNewPost setLocalPosts={setLocalPosts} />
      <div className="container">
        <h1 className="page-title">Posts</h1>
        <div className="posts-container">
          {/* Fetched Posts */}
          {postss
            .filter((post) => !removedPostIdArr.includes(post.id))
            .map((post) => (
              <div key={post.id} className="post">
                <UpdatePost post={post} setLocalPosts={setLocalPosts} />
                <div
                  onClick={() => handleDeletePost(post.id, false)}
                  className="deletePost"
                >
                  <ReturnSvg />
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
                <Link href={`/blog/${post.id}`} className="see-more">
                  see more...
                </Link>
              </div>
            ))}

          {/* Local Posts */}
          {localPosts.map((post) => (
            <div key={post.id} className="Link">
              <div className="post">
                <UpdatePost post={post} setLocalPosts={setLocalPosts} />
                <div
                  onClick={() => handleDeletePost(post.id, true)}
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
                <div href={`/blog/${post.id}`} className="see-more">
                  see more...
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
