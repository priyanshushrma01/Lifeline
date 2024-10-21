import React, { useState } from 'react';

const InputField = ({ label ,placeholder, type ,onChange}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full my-4">
      <label className="absolute top-1 left-4 text-gray-500 text-sm">
        {label}
      </label>

      <input
        type= {type ||"text"}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full p-2 pt-6 bg-gray-100 text-gray-800 rounded-lg 
        border-2 ${isFocused ? 'border-black' : 'border-transparent'} 
        focus:outline-none focus:border-black transition-all duration-100`}
      />
    </div>
  );
};

export default InputField;
