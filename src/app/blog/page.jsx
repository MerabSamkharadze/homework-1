import React from "react";
import "./Blog.css";
import BlogPosts from "../../Components/BlogPosts/BlogPosts";
import AddNewPost from "@/Components/AddNewPost/AddNewPost";

export default function Blog() {
  return (
    <section className="Blog">
      <AddNewPost />
      <BlogPosts />
    </section>
  );
}
