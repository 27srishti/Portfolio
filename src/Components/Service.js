import React from "react";
import { motion, useAnimation } from "framer-motion";
const Service = () => {
  return (
    <div className=" mx-5   ">
      <div
        id="Services"
        href="#Services"
        className=" < text-2xl text-center  sm:text-start sm:ml-10 md:ml-10  md:text-left mt-12  md:text-4xl   font-bold bg-gradient-to-l bg-clip-text text-transparent from-yellow-300 to-pink-900 "
      >
        My Services{" "}
      </div>
      <div className="flex  sm:justify-between grid sm:grid-flow-col   ">
        <div className="">
          
          <center>
            <div className=" px-2 lg:px-28 lg:text-lg  lg:w-full  mt-3  w-[20rem]  text-center  sm:text-start md:text-start md:-ml-28 lg:-ml-40 md:mt-10  text-gray-400   ">
              Hello! 
              <br />
              <div className="mt-2">
              I`m a UX/UI Designer, FrontEnd Developer, Logo Maker that would help
              clients achieve their business goals through intuitive and
              cutting-edge designs with clean and eye-catching expandable code.I
              do my best to meet clients’ goals and deadlines through proactive
              communication and while focusing on the user-centric design
              philosophy.</div>
              <br />
              <div className="lg:text-xl">Happily looking forword to work with you!</div>
            </div>{" "}
          </center>
          
          <div className="mt-20  grid-flow-col lg:ml-7 lg:w-98 lg:ml-14 invisible  sm:visible sm:ml-12  md:visible lg:visible xl:visible 2xl:visible">
            <button
              type="button"
              class="text-white bg-gradient-to-br from-purple-900 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Wordpress
            </button>
            <button
              type="button"
              class="text-white bg-gradient-to-r from-pink-200 to-blue-900 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Firebase
            </button>
            <button
              type="button"
              class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Figma
            </button>
            <button
              type="button"
              class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Adobe Illustrator
            </button>

            <button
              type="button"
              class=" text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Reactjs
            </button>
            <button
              type="button"
              class="text-gray-900 bg-gradient-to-r from-green-500 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Webflow
            </button>
            <button
              type="button"
              class="text-gray-900   bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Canva
            </button>
            <button
              type="button"
              class="w-10 h-10 ml-2 mt-3 text-xl text-gray-900 bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-full text-sm  text-center "
            >
              +
            </button>
          </div>
        </div>
        <div>
          <div className="grid justify-center -mt-28 sm:mt-56  ">
          <motion.div
          className="control"
          
          transition={{ duration: 2 }}
        >
            {/* 1st Service */}
            <div className=" block  -mt-20 lg:-mt-60 border border-green-500 p-6 w-60 h-60 max-w-sm bg-opacity-0  bg-white rounded-xl rounded-tl-large  shadow-md hover:bg-green-900  hover:border-0">
              <a
                href="#"
                className="block -mt-6 -ml-6 border border-t-0 border-l-0  border-blue-700  p-6 w-60 h-60 max-w-sm bg-white rounded-xl rounded-tl-large   shadow-xl hover:bg-gray-100 dark:bg-gray-900 hover:border-0 dark:hover:bg-pink-900 "
              >
                {" "}
                <div className="  text-2xl  mt-3 ml-5 mb-5 w-100 text-white ">
                  UI/UX Designing
                </div>
                <div className="-ml-2 flex w-100 grid-flow-col mt-2 ">
                  <img
                    className=""
                    src="https://img.icons8.com/doodle/25/000000/checkmark.png"
                  />
                  <div className="  text-sm   ml-2 w-100 text-gray-400 ">
                    Fully Responsive UX/UI.
                  </div>
                </div>{" "}
                <div className="-ml-2 flex w-100 grid-flow-col mt-2 ">
                  <img
                    className=""
                    src="https://img.icons8.com/doodle/25/000000/checkmark.png"
                  />
                  <div className=" text-sm   ml-2  text-gray-400 ">
                    Cross-Platform Compatibility.
                  </div>
                </div>{" "}
                <div className="-ml-2 flex grid-flow-col mt-2 ">
                  <img
                    className=""
                    src="https://img.icons8.com/doodle/25/000000/checkmark.png"
                  />
                  <div className="  text-sm   ml-2 w-100 text-gray-400 ">
                    Software Redesign.
                  </div>
                </div>{" "}
                <div className="-ml-2 flex  grid-flow-col mt-2 ">
                  <img
                    className=""
                    src="https://img.icons8.com/doodle/25/000000/checkmark.png"
                  />
                  <div className="  text-sm   ml-2 w-100 text-gray-400 ">
                    UI Testing Process.
                  </div>
                </div>
              </a>
            </div>{" "}  </motion.div>
            {/* 2nd Service */}
            <div className="block sm:ml-10 mt-10 lg:ml-48 lg:mr-14 lg:mt-8 border border-green-500 p-6 w-60 h-60 max-w-sm bg-opacity-0  bg-white rounded-xl rounded-tl-large  shadow-md hover:bg-green-900  hover:border-0">
              <a
                href="#"
                className="block  -mt-6 -ml-6 border border-t-0 border-l-0  border-blue-700  p-6 w-60 h-60 max-w-sm bg-white rounded-xl rounded-tl-large   shadow-xl hover:bg-gray-100 dark:bg-gray-900 hover:border-0 dark:hover:bg-pink-900 "
              >
                <div className="  text-2xl text-center ml-7 mb-5  text-white">
                  Front-End Web Development
                </div>
                <div className="-ml-2 flex w-100 grid-flow-col mt-2 ">
                  <img
                    className=""
                    src="https://img.icons8.com/doodle/25/000000/checkmark.png"
                  />
                  <div className="  text-sm   ml-2 w-100 text-gray-400 ">
                    Custom Web Applications.
                  </div>
                </div>{" "}
                <div className="-ml-2 flex w-100 grid-flow-col mt-2 ">
                  <img
                    className=""
                    src="https://img.icons8.com/doodle/25/000000/checkmark.png"
                  />
                  <div className="  text-sm   ml-2  text-gray-400 ">
                    HTML5/CSS,Tailwind CSS.
                  </div>
                </div>{" "}
                <div className="-ml-2 flex grid-flow-col mt-2 ">
                  <img
                    className=""
                    src="https://img.icons8.com/doodle/25/000000/checkmark.png"
                  />
                  <div className="  text-sm   ml-2 w-100 text-gray-400 ">
                    Frameworks(Reactjs,Nextjs).
                  </div>
                </div>{" "}
                <div className="-ml-2 flex w-100 grid-flow-col mt-2 ">
                  <img
                    className=""
                    src="https://img.icons8.com/doodle/25/000000/checkmark.png"
                  />
                  <div className="  text-sm   ml-2 w-100 text-gray-400 ">
                    Cross-Browser Development.
                  </div>
                </div>
              </a>
            </div>
            {/* 3rd Service */}
            <div className="block mt-10 sm:-ml-56 sm:-mt-32 md:-ml-60 lg:-mt-32 lg:-ml-24 border border-green-500 p-6 w-60 h-60 max-w-sm bg-opacity-0  bg-white rounded-xl rounded-tl-large  shadow-md hover:bg-green-900  hover:border-0">
              <a
                href="#"
                className="block  -ml-6 -mt-6 border border-t-0 border-l-0  border-blue-700  p-6 w-60 h-60 max-w-sm bg-white rounded-xl rounded-tl-large  shadow-xl hover:bg-gray-100 dark:bg-gray-900 hover:border-0 dark:hover:bg-pink-900   "
              >
                <div className=" text-2xl text-center  -ml-1 mb-5 w-56 text-white">
                  Logo and Cover Designing
                </div>
                <div className="-ml-2 flex w-100 grid-flow-col mt-2 ">
                  <img
                    className=""
                    src="https://img.icons8.com/doodle/25/000000/checkmark.png"
                  />
                  <div className="  text-sm   ml-2 w-100 text-gray-400 ">
                    Custom Designing.
                  </div>
                </div>{" "}
                <div className="-ml-2 flex w-100 grid-flow-col mt-2 ">
                  <img
                    className=""
                    src="https://img.icons8.com/doodle/25/000000/checkmark.png"
                  />
                  <div className="  text-sm   ml-2  text-gray-400 ">
                    Illustrations.
                  </div>
                </div>{" "}
                <div className=" -ml-2 flex grid-flow-col mt-2 ">
                  <img
                    className=""
                    src="https://img.icons8.com/doodle/25/000000/checkmark.png"
                  />
                  <div className="  text-sm   ml-2 w-100 text-gray-400 ">
                    Professionalism.
                  </div>
                </div>{" "}
                <div className=" -ml-2 flex  grid-flow-col mt-2 ">
                  <img
                    className=""
                    src="https://img.icons8.com/doodle/25/000000/checkmark.png"
                  />
                  <div className="  text-sm  ml-2 w-100 text-gray-400 ">
                    Genre specific.
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
