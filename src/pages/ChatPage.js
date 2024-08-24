import React, { useState, useEffect, useRef } from 'react';
import BackButton from '../components/BackButton';

const contacts = [
  { id: 1, name: 'Alice', image: '/images/usage.jpg', recentMessage: 'Hey there! How are you?' },
  { id: 2, name: 'Bob', image: '/images/usage.jpg', recentMessage: 'Let’s catch up soon!' },
  { id: 3, name: 'Charlie', image: '/images/usage.jpg', recentMessage: 'Can you send me the report?' },
];

const ChatPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
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

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
    // Load or clear messages based on selected contact
    // Example: setMessages([...]); or setMessages([]) if you want to clear messages
  };

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedContact) {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex flex-col h-screen md:flex-row bg-gray-100">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-white border-r border-gray-200 md:border-none shadow-md md:shadow-none md:relative">
        {/* Sidebar Header */}
        <header className="p-4 border-b border-gray-200 flex justify-between items-center bg-blue-500 text-white">
          <h1 className="text-2xl font-semibold">Chat Web</h1>
          <div className="relative">
            <button
              ref={buttonRef}
              onClick={toggleMenu}
              className="focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 6a2 2 0 100 4 2 2 0 000-4z" />
                <path d="M4 12a2 2 0 012-2h12a2 2 0 012 2 2 2 0 01-2 2H6a2 2 0 01-2-2z" />
              </svg>
            </button>
            {/* Menu Dropdown */}
            <div
              ref={menuRef}
              className={`absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg ${isMenuOpen ? '' : 'hidden'} md:hidden`}
            >
              <ul className="py-2 px-3">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Groups
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Sign Out
                  </a>
                </li>
                <li>
                  <BackButton />
                </li>
                {/* Add more menu options here */}
              </ul>
            </div>
          </div>
        </header>
        {/* Contact List */}
        <div className="overflow-y-auto h-screen p-3 bg-gray-50">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              onClick={() => handleContactClick(contact)}
              className="flex items-center p-3 cursor-pointer hover:bg-gray-100 border-b border-gray-200 rounded-lg transition-colors"
            >
              <img
                src={contact.image}
                alt={contact.name}
                className="w-12 h-12 rounded-full mr-3"
              />
              <div className="flex-1">
                <div className="font-semibold text-gray-800">{contact.name}</div>
                <div className="text-gray-600 text-sm">{contact.recentMessage}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Main Chat Area */}
      <div className="flex-1 relative flex flex-col">
        {/* Chat Header */}
        <header className="bg-white p-4 text-gray-700 border-b border-gray-200 shadow-md">
          <h1 className="text-2xl font-semibold">{selectedContact ? selectedContact.name : 'Select a Contact'}</h1>
        </header>
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 ">
          {messages.map((msg, index) => (
            <div key={index} className="mb-2">
              <div className="bg-white p-3 rounded-lg shadow-sm text-gray-800 w-50">
                {msg}
              </div>
            </div>
          ))}
        </div>
        {/* Chat Input */}
        <footer className="bg-white border-t border-gray-200 p-4 shadow-md">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <button 
              onClick={handleSendMessage} 
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg ml-3"
            >
              Send
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ChatPage;
