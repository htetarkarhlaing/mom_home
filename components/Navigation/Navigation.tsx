import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Menu",
    link: "/menu",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Shop",
    link: "/shop",
  },
];

const Navigation: FC = () => {
  return (
    <div className="fixed top-0 left-0 z-50 flex h-16 w-full mx-auto xl:px-32 justify-between items-center">
      {/* logo */}
      <div className="text-xl font-extrabold flex items-center justify-center">
          <div className="w-14 h-14">
          <Image src="/logo-1.png" alt="" width={200} height={200} />
          </div>
        <span className="font-theme text-theme">Mom&#39; Home</span>
      </div>
      {/* links */}
      <ul className="flex justify-between items-center">
        {links.map((item, key) => {
          return (
            <Link key={key} href={item.link} passHref>
              <li className="mx-4 font-semibold text-gray-600 cursor-pointer border-b-2 border-transparent hover:border-theme hover:text-theme">{item.name}</li>
            </Link>
          );
        })}
      </ul>
      {/* search box */}
      <div className="flex h-10 items-center shadow-theme-shadow rounded">
        <div className="pl-4 pr-2 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="outline-none px-2 placeholder:text-gray-600 placeholder:font-semibold placeholder:text-sm text-sm"
        />
        <div
          className="h-3/6 bg-gray-300 rounded-md"
          style={{ width: "2px" }}
        />
        <div className="pl-2 pr-4 text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
