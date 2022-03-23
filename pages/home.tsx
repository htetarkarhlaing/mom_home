import React from "react";

const About = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-16 p-5 px-11 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-12 h-12">
            <img src="/aboutlogo.png" alt="navlogo" />
          </div>
          <span className="font-theme text-2xl font-semibold text-red-800">
            Mom's Home
          </span>
        </div>

        <ul className="flex justify-between">
          <li className="mx-5 font-bold text-red-500 cursor-pointer border-transparent border-b-2 hover:border-red-400 hover:text-red-600">
            Why pizza!
          </li>
          <li className="mx-5 font-bold text-gray-700 cursor-pointer border-transparent border-b-2 hover:border-red-400 hover:text-gray-800">
            Services
          </li>
          <li className="mx-5 font-bold text-gray-700 cursor-pointer border-transparent border-b-2 hover:border-red-400 hover:text-gray-800">
            Menu
          </li>
          <li className="mx-5 font-bold text-gray-700 cursor-pointer border-transparent border-b-2 hover:border-red-400 hover:text-gray-800">
            Contact
          </li>
        </ul>

        <div className="flex items-center">
          <i className="fa-solid fa-comment text-gray-500 text-2xl mx-6"></i>
          <i className="fa-solid fa-utensils text-gray-500 text-2xl mx-6"></i>
          <button className="text-white px-6 py-3 ml-5 rounded-full bg-red-500">
            <i className="fa-solid fa-arrow-right-to-bracket mr-1"></i>Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
