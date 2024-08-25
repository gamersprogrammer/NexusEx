import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import BackButton from '../components/BackButton';
import { useSwipeable } from 'react-swipeable';
import { auth, db } from '../FireBase/firebase';
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from 'firebase/firestore';

const contacts = [
  { id: 1, name: 'Alice', image: '/images/usage.jpg', recentMessage: 'Hey there! How are you?' },
  { id: 2, name: 'Bob', image: '/images/usage.jpg', recentMessage: 'Let’s catch up soon!' },
  { id: 3, name: 'Charlie', image: '/images/usage.jpg', recentMessage: 'Can you send me the report?' },
];

const ChatPage = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    let unsubscribe;

    if (selectedContact) {
      const chatId = `chat_${selectedContact.id}`;
      const q = query(collection(db, "chats", chatId, "messages"), orderBy("timestamp", "asc"));

      unsubscribe = onSnapshot(q, (snapshot) => {
        const msgs = snapshot.docs.map((doc) => doc.data());
        setMessages(msgs);
      });
    }

    return () => unsubscribe && unsubscribe();
  }, [selectedContact]);

  const handleContactClick = (contact) => {
    setSelectedContact(contact);
    setShowChat(true);
  };

  const handleBackToContacts = () => {
    setShowChat(false);
  };

  const handleSendMessage = async () => {
    if (newMessage.trim() && selectedContact) {
      const chatId = `chat_${selectedContact.id}`;
      await addDoc(collection(db, "chats", chatId, "messages"), {
        senderId: auth.currentUser.uid,
        message: newMessage,
        timestamp: serverTimestamp(),
      });
      setNewMessage('');
    }
  };

  const handlers = useSwipeable({
    onSwipedRight: () => setShowChat(false),
    onSwipedLeft: () => selectedContact && setShowChat(true),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div {...handlers} className="relative h-screen w-screen overflow-hidden bg-gray-100">
      {/* Contacts Screen */}
      <Transition
        show={!showChat}
        enter="transform transition-transform duration-500"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition-transform duration-500"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className="absolute inset-0 flex flex-col bg-white">
          <header className="p-4 bg-blue-500 text-white flex justify-between items-center shadow-lg">
            <h1 className="text-2xl font-semibold">Friends</h1>
            <div className="flex items-center space-x-4">
              <BackButton />
            </div>
          </header>
          <div className="flex-1 overflow-y-auto p-3 bg-gray-50">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                onClick={() => handleContactClick(contact)}
                className="flex items-center p-3 cursor-pointer hover:bg-gray-100 border-b border-gray-200 rounded-lg transition-all"
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
      </Transition>

      {/* Chat Screen */}
      <Transition
        show={showChat}
        enter="transform transition-transform duration-500"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition-transform duration-500"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <div className="absolute inset-0 flex flex-col bg-white">
          <header className="bg-gray-800 p-4 text-white flex justify-between items-center shadow-lg">
            <button onClick={handleBackToContacts} className="focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <h1 className="text-2xl font-semibold">{selectedContact ? selectedContact.name : 'Chat'}</h1>
          </header>
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div key={index} className="mb-2">
                <div className="bg-blue-500 text-white p-3 rounded-lg shadow-sm w-fit max-w-xs">
                  {msg.message}
                </div>
              </div>
            ))}
          </div>
          <footer className="p-4 bg-white shadow-lg sticky bottom-0">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="ml-3 bg-gray-700 text-white p-3 rounded-full"
              >
                Send
              </button>
            </div>
          </footer>
        </div>
      </Transition>
    </div>
  );
};

export default ChatPage;
