import axios from "axios";
import "./page.css";

async function fetchPosts(id) {
  const response = await axios.get(`https://dummyjson.com/posts/${id}`);
  return response.data;
}

export default async function Page({ params }) {
  const posts = await fetchPosts(params.id);

  return (
    <div className="post-container">
      <h1 className="post-title">{posts.title}</h1>
      <p className="post-body">{posts.body}</p>

      <div className="post-meta">
        <strong>Tags:</strong> {posts.tags.join(", ")}
      </div>

      <div className="post-reactions">
        <strong>👍</strong> {posts.reactions.likes} <strong>👎</strong>
        {posts.reactions.dislikes}
      </div>

      <div className="post-views">Views: {posts.views}</div>
    </div>
  );
}
