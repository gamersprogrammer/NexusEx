import React from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Header from "../components/Header";

const BlogList = ({ blogs }) => {
  const navigate = useNavigate();

  return (
    <>
    <div className="space-y-6 max-w-3xl mx-auto mt-10">
        {blogs.map((blog) => (
            <div
            key={blog.id}
            className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
            onClick={() => navigate(`/blog/${blog.id}`)}
            >
            {blog.image && (
                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            )}
            <h3 className="text-2xl font-bold mb-2 text-gray-800">{blog.title}</h3>
            <p className="text-gray-600 mb-4">by {blog.username}</p>
            <p className="text-gray-700 line-clamp-3">{blog.content}</p>
            </div>
        ))}
        </div>
        <BackButton />
    </>
  );
};

export default BlogList;
