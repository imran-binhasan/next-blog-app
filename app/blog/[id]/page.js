async function getBlogPost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  
    if (!res.ok) {
      return null;
    }
  
    return res.json();
  }
  
  export default async function BlogDetails({ params }) {
    // Ensure params is awaited
    const { id } = await params;
  
    const post = await getBlogPost(id);
  
    if (!post) {
      return <p className="text-center text-red-500">Post not found.</p>;
    }
    console.log(post)
  
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-xl font-medium mb-2">Title: {post.title}</h1>
        <p className="text-gray-700 text-lg"><span className="font-medium text-black">Description:</span> {post.body}</p>
      </div>
    );
  }
  