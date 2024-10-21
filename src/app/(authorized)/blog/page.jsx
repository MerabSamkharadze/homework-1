import "./Blog.css";
import BlogPosts from "@/Components/BlogPosts/BlogPosts";
import fetchPosts from "@/utils/fetchPosts";

export default async function Blog() {
  const postsData = await fetchPosts();

  return (
    <section className="Blog">
      <BlogPosts posts={postsData} />
    </section>
  );
}
