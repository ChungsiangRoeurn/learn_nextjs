// app/blog/[id]/page.js
import { notFound } from "next/navigation";

// Mock data-fetching function (replace with your actual API call or database query)
async function getBlogPost(id) {
  const response = await fetch(`https://api.example.com/posts/${id}`);
  if (!response.ok) {
    return null; // Return null if the post doesn't exist
  }
  return await response.json();
}

export default async function BlogPost({ params }) {
  const post = await getBlogPost(params.id);

  if (!post) {
    notFound(); // Redirects to the not-found.js page
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
