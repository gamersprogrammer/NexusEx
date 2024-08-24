import React, { useState } from "react";
import BackButton from "../components/BackButton";

const BlogForm = ({ addBlog }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content && username) {
      addBlog({ title, content, username, image, likes: 0, id: Date.now() });
      setTitle("");
      setContent("");
      setUsername("");
      setImage(null);
    }
  };

  return (
    <>
            <form className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Create a Blog</h2>
      <input
        className="w-full p-3 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Your Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        className="w-full p-3 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        className="w-full p-3 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      {image && <img src={image} alt="Preview" className="w-full h-48 object-cover rounded-lg mb-3" />}
      <textarea
        className="w-full p-3 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Write your blog here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="5"
        required
      ></textarea>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
      >
        Post Blog
      </button>
    </form>
    <BackButton />
    </>
  );
};

export default BlogForm;
