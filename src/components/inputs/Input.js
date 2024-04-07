import React from "react";

const Input = ({ id, name, type,placeholder }) => {
  return (
    <input
      id={id} 
      name={name}
      type={type}
      autoComplete="name"
      required
      className="appearance-none rounded-none relative block
                w-full px-3 py-2 border border-gray-300
                placeholder-gray-500 text-gray-900 rounded-t-md
                focus:outline-none focus:ring-indigo-500
                focus:border-indigo-500 focus:z-10 sm:text-sm mb-3"
      placeholder={placeholder}
    />
  );
};

export default Input;