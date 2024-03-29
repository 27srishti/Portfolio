import React from "react";
import one from "../Image/one.png";
import two from "../Image/two.png";
import three from "../Image/three.png";
import four from "../Image/four.png";
import Zero from "../Image/Zero.png";

import LineGradient from "../Components/LineGradient";
import { motion, useAnimation } from "framer-motion";
const Portfolio = () => {
  return (
    <div className="  bg-black bg-opacity-40 mt-20 ">
      <LineGradient className="w-full" />
      <div
        id="Portfolio"
        href="#Portfolio"
        className=" < mb-20  ml-24 lg:ml-0 mt-5 pt-14 text-5xl  lg:text-center bg-gradient-to-l bg-clip-text text-transparent from-pink-900 to-yellow-600   font-bold text-white "
      >
        Portfolio{" "}
      </div>
      <div className=" z-0 pl-7 mt-20  relative overflow-auto lg:overflow-x-hidden  lg:7/12 after:lg:py-0 2xl:ml-32">
        <center></center>
        <div className="  m-4 w-max flex grid-cols-4 -space-x-6 text-white tracking-wide sm:space-x-0 gap-16 lg:gap-0 lg:w-full lg:grid px-0">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="block relative group   border border-red-700 p-6 w-64 h-64 max-w-sm bg-opacity-0   rounded-xl rounded-tl-large  shadow-md hover:border-red-700 hover:border-1">
              <a
                href="https://influncermarketing.netlify.app/"
                className="block  -ml-6 -mt-6 border border-t-0 border-l-0  border-blue-700  w-64 h-64 max-w-sm  rounded-xl rounded-tl-large  shadow-xl  hover:border-blue-700 bg-gray-900 hover:border-1"
              >
                {" "}
                <div className=" h-60  flex justify-center rounded-xl rounded-tl-large ">
                  {" "}
                  <img
                    className=" absolute  h-60 w-60   mt-2  rounded-xl rounded-tl-large   "
                    src={Zero}
                  ></img>{" "}
                  <div className="opacity-0 h-64 text-center hover:bg-opacity-0 rounded-xl rounded-tl-large  group-hover:opacity-100 duration-300 absolute  left-0 bottom-0 right-0 z-10 flex justify-center items-center  text-xl  backdrop-blur text-white font-semibold">
                    Influencer Marketing
                  </div>
                </div>
              </a>
            </div>{" "}
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="block relative group   border border-red-700 p-6 w-64 h-64 max-w-sm bg-opacity-0   rounded-xl rounded-tl-large  shadow-md hover:border-red-700 hover:border-1">
              <a
                href="https://sygma-2022.netlify.app/"
                className="block  -ml-6 -mt-6 border border-t-0 border-l-0  border-blue-700  w-64 h-64 max-w-sm  rounded-xl rounded-tl-large  shadow-xl  hover:border-blue-700 bg-gray-900 hover:border-1"
              >
                {" "}
                <div className=" h-60  flex justify-center rounded-xl rounded-tl-large ">
                  {" "}
                  <img
                    className=" absolute  h-60 w-60   mt-2  rounded-xl rounded-tl-large   "
                    src={one}
                  ></img>{" "}
                  <div className="opacity-0 h-64 text-center hover:bg-opacity-0 rounded-xl rounded-tl-large  group-hover:opacity-100 duration-300 absolute  left-0 bottom-0 right-0 z-10 flex justify-center items-center  text-xl  backdrop-blur text-white font-semibold">
                    Inter-College Fest Management system
                  </div>
                </div>
              </a>
            </div>{" "}
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5, duration: 2 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="block  relative group  border border-red-700 p-6 w-64 h-64 max-w-sm bg-opacity-0   rounded-xl rounded-tl-large  shadow-md hover:border-red-700 hover:border-1">
              <a
                href="https://vibgyorinteriors.netlify.app/"
                className="block  -ml-6 -mt-6 border border-t-0 border-l-0  border-blue-700  w-64 h-64 max-w-sm  rounded-xl rounded-tl-large  shadow-xl  hover:border-blue-700 bg-gray-900 hover:border-1"
              >
                {" "}
                <div className=" h-60  flex justify-center rounded-xl rounded-tl-large ">
                  {" "}
                  <img
                    className=" h-60 w-60   mt-2  rounded-xl rounded-tl-large  "
                    src={three}
                  ></img>{" "}
                  <div className="opacity-0 h-64  text-center hover:bg-opacity-0 rounded-xl rounded-tl-large  group-hover:opacity-100 duration-300 absolute  left-0 bottom-0 right-0 z-10 flex justify-center items-center  text-xl  backdrop-blur text-white font-semibold">
                    Ecommerce Web Applications
                  </div>
                </div>
              </a>
            </div>{" "}
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 3 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="block  relative group border border-red-700 p-6 w-64 h-64 max-w-sm bg-opacity-0   rounded-xl rounded-tl-large  shadow-md hover:border-red-700 hover:border-1">
              <a
                href="https://peekabo.netlify.app/"
                className="block  -ml-6 -mt-6 border border-t-0 border-l-0  border-blue-700  w-64 h-64 max-w-sm  rounded-xl rounded-tl-large  shadow-xl  hover:border-blue-700 bg-gray-900 hover:border-1"
              >
                {" "}
                <div className=" h-60  flex justify-center rounded-xl rounded-tl-large ">
                  {" "}
                  <img
                    className=" h-60 w-60   mt-2  rounded-xl rounded-tl-large  "
                    src={four}
                  ></img>{" "}
                  <div className="opacity-0 h-64 hover:bg-opacity-0 rounded-xl rounded-tl-large  group-hover:opacity-100 duration-300 absolute  left-0 bottom-0 right-0 z-10 flex justify-center items-center  text-xl  backdrop-blur text-white font-semibold">
                    Peek-ka-Boo
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          
           
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
