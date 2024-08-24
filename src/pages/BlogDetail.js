import React from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";

const BlogDetail = ({ blogs, likeBlog, forwardBlog, addComment }) => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return (
    <>
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      {blog.image && <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-lg mb-4" />}
      <h2 className="text-3xl font-bold mb-4">{blog.title}</h2>
      <p className="text-gray-600 mb-4">by {blog.username}</p>
      <p className="text-gray-800 mb-4">{blog.content}</p>
      <div className="flex space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={() => likeBlog(blog.id)}
        >
          👍 {blog.likes}
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          onClick={() => forwardBlog(blog.id)}
        >
          ➡️ Forward
        </button>
      </div>
      {/* Add comments section here */}
    </div>
    <BackButton />
    </>
  );
};

export default BlogDetail;
