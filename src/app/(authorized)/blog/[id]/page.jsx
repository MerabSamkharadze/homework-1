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
    <div
      className="flex justify-center items-center h-screen bg-black bg-cover text-white text-start p-5 mt-12"
      style={{ backgroundImage: "url('/assets/1280417267661803541.webp')" }}
    >
      <div className="bg-black bg-opacity-30 backdrop-blur-md max-w-3xl mx-auto p-10 rounded-lg border border-white">
        <h1 className="text-white text-5xl md:text-3xl mb-8 text-start shadow-md">
          {post.title}
        </h1>
        <p className="text-gray-400 text-xl md:text-base leading-relaxed mb-8 p-2.5 rounded">
          {post.body}
        </p>
        <div className="italic text-lg mt-6 text-white">
          <strong>Tags:</strong> {post.tags.join(", ")}
        </div>
        <div className="flex justify-around w-full p-6 rounded text-lg text-white">
          <div className="like-dislikes">👍 {post.reactions.likes}</div>
          <div className="like-dislikes">👎 {post.reactions.dislikes}</div>
        </div>
        <div className="text-center mt-10 text-white text-2xl md:text-xl">
          Views: {post.views}
        </div>
      </div>
    </div>
  );
}
