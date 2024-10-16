import React from 'react';

// Button component that accepts children, onClick handler, and className for styling
export const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick} // Handles the click event passed as a prop
      className={`py-2 px-4 font-semibold rounded-lg shadow-md ${className}`} // Merges external className with base styling
    >
      {children} {/* Renders the button's content passed between the component tags */}
    </button>
  );
};
export default Button;
