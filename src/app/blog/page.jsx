import "./Blog.css";
import BlogPosts from "../../Components/BlogPosts/BlogPosts";
import FetchPosts from "@/utils/fetchPosts";

export default async function Blog() {
  const postsData = await FetchPosts();

  return (
    <section className="Blog">
      <BlogPosts posts={postsData} />
    </section>
  );
}
