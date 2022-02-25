import React from "react";

const RoundedButton = ({ className }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <button className="h-14 w-14 flex items-center justify-center rounded-full shadow-lg text-theme">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <span className="block ml-2 text-lg font-bold text-gray-600">
        Order Process
      </span>
    </div>
  );
};

export default RoundedButton;
