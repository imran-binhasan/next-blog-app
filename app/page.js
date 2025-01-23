import Link from "next/link";

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
    next: {revalidate:3600}
  });
  return res.json()
}

export default async function Home() {
  const posts = await fetchPosts();

  return (
   <main className=" my-5">
    <h1 className="text-2xl text-center font-medium ">Blog Posts</h1>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {posts.map((post) => (
        <Link 
        key={post.id}
        href={`/blog/${post.id}`}
        className="border p-4 rounded hover:bg-gray-200 transition"
        >
          <h4 className="font-medium">{post.title}</h4>
          {/* <p className="text-gray-600">{post.body}</p> */}
        </Link>
      ))}
    </div>
   </main>
  );
}
