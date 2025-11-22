import React from 'react';

export const Button = ({ children, className = '', onClick }) => {
  return (
    <button onClick={onClick} className={`bg-pink-600 text-white py-2 px-4 rounded ${className}`}>
      {children}
    </button>
  );
};

export default Button;
