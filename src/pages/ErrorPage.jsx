import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ModernErrorPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#202020] p-4 text-white">
      <div className="relative">
        <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-bold text-white mb-8 relative z-10">
          <span className={`inline-block ${mounted ? 'animate-bounce' : ''}`}>4</span>
          <span className={`inline-block ${mounted ? 'animate-bounce delay-100' : ''}`}>0</span>
          <span className={`inline-block ${mounted ? 'animate-bounce delay-200' : ''}`}>4</span>
        </h1>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 blur-3xl -z-10"></div>
      </div>
      <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 text-center max-w-md">
        Oops! The page you're looking for has vanished into the digital void.
      </p>
      <Link
        to="/"
        className="relative inline-flex items-center px-8 py-3 overflow-hidden text-lg font-medium text-white border border-white border-opacity-50 rounded-full group hover:scale-105 transition-transform duration-300 ease-out"
      >
        <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </span>
        <span className="relative group-hover:text-[#202020]">Go back to Home</span>
      </Link>
    </div>
  );
};

export default ModernErrorPage;