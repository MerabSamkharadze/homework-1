"use client";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/routing";
import "./BlogPosts.css";
import AddNewPost from "../AddNewPost/AddNewPost";

import ReturnSvg from "../../../public/svg/ReturnSvg";
import UpdatePost from "../UpdatePost/UpdatePost";

export default function BlogPosts({ posts }) {
  const t = useTranslations("Posts");
  const handleDeletePost = async (postId) => {
    try {
      const response = await fetch(`https://dummyjson.com/posts/${postId}`, {
        method: "DELETE",
      });
      const result = await response.json();
    } catch (error) {
      console.error("Error deleting post from server:", error);
    }
  };

  return (
    <>
      <AddNewPost />
      <div className="container">
        <h1 className="page-title">{t("posts")}</h1>
        <div className="posts-container">
          {posts.map((post) => (
            <div key={post.id} className="post">
              <UpdatePost post={post} />
              <div
                onClick={() => handleDeletePost(post.id)}
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
                <div className="views">
                  {" "}
                  {t("views")}: {post.views}
                </div>
              </div>
              <Link href={`/blog/${post.id}`} className="see-more">
                {t("see")}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
