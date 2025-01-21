// src/components/Button.jsx

import React from 'react';

const Button = ({ text, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition duration-300 ease-in-out ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
