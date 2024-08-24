import React from "react";
import { useNavigate } from "react-router-dom";

const ContactButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contact"); // This will navigate to the Contact page
  };

  return (
    <div className="fixed bottom-6 right-6">
      <button
        className="bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
        onClick={handleButtonClick}
      >
        Contact Us
      </button>
    </div>
  );
};

export default ContactButton;
