import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menu, setMenu] = useState([false]);

  return (
    <>
      <div className="flex border-b py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
        <div className="flex flex-wrap  gap-5 w-full ">
          <a href="">
            <p className="text-blue-700 text-lg font-bold hover:translate-x-[10p] hover:translate-y-[10px] delay-200 duration-200 ">
              Auction
            </p>
          </a>

          <div id="collapseMenu">
            <ul className="hidden  sm:flex sm:block  ">
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <a
                  href="/"
                  className="lg:hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]"
                >
                  Home
                </a>
              </li>

              <li className="max-lg:border-b max-lg:py-3 px-3">
                <a
                  href="/about"
                  className="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                >
                  About
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <a
                  href="/service"
                  className="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                >
                  Service
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <a
                  href="/contect"
                  className="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                >
                  Contect
                </a>
              </li>
            </ul>
          </div>

          <button
            onClick={() => setMenu(!menu)}
            id="toggleOpen"
            className="md:hidden ml-auto text-2xl"
          >
            {!menu ? (
              <div>
                <FaTimes className="text-xl " />
                <ul className=" flex flex-col justify-start text-sm w-36 bg-[#EEEEEE] text-left p-2 absolute -ml-32 mt-20">
                 <a href="/"> <li className="hover:bg-[#007bff] hover:text-white">
                    home
                    </li></a>
                <a href="/about">  <li className="hover:bg-[#007bff] hover:text-white">
                    About
                    </li></a>
                  <a href="/service"><li className="hover:bg-[#007bff] hover:text-white">
                    Service
                  </li></a>
                  <a href="/contect"><li className="hover:bg-[#007bff] hover:text-white">
                    Contect
                  </li></a>
                </ul>
              </div>
            ) : (
              <FaBars className=" text-2xl" />
            )}
          </button>

          <div className="flex lg:ml-auto max-lg:w-full">
            <div className="flex xl:w-80 max-xl:w-full bg-gray-100 px-6 py-3 rounded outline outline-transparent focus-within:outline-[#007bff] focus-within:bg-transparent">
              <input
                type="text"
                placeholder="Search something..."
                className="w-full text-sm bg-transparent rounded outline-none pr-2"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                width="16px"
                className="cursor-pointer fill-gray-400"
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
