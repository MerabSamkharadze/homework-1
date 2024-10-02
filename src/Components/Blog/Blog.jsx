import React from "react";
import "./Blog.css";
import BlogPosts from "../BlogPosts/BlogPosts";

export default function Blog() {
  return (
    <section className="Blog">
      {" "}
      <BlogPosts />
    </section>
  );
}
