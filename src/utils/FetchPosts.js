export default async function fetchPosts() {
  try {
    const res = await fetch("https://dummyjson.com/posts");
    const data = await res.json();
    return data.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}
