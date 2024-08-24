import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import SignUp from './pages/SignUp';
import Contact from './pages/Contact';
import Header from './components/Header';
import SignIn from './pages/SignIn';
import ChatPage from './pages/ChatPage';
import ComingSoon from './pages/ComingSoon';
import Privacy from './pages/Privacy';
import TermsAndCond from './pages/TermsAndCond';
import Animator from './components/Animator';
import BlogForm from './pages/BlogForm';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
function App() {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (newBlog) => {
    setBlogs([...blogs, { ...newBlog, comments: [] }]);
  };

  const likeBlog = (id) => {
    setBlogs(
      blogs.map((blog) =>
        blog.id === id ? { ...blog, likes: blog.likes + 1 } : blog
      )
    );
  };

  const forwardBlog = (id) => {
    alert("Blog forwarded!");
  };

  const addComment = (id, comment) => {
    setBlogs(
      blogs.map((blog) =>
        blog.id === id
          ? { ...blog, comments: [...blog.comments, comment] }
          : blog
      )
    );
  };

  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Animator />} />
        <Route path="/home" element={<Header />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/chatpage' element={<ChatPage />} />
        <Route path='/comingsoon' element={<ComingSoon />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms-and-conditions" element={<TermsAndCond />} />
        <Route path = "/contact" element={<Contact />} />
        <Route
          path="/blog/new"
          element={<BlogForm addBlog={addBlog} />}
        />
        <Route
          path="/blog"
          element={<BlogList blogs={blogs} />}
        />
        <Route
          path="/blog/:id"
          element={
            <BlogDetail
              blogs={blogs}
              likeBlog={likeBlog}
              forwardBlog={forwardBlog}
              addComment={addComment}
            />
          }
        />
          
      </Routes>
    </Router>
    </>
  );
}

export default App;
