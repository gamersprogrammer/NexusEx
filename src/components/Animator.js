import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Animator() {
  const navigate = useNavigate();

  const isNetworkStable = () => {
    if (navigator.connection) {
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      const effectiveType = connection.effectiveType;
      const downlink = connection.downlink;

      return effectiveType === '4g' && downlink >= 1.5;
    }
    return true;
  };

  useEffect(() => {
    if (isNetworkStable()) {
      const timer = setTimeout(() => {
        navigate('/home');
      }, 5000);

      return () => clearTimeout(timer);
    } else {
      console.warn('Network is unstable. Navigation prevented.');
    }
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-300">
      <div className="text-white flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-6">
        <div className="text-4xl sm:text-5xl md:text-6xl font-bold letter">N</div>
        <div className="text-4xl sm:text-5xl md:text-6xl font-bold letter">E</div>
        <div className="text-4xl sm:text-5xl md:text-6xl font-bold letter">X</div>
        <div className="text-4xl sm:text-5xl md:text-6xl font-bold letter">U</div>
        <div className="text-4xl sm:text-5xl md:text-6xl font-bold letter">S</div>
        <div className="text-4xl sm:text-5xl md:text-6xl font-bold letter">E</div>
        <div className="text-4xl sm:text-5xl md:text-6xl font-bold letter">x</div>
      </div>
    </div>
  );
}

export default Animator;
