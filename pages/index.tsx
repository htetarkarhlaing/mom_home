import { FC } from "react";
import Image from "next/image";
//custom imports
import Navigation from "../components/Navigation/Navigation";
import ButtonRounded from "../components/Utilities/ButtonRounded";
import HomeButton from "../components/Utilities/HomeButton";
import RoundedButton from "../components/Utilities/RoundedButton";

const Home: FC = () => {
  return (
    <div className="w-full">
      <Navigation />

      <div className="container h-screen xl:px-10 mx-auto grid grid-cols-12 gap-4 items-center">
        <div
          className="col-span-5 h-full flex flex-col justify-center items-start"
          style={{
            backgroundImage: "url('dotted-arrows-5.png')",
            backgroundSize: "contain",
          }}
        >
          <ButtonRounded />
          <div className="mt-8">
            <span className="text-6xl font-bold">The Fastest Delivery in</span>{" "}
            <span className="block text-6xl font-bold text-theme">
              Your City
            </span>
            <span className="block py-4 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, aperiam molestias ullam, eveniet recusandae ipsa.
            </span>
          </div>
          <div className="flex">
            <HomeButton />
            <RoundedButton className="ml-8" />
          </div>
        </div>
        <div className="col-span-2" />
        <div className="col-span-5 pt-20 pb-10 grid grid-cols-12 gap-4" style={{ height: "800px"}}>
          {[...Array(4)].map((i) => {
            return (
              <div key={i} className="relative h-64 group col-span-6">
                <div className="transition delay-150 duration-300 block bg-white rounded-lg w-full mt-24 pt-20 px-4 pb-8 shadow-md group-hover:shadow-lg">
                  <div className="transition ease-in-out delay-150 duration-300 w-44 h-44  absolute top-0 item-center group-hover:scale-110 group-hover:items-center">
                    <Image src="/burger.png" alt="" width={300} height={300} />
                  </div>
                  <span className="block text-center text-2xl text-gray-600 font-bold">
                    Burger
                  </span>
                  <span className="block text-center text-md text-gray-500 font-semibold">
                    Lorem ipsum dolor sit amet
                  </span>
                  <span className="block text-center text-xl text-gray-700 font-bold">
                    <span className="text-red-700 mr-1 text-md">$</span>5.25
                  </span>
                  <div className="transition ease-in-out delay-150 absolute duration-300 w-full -bottom-20 flex justify-around px-16 left-0 item-center group-hover:scale-110 group-hover:items-center">
                    <button className="bg-gray-800 text-white p-2 rounded-full shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                    <button className="bg-white text-gray-800 p-2 rounded-full shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16l-4-4m0 0l4-4m-4 4h18"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
