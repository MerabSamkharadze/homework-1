import Link from "next/link";
import "./BlogPosts.css";

async function fetchPosts() {
  try {
    const res = await fetch("https://dummyjson.com/posts");
    const data = await res.json();
    return data.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export default async function BlogPosts() {
  const postsData = await fetchPosts();
  const posts = [...postsData];

  return (
    <div className="container">
      <h1 className="page-title">Posts</h1>
      <div className="posts-container">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className="Link">
            <div className="post">
              <h2 className="post-title">{post.title}</h2>
              <p className="post-content">{post.body}</p>
              <div className="reactions-container">
                <div className="like-dislike">
                  <div className="like">👍 {post.reactions.likes}</div>
                  <div className="dislike">👎 {post.reactions.dislikes}</div>
                </div>
                <div className="views">views: {post.views}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
