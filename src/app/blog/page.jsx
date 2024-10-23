import React from "react";
import "./Blog.css";
import BlogPosts from "../../Components/BlogPosts/BlogPosts";

export default function Blog() {
  return (
    <section className="Blog">
      {" "}
      <BlogPosts />
    </section>
  );
}
