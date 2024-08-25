import React from 'react';
import { NavLink } from 'react-router-dom';
import { auth } from '../FireBase/firebase';
import { signOut } from 'firebase/auth';

const Dashboard = () => {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // Redirect to sign-in page or show success message
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Top Bar */}
      <header className="bg-blue-700 text-white flex justify-between items-center p-4 shadow-md">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          {/* Display user image */}
          <div className="relative">
            <img
              src={auth.currentUser?.photoURL || '/images/default-profile.png'}
              alt="User"
              className="w-10 h-10 rounded-full object-cover"
            />
            <button onClick={handleSignOut} className="ml-4 text-white hover:text-gray-200">
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md p-4">
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/chat"
                  className="block p-2 hover:bg-gray-200 rounded"
                >
                  Chat
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  className="block p-2 hover:bg-gray-200 rounded"
                >
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/settings"
                  className="block p-2 hover:bg-gray-200 rounded"
                >
                  Settings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/notifications"
                  className="block p-2 hover:bg-gray-200 rounded"
                >
                  Notifications
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/analytics"
                  className="block p-2 hover:bg-gray-200 rounded"
                >
                  Analytics
                </NavLink>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-6 space-y-6">
          <section className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <ul>
              {/* Recent activity items */}
              <li className="border-b border-gray-200 py-2">
                <p className="font-medium">John Doe</p>
                <p className="text-gray-600">Started a new conversation</p>
              </li>
              <li className="border-b border-gray-200 py-2">
                <p className="font-medium">Alice</p>
                <p className="text-gray-600">Sent you a message</p>
              </li>
              {/* More items... */}
            </ul>
          </section>

          <section className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Notifications</h2>
            <ul>
              {/* Notification items */}
              <li className="border-b border-gray-200 py-2">
                <p className="font-medium">System Update</p>
                <p className="text-gray-600">Your app has been updated to the latest version.</p>
              </li>
              <li className="border-b border-gray-200 py-2">
                <p className="font-medium">New Message</p>
                <p className="text-gray-600">You have received a new message from Charlie.</p>
              </li>
              {/* More items... */}
            </ul>
          </section>

          <section className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">User Analytics</h2>
            {/* Replace with your actual analytics data */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <p className="font-medium">Total Messages Sent</p>
                <p>150</p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium">New Contacts Added</p>
                <p>5</p>
              </div>
              {/* More analytics... */}
            </div>
          </section>

          <section className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-blue-500 text-white p-3 rounded-lg shadow-md hover:bg-blue-600">
                Start New Chat
              </button>
              <button className="bg-green-500 text-white p-3 rounded-lg shadow-md hover:bg-green-600">
                Add New Contact
              </button>
              <button className="bg-yellow-500 text-white p-3 rounded-lg shadow-md hover:bg-yellow-600">
                View Recent Chats
              </button>
              <button className="bg-red-500 text-white p-3 rounded-lg shadow-md hover:bg-red-600">
                Settings
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
