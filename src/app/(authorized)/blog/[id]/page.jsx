import PageNotFound from "@/Components/PageNotFound/PageNotFound";
import "./page.css";

async function fetchPosts(id) {
  try {
    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}

export default async function Page({ params }) {
  const post = await fetchPosts(params.id);

  if (!post) {
    return <PageNotFound />;
  }

  return (
    <div className="post-container">
      <div className="kadi-container">
      <h1 className="post-title">{post.title}</h1>
      <p className="post-body">{post.body}</p>

      <div className="post-meta">
        <strong>Tags:</strong> {post.tags.join(", ")}
      </div>

      <div className="post-reactions">
        <div className="like-dislikes">👍 {post.reactions.likes}</div>
        <div className="like-dislikes">👎 {post.reactions.dislikes}</div>
      </div>

      <div className="post-views">Views: {post.views}</div>
      </div>
      
    </div>
  );
}
