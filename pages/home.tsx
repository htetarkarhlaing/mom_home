import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-16 p-5 px-11 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-12 h-12">
            <Image
              src="/aboutlogo.png"
              alt="navlogo"
              width={800}
              height={800}
              quality={100}
            />
          </div>
          <span className="font-theme text-2xl font-semibold text-red-800">
            Mom&rsquo;s Home
          </span>
        </div>

        <ul className="flex justify-between items-center">
          <li className="mx-5 font-bold text-sm text-red-500 cursor-pointer border-transparent border-b-2 hover:border-red-400 hover:text-red-600">
            Why pizza!
          </li>
          <li className="mx-5 font-bold text-sm text-gray-700 cursor-pointer border-transparent border-b-2 hover:border-red-400 hover:text-gray-800">
            Services
          </li>
          <li className="mx-5 font-bold text-sm text-gray-700 cursor-pointer border-transparent border-b-2 hover:border-red-400 hover:text-gray-800">
            Menu
          </li>
          <li className="mx-5 font-bold text-sm text-gray-700 cursor-pointer border-transparent border-b-2 hover:border-red-400 hover:text-gray-800">
            Contact
          </li>
        </ul>

        <div className="flex items-center">
          <i className="fa-solid fa-comment text-gray-500 text-xl mx-3 cursor-pointer hover:text-red-500"></i>
          <i className="fa-solid fa-utensils text-gray-500 text-xl mx-3 cursor-pointer hover:text-red-500"></i>
          <button className="text-white text-sm px-4 py-1 ml-3 rounded-full bg-red-500">
            <i className="fa-solid fa-arrow-right-to-bracket mr-1"></i>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
