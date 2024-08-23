import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Sections from './Sections';
import Footer from './Footer';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Toggle the dropdown menu
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  // Close the menu when clicking outside
  const handleClickOutside = (event) => {
    if (
      menuRef.current && !menuRef.current.contains(event.target) &&
      buttonRef.current && !buttonRef.current.contains(event.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 z-40 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between w-full">
              <button
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={() => setIsMenuOpen(prevState => !prevState)}
                ref={buttonRef}
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  />
                </svg>
              </button>
              <NavLink to="https://nexus.vercel.app" className="flex ms-2 md:me-24">
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  NexusEx
                </span>
              </NavLink>
              <div className=" flex-col h-full p-4 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 lg:block hidden">
                <ul className="flex space-x-4 font-medium">
        {/* Menu items */}
        <li>
          <NavLink
            to="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 21"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"
              />
              <path
                d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
              />
            </svg>
            <span className="ms-3">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/chatpage"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18"
            >
              <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 6.143.857 7 .857 7v7.286C.857 16.143 1.857 17 3 17h5.143A1.857 1.857 0 0 0 10 15.143V7a1.857 1.857 0 0 0-1.857-1.857H7.143A1.857 1.857 0 0 0 5.286 4.286V1.857C5.286.857 6.143 0 6.143 0Z" />
              <path d="M15.571 7H13.5v4.143a.857.857 0 0 1-.857.857H4.357a.857.857 0 0 1-.857-.857V7H2.429a.857.857 0 0 0-.857.857v5.714c0 .657.5 1.214 1.143 1.214h.857V11a.857.857 0 0 1 .857-.857h7.429a.857.857 0 0 1 .857.857v2.857h.857c.657 0 1.143-.5 1.143-1.143V7.857A.857.857 0 0 0 15.571 7Z" />
            </svg>
            <span className="ms-3">Chat</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signup"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18"
            >
              <path d="M10.5 3.75H3.75A.75.75 0 0 0 3 4.5v9a.75.75 0 0 0 .75.75h6.75a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75Zm-3.75 3a.75.75 0 0 0-.75.75v2.25a.75.75 0 0 0 .75.75h3a.75.75 0 0 0 .75-.75V7.5a.75.75 0 0 0-.75-.75h-3Zm9.75 3v-4.5a.75.75 0 0 0-.75-.75H12a.75.75 0 0 0-.75.75v.75H9a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 .75.75h2.25v.75a.75.75 0 0 0 .75.75h1.5a.75.75 0 0 0 .75-.75v-.75h.75a.75.75 0 0 0 .75-.75v-.75h-.75a.75.75 0 0 0-.75-.75Zm-4.5-1.5h1.5v-1.5h-1.5v1.5ZM15 12h-.75v-1.5h.75v1.5Zm-2.25-1.5v1.5h-.75v-1.5h.75Zm-2.25 0v1.5h-.75v-1.5h.75Zm-2.25 0v1.5H9v-1.5h.75ZM3 6h7.5v1.5H3V6Zm0 4.5h5.25v1.5H3v-1.5Z" />
            </svg>
            <span className="ms-3">Sign Up</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="#"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2 12a1.006 1.006 0 0 0 1 1h.516a1 1 0 0 0 1.01-.773l.34-2a1 1 0 0 0-1.01-1.227H3a1 1 0 0 0-1 1Zm6-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3.896a1 1 0 0 0 .821-.538l.42-.868a1 1 0 0 0-.82-1.462H8Zm6-7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4.074a1 1 0 0 0 .82-1.462l-.42-.868a1 1 0 0 0-.821-.538H14Zm6 6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1.074a1 1 0 0 0 .821-.538l.42-.868a1 1 0 0 0-.82-1.462H20Zm-5.696 3.5a1 1 0 0 0-1.788.714v1.485a1 1 0 0 0 1.788.714l.75-1.485a1 1 0 0 0-.75-1.485Z" />
            </svg>
            <span className="ms-3">Sign out</span>
          </NavLink>
        </li>
      </ul>
               </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="hidden sm:flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded={isMenuOpen}
                  onClick={toggleMenu}
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="user photo"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <aside
      id="logo-sidebar"
      className={`fixed top-16 left-0 z-40 w-full h-16 bg-white border-t border-gray-800 dark:bg-gray-800 dark:border-gray-700 transition-transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 sm:w-full sm:static sm:h-auto sm:border-0`}
      aria-label="Sidebar"
    >
  <div className="flex justify-center items-center w-full h-full">
    <ul className="flex space-x-4 font-medium">
      {/* Menu items */}
      <li>
        <NavLink
          to="#"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        >
          <svg
            className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 21"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"
            />
            <path
              d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
            />
          </svg>
          <span className="ms-3">Dashboard</span>
        </NavLink>
      </li>
            <li>
              <NavLink
                to="/chatpage"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 6.143.857 7 .857 7v7.286C.857 16.143 1.857 17 3 17h5.143A1.857 1.857 0 0 0 10 15.143V7a1.857 1.857 0 0 0-1.857-1.857H7.143A1.857 1.857 0 0 0 5.286 4.286V1.857C5.286.857 6.143 0 6.143 0Z" />
                  <path d="M15.571 7H13.5v4.143a.857.857 0 0 1-.857.857H4.357a.857.857 0 0 1-.857-.857V7H2.429a.857.857 0 0 0-.857.857v5.714c0 .657.5 1.214 1.143 1.214h.857V11a.857.857 0 0 1 .857-.857h7.429a.857.857 0 0 1 .857.857v2.857h.857c.657 0 1.143-.5 1.143-1.143V7.857A.857.857 0 0 0 15.571 7Z" />
                </svg>
                <span className="ms-3">Chat</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signup"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M10.5 3.75H3.75A.75.75 0 0 0 3 4.5v9a.75.75 0 0 0 .75.75h6.75a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75Zm-3.75 3a.75.75 0 0 0-.75.75v2.25a.75.75 0 0 0 .75.75h3a.75.75 0 0 0 .75-.75V7.5a.75.75 0 0 0-.75-.75h-3Zm9.75 3v-4.5a.75.75 0 0 0-.75-.75H12a.75.75 0 0 0-.75.75v.75H9a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 .75.75h2.25v.75a.75.75 0 0 0 .75.75h1.5a.75.75 0 0 0 .75-.75v-.75h.75a.75.75 0 0 0 .75-.75v-.75h-.75a.75.75 0 0 0-.75-.75Zm-4.5-1.5h1.5v-1.5h-1.5v1.5ZM15 12h-.75v-1.5h.75v1.5Zm-2.25-1.5v1.5h-.75v-1.5h.75Zm-2.25 0v1.5h-.75v-1.5h.75Zm-2.25 0v1.5H9v-1.5h.75ZM3 6h7.5v1.5H3V6Zm0 4.5h5.25v1.5H3v-1.5Z" />
                </svg>
                <span className="ms-3">Sign Up</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2 12a1.006 1.006 0 0 0 1 1h.516a1 1 0 0 0 1.01-.773l.34-2a1 1 0 0 0-1.01-1.227H3a1 1 0 0 0-1 1Zm6-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3.896a1 1 0 0 0 .821-.538l.42-.868a1 1 0 0 0-.82-1.462H8Zm6-7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4.074a1 1 0 0 0 .82-1.462l-.42-.868a1 1 0 0 0-.821-.538H14Zm6 6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1.074a1 1 0 0 0 .821-.538l.42-.868a1 1 0 0 0-.82-1.462H20Zm-5.696 3.5a1 1 0 0 0-1.788.714v1.485a1 1 0 0 0 1.788.714l.75-1.485a1 1 0 0 0-.75-1.485Z" />
                </svg>
                <span className="ms-3">Sign out</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
      <Sections />
      <Footer />
    </>
  );
}

export default Header;
