import React from "react";
import { useState } from "react";

import { Transition } from "@headlessui/react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
   
      <div className="border-b-2 h-28  border-white border-opacity-10 mb-10">
        <div className="max-w-7xl  -ml-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" w-10 flex items-center h-16  ">
            <div className="flex items-center">
              <div className="hidden md:block ">
                <div className=" sm:mx-[10rem] lg:mx-[24rem] 2xl:mx-[45rem] mb-60 mt-72 flex items-baseline space-x-12 ">
                  {" "}
                  <a href="#Home">
                    <a className=" text-gray-300    hover:border-b-2 hover:border-yellow-400 hover:text-white px-3 py-2 rounded-sm text-base font-medium">
                      Home
                    </a>
                  </a>
                  <a href="#Services">
                    <a className="text-gray-300    hover:border-b-2 hover:border-yellow-400 hover:text-white px-3 py-2 rounded-sm text-base font-medium">
                      Services
                    </a>
                  </a>
                  <a href="#Skills ">
                    <a className="text-gray-300    hover:border-b-2 hover:border-yellow-400 hover:text-white px-3 py-2 rounded-sm text-base font-medium">
                      Skills
                    </a>
                  </a>
                  <a href="#Portfolio">
                    <a className="text-gray-300    hover:border-b-2 hover:border-yellow-400 hover:text-white px-3 py-2 rounded-sm text-base font-medium">
                      Portfolio
                    </a>
                  </a>{" "}
                  <a href="#Contact">
                    <a className="text-gray-300    hover:border-b-2 hover:border-yellow-400 hover:text-white px-3 py-2 rounded-sm text-base font-medium">
                      Contact
                    </a>
                  </a>{" "}
                </div>
              </div>
            </div>
            {/* <div className="ml-10 mt-10 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="  inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div> */}
          </div>
        </div>

        {/* <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className=" px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="/Home"
                  className=" text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>
                <a
                  href="#About"
                  className=" text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </a>
                <a href="#Services">
                  <a className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Services
                  </a>
                </a>
                <a href=" #Skills">
                  <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Skills
                  </a>
                </a>
                <a
                  href="#Portfolio"
                  className="text-gray-300  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Portfolio
                </a>

                <a
                  href="#Contact"
                  className="text-gray-300  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          )} 
        </Transition>*/}

        
      </div>

  );
};

export default Nav;
