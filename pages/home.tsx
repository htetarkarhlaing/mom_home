import React from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Menu",
    link: "/menu",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Home = () => {
  return (
    <div className="w-full h-screen">
    {/* Start Nav bar  */}
      <div className="w-full h-16 p-5 px-11 flex justify-between items-center fixed top-0 left-0 z-50">
        <div className="flex items-center cursor-pointer">
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
          {links.map((item, key) => {
            return (
              <Link key={key} href={item.link} passHref>
                <li className="mx-5 font-bold text-sm text-gray-700 cursor-pointer border-transparent border-b-2 hover:border-red-400 hover:text-red-800">{item.name}</li>
              </Link>
            );
          })}
        </ul>

        <div className="flex items-center">
          <i className="fa-solid fa-comment text-gray-500 text-xl mx-3 cursor-pointer hover:text-red-500"></i>
          <i className="fa-solid fa-utensils text-gray-500 text-xl mx-3 cursor-pointer hover:text-red-500"></i>
          <button className="text-white text-sm px-3 py-2 ml-3 rounded-full bg-red-500">
            <i className="fa-solid fa-arrow-right-to-bracket mr-1"></i>
            Login
          </button>
        </div>
      </div>
    {/* End Nav bar  */}

      <div className="grid grid-cols-12 gap-4 ml-20">
        <div className="col-span-4 mt-36">
          <div className="bg-red-100 w-44 rounded-full flex items-center justify-center">
              <span className="text-sm text-red-500 p-3 font-sans">More Than Faster<i className="fa-solid fa-apple-whole mx-2 text-red-600"></i></span>
          </div>

          <div className="mt-8">
            <span className="text-5xl font-bold">Be The Fastest</span>
            <span className="block text-5xl font-bold mt-4">In Delivering Your</span>
            <span className="block text-5xl font-bold text-red-500 mt-4">
              Your Food
            </span>
            <span className="block py-4 text-gray-700">
            Our job is to filling your tummy with delicious food <br/>and with fast and free delivery.
            </span>
          </div>

          <div>
            <button className="bg-red-500 text-white p-3 px-4 rounded-full">Get Started</button>
            <button className="mx-3 text-sm"><i className="fa-solid fa-circle-play text-lg text-gray-500"></i> Watch Video</button>
          </div>          
        </div>

        <div className="col-span-4 mt-24">
            <Image
              src="/chef.png"
              alt="chef"
              width={500}
              height={500}
              quality={100}
            />
        </div>

        <div className="col-span-3 mt-44">
          <div className="bg-violet-200 px-5 p-2 rounded-lg flex items-center justify-center my-4">
            <Image
              src="/cupcake.png"
              alt="cupcake"
              width={41}
              height={45}
            />
            <span className="text-gray-800 mx-3">Cupcake</span>
          </div>

          <div className="bg-blue-100 px-5 p-2 rounded-lg flex items-center justify-center my-4">
            <Image
              src="/macaroon.png"
              alt="cupcake"
              width={41}
              height={45}
            />
            <span className="text-gray-800 mx-3">Macaroon</span>
          </div>

          <div className="bg-pink-100 px-5 p-2 rounded-lg flex items-center justify-center my-4">
            <Image
              src="/cake.png"
              alt="cupcake"
              width={41}
              height={45}
            />
            <span className="text-gray-800 mx-3">Cake</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
